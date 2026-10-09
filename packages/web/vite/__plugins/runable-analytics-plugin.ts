import { JSDOM } from "jsdom";
import type { Plugin } from "vite";

export default function runableAnalyticsPlugin(): Plugin {
	return {
		name: "runable-analytics-plugin",
		enforce: "pre",
		async transformIndexHtml(html) {
			const dom = new JSDOM(html);
			const doc = dom.window.document;
			const head = doc.head;

			const applicationId = process.env.APPLICATION_ID ?? "";
			const hostname = applicationId
				? `${applicationId}-website`
				: "localhost";

			// Keep analytics configuration in the document without loading the tracker.
			// The app activates the script only after the visitor accepts analytics cookies.
			const script = doc.createElement("script");
			script.type = "text/plain";
			script.dataset.runableAnalytics = "consent-gated";
			script.dataset.hostname = hostname;
			script.dataset.url = "https://r.lilstts.com/events";
			if (hostname === "localhost") {
				script.dataset.debug = hostname;
			}
			head.appendChild(script);

			return dom.serialize();
		},
	};
}
