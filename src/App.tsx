import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScheduleConsultation from "./pages/ScheduleConsultation";
import AllSolutions from "./pages/AllSolutions";
import TechnologyStack from "./pages/TechnologyStack";
import OurApproach from "./pages/OurApproach";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/schedule-consultation" element={<ScheduleConsultation />} />
          <Route path="/solutions" element={<AllSolutions />} />
          <Route path="/technology-stack" element={<TechnologyStack />} />
          <Route path="/our-approach" element={<OurApproach />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
