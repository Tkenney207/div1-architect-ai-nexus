import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Div1Logo from "@/components/Div1Logo";
import Header from "@/components/Header";
import { EngageIcon, Master1Icon } from "@/components/ModuleIcons";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50 text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-cover opacity-15"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/lovable-uploads/architects-working.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            Your browser does not support the video tag.
          </video>
          {/* Enhanced overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/30 to-orange-900/40"></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-slate-700/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Large Hero Logo */}
            <div className="relative group mb-16">
              <div className="absolute -inset-6 bg-gradient-to-r from-orange-200 via-blue-200 to-orange-200 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative p-12 bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-600/40">
                <Div1Logo size="5xl" className="mx-auto hover:scale-105 transition-transform duration-500 drop-shadow-lg" />
              </div>
            </div>
            
            <div className="bg-slate-900/30 backdrop-blur-sm rounded-3xl p-12 mb-12 border border-slate-600/30">
              <h2 className="text-8xl font-light text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent font-medium">From input to output</span>
              </h2>
              <h3 className="text-5xl font-light text-white/90 mb-12 tracking-wide drop-shadow-md">
                AI that understands what makes AEC work.
              </h3>
              <p className="text-2xl text-white/80 mb-16 leading-relaxed max-w-5xl mx-auto font-light drop-shadow-sm">
                Streamline project planning and specification management with our comprehensive AI-driven ecosystem designed for AEC professionals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link to="/signup">
                <Button size="lg" className="text-xl px-12 py-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 shadow-xl hover:shadow-2xl transition-all border-0 text-white font-medium hover:scale-105">
                  Get Started Free
                  <ArrowRight className="ml-4 h-6 w-6" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-xl px-12 py-8 rounded-full border-2 border-white/60 text-white hover:bg-white/20 hover:border-white transition-all font-medium bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-32 bg-gradient-to-br from-white via-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <div className="bg-slate-800/5 backdrop-blur-sm rounded-3xl p-12 max-w-5xl mx-auto">
              <h3 className="text-6xl font-light text-gray-900 mb-12 tracking-tight">Three powerful solutions</h3>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">Interconnected tools designed to work seamlessly together for your complete AEC workflow</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Engage Module */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-4 bg-white/95 backdrop-blur-sm border border-orange-100 hover:border-orange-200">
              <CardHeader className="pb-10 pt-12">
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-6 group-hover:from-orange-200 group-hover:to-orange-100 transition-all w-fit mb-8 shadow-md">
                  <EngageIcon className="text-orange-500 h-10 w-10" />
                </div>
                <CardTitle className="text-3xl mb-4 text-gray-900 font-light">Engage</CardTitle>
                <CardDescription className="text-lg leading-relaxed text-gray-600 font-light">
                  AI-facilitated project charter with conversational intelligence and privacy protection
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-10">
                <ul className="space-y-5 mb-12 text-base text-gray-600">
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Multi-agent conversation system</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Privacy-preserving architecture</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Real-time sentiment analysis</span>
                  </li>
                </ul>
                <Link to="/engage">
                  <Button className="w-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 transition-all border-0 text-white font-medium py-4 text-lg shadow-lg hover:shadow-xl hover:scale-105">
                    Start Charter
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Division1 Module */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-4 bg-white/95 backdrop-blur-sm border border-blue-100 hover:border-blue-200">
              <CardHeader className="pb-10 pt-12">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-6 group-hover:from-blue-200 group-hover:to-blue-100 transition-all w-fit mb-8 shadow-md">
                  <FileText className="h-10 w-10 text-blue-500" />
                </div>
                <CardTitle className="text-3xl mb-4 text-gray-900 font-light">Division1</CardTitle>
                <CardDescription className="text-lg leading-relaxed text-gray-600 font-light">
                  Generate complete CSI MasterFormat Division 01 specifications from project charter data with AI precision
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-10">
                <ul className="space-y-5 mb-12 text-base text-gray-600">
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Automated charter-to-spec mapping</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>3-part CSI format Division 01 generation</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Side-by-side editing interface</span>
                  </li>
                </ul>
                <Link to="/division1">
                  <Button className="w-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 transition-all border-0 text-white font-medium py-4 text-lg shadow-lg hover:shadow-xl hover:scale-105">
                    Generate Specs
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Master1 Module */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-4 bg-white/95 backdrop-blur-sm border border-purple-100 hover:border-purple-200">
              <CardHeader className="pb-10 pt-12">
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl p-6 group-hover:from-purple-200 group-hover:to-purple-100 transition-all w-fit mb-8 shadow-md">
                  <Master1Icon className="text-purple-500 h-10 w-10" />
                </div>
                <CardTitle className="text-3xl mb-4 text-gray-900 font-light">Master1</CardTitle>
                <CardDescription className="text-lg leading-relaxed text-gray-600 font-light">
                  Intelligent specification synthesis with compliance validation and standards checking
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-10">
                <ul className="space-y-5 mb-12 text-base text-gray-600">
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Multi-modal document processing</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Real-time standards validation</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Automated compliance checking</span>
                  </li>
                </ul>
                <Link to="/master1">
                  <Button className="w-full rounded-full bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-600 hover:to-purple-500 transition-all border-0 text-white font-medium py-4 text-lg shadow-lg hover:shadow-xl hover:scale-105">
                    Process Specs
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-100 to-blue-100 border-t border-slate-200 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <Div1Logo size="sm" />
                <span className="text-2xl font-light text-gray-900">Platform</span>
              </div>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                AI-driven ecosystem for the Architecture, Engineering, and Construction industry.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-8 text-xl text-gray-900">Solutions</h5>
              <ul className="space-y-4 text-gray-600 font-light">
                <li><Link to="/engage" className="hover:text-gray-900 transition-colors text-lg">Engage</Link></li>
                <li><Link to="/division1" className="hover:text-gray-900 transition-colors text-lg">Division1</Link></li>
                <li><Link to="/master1" className="hover:text-gray-900 transition-colors text-lg">Master1</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium mb-8 text-xl text-gray-900">Resources</h5>
              <ul className="space-y-4 text-gray-600 font-light">
                <li><Link to="/documentation" className="hover:text-gray-900 transition-colors text-lg">Documentation</Link></li>
                <li><Link to="/security" className="hover:text-gray-900 transition-colors text-lg">Security</Link></li>
                <li><Link to="/support" className="hover:text-gray-900 transition-colors text-lg">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium mb-8 text-xl text-gray-900">Company</h5>
              <ul className="space-y-4 text-gray-600 font-light">
                <li><Link to="/about" className="hover:text-gray-900 transition-colors text-lg">About</Link></li>
                <li><Link to="/contact" className="hover:text-gray-900 transition-colors text-lg">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-gray-900 transition-colors text-lg">Privacy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-300 mt-16 pt-12 text-center text-gray-500 font-light text-lg">
            © 2024 Div1 Platform Suite. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
