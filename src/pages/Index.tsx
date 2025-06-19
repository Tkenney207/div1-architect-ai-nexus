
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
    <div className="min-h-screen" style={{ backgroundColor: '#D9D6D0' }}>
      <Header />

      {/* Hero Section with Navy Banner */}
      <section className="relative overflow-hidden">
        {/* Navy Banner Background */}
        <div style={{ backgroundColor: '#1A2B49' }} className="py-24">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              {/* Large Hero Logo on Navy Background */}
              <div className="mb-16">
                <Div1Logo size="5xl" className="mx-auto hover:scale-105 transition-transform duration-500 drop-shadow-2xl" />
              </div>
              
              <h1 className="text-6xl md:text-7xl font-light mb-6 leading-tight" style={{ color: '#F7F3ED' }}>
                <span style={{ color: '#C6A664' }} className="font-medium">From input to output</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-light mb-12" style={{ color: '#F7F3ED' }}>
                AI that understands what makes AEC work.
              </h2>
            </div>
          </div>
        </div>

        {/* Soft Pebble Content Section */}
        <div style={{ backgroundColor: '#D9D6D0' }} className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              {/* Hero Content Box */}
              <div className="mb-16">
                <p className="text-xl leading-relaxed" style={{ color: '#1A2B49' }}>
                  Streamline project planning and specification management with our comprehensive AI-driven ecosystem designed for AEC professionals.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to="/signup">
                  <Button size="lg" style={{ backgroundColor: '#C6A664', color: '#1A2B49' }} className="text-lg px-12 py-4 rounded-lg hover:opacity-90 font-medium transition-all">
                    Get Started Free
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" style={{ borderColor: '#1A2B49', color: '#1A2B49', backgroundColor: 'transparent' }} className="text-lg px-12 py-4 rounded-lg border-2 hover:bg-white hover:bg-opacity-50 transition-all font-medium">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24" style={{ backgroundColor: '#D9D6D0' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ color: '#1A2B49' }}>Three powerful solutions</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#426A8C' }}>Interconnected tools designed to work seamlessly together for your complete AEC workflow</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Engage Module */}
            <Card className="group hover:shadow-xl transition-all duration-300 bg-white border rounded-xl" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader className="p-8">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:opacity-80 transition-colors mb-6" style={{ backgroundColor: '#D6F0E5' }}>
                  <EngageIcon className="text-brass" />
                </div>
                <CardTitle className="text-2xl font-medium mb-4" style={{ color: '#1A2B49' }}>Engage</CardTitle>
                <CardDescription className="text-base leading-relaxed" style={{ color: '#426A8C' }}>
                  AI-facilitated project charter with conversational intelligence and privacy protection
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-10 text-sm" style={{ color: '#426A8C' }}>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#D6F0E5' }}>
                      <CheckCircle className="h-3 w-3" style={{ color: '#C6A664' }} />
                    </div>
                    <span>Multi-agent conversation system</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#D6F0E5' }}>
                      <CheckCircle className="h-3 w-3" style={{ color: '#C6A664' }} />
                    </div>
                    <span>Privacy-preserving architecture</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#D6F0E5' }}>
                      <CheckCircle className="h-3 w-3" style={{ color: '#C6A664' }} />
                    </div>
                    <span>Real-time sentiment analysis</span>
                  </li>
                </ul>
                <Link to="/engage">
                  <Button className="w-full rounded-lg text-white font-medium py-3 transition-all hover:opacity-90" style={{ backgroundColor: '#C6A664' }}>
                    Start Charter
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Division1 Module */}
            <Card className="group hover:shadow-xl transition-all duration-300 bg-white border rounded-xl" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader className="p-8">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:opacity-80 transition-colors mb-6" style={{ backgroundColor: '#C2D3DF' }}>
                  <FileText className="h-8 w-8" style={{ color: '#1A2B49' }} />
                </div>
                <CardTitle className="text-2xl font-medium mb-4" style={{ color: '#1A2B49' }}>Division1</CardTitle>
                <CardDescription className="text-base leading-relaxed" style={{ color: '#426A8C' }}>
                  Generate complete CSI MasterFormat Division 01 specifications from project charter data with AI precision
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-10 text-sm" style={{ color: '#426A8C' }}>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#D6F0E5' }}>
                      <CheckCircle className="h-3 w-3" style={{ color: '#C6A664' }} />
                    </div>
                    <span>Automated charter-to-spec mapping</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#D6F0E5' }}>
                      <CheckCircle className="h-3 w-3" style={{ color: '#C6A664' }} />
                    </div>
                    <span>3-part CSI format Division 01 generation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#D6F0E5' }}>
                      <CheckCircle className="h-3 w-3" style={{ color: '#C6A664' }} />
                    </div>
                    <span>Side-by-side editing interface</span>
                  </li>
                </ul>
                <Link to="/division1">
                  <Button className="w-full rounded-lg text-white font-medium py-3 transition-all hover:opacity-90" style={{ backgroundColor: '#1A2B49' }}>
                    Generate Specs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Master1 Module */}
            <Card className="group hover:shadow-xl transition-all duration-300 bg-white border rounded-xl" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader className="p-8">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:opacity-80 transition-colors mb-6" style={{ backgroundColor: '#E6B7B3' }}>
                  <Master1Icon className="text-navy" />
                </div>
                <CardTitle className="text-2xl font-medium mb-4" style={{ color: '#1A2B49' }}>Master1</CardTitle>
                <CardDescription className="text-base leading-relaxed" style={{ color: '#426A8C' }}>
                  Intelligent specification synthesis with compliance validation and standards checking
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-10 text-sm" style={{ color: '#426A8C' }}>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#D6F0E5' }}>
                      <CheckCircle className="h-3 w-3" style={{ color: '#C6A664' }} />
                    </div>
                    <span>Multi-modal document processing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#D6F0E5' }}>
                      <CheckCircle className="h-3 w-3" style={{ color: '#C6A664' }} />
                    </div>
                    <span>Real-time standards validation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#D6F0E5' }}>
                      <CheckCircle className="h-3 w-3" style={{ color: '#C6A664' }} />
                    </div>
                    <span>Automated compliance checking</span>
                  </li>
                </ul>
                <Link to="/master1">
                  <Button className="w-full rounded-lg text-white font-medium py-3 transition-all hover:opacity-90" style={{ backgroundColor: '#426A8C' }}>
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
      <footer style={{ backgroundColor: '#1A2B49' }} className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Div1Logo size="sm" />
                <span className="text-xl font-medium" style={{ color: '#F7F3ED' }}>Platform</span>
              </div>
              <p className="leading-relaxed" style={{ color: '#F7F3ED' }}>
                AI-driven ecosystem for the Architecture, Engineering, and Construction industry.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium mb-6 text-lg" style={{ color: '#F7F3ED' }}>Solutions</h5>
              <ul className="space-y-3" style={{ color: '#F7F3ED' }}>
                <li><Link to="/engage" className="transition-colors hover:text-brass" style={{ color: '#F7F3ED' }}>Engage</Link></li>
                <li><Link to="/division1" className="transition-colors hover:text-brass" style={{ color: '#F7F3ED' }}>Division1</Link></li>
                <li><Link to="/master1" className="transition-colors hover:text-brass" style={{ color: '#F7F3ED' }}>Master1</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium mb-6 text-lg" style={{ color: '#F7F3ED' }}>Resources</h5>
              <ul className="space-y-3" style={{ color: '#F7F3ED' }}>
                <li><Link to="/documentation" className="transition-colors hover:text-brass" style={{ color: '#F7F3ED' }}>Documentation</Link></li>
                <li><Link to="/security" className="transition-colors hover:text-brass" style={{ color: '#F7F3ED' }}>Security</Link></li>
                <li><Link to="/support" className="transition-colors hover:text-brass" style={{ color: '#F7F3ED' }}>Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium mb-6 text-lg" style={{ color: '#F7F3ED' }}>Company</h5>
              <ul className="space-y-3" style={{ color: '#F7F3ED' }}>
                <li><Link to="/about" className="transition-colors hover:text-brass" style={{ color: '#F7F3ED' }}>About</Link></li>
                <li><Link to="/contact" className="transition-colors hover:text-brass" style={{ color: '#F7F3ED' }}>Contact</Link></li>
                <li><Link to="/privacy" className="transition-colors hover:text-brass" style={{ color: '#F7F3ED' }}>Privacy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-opacity-20 border-white mt-12 pt-8 text-center" style={{ color: '#F7F3ED' }}>
            © 2024 Div1 Platform Suite. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
