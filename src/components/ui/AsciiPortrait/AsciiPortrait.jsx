import { useEffect, useRef } from 'react'
import './AsciiPortrait.css'

const ASCII_CHAR_RAMP = ' .,:;irsXA253hMHGS#9B&@'

/**
 * Pixel-accurate Canvas ASCII Portrait component.
 * Converts an image into a crisp, high-density ASCII art matrix with Laplacian contrast sharpening
 * supporting both dark and light modes.
 */
export function AsciiPortrait({
  src = '/assets/aistudio/Studio_portrait_with_center-parted_curtain_hair_364bd15b.png',
  alt = 'Black and white ASCII portrait of James Catalan',
  theme = 'dark',
}) {
  const canvasRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const img = imgRef.current
    if (!canvas || !img) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let isDisposed = false
    const isLight = theme === 'light'

    const renderAscii = () => {
      if (isDisposed || !img.naturalWidth || !img.naturalHeight) return

      const clientWidth = Math.max(1, canvas.clientWidth)
      const clientHeight = Math.max(1, canvas.clientHeight)
      const dpr = Math.min(window.devicePixelRatio || 1, 3)

      canvas.width = Math.round(clientWidth * dpr)
      canvas.height = Math.round(clientHeight * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Offscreen downsampling canvas
      const offscreen = document.createElement('canvas')
      offscreen.width = Math.min(144, Math.max(104, Math.floor(clientWidth / 4)))
      offscreen.height = Math.max(1, Math.round((offscreen.width * clientHeight) / clientWidth / 1.55))

      const offCtx = offscreen.getContext('2d', { willReadFrequently: true })
      if (!offCtx) return

      // Center-crop source image into offscreen grid
      const targetAspect = clientWidth / clientHeight
      let cropW = img.naturalWidth
      let cropH = img.naturalHeight

      if (cropW / cropH > targetAspect) {
        cropW = cropH * targetAspect
      } else {
        cropH = cropW / targetAspect
      }

      offCtx.drawImage(
        img,
        (img.naturalWidth - cropW) / 2,
        (img.naturalHeight - cropH) / 2,
        cropW,
        cropH,
        0,
        0,
        offscreen.width,
        offscreen.height
      )

      const imgData = offCtx.getImageData(0, 0, offscreen.width, offscreen.height).data
      const lumMap = new Float32Array(offscreen.width * offscreen.height)

      // Rec. 709 luminance calculation with alpha weighting
      for (let i = 0; i < lumMap.length; i++) {
        const idx = i * 4
        lumMap[i] = ((imgData[idx] * 0.2126 + imgData[idx + 1] * 0.7152 + imgData[idx + 2] * 0.0722) * imgData[idx + 3]) / 65025
      }

      const cellW = clientWidth / offscreen.width
      const cellH = clientHeight / offscreen.height

      // Background fill matching current theme
      ctx.fillStyle = isLight ? '#fbf9f5' : '#121212'
      ctx.fillRect(0, 0, clientWidth, clientHeight)
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.font = `${cellH * 1.05}px "JetBrains Mono", monospace`

      const rampLen = ASCII_CHAR_RAMP.length

      // Render ASCII glyphs with 4-neighbor Laplacian edge contrast
      for (let y = 0; y < offscreen.height; y++) {
        for (let x = 0; x < offscreen.width; x++) {
          const idx = y * offscreen.width + x
          const neighborAvg =
            (lumMap[y * offscreen.width + Math.max(0, x - 1)] +
              lumMap[y * offscreen.width + Math.min(offscreen.width - 1, x + 1)] +
              lumMap[Math.max(0, y - 1) * offscreen.width + x] +
              lumMap[Math.min(offscreen.height - 1, y + 1) * offscreen.width + x]) /
            4

          const sharpened = Math.max(0, Math.min(1, lumMap[idx] + (lumMap[idx] - neighborAvg) * 0.45))
          const contrast = Math.pow(sharpened, 0.75)

          if (isLight) {
            // Light mode: warm espresso characters on cream background
            const charIdx = Math.floor((1 - contrast) * (rampLen - 1))
            const char = ASCII_CHAR_RAMP[charIdx]
            if (char === ' ') continue

            const r = Math.round(34 + (1 - contrast) * 115)
            const g = Math.round(30 + (1 - contrast) * 110)
            const b = Math.round(26 + (1 - contrast) * 105)
            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
            ctx.fillText(char, (x + 0.5) * cellW, (y + 0.5) * cellH)
          } else {
            // Dark mode: Monochromatic crisp characters on #121212
            const char = ASCII_CHAR_RAMP[Math.floor(contrast * (rampLen - 1))]
            if (char === ' ') continue

            const brightness = Math.round(55 + contrast * 175)
            ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`
            ctx.fillText(char, (x + 0.5) * cellW, (y + 0.5) * cellH)
          }
        }
      }
    }

    img.addEventListener('load', renderAscii)
    const ro = new ResizeObserver(renderAscii)
    ro.observe(canvas)
    renderAscii()

    if (document.fonts) {
      document.fonts.ready.then(() => {
        if (!isDisposed) renderAscii()
      })
    }

    return () => {
      isDisposed = true
      ro.disconnect()
      img.removeEventListener('load', renderAscii)
    }
  }, [src, theme])

  return (
    <div className="ascii-portrait">
      <img ref={imgRef} src={src} alt="" className="ascii-source" aria-hidden="true" />
      <canvas ref={canvasRef} className="ascii-canvas" role="img" aria-label={alt} />
      <span className="ascii-corner ascii-corner-top" aria-hidden="true" />
      <span className="ascii-corner ascii-corner-bottom" aria-hidden="true" />
    </div>
  )
}
