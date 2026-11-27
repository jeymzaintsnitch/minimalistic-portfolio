// Single source of truth for James Catalan's portfolio
// Minimalist, content-first, and straightforward

export const profile = {
  name: 'James Catalan',
  fullName: 'James Rolmer V. Catalan',
  firstName: 'James',
  heroLabel: "pup taguig '27",
  title: 'Full-Stack Developer & Systems Engineer',
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
      href: '#/projects/ictrack',
      highlight: true,
    },
    { text: '.' },
  ],
  email: 'jamescatalan19@gmail.com',
  location: 'Manila, Philippines',
  timezone: 'Asia/Manila',
  github: 'https://github.com/jeymzaintsnitch',
  linkedin: 'https://www.linkedin.com/in/james-rolmer-catalan-9a70b7405/?isSelfProfile=true',
  resumeUrl: '/resume.pdf',
  education: {
    institution: 'Polytechnic University of the Philippines',
    degree: 'Diploma in Information Technology',
    period: '2024 — Present',
    url: 'https://www.pup.edu.ph/taguig/',
  },
  avatar: '/assets/aistudio/Studio_portrait_with_center-parted_curtain_hair_364bd15b.png',
}

export const navLinks = [
  { id: 'about', label: 'James', key: '1' },
  { id: 'work', label: 'Work', key: '2' },
  { id: 'hobbies', label: 'Hobbies', key: '3' },
  { id: 'projects', label: 'Projects', key: '4' },
]

export const socialLinks = [
  { name: 'GitHub', url: profile.github, handle: '@jeymzaintsnitch', icon: 'github' },
  { name: 'LinkedIn', url: profile.linkedin, handle: 'in/james-rolmer-catalan-9a70b7405', icon: 'linkedin' },
  { name: 'Email', url: `mailto:${profile.email}`, handle: profile.email, icon: 'mail' },
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
    slug: 'availability',
    label: 'availability',
    detailPage: false,
    topic: 'Availability',
    detail: 'Open to internships and select freelance engagements.',
    title: 'Open to thoughtful work',
    body: [
      'I am open to internships and select freelance engagements where I can contribute across product, frontend, and backend work.',
      'If the problem is interesting and the team values clear, careful engineering, feel free to reach out.',
    ],
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
    role: 'Technical Support and Junior Dev',
    company: 'DOST-MIMAROPA',
    period: 'July 2026 — October 2026',
    description:
      'Providing technical support across all departments and enhancing the current inventory management system into a feasible solution.',
  },
]

export const curatedProjects = [
  {
    id: 'vanguard',
    index: '01',
    title: 'Vanguard',
    category: 'Cloud Security',
    year: '2025',
    tagline: 'Multi-tenant cloud infrastructure compliance monitor.',
    description:
      'Continuously evaluates cloud resource configurations against security baselines and surfaces drift in real time without agent overhead.',
    outcome: 'Reduced manual configuration audit cycles by 70% across test environments.',
    architecture: [
      'Stateless polling workers evaluate IAM, network, and storage descriptors against declarative rule trees.',
      'Append-only PostgreSQL audit log tracks configuration drift with diff snapshots.',
      'Minimalist keyboard-navigable triage interface for inspecting policy violations.',
    ],
    githubUrl: 'https://github.com/jeymzaintsnitch',
  },
  {
    id: 'pup-assess',
    index: '02',
    title: 'PUP Assessment Portal',
    category: 'Web Application',
    year: '2024',
    tagline: 'Examination and automated rubric grading platform.',
    description:
      'Web platform for collegiate examinations featuring randomized question banks, timed session recovery, and instant rubric aggregation.',
    outcome: 'Supported 500+ concurrent student exam sessions with zero data loss.',
    architecture: [
      'Idempotent answer-autosave endpoint prevents lost progress on unstable connections.',
      'Deterministic seed per student session randomizes question order without server state bloat.',
      'Real-time instructor cohort matrix with exportable grade sheets.',
    ],
    githubUrl: 'https://github.com/jeymzaintsnitch',
  },
  {
    id: 'pulseroute',
    index: '03',
    title: 'PulseRoute',
    category: 'Systems & Networking',
    year: '2024',
    tagline: 'Lightweight reverse proxy with sliding-window rate limiting.',
    description:
      'High-throughput HTTP reverse proxy that enforces per-key rate quotas, circuit breaking, and sub-millisecond routing.',
    outcome: 'Sustained 12,000+ req/sec in local benchmark runs with < 1.2ms p99 proxy overhead.',
    architecture: [
      'Atomic Lua scripts in Redis evaluate sliding-window token buckets in a single round-trip.',
      'Automatic upstream health probing with exponential backoff circuit breakers.',
      'Structured JSON telemetry stream for latency percentile aggregation.',
    ],
    githubUrl: 'https://github.com/jeymzaintsnitch',
  },
  {
    id: 'hyperion',
    index: '04',
    title: 'Hyperion Cache',
    category: 'Systems & Networking',
    year: '2024',
    tagline: 'Zero-dependency in-memory key-value store with TTL eviction.',
    description:
      'Custom in-memory data store built from scratch over raw TCP sockets to explore hash table indexing and Doubly-Linked LRU eviction.',
    outcome: 'O(1) get/set operations with deterministic active + passive TTL expiration.',
    architecture: [
      'Custom binary-safe RESP-inspired wire protocol parser over Node.js net sockets.',
      'Intrusive doubly-linked list paired with hash map pointers for O(1) LRU promotion.',
      'Probabilistic background sweeping prevents memory leaks on expired keys.',
    ],
    githubUrl: 'https://github.com/jeymzaintsnitch',
  },
]

export const hobbies = [
  {
    id: 'gaming',
    detailPage: false,
    index: '01',
    title: 'Gaming',
    category: 'Games',
    description:
      'Recently playing Ghost Recon Wildlands and Breakpoint. Add me on Steam: @Jeymz101.',
  },
  {
    id: 'pc-rigs',
    detailPage: false,
    index: '02',
    title: 'Building PC Rigs',
    category: 'Hardware',
    description:
      'Building PC rigs, fixing hardware issues, and troubleshooting broken PC components.',
  },
  {
    id: 'writing',
    detailPage: true,
    index: '03',
    title: 'Writing',
    category: 'Ritual',
    description:
      'I love writing in a quiet space with a cup of coffee. It helps me reflect, plan, and reset my mind for the day.',
    note: 'nice',
  },
  {
    id: 'cycling',
    detailPage: false,
    index: '04',
    title: 'Cycling',
    category: 'Movement',
    description:
      'Building and assembling a bike soon because my current bike is trash.',
  },
]
