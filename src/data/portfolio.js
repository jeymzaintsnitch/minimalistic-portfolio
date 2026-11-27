// Single source of truth for James Catalan's portfolio
// Minimalist, content-first, and straightforward

export const profile = {
  fullName: 'James Rolmer V. Catalan',
  heroLabel: "pup taguig '27",
  bio: [
    { text: 'Currently taking a Diploma in Information Technology at the ' },
    {
      text: 'Polytechnic University of the Philippines – Taguig',
      href: 'https://www.pup.edu.ph/taguig/',
      external: true,
    },
    { text: '. I recently completed an internship at ' },
    {
      text: 'DOST-MIMAROPA',
      href: 'https://region4b.dost.gov.ph/',
      external: true,
    },
    { text: ', providing technical support and improving the ' },
    {
      text: 'ICTrack Inventory System',
      href: '/projects/ictrack-inventory-system',
      highlight: true,
    },
    { text: '.' },
  ],
  email: 'jamescatalan19@gmail.com',
  github: 'https://github.com/jeymzaintsnitch',
  linkedin: 'https://www.linkedin.com/in/james-rolmer-catalan-9a70b7405/?isSelfProfile=true',
  resumeUrl: '/resume.pdf',
  avatar: '/assets/aistudio/Studio_portrait_with_center-parted_curtain_hair_364bd15b.png',
}

export function formatDocumentTitle(pageTitle) {
  return pageTitle ? `${pageTitle} — ${profile.fullName}` : profile.fullName
}

export const navLinks = [
  { id: 'about', label: 'James', key: '1' },
  { id: 'work', label: 'Work', key: '2' },
  { id: 'hobbies', label: 'Hobbies', key: '3' },
  { id: 'projects', label: 'Projects', key: '4' },
]

export const socialLinks = [
  { name: 'GitHub', url: profile.github, handle: '@jeymzaintsnitch' },
  { name: 'LinkedIn', url: profile.linkedin, handle: 'in/james-rolmer-catalan-9a70b7405' },
  { name: 'Email', url: `mailto:${profile.email}`, handle: profile.email },
]

export const nowUpdatedAt = 'November 2026'

export const nowItems = [
  {
    slug: 'internship',
    label: 'recently',
    detailPage: false,
    href: 'https://region4b.dost.gov.ph/',
    topic: 'Finished Internship in DOST-MIMAROPA',
    detail: 'Enhanced and improved the current ICTrack Inventory System.',
  },
  {
    slug: 'education',
    label: 'studying',
    detailPage: false,
    topic: 'taking Information Technology at PUP-Taguig',
    href: 'https://www.pup.edu.ph/taguig/',
    detail: 'Learning through coursework and personal projects in databases, networking, and software design.',
  },
  {
    slug: 'learning',
    label: 'learning',
    detailPage: false,
    topic: 'building REST APIs with Spring Boot',
    detail: 'learning Java and Spring Boot while building REST APIs.',
  },
  {
    slug: 'gta-6',
    label: 'waiting for',
    detailPage: false,
    topic: 'GTA 6 on PC',
    detail: '(lol)',
  },
]

export const dostPhotos = [
  {
    src: '/assets/work/dost-mimaropa/technical-support.jpg',
    alt: 'Providing technical support at a DOST-MIMAROPA workstation',
    width: 1500,
    height: 2000,
  },
  {
    src: '/assets/work/dost-mimaropa/system-setup.jpg',
    alt: 'Setting up a computer system at DOST-MIMAROPA',
    width: 2000,
    height: 1500,
  },
  {
    src: '/assets/work/dost-mimaropa/workstation-deployment.jpg',
    alt: 'Deploying office workstations at DOST-MIMAROPA',
    width: 2000,
    height: 1500,
  },
]

export const ganap = {
  title: 'ganap',
  description: 'mga ganap sa buhay ng isang unemployed IT student (awit)',
  images: dostPhotos,
}

export const workExperience = [
  {
    id: 'pup',
    detailPage: false,
    href: 'https://www.pup.edu.ph/taguig/',
    role: 'Diploma in Information Technology',
    company: 'Polytechnic University of the Philippines',
    period: '2024 — Present',
    description: 'Currently taking a Diploma in Information Technology.',
  },
  {
    id: 'dost-mimaropa',
    detailPage: false,
    href: 'https://region4b.dost.gov.ph/',
    images: dostPhotos,
    role: 'IT Intern',
    company: 'DOST-MIMAROPA',
    period: 'July 2026 — October 2026',
    description:
      'Providing technical support across all departments and enhancing the current inventory management system into a feasible solution.',
  },
]

export const hobbies = [
  {
    id: 'gaming',
    detailPage: false,
    title: 'Gaming',
    description:
      'Recently playing Ghost Recon Wildlands and Breakpoint. Add me on Steam: @Jeymz101.',
  },
  {
    id: 'pc-rigs',
    detailPage: false,
    title: 'Building PC Rigs',
    description:
      'Building PC rigs, fixing hardware issues, and troubleshooting broken PC components.',
  },
  {
    id: 'writing',
    detailPage: true,
    title: 'Writing',
    description:
      'coming soon.',
  },
  {
    id: 'cycling',
    detailPage: false,
    title: 'Cycling',
    description:
      'Assembling bike soon cuz my current bike is trash.',
  },
]
