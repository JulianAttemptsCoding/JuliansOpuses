/**
 * Site-wide identity and contact links.
 *
 * Empty strings are placeholders: they render as a dashed "not set" chip in
 * `npm run dev` and are left out of the production build entirely.
 */
export const site = {
  name: 'Julian Juan',
  title: 'Julian Juan — research engineering portfolio',
  description:
    'Scientific machine learning, detector simulation, graph forecasting and estimation, with the tests that show what held up and what did not.',
  github: 'https://github.com/JulianAttemptsCoding',
  linkedin: 'https://www.linkedin.com/in/4a4a75616e/',
  resume: '/resume.pdf', // public/resume.pdf: the copy without a personal email address
};

/**
 * Contact form delivery (Web3Forms).
 *
 * No email address is stored in this repository. The access key is an alias the
 * form service maps to an inbox on its side, and it is designed to be public.
 * Create one at https://web3forms.com with the inbox that should receive messages,
 * then paste it here. While it is empty the form only renders in `npm run dev`.
 */
export const contact = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: '',
};

export const nav = [
  { label: 'Work', path: '/#work' },
  { label: 'Experience', path: '/#experience' },
  { label: 'About', path: '/about/' },
  { label: 'Contact', path: '/contact/' },
];
