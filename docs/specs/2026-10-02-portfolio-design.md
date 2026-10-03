# Portfolio site design: "Evidence Index"

Date: 2026-10-02. Approved direction: Evidence Index; contact shows GitHub only with placeholders;
build first, review on localhost.

## Goal

A technical portfolio for recruiters, research mentors and engineering teams. The reader should leave
thinking: Julian builds models and tools for hard systems, then spends unusual effort finding out
whether they actually work.

## References and what was taken from each

| Reference | Kept | Dropped |
| --- | --- | --- |
| dennissnellenberg.com | Large quiet type, whitespace, numbered work rows with a figure preview, dark rounded footer | Preloader, magnetic buttons |
| jesperlandberg.com project pages | Split layout: pinned summary on the left, scrolling media on the right | WebGL effects |
| samsy.ninja | One live interactive, only where it explains something | 3D world, hidden navigation |

## Design

**Verdict chips.** Every project carries one of five verdicts, shown as a glyph plus a label so the
state never depends on colour: Holds, Open, Prototype, Shipped, Negative. This is the site's signature
and its editorial principle: a project is reported by what testing showed.

**Home.** Hero statement, then the work index. Each row reads: number, title, the question the project
asks, verdict with one line of evidence, domain. Hovering a row shows that project's real figure beside
it. Four flagship projects, then QTA0 under Research notes. Below: Academia Sinica experience,
recognition, leadership, education, contact.

**Case study.** Left rail, pinned: title, one-sentence claim, verdict, key numbers, links, section
list. Right column: prose and numbered figures. Every page ends with the same Verdict block, split into
what worked and what did not.

**Navigation.** Top bar always visible. Real URLs, two levels deep at most, next-project link at the
end of each case study.

**Look.** Warm off-white paper, near-black ink, one vermilion accent, Geist and Geist Mono. Figures
sit on a light card in both themes, like a printed page. Dark theme follows the system and can be
toggled.

**Motion.** Row hover, a scroll-driven fade for home sections, and cross-page view transitions. All of
it is off under reduced-motion, and nothing is hidden when JavaScript or the animation feature is
unavailable.

## Content rules

- Facts come from the project brief and the public repositories. No invented data.
- Schematics are labelled as schematics. The localization demo is labelled as an illustrative
  simulation, not project data.
- Limits are stated: Fast-MC fidelity is not established; QTA0 is a negative result.
- Not featured: Sonoma Evac Assist, unfinished mathematics, physics and econometrics work.
- The private `texCompiler` repository is described as private and not linked.

## Stack

Astro static build, MDX content collection for case studies, no UI framework. GitHub Actions
publishes `dist/` to GitHub Pages.

## Revision, 2026-10-03

Changes requested after the first build was reviewed. Where this section disagrees with the text
above, this section is current.

- **Contact.** A contact page with a form (no email address anywhere), LinkedIn, and a résumé PDF
  without the address.
- **Contrast and colour.** Ink and paper pulled away from pure black and white in both themes. A teal
  second colour and one hue per verdict glyph. Still no gradients, and the header is no longer a
  blurred translucent bar.
- **Motion.** The preloader and magnetic buttons that were first dropped are now in, kept short: an
  intro of about 1.7 s on the first page of a visit only, never under reduced motion. Also a
  scroll-following ticker, scroll-driven reveals, a reading-progress line and count-up figures.
- **Interactive figures.** Four instead of one. The localization demo is a WebGL scene of translucent
  range spheres; the other three explain AUROC, split leakage and a hit-rate edge in plain terms.
- **Links.** Every named organisation, competition, school and tool links out.
- **No repetition.** Education moved to About only. The "Also" list and the hackathons line are gone:
  every recognition entry gets the same row.
- **Verdicts** explain themselves on hover, focus or tap.
- **Second pass on motion.** The ticker keeps one steady speed (it no longer speeds up with the
  scroll). Count-up figures take about 2.6 s and start once they are well inside the window. Scroll
  now drives more: per-part row reveals, masked headings, figures that settle, a stamped verdict and a
  footer the page lifts off. Wheel scrolling is eased with Lenis.
- **Los Gatos Hacks** is a normal entry at the top of About's activities, not a hidden foldout.
