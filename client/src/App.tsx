import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ServicesOverview from "./pages/ServicesOverview";
import CentrifugeRepair from "./pages/CentrifugeRepair";
import GearboxRepair from "./pages/GearboxRepair";
import BlowerRepair from "./pages/BlowerRepair";
import IndustrialCompressors from "./pages/IndustrialCompressors";
import FluidPowerEnd from "./pages/FluidPowerEnd";
import Warranty from "./pages/Warranty";
import EmergencyService from "./pages/EmergencyService";
import Contact from "./pages/Contact";
import { LpCentrifuge, LpGearbox, LpBlower, LpCompressor, LpFluidEnd } from "./pages/LandingPages";
import Industries from "./pages/Industries";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PumpService from "./pages/PumpService";
import Competitors from "./pages/Competitors";

function Router() {
  return (
    <Switch>
      {/* Core pages */}
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesOverview} />
      <Route path="/services/centrifuge-repair" component={CentrifugeRepair} />
      <Route path="/services/gearbox-repair" component={GearboxRepair} />
      <Route path="/services/industrial-blower-repair" component={BlowerRepair} />
      <Route path="/services/industrial-compressors" component={IndustrialCompressors} />
      <Route path="/services/fluid-power-end-repair" component={FluidPowerEnd} />
      <Route path="/warranty" component={Warranty} />
      <Route path="/emergency-service" component={EmergencyService} />
      <Route path="/contact" component={Contact} />

      {/* PPC Landing Pages (noindex) */}
      <Route path="/lp/centrifuge-repair" component={LpCentrifuge} />
      <Route path="/lp/gearbox-repair" component={LpGearbox} />
      <Route path="/lp/industrial-blower-repair" component={LpBlower} />
      <Route path="/lp/industrial-compressors" component={LpCompressor} />
      <Route path="/lp/fluid-power-end-repair" component={LpFluidEnd} />

      <Route path="/about" component={AboutUs} />
      <Route path="/industries" component={Industries} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug">
        {(params: { slug?: string }) => <BlogPost slug={params.slug} />}
      </Route>
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      {/* Google Ads landing page aliases (URL-stable destinations for paid traffic) */}
      <Route path="/fluid-end-power-end-repair" component={FluidPowerEnd} />
      <Route path="/gearbox-repair-service" component={GearboxRepair} />
      <Route path="/services/centrifuge-repair-service" component={CentrifugeRepair} />
      <Route path="/services/compressor-repair-service" component={IndustrialCompressors} />
      <Route path="/blower-vacuum-pump-repair" component={BlowerRepair} />
      <Route path="/pump-service" component={PumpService} />
      <Route path="/competitors" component={Competitors} />
      {/* Blog post landing page aliases (used as AdWords destinations without /blog/ prefix) */}
      <Route path="/decanter-centrifuge-repair-a-comprehensive-maintenance-and-troubleshooting-checklist">
        {() => <BlogPost slug="decanter-centrifuge-repair-a-comprehensive-maintenance-and-troubleshooting-checklist" />}
      </Route>
      <Route path="/centrifuge-dynamic-balancing-a-technical-guide-for-industrial-operations">
        {() => <BlogPost slug="centrifuge-dynamic-balancing-a-technical-guide-for-industrial-operations" />}
      </Route>
      <Route path="/emergency-industrial-repair-in-houston-24-7-response-for-critical-rotating-equipment">
        {() => <BlogPost slug="emergency-industrial-repair-in-houston-24-7-response-for-critical-rotating-equipment" />}
      </Route>

      {/* 404 */}
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
