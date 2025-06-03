import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Div1Logo from "@/components/Div1Logo";
import Header from "@/components/Header";
import { ManufacturerBaseIcon, EngageIcon, Master1Icon } from "@/components/ModuleIcons";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-orange-600/10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-5xl mx-auto">
            {/* Large Hero Logo - melted into background */}
            <div className="relative group mb-12">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 via-blue-600 to-orange-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative p-8">
                <Div1Logo size="xl" className="mx-auto hover:scale-110 transition-transform duration-500 drop-shadow-2xl filter brightness-110" />
              </div>
            </div>
            
            <Badge variant="outline" className="mb-8 px-6 py-3 text-sm font-medium rounded-full border-orange-500/30 bg-orange-600/10 text-orange-300">
              ✨ Next-Generation Construction Intelligence
            </Badge>
            <h2 className="text-7xl font-bold text-white mb-8 leading-tight">
              Transform your 
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent"> construction </span>
              workflow
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Streamline product discovery, project planning, and specification management with our comprehensive AI-driven ecosystem designed for AEC professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="text-lg px-10 py-6 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 shadow-2xl hover:shadow-orange-500/25 transition-all border-0 text-white font-semibold">
                Get Started Free
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 rounded-full border-2 border-orange-500/50 text-orange-300 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all font-semibold">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold text-white mb-8">Three powerful solutions</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Interconnected tools designed to work seamlessly together for your complete AEC workflow</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Manufacturer-Base Module */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl hover:-translate-y-3 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-orange-500/50">
              <CardHeader className="pb-8">
                <div className="bg-orange-600/20 rounded-2xl p-4 group-hover:bg-orange-500/30 transition-colors w-fit mb-6">
                  <ManufacturerBaseIcon className="text-orange-400" />
                </div>
                <CardTitle className="text-2xl mb-3 text-white">Manufacturer-Base</CardTitle>
                <CardDescription className="text-base leading-relaxed text-gray-300">
                  AI-driven product intelligence with real-time data aggregation and semantic search
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-10 text-sm text-gray-400">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Microservices with Kafka streams</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Multi-modal data normalization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>GraphQL federation</span>
                  </li>
                </ul>
                <Link to="/manufacturer-base">
                  <Button className="w-full rounded-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 transition-all border-0 text-white font-semibold py-3">
                    Explore Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Engage Module */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl hover:-translate-y-3 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-orange-500/50">
              <CardHeader className="pb-8">
                <div className="bg-orange-600/20 rounded-2xl p-4 group-hover:bg-orange-500/30 transition-colors w-fit mb-6">
                  <EngageIcon className="text-orange-400" />
                </div>
                <CardTitle className="text-2xl mb-3 text-white">Engage</CardTitle>
                <CardDescription className="text-base leading-relaxed text-gray-300">
                  AI-facilitated project charter with conversational intelligence and privacy protection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-10 text-sm text-gray-400">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Multi-agent conversation system</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Privacy-preserving architecture</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Real-time sentiment analysis</span>
                  </li>
                </ul>
                <Link to="/engage">
                  <Button className="w-full rounded-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 transition-all border-0 text-white font-semibold py-3">
                    Start Charter
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Master1 Module */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl hover:-translate-y-3 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-orange-500/50">
              <CardHeader className="pb-8">
                <div className="bg-orange-600/20 rounded-2xl p-4 group-hover:bg-orange-500/30 transition-colors w-fit mb-6">
                  <Master1Icon className="text-orange-400" />
                </div>
                <CardTitle className="text-2xl mb-3 text-white">Master1</CardTitle>
                <CardDescription className="text-base leading-relaxed text-gray-300">
                  Intelligent specification synthesis with compliance validation and standards checking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-10 text-sm text-gray-400">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Multi-modal document processing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Real-time standards validation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Automated compliance checking</span>
                  </li>
                </ul>
                <Link to="/master1">
                  <Button className="w-full rounded-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 transition-all border-0 text-white font-semibold py-3">
                    Process Specs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Div1Logo size="sm" />
                <span className="text-xl font-semibold text-white">Platform</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                AI-driven ecosystem for the Architecture, Engineering, and Construction industry.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-6 text-lg text-white">Solutions</h5>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/manufacturer-base" className="hover:text-white transition-colors">Manufacturer-Base</Link></li>
                <li><Link to="/engage" className="hover:text-white transition-colors">Engage</Link></li>
                <li><Link to="/master1" className="hover:text-white transition-colors">Master1</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-6 text-lg text-white">Resources</h5>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/documentation" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link to="/api-reference" className="hover:text-white transition-colors">API Reference</Link></li>
                <li><Link to="/support" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-6 text-lg text-white">Company</h5>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-gray-400">
            © 2024 Div1 Platform Suite. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
