# Julian Juan — portfolio

**Live: https://julianattemptscoding.github.io/JuliansOpuses/**

Static portfolio site built with [Astro](https://astro.build), published on GitHub Pages.

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
| `src/styles/global.css` | Colour, type and spacing tokens for both themes, shared figure controls, motion |
| `public/` | Favicon, the résumé PDF and `og.png`, the card shown when a link to the site is shared |
| `resume/` (git-ignored) | Résumé generator and the copies that carry a personal email address |

### Interactive figures

Each is a self-contained Astro component. Only the tracker has a dependency: it draws with
[three.js](https://threejs.org/), which is loaded on demand when that figure nears the viewport. All of
them are labelled as illustrations: only the numbers quoted from a project are project data.

| Component | Page | Shows |
| --- | --- | --- |
| `Multilateration.astro` | Firefighter Tracker | 3D range bubbles (WebGL): one range, two, three, four; then noise, a blocked path, bad geometry, height |
| `FidelityJudge.astro` | Fast-MC-CBSC | What an AUROC of 0.50, 0.65 or 0.84 means for a generator |
| `SplitLeak.astro` | PathoGraph-DL | Why a random split leaks the future and a split by date cannot |
| `HitRateChart.astro` | QTA0 | Hit rate per validation design, and the edge on a full 0–100% scale |

## Look and motion

- **Colour.** Soft charcoal on warm paper, never pure black on white. One vermilion accent, a teal
  second colour in a few small places, and one hue per verdict glyph. Flat colour only: no gradients,
  no translucent "glass" surfaces.
- **Links.** Every named school, organiser, competition and tool links to its own site. The link
  targets live with the data in `src/data/profile.ts`.
- **Verdicts.** Pointing at, focusing or tapping a verdict explains what it means.
- **Motion.** A short intro on the first page of a visit and a headline that rises word by word. On
  scroll: the hero thins out, each work row assembles part by part, rules draw, figures settle in,
  lists arrive item by item, numbers count up, the verdict lands like a stamp, and the page lifts off
  the footer underneath it. Always moving: a steady ticker, the turning 3D scene and a footer clock.
  The wheel is eased with [Lenis](https://lenis.darkroom.engineering/) (mouse and trackpad only), and
  switching theme opens the new colours as a circle from the toggle. All of it is an enhancement:
  with reduced motion, without JavaScript, or without scroll-driven animations the content is simply
  in place. The reveals are opted into with `data-reveal`, `data-stagger` and `data-rule` attributes,
  documented at the top of the motion section in `src/styles/global.css`.
- **One home per fact.** Education and activities (Los Gatos Hacks, outreach, the club, tutoring) live
  on About; recognition and leadership live on the home page. Nothing is repeated across pages except
  the navigation and the footer.

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
2. `public/resume.pdf` is the published résumé and carries **no personal email address**. When the
   résumé changes, replace it with a copy that still has none. The working files with the address
   live in `resume/`, which is git-ignored for that reason.
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

`.github/workflows/deploy.yml` type-checks, builds and publishes on every push to `main`. Pages is set
to Source: **GitHub Actions**, and the repository variable `PAGES_AUTO_DEPLOY` is `true`.

To stop pushes from publishing (for example while reworking the site), delete that variable or set it
to anything else (Settings → Secrets and variables → Actions → Variables). The workflow then only
builds, and publishes when run by hand: Actions → **Build and deploy** → Run workflow.

The base path is worked out from the repository name: a repository named
`JulianAttemptsCoding.github.io` serves from `https://julianattemptscoding.github.io/`, and any other
repository serves from `https://julianattemptscoding.github.io/<repo-name>/`.
