
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
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section with Navy Banner */}
      <section className="relative overflow-hidden">
        {/* Navy Banner Background */}
        <div className="bg-navy-900 py-24">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              {/* Large Hero Logo on Navy Background */}
              <div className="mb-16">
                <Div1Logo size="5xl" className="mx-auto hover:scale-105 transition-transform duration-500 drop-shadow-2xl" />
              </div>
              
              <h1 className="text-6xl md:text-7xl font-light text-white mb-6 leading-tight">
                <span className="text-orange-500 font-medium">From input to output</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-light text-gray-200 mb-12">
                AI that understands what makes AEC work.
              </h2>
            </div>
          </div>
        </div>

        {/* White Content Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              {/* Hero Content Box */}
              <div className="mb-16">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Streamline project planning and specification management with our comprehensive AI-driven ecosystem designed for AEC professionals.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to="/signup">
                  <Button size="lg" className="text-lg px-12 py-4 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors">
                    Get Started Free
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="text-lg px-12 py-4 rounded-lg border-2 border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors font-medium">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-navy-900 mb-8">Three powerful solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Interconnected tools designed to work seamlessly together for your complete AEC workflow</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Engage Module */}
            <Card className="group hover:shadow-xl transition-all duration-300 bg-white border border-gray-200 rounded-xl">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors mb-6">
                  <EngageIcon className="text-orange-500" />
                </div>
                <CardTitle className="text-2xl font-medium mb-4 text-navy-900">Engage</CardTitle>
                <CardDescription className="text-base leading-relaxed text-gray-600">
                  AI-facilitated project charter with conversational intelligence and privacy protection
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-10 text-sm text-gray-600">
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <span>Multi-agent conversation system</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <span>Privacy-preserving architecture</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <span>Real-time sentiment analysis</span>
                  </li>
                </ul>
                <Link to="/engage">
                  <Button className="w-full rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 transition-colors">
                    Start Charter
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Division1 Module */}
            <Card className="group hover:shadow-xl transition-all duration-300 bg-white border border-gray-200 rounded-xl">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-navy-100 rounded-xl flex items-center justify-center group-hover:bg-navy-200 transition-colors mb-6">
                  <FileText className="h-8 w-8 text-navy-600" />
                </div>
                <CardTitle className="text-2xl font-medium mb-4 text-navy-900">Division1</CardTitle>
                <CardDescription className="text-base leading-relaxed text-gray-600">
                  Generate complete CSI MasterFormat Division 01 specifications from project charter data with AI precision
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-10 text-sm text-gray-600">
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <span>Automated charter-to-spec mapping</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <span>3-part CSI format Division 01 generation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <span>Side-by-side editing interface</span>
                  </li>
                </ul>
                <Link to="/division1">
                  <Button className="w-full rounded-lg bg-navy-600 hover:bg-navy-700 text-white font-medium py-3 transition-colors">
                    Generate Specs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Master1 Module */}
            <Card className="group hover:shadow-xl transition-all duration-300 bg-white border border-gray-200 rounded-xl">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-200 transition-colors mb-6">
                  <Master1Icon className="text-gray-600" />
                </div>
                <CardTitle className="text-2xl font-medium mb-4 text-navy-900">Master1</CardTitle>
                <CardDescription className="text-base leading-relaxed text-gray-600">
                  Intelligent specification synthesis with compliance validation and standards checking
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-10 text-sm text-gray-600">
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <span>Multi-modal document processing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <span>Real-time standards validation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <span>Automated compliance checking</span>
                  </li>
                </ul>
                <Link to="/master1">
                  <Button className="w-full rounded-lg bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 transition-colors">
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
      <footer className="bg-navy-900 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Div1Logo size="sm" />
                <span className="text-xl font-medium text-white">Platform</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                AI-driven ecosystem for the Architecture, Engineering, and Construction industry.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-6 text-lg text-white">Solutions</h5>
              <ul className="space-y-3 text-gray-300">
                <li><Link to="/engage" className="hover:text-orange-400 transition-colors">Engage</Link></li>
                <li><Link to="/division1" className="hover:text-orange-400 transition-colors">Division1</Link></li>
                <li><Link to="/master1" className="hover:text-orange-400 transition-colors">Master1</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium mb-6 text-lg text-white">Resources</h5>
              <ul className="space-y-3 text-gray-300">
                <li><Link to="/documentation" className="hover:text-orange-400 transition-colors">Documentation</Link></li>
                <li><Link to="/security" className="hover:text-orange-400 transition-colors">Security</Link></li>
                <li><Link to="/support" className="hover:text-orange-400 transition-colors">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium mb-6 text-lg text-white">Company</h5>
              <ul className="space-y-3 text-gray-300">
                <li><Link to="/about" className="hover:text-orange-400 transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-orange-400 transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-navy-700 mt-12 pt-8 text-center text-gray-300">
            © 2024 Div1 Platform Suite. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
