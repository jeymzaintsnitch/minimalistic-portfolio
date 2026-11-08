import { Card } from '@/components/ui'

/**
 * @param {{ fact: { label: string, value: string } }} props
 */
export function FactChip({ fact }) {
  return (
    <Card as="li" padding="sm" hover className="fact-chip">
      <p className="fact-chip__label mono">{fact.label}</p>
      <p className="fact-chip__value">{fact.value}</p>
    </Card>
  )
}
