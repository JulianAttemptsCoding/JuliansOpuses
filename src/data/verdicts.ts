export type Status = 'holds' | 'open' | 'prototype' | 'shipped' | 'negative';

/**
 * Every project carries one label saying where it stands. The words are meant to read on
 * their own; the longer meaning is there for anyone who wants it.
 */
export const VERDICTS: Record<Status, { label: string; meaning: string }> = {
  holds: { label: 'Held up', meaning: 'It held up on data it had never seen.' },
  open: { label: 'In progress', meaning: 'Parts of it work. The main question is still unanswered.' },
  prototype: { label: 'Prototype', meaning: 'Built as a prototype. Not yet tested in the field.' },
  shipped: { label: 'In use', meaning: 'Deployed and in use.' },
  negative: { label: 'Negative result', meaning: 'It stopped working under harder tests. This is the write-up.' },
};

export const STATUS_ORDER: Status[] = ['holds', 'open', 'prototype', 'shipped', 'negative'];
