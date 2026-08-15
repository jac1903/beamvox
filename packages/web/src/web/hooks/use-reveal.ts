import { useEffect } from "react";

/**
 * Reveals every [data-reveal] element once it scrolls into view.
 * Elements start with the `reveal` utility and gain `reveal-in` on entry.
 */
export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])"),
    );
    if (nodes.length === 0) return;

    if (typeof IntersectionObserver === "undefined") {
      for (const node of nodes) node.classList.add("reveal-in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay ?? 0);
          window.setTimeout(() => el.classList.add("reveal-in"), delay);
          el.dataset.revealed = "true";
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/** Scrolls to the top whenever the route changes. */
export function useScrollTop(key: string) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [key]);
}
