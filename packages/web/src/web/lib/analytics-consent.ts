/** Load Runable analytics only after the visitor has accepted optional analytics. */
export function loadRunableAnalytics() {
  if (typeof document === "undefined") return;
  if (document.querySelector('script[data-runable-loaded="true"]')) return;

  const config = document.querySelector<HTMLScriptElement>(
    'script[data-runable-analytics="consent-gated"]',
  );
  if (!config) return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = new URL(`${import.meta.env.BASE_URL}runable.js`, window.location.origin).href;
  script.dataset.hostname = config.dataset.hostname ?? "";
  script.dataset.url = config.dataset.url ?? "https://r.lilstts.com/events";
  if (config.dataset.debug) script.dataset.debug = config.dataset.debug;
  script.dataset.runableLoaded = "true";
  document.head.appendChild(script);
}
