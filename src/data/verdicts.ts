export type Status = 'holds' | 'open' | 'prototype' | 'shipped' | 'negative';

/** Every project carries one verdict: how it did when it was tested. */
export const VERDICTS: Record<Status, { label: string; meaning: string }> = {
  holds: { label: 'Holds', meaning: 'It held up on data it had never seen.' },
  open: { label: 'Open', meaning: 'Parts of it work. The main question is still unanswered.' },
  prototype: { label: 'Prototype', meaning: 'Built as a prototype. Not yet tested in the field.' },
  shipped: { label: 'Shipped', meaning: 'Deployed and in use.' },
  negative: { label: 'Negative', meaning: 'It stopped working under harder tests. This is the write-up.' },
};

export const STATUS_ORDER: Status[] = ['holds', 'open', 'prototype', 'shipped', 'negative'];
