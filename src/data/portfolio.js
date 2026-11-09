// Single source of truth for James Catalan's portfolio
// Minimalist, content-first, and straightforward

export const profile = {
  name: 'James Catalan',
  fullName: 'James Rolmer V. Catalan',
  firstName: 'James',
  title: 'Full-Stack Developer & Systems Engineer',
  headline: 'Building clean, fast web applications and reliable backend systems.',
  bio: 'Based in Manila, Philippines. I design and engineer web software with React, TypeScript, Node.js, and PostgreSQL—focusing on simple architectures, predictable state, and quiet, responsive interfaces.',
  email: 'jamescatalan19@gmail.com',
  location: 'Manila, Philippines',
  timezone: 'Asia/Manila',
  github: 'https://github.com/jeymzaintsnitch',
  linkedin: 'https://www.linkedin.com/in/james-rolmer-catalan-9a70b7405/?isSelfProfile=true',
  resumeUrl: '/resume.pdf',
  education: {
    institution: 'Polytechnic University of the Philippines',
    degree: 'BS in Information Technology',
    period: '2021 — 2025',
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
    slug: 'building',
    topic: 'Building',
    detail: 'Full-stack web applications and internal tools with React, TypeScript, and Node.js.',
    title: 'Building useful software',
    body: [
      'I am focused on building full-stack products that feel simple to use and dependable to maintain.',
      'My current work sits around React interfaces, Node.js services, and the small decisions that make a system easier to understand six months later.',
    ],
  },
  {
    slug: 'exploring',
    topic: 'Exploring',
    detail: 'Distributed backend patterns, zero-dependency tooling, and PostgreSQL query optimization.',
    title: 'Exploring systems that stay understandable',
    body: [
      'I am studying distributed backend patterns, zero-dependency tooling, and PostgreSQL query optimization.',
      'The goal is not complexity for its own sake. I want to understand the trade-offs well enough to choose the smallest reliable solution.',
    ],
  },
  {
    slug: 'education',
    topic: 'Education',
    detail: 'Polytechnic University of the Philippines (PUP) · BS in Information Technology.',
    title: 'Learning through foundations',
    body: [
      'I am completing my BS in Information Technology at the Polytechnic University of the Philippines.',
      'Alongside coursework, I use personal projects to turn concepts from databases, networking, and software design into working systems.',
    ],
  },
  {
    slug: 'availability',
    topic: 'Availability',
    detail: 'Open to software engineering roles and select freelance engagements.',
    title: 'Open to thoughtful work',
    body: [
      'I am open to software engineering roles and select freelance engagements where I can contribute across product, frontend, and backend work.',
      'If the problem is interesting and the team values clear, careful engineering, feel free to reach out.',
    ],
  },
]

export const workExperience = [
  {
    index: '01',
    role: 'Full-Stack Developer',
    company: 'Independent & Client Work',
    location: 'Manila, PH',
    period: '2023 — Present',
    description:
      'Designing and shipping end-to-end web applications for early-stage teams and local businesses, from relational schema design to minimal frontend interfaces.',
    highlights: [
      'Engineered fast, accessible client applications with sub-100ms interaction latency.',
      'Architected REST APIs, webhook consumers, and background job queues in Node.js.',
      'Modeled normalized PostgreSQL schemas with composite indexing and query profiling.',
    ],
  },
  {
    index: '02',
    role: 'Frontend Lead',
    company: 'SparkFest Hackathon Platform',
    location: 'Manila, PH',
    period: '2024 — 2025',
    description:
      'Led frontend architecture for the registration, live schedule, and real-time judging portal used during collegiate developer hackathons.',
    highlights: [
      'Built real-time schedule synchronization and rubric scoring views for judges.',
      'Established component standards, Git review workflows, and zero-downtime deploys.',
      'Maintained 100% availability across peak project submission windows.',
    ],
  },
  {
    index: '03',
    role: 'Systems Developer',
    company: 'Polytechnic University of the Philippines',
    location: 'Manila, PH',
    period: '2021 — 2025',
    description:
      'Developed academic assessment modules and departmental web utilities supporting faculty and student workflows.',
    highlights: [
      'Created automated examination and rubric evaluation workflows for large cohorts.',
      'Enforced transactional integrity on grading records using row-level locks.',
      'Partnered with faculty to simplify complex administrative forms into clean views.',
    ],
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
    id: 'keyboards',
    index: '01',
    title: 'Mechanical Keyboards',
    category: 'Hardware',
    description:
      'Building and tuning custom mechanical keyboards—lubing switches, soldering PCBs, and dialing in clean typing acoustics.',
    note: 'Daily driver: 65% gasket-mounted aluminum board with linear switches and custom QMK keymap.',
  },
  {
    id: 'music',
    index: '02',
    title: 'Ambient & Synth Music',
    category: 'Audio',
    description:
      'Curating instrumental soundtracks for deep programming sessions: ambient electronics, analog synthwave, and classic game scores.',
    note: 'On rotation: Tycho, Disasterpeace, Brian Eno, and Chrono Trigger arrangements.',
  },
  {
    id: 'coffee',
    index: '03',
    title: 'Pour-Over Coffee',
    category: 'Ritual',
    description:
      'Starting mornings with manual pour-over brewing—experimenting with single-origin roasts, grind uniformity, and extraction ratios.',
    note: 'Setup: Hario V60 02 ceramic dripper, burr hand grinder, washed Ethiopian & Mt. Apo beans.',
  },
  {
    id: 'badminton',
    index: '04',
    title: 'Badminton',
    category: 'Movement',
    description:
      'Playing weekly doubles matches for footwork, reflexes, and a physical reset away from the terminal.',
    note: 'Routine: Weekend court sessions in Manila.',
  },
  {
    id: 'reading',
    index: '05',
    title: 'Technical & Design Monographs',
    category: 'Reading',
    description:
      'Reading foundational books on distributed systems, database internals, and industrial design philosophy.',
    note: 'Shelf: Designing Data-Intensive Applications, The Design of Everyday Things, Dieter Rams: Ten Principles.',
  },
  {
    id: 'gaming',
    index: '06',
    title: 'Retro 16-Bit Gaming',
    category: 'Archive',
    description:
      'Appreciating classic 16-bit and 32-bit RPGs, pixel art craftsmanship, and portable Linux handhelds.',
    note: 'All-time favorites: Chrono Trigger, Castlevania: Symphony of the Night, Final Fantasy VI.',
  },
]
