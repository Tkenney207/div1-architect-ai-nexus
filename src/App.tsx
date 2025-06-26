
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Engage from "./pages/Engage";
import Interview from "./pages/Interview";
// ARCHIVED: Division1 and Master1 imports removed - functionality preserved in /archived folder
// import Division1 from "./pages/Division1";
// import Master1 from "./pages/Master1";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Support from "./pages/Support";
import Security from "./pages/Security";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen flex flex-col">
          <BrowserRouter>
            <ScrollToTop />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/engage" element={<Engage />} />
                <Route path="/interview/:interviewId" element={<Interview />} />
                {/* ARCHIVED: Division1 and Master1 routes removed - functionality preserved in /archived folder */}
                {/* <Route path="/division1" element={<Division1 />} /> */}
                {/* <Route path="/master1" element={<Master1 />} /> */}
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/support" element={<Support />} />
                <Route path="/security" element={<Security />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
