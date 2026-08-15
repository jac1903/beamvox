import { Link, Route, Router, Switch, useLocation } from "wouter";
import { Provider } from "./components/provider";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";
import { Header } from "./components/site/header";
import { Footer } from "./components/site/footer";
import { useScrollTop } from "./hooks/use-reveal";
import Index from "./pages/index";
import Products from "./pages/products";
import ProductDetail from "./pages/product-detail";
import Applications from "./pages/applications";
import WhyBeamvox from "./pages/why-beamvox";
import Partners from "./pages/partners";
import Support from "./pages/support";
import About from "./pages/about";
import Contact from "./pages/contact";

function NotFound() {
  return (
    <div className="container-bv flex min-h-[70vh] flex-col justify-center py-40">
      <p className="eyebrow">Error 404</p>
      <h1 className="display-lg mt-5">This page is not in the catalogue.</h1>
      <p className="mt-5 max-w-md text-muted">
        The link may be out of date. The product range is the best place to start.
      </p>
      <Link
        to="/products"
        className="mt-8 inline-flex w-fit items-center gap-2 font-mono text-[0.8125rem] tracking-[0.08em] uppercase text-ember"
      >
        View products
      </Link>
    </div>
  );
}

function Routes() {
  const [location] = useLocation();
  useScrollTop(location);

  return (
    <Switch>
      <Route path="/" component={Index} />
      <Route path="/products" component={Products} />
      <Route path="/products/:slug" component={ProductDetail} />
      <Route path="/applications" component={Applications} />
      <Route path="/why-beamvox" component={WhyBeamvox} />
      <Route path="/partners" component={Partners} />
      <Route path="/support" component={Support} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

// Strips the trailing slash so wouter matches routes under a subpath deploy
// (GitHub Pages project sites serve the app from /<repo>/).
const routerBase = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

function App() {
  return (
    <Provider>
      <Router base={routerBase}>
        <div className="flex min-h-screen flex-col bg-void text-ink">
          <Header />
          <main className="flex-1">
            <Routes />
          </main>
          <Footer />
        </div>
      </Router>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
    </Provider>
  );
}

export default App;
