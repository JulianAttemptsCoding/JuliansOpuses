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
