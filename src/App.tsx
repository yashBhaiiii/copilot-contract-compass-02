
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Builder from "./pages/Builder";
import GasOptimizer from "./pages/GasOptimizer";
import CodeLab from "./pages/CodeLab";
import SecurityAudit from "./pages/SecurityAudit";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<Features />} />
            <Route path="/builder" element={<Builder />} />
            <Route path="/gas-optimizer" element={<GasOptimizer />} />
            <Route path="/codelab" element={<CodeLab />} />
            <Route path="/security-audit" element={<SecurityAudit />} />
            <Route path="/projects" element={<Index />} />
            <Route path="/security" element={<Index />} />
            <Route path="/performance" element={<Index />} />
            <Route path="/activity" element={<Index />} />
            <Route path="/team" element={<Index />} />
            <Route path="/billing" element={<Index />} />
            <Route path="/settings" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
