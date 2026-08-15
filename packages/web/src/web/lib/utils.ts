import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Resolves a path in `public/` against the deploy base path.
 * Vite sets BASE_URL to "/" in dev and to the configured `base` in a build,
 * so the same call works at the domain root and under a GitHub Pages subpath.
 */
export function asset(path: string) {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
