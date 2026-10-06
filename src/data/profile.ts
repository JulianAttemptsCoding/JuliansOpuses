/** Everything on the home and About pages that is not a project case study. */

/** A run of text, optionally linked. Lists of these render through `Rich.astro`. */
export type Part = string | { text: string; href: string };

export const links = {
  academiaSinica: 'https://www.phys.sinica.edu.tw/',
  lghs: 'https://www.lghs.net/',
  westValley: 'https://www.westvalley.edu/',
  westValleyHonors: 'https://www.westvalley.edu/learning-communities/honors/',
  mission: 'https://missioncollege.edu/',
  laney: 'https://laney.edu/',
  lgsuhsd: 'https://www.lgsuhsd.org/',
  leavey: 'https://www.scu.edu/business/',
  stemBeyondBoundaries: 'https://stembeyondboundaries.org/',
  lgHacks: 'https://www.losgatoshacks.com/',
  lgHacksArchive: 'https://www.losgatoshacks.com/archive/',
};

export const experience = {
  role: 'Research intern',
  org: 'Institute of Physics, Academia Sinica',
  href: links.academiaSinica,
  place: 'Taipei, Taiwan',
  dates: 'summers of 2025 and 2026',
  summary:
    'I worked on particle detectors, from testing real hardware to building the models that run on its data.',
  strands: [
    {
      title: 'Detector testing',
      body: 'I analyzed nearly 1,800 oscilloscope captures to compare detector prototypes on how reliably each one counts particles and how its timing behaves. I worked inside the lab’s own detector and DAQ setup, in ROOT, C++, and Python.',
    },
    {
      title: 'Neutron reconstruction',
      body: 'I built models that reconstruct a neutron’s physical properties from thousands of calorimeter readings.',
    },
    {
      title: 'Fast simulation',
      body: 'I built a machine-learning stand-in for Geant4, the standard detector simulator. An early version generated showers about 200× faster in benchmarks. Since then the work has been about whether those showers are accurate enough to use.',
      link: { label: 'Read the Fast-MC-CBSC write-up', path: '/work/fast-mc-cbsc/' },
    },
  ],
};

/** Every entry gets the same weight on the page, and its name links to the organiser. */
export const recognition: { name: string; href: string; result: string; note: Part[] }[] = [
  {
    name: 'HiMCM',
    href: 'https://www.comap.com/contests/himcm-midmcm',
    result: 'Finalist',
    note: [
      'Team lead in the High School Mathematical Contest in Modeling. One of roughly seven U.S. finalist teams, from more than 1,200 teams worldwide.',
    ],
  },
  {
    name: 'IMMC',
    href: 'https://immchallenge.org/',
    result: 'U.S. Candidate Round qualifier',
    note: [
      'Advanced to the round that selects the U.S. teams for the International Mathematical Modeling Challenge. Across the two contests we chose sustainable host cities for major events and allocated anti-poaching resources across national parks.',
    ],
  },
  {
    name: 'Bay Area Data Science Competition',
    href: 'https://www.amadorvalleytoday.org/61251/features/av-data-science-hosts-first-local-competition/',
    result: 'Absolute Winner',
    note: [
      'Finals at ',
      { text: 'Santa Clara University’s Leavey School of Business', href: links.leavey },
      '. We combined public environmental and economic data with optimization to recommend where to hold an event.',
    ],
  },
  {
    name: 'Summer Science Program',
    href: 'https://ssp.org/',
    result: 'Invitee',
    note: ['Invited to the summer research program for high-school students.'],
  },
  {
    name: 'Santa Clara Valley Science & Engineering Fair',
    href: 'https://science-fair.org/',
    result: 'First Place · Honorable Mention',
    note: ['For independent research projects.'],
  },
  {
    name: 'California Science & Engineering Fair',
    href: 'https://csef.usc.edu/',
    result: 'Qualifier',
    note: ['Advanced from the regional fair.'],
  },
  {
    name: 'Conrad Challenge',
    href: 'https://conrad.spacecenter.org/',
    result: 'Innovator',
    note: ['For the ', { text: 'Firefighter Tracker', href: '/work/firefighter-tracker/' }, '.'],
  },
  {
    name: 'Global Quantum Mechanics Challenge',
    href: 'https://glqmc.org/',
    result: 'Semifinalist',
    note: ['Advanced to the second of three rounds of the international quantum-mechanics contest.'],
  },
  {
    name: 'Global Logic & Reasoning Competition',
    href: 'https://gllrc.org/en/',
    result: 'Semifinalist',
    note: ['Submission recognized as outstanding work.'],
  },
  {
    name: 'President’s Volunteer Service Award',
    href: 'https://presidentialserviceawards.gov/',
    result: 'Gold',
    note: ['The highest annual level of the award.'],
  },
];

export const leadership: {
  title: string;
  href?: string;
  role: string;
  figures: { value: string; label: string }[];
  body: string;
}[] = [
  {
    title: 'LGSUHSD Budget Advisory Committee',
    href: links.lgsuhsd,
    role: 'Voting Student Member',
    figures: [
      { value: '$88M', label: 'annual district budget' },
      { value: '$6M+', label: 'differences reconciled' },
    ],
    body: 'I was appointed to represent students on the committee that oversees the district’s budget, which covers more than 3,000 students. I helped find and reconcile over $6 million in cumulative differences across four years of budget reports. I pushed for itemized records and plain-language presentations, so that students, families, and board members could follow the numbers.',
  },
  {
    title: 'Résumé Workshop',
    role: 'Organizer',
    figures: [{ value: '9th–10th', label: 'grade English curriculum' }],
    body: 'I needed a résumé for an internship application and found that students were expected to write one without being taught how. I learned from professionals in my community, then worked with a parent who had startup hiring experience to turn that into a workshop. It is now part of freshman and sophomore English coursework.',
  },
];

export const activities: {
  title: string;
  href?: string;
  role: string;
  /** Numbers already stated in the body, set beside it. */
  figures?: { value: string; label: string }[];
  body: string;
  link?: { label: string; href: string };
}[] = [
  {
    // Figures are the ones the organisation publishes on its archive page, added up over
    // its four events: 50, 73, 100 and 115 hackers; 17, 25, 34 and 39 projects.
    title: 'Los Gatos Hacks',
    href: links.lgHacks,
    role: 'Director of Strategy',
    figures: [
      { value: '338', label: 'hackers in total' },
      { value: '115', label: 'projects in total' },
    ],
    body: 'I set strategy for this nonprofit, which runs a one-day hackathon for middle and high school students. It has grown every year and more than doubled, from 50 hackers and 17 projects in 2023 to 115 hackers and 39 projects in 2026. Over the four events that comes to 338 hackers and 115 projects.',
    link: { label: 'See every year in the archive', href: links.lgHacksArchive },
  },
  {
    title: 'STEM Beyond Boundaries',
    href: links.stemBeyondBoundaries,
    role: 'Director of Outreach',
    figures: [{ value: '~80', label: 'children taught' }],
    body: 'I lead outreach for a group that brings science lessons to kids. So far I’ve taught about 80 children, in hands-on lessons on topics like magnetism.',
  },
  {
    title: 'Game Theory Club',
    role: 'Founder / Co-President',
    body: 'I started it by merging the school’s Chess Club and Cards Club into one club about strategy, probability, negotiation, and game theory.',
  },
  {
    title: 'Tutoring',
    role: 'Paid tutor',
    body: 'I tutor math, science, and history, including precalculus, AP Calculus BC, AP Physics, chemistry, biology, AP European History, and AP U.S. History.',
  },
];

export type Course = { code?: string; title: string; ongoing?: boolean };
export type School = {
  school: string;
  href: string;
  dates: string;
  facts: Part[];
  courses: Course[];
  /** What the list of courses is called, when it is not the whole list. */
  coursesLabel?: string;
};

export const highSchool: School = {
  school: 'Los Gatos High School',
  href: links.lghs,
  dates: '2023 – 2027',
  facts: ['Class of 2027, 4.0 GPA'],
  coursesLabel: 'Selected coursework',
  courses: [
    { title: 'AP Calculus BC' },
    { title: 'AP Physics C: Mechanics and E&M', ongoing: true },
    { title: 'AP Chemistry' },
    { title: 'AP Biology' },
    { title: 'Introduction to Engineering Design' },
    { title: 'Graphic Design' },
  ],
};

/** College coursework, all taken through dual / concurrent enrollment during high school. */
export const college = {
  heading: 'College coursework',
  mode: 'taken alongside high school',
  summary: '29 college units completed with a 4.0 GPA. Dean’s List, Spring 2026.',
  schools: [
    {
      school: 'West Valley College',
      href: links.westValley,
      dates: '2024 – present',
      facts: [{ text: 'Honors Program', href: links.westValleyHonors }],
      courses: [
        { code: 'MATH 004A', title: 'Multivariable Calculus' },
        { code: 'MATH 004B', title: 'Differential Equations' },
        { code: 'MATH 004C', title: 'Linear Algebra' },
        { code: 'STAT C1000', title: 'Introduction to Statistics' },
      ],
    },
    {
      school: 'Mission College',
      href: links.mission,
      dates: '2026 – present',
      facts: [],
      courses: [
        { code: 'CIS 50', title: 'Introduction to Artificial Intelligence' },
        { code: 'CIS 51', title: 'Introduction to Machine Learning', ongoing: true },
        { code: 'ECN 1A', title: 'Principles of Macroeconomics' },
        { code: 'ECN 1B', title: 'Principles of Microeconomics' },
        { code: 'ACC 057A', title: 'Cost Accounting', ongoing: true },
      ],
    },
    {
      school: 'Laney College',
      href: links.laney,
      dates: '2026 – present',
      facts: [],
      courses: [{ code: 'MATH 11', title: 'Discrete Mathematics', ongoing: true }],
    },
  ] satisfies School[],
};

/** The About page lists these by name. */
export const tools: { label: string; href: string }[] = [
  { label: 'Python', href: 'https://www.python.org/' },
  { label: 'C++', href: 'https://isocpp.org/' },
  { label: 'ROOT', href: 'https://root.cern/' },
  { label: 'PyTorch', href: 'https://pytorch.org/' },
  { label: 'scikit-learn', href: 'https://scikit-learn.org/' },
  { label: 'XGBoost', href: 'https://xgboost.readthedocs.io/' },
  { label: 'TypeScript', href: 'https://www.typescriptlang.org/' },
  { label: 'Next.js', href: 'https://nextjs.org/' },
  { label: 'FastAPI', href: 'https://fastapi.tiangolo.com/' },
  { label: 'Supabase', href: 'https://supabase.com/' },
  { label: 'Git', href: 'https://git-scm.com/' },
  { label: 'LaTeX', href: 'https://www.latex-project.org/' },
  { label: 'Vertex AI', href: 'https://cloud.google.com/vertex-ai' },
  { label: 'Zarr', href: 'https://zarr.dev/' },
];
