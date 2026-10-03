# Julian Juan — portfolio

Static portfolio site built with [Astro](https://astro.build), for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:4321.

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with live reload |
| `npm run check` | Type-check Astro, TypeScript and content frontmatter |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |

## Where things live

| Path | Contents |
| --- | --- |
| `src/data/site.ts` | Name, GitHub, LinkedIn, résumé link, contact-form key |
| `src/data/profile.ts` | Experience, recognition, leadership, education, activities |
| `src/data/verdicts.ts` | The five verdict states and what each means |
| `src/content/work/*.mdx` | One case study per project |
| `src/assets/work/<project>/` | Figures for each case study |
| `src/pages/index.astro` | Home page |
| `src/pages/contact.astro` | Contact form |
| `src/pages/work/[id].astro` | Case-study template: pinned rail on the left, evidence on the right |
| `src/components/` | Page furniture and the interactive figures (see below) |
| `src/styles/global.css` | Colour, type and spacing tokens for both themes, shared figure controls |

### Interactive figures

Each is a self-contained Astro component with no dependencies. All of them are labelled as
illustrations: only the numbers quoted from a project are project data.

| Component | Page | Shows |
| --- | --- | --- |
| `Multilateration.astro` | Firefighter Tracker | 3D range-based positioning: geometry, noise, a blocked path, height |
| `FidelityJudge.astro` | Fast-MC-CBSC | What an AUROC of 0.50, 0.65 or 0.84 means for a generator |
| `SplitLeak.astro` | PathoGraph-DL | Why a random split leaks the future and a split by date cannot |
| `HitRateChart.astro` | QTA0 | Hit rate per validation design, and the edge on a full 0–100% scale |

## Contact form

The contact page posts to [Web3Forms](https://web3forms.com), so no email address appears anywhere in
this repository or on the site.

1. Create an access key at web3forms.com with the inbox that should receive messages.
2. Paste it into `contact.accessKey` in `src/data/site.ts`.

The key is an alias the service maps to the inbox, and it is meant to be public. Until it is set the
form renders only in `npm run dev` (where it validates but does not send), and the production contact
page lists LinkedIn and GitHub instead.

## Before publishing

1. Add the contact-form key (above).
2. For a résumé link, export a copy **without a personal email address** to `public/resume.pdf` and set
   `resume: '/resume.pdf'` in `src/data/site.ts`. The `resume/` folder is git-ignored for that reason.
3. Read every case study once for voice and accuracy. The copy was drafted from the project brief and
   the public repositories.
4. The Firefighter Tracker page has a dev-only note where prototype photos and test plots belong.

## Adding a project

Add `src/content/work/<slug>.mdx`. The frontmatter is validated by `src/content.config.ts`; the build
fails with a clear message if a field is missing. Set `tier: flagship` for the main list or `tier: note`
for Research notes, and pick a `status` from `holds`, `open`, `prototype`, `shipped`, `negative`.

Figures use the `Figure` component: pass `src` for an image, or put a diagram, chart or interactive
component inside it.

## Deploy to GitHub Pages

`.github/workflows/deploy.yml` type-checks and builds on every push to `main`. It publishes only when
asked, so pushing work in progress never changes the live site.

1. In the repository, open Settings → Pages and set Source to **GitHub Actions**.
2. Open Actions → **Build and deploy** → Run workflow.

To publish on every push instead, add a repository variable `PAGES_AUTO_DEPLOY` with the value `true`
(Settings → Secrets and variables → Actions → Variables).

The base path is worked out from the repository name: a repository named
`JulianAttemptsCoding.github.io` serves from `https://julianattemptscoding.github.io/`, and any other
repository serves from `https://julianattemptscoding.github.io/<repo-name>/`.
