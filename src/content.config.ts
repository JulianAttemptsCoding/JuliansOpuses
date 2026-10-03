import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const STATUSES = ['holds', 'open', 'prototype', 'shipped', 'negative'] as const;

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      tier: z.enum(['flagship', 'note']),
      title: z.string(),
      // Longer heading for the case-study page, when it differs from the index title.
      heading: z.string().optional(),
      // The question the project asks: shown on the index row.
      question: z.string(),
      // One-sentence statement of what was built.
      claim: z.string(),
      domain: z.string(),
      status: z.enum(STATUSES),
      // One line of evidence next to the verdict chip.
      evidence: z.string(),
      context: z.string().optional(),
      metrics: z
        .array(z.object({ label: z.string(), value: z.string(), note: z.string().optional() }))
        .default([]),
      links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
      cover: image(),
      coverAlt: z.string(),
      worked: z.array(z.string()),
      open: z.array(z.string()),
      openLabel: z.string().default('What still does not'),
    }),
});

export const collections = { work };
