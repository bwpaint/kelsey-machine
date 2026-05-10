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
