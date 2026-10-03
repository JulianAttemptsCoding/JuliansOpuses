/** Everything on the home and About pages that is not a project case study. */

export const experience = {
  role: 'Research Intern',
  org: 'Institute of Physics, Academia Sinica',
  place: 'Taipei, Taiwan',
  dates: 'Summers 2025–2026',
  summary:
    'Experimental particle-detector research, moving between data from real hardware and the models built on top of it.',
  strands: [
    {
      title: 'Detector testing',
      body: 'Analyzed nearly 1,800 oscilloscope captures to compare detector prototypes on particle-counting reliability and timing behavior. Worked inside the actual detector and DAQ workflow, with ROOT, C++ and Python for analysis.',
    },
    {
      title: 'Neutron reconstruction',
      body: 'Built models that reconstruct a neutron’s physical properties from thousands of calorimeter measurements.',
    },
    {
      title: 'Fast simulation',
      body: 'Developed a machine-learning surrogate for Geant4 calorimeter simulation. An early prototype generated showers about 200× faster in benchmarked runs; later work turned to whether the fidelity is actually sufficient.',
      link: { label: 'Fast-MC-CBSC case study', path: '/work/fast-mc-cbsc/' },
    },
  ],
};

export const recognition = [
  {
    name: 'HiMCM',
    result: 'Finalist',
    note: 'Team lead. One of roughly seven U.S. finalist teams, from more than 1,200 teams worldwide.',
  },
  {
    name: 'IMMC',
    result: 'U.S. Candidate Round qualifier',
    note: 'Advanced to the round that selects U.S. representation.',
  },
  {
    name: 'Bay Area Data Science Competition',
    result: 'Absolute Winner',
    note: 'Hosted by Santa Clara University’s Leavey School of Business. Optimization over public environmental and economic data to recommend an event location under real operating constraints.',
  },
  {
    name: 'Summer Science Program',
    result: 'Invitee',
    note: '',
  },
  {
    name: 'Santa Clara Valley Science & Engineering Fair',
    result: 'First Place · Honorable Mention',
    note: 'Across science-fair research projects.',
  },
  {
    name: 'California Science & Engineering Fair',
    result: 'Qualifier',
    note: '',
  },
  {
    name: 'Conrad Challenge',
    result: 'Innovator',
    note: 'Firefighter Tracker.',
  },
];

/** Shorter entries, shown as one compact list under the main table. */
export const alsoRecognized = [
  { name: 'Global Quantum Mechanics Challenge', result: 'Semifinalist' },
  { name: 'Global Logic & Reasoning Competition', result: 'Semifinalist, submission recognized as outstanding' },
  { name: 'President’s Volunteer Service Award', result: 'Gold' },
  { name: 'Hackathons', result: 'Sierra Hacks (Best UI/UX) · LG Hacks (3rd) · Google Mountain View Hackathon (3rd)' },
];

export const leadership = [
  {
    title: 'LGSUHSD Budget Advisory Committee',
    role: 'Voting Student Member',
    figures: [
      { value: '$88M', label: 'annual district budget' },
      { value: '$6M+', label: 'differences reconciled' },
    ],
    body: 'Appointed to represent students in oversight of a district budget serving more than 3,000 students. Helped identify and reconcile over $6 million in cumulative differences across four years of budget reporting, and pushed for itemized records, clearer accounting and plain-language presentations so students, families and board members could follow the numbers.',
  },
  {
    title: 'Résumé Workshop',
    role: 'Organizer',
    figures: [{ value: '9th–10th', label: 'grade English curriculum' }],
    body: 'I needed a résumé for an internship application and found that students were expected to write one without being taught how. I learned from professionals in my community, then worked with a parent who had startup hiring experience to turn that into a workshop. It is now part of freshman and sophomore English coursework.',
  },
];

export const activities = [
  {
    title: 'STEM Beyond Boundaries',
    role: 'Director of Outreach',
    body: 'Help lead STEM-access outreach. Taught about 80 children through interactive science lessons built to make topics like magnetism approachable.',
  },
  {
    title: 'Game Theory Club',
    role: 'Founder / Co-President',
    body: 'Founded by merging the school’s Chess Club and Cards Club into one broader club around strategy, probability, negotiation and game theory.',
  },
  {
    title: 'Tutoring',
    role: 'Paid tutor',
    body: 'Mathematics, science and history, including precalculus, AP Calculus BC, AP Physics, chemistry, biology, AP European History and AP U.S. History.',
  },
];

export const modeling = [
  {
    title: 'HiMCM / IMMC',
    body: 'Led a mathematical-modeling team through extended applied problems: choosing sustainable host cities for major events, and allocating anti-poaching resources across national parks. The work is turning a broad question into explicit assumptions, a model, and a recommendation that can be revised.',
  },
  {
    title: 'Bay Area Data Science Competition',
    body: 'Combined public environmental and economic data with mathematical optimization to recommend an event location under practical operating constraints: analysis a nontechnical stakeholder could act on.',
  },
];

export type Course = { code?: string; title: string; ongoing?: boolean };
export type School = { school: string; dates: string; facts: string[]; courses: Course[] };

export const highSchool: School = {
  school: 'Los Gatos High School',
  dates: '2023 – 2027',
  facts: ['Class of 2027', 'GPA 4.0 unweighted, 4.7 weighted'],
  courses: [
    { title: 'AP Calculus BC' },
    { title: 'AP Physics C: Mechanics and E&M' },
    { title: 'AP Chemistry' },
    { title: 'AP Biology' },
    { title: 'Introduction to Engineering Design' },
    { title: 'Graphic Design' },
  ],
};

/** College coursework, all taken through dual / concurrent enrollment during high school. */
export const college = {
  heading: 'College coursework',
  mode: 'Dual and concurrent enrollment',
  summary: '29 college units completed · 4.00 GPA · Dean’s List, Spring 2026',
  schools: [
    {
      school: 'West Valley College',
      dates: '2024 – present',
      facts: ['Honors Program', 'Mathematics and data science'],
      courses: [
        { code: 'MATH 004A', title: 'Multivariable Calculus' },
        { code: 'MATH 004B', title: 'Differential Equations' },
        { code: 'MATH 004C', title: 'Linear Algebra' },
        { code: 'STAT C1000', title: 'Introduction to Statistics' },
      ],
    },
    {
      school: 'Mission College',
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
      dates: '2026 – present',
      facts: [],
      courses: [{ code: 'MATH 11', title: 'Discrete Mathematics', ongoing: true }],
    },
  ] satisfies School[],
};

export const tools =
  'Python, C++, ROOT, PyTorch, scikit-learn, XGBoost, TypeScript, Next.js, FastAPI, Supabase, Git, LaTeX, Vertex AI, Zarr';
