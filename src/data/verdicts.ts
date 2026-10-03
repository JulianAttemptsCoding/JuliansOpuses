export type Status = 'holds' | 'open' | 'prototype' | 'shipped' | 'negative';

/** Every project carries one verdict: what testing actually showed. */
export const VERDICTS: Record<Status, { label: string; meaning: string }> = {
  holds: { label: 'Holds', meaning: 'Survived held-out testing.' },
  open: { label: 'Open', meaning: 'Works in part; the central question is unresolved.' },
  prototype: { label: 'Prototype', meaning: 'Designed and prototyped; field results still to come.' },
  shipped: { label: 'Shipped', meaning: 'Deployed and in use.' },
  negative: { label: 'Negative', meaning: 'Tested until it failed, and reported that way.' },
};

export const STATUS_ORDER: Status[] = ['holds', 'open', 'prototype', 'shipped', 'negative'];
