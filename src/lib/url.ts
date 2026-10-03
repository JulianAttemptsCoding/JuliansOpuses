const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an internal path with the configured base, so the site works at '/' or '/repo/'. */
export function href(path: string): string {
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
