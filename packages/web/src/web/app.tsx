import { Link, Route, Router, Switch, useLocation } from "wouter";
import { useTranslation } from 'react-i18next';
import { Provider } from "./components/provider";
import { AgentFeedback } from "@runablehq/website-runtime";
import { Header } from "./components/site/header";
import { Footer } from "./components/site/footer";
import { useScrollTop } from "./hooks/use-reveal";
import CookieConsent from "react-cookie-consent";

import Index from "./pages/index";
import Products from "./pages/products";
import ProductDetail from "./pages/product-detail";
import Applications from "./pages/applications";
import WhyBeamvox from "./pages/why-beamvox";
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
      <Link to="/products" className="mt-8 inline-flex w-fit items-center gap-2 font-mono text-[0.8125rem] tracking-[0.08em] uppercase text-ember">
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
      <Route path="/support" component={Support} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

const routerBase = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

// Define your cookie services here
const consentServices = [
  {
    id: 'essential',
    name: 'Essential Cookies',
    description: 'Required for the website to function properly.',
    mandatory: true,
  },
  // Add analytics or marketing services later if needed
];

function App() {
  const { t } = useTranslation();

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

      <CookieConsent
        location="bottom"
        buttonText={t('consent.accept')}
        declineButtonText={t('consent.decline')}
        enableDeclineButton
        cookieName="beamvox-consent"
        expires={365}
        buttonStyle={{
          background: "#FF6A1A",
          color: "#08080A",
          fontSize: "15px",
          fontWeight: 600,
          borderRadius: "4px",
        }}
        declineButtonStyle={{
          background: "#FF6A1A",
          color: "#08080A",
          fontSize: "15px",
          fontWeight: 600,
          borderRadius: "4px",
        }}
        style={{
          background: "#0f1013",
          color: "#f6f5f3",
          alignItems: "center",
        }}
      >
        {t('consent.message')}
      </CookieConsent>

      {import.meta.env.DEV && <AgentFeedback />}
    </Provider>
  );
}

export default App;
