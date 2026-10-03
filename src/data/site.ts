/**
 * Site-wide identity and contact links.
 *
 * Empty strings are placeholders: they render as a dashed "not set" chip in
 * `npm run dev` and are left out of the production build entirely.
 */
export const site = {
  name: 'Julian Juan',
  title: 'Julian Juan',
  description:
    'Julian Juan is a high-school senior who does machine-learning research for particle physics. Projects, research and how each result held up when tested.',
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
  accessKey: '930d0e62-1bbc-4bde-82f7-5e49c6b6024f',
};

export const nav = [
  { label: 'Projects', path: '/work/' },
  { label: 'Experience', path: '/experience/' },
  { label: 'About', path: '/about/' },
  { label: 'Contact', path: '/contact/' },
];
