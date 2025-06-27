
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Div1Logo from "@/components/Div1Logo";
import Header from "@/components/Header";
import { EngageIcon } from "@/components/ModuleIcons";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D9D6D0' }}>
      <Header />

      {/* Hero Section with Gradient Banner */}
      <section className="relative overflow-hidden">
        {/* Heritage Navy to Verdigris Gradient Banner Background */}
        <div 
          className="py-16 border-t-4 border-solid" 
          style={{ 
            background: 'linear-gradient(135deg, #1A2B49 0%, #7C9C95 100%)', 
            borderTopColor: '#7C9C95' 
          }}
        >
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Large Hero Logo on Gradient Background */}
              <div className="mb-10">
                <Div1Logo size="5xl" className="mx-auto hover:scale-105 transition-transform duration-500 drop-shadow-2xl" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-light mb-5 leading-tight" style={{ color: '#F7F3ED' }}>
                <span style={{ color: '#E98B2A' }} className="font-medium">AI-Powered Project Charters</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-10" style={{ color: '#F7F3ED' }}>
                Transform stakeholder conversations into structured AEC project foundations.
              </h2>
            </div>
          </div>
        </div>

        {/* Tumbled Marble Content Section */}
        <div style={{ backgroundColor: '#D9D6D0' }} className="py-10">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              {/* Hero Content Box */}
              <div className="mb-10">
                <p className="text-lg leading-relaxed" style={{ color: '#1A2B49' }}>
                  Create comprehensive Project Charters that align diverse AEC professionals under a unified vision. Our AI guides stakeholder interviews to capture objectives, scope, responsibilities, and success criteria for complex multidisciplinary projects.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to="/engage">
                  <Button size="lg" style={{ backgroundColor: '#E98B2A', color: '#F7F3ED' }} className="text-lg px-10 py-4 rounded-lg hover:opacity-90 font-medium transition-all">
                    Start Your Project Charter
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" style={{ borderColor: '#1A2B49', color: '#1A2B49', backgroundColor: 'transparent' }} className="text-lg px-10 py-4 rounded-lg border-2 hover:bg-white hover:bg-opacity-50 transition-all font-medium">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section - Focus on Charter */}
      <section className="py-16" style={{ backgroundColor: '#D9D6D0' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ color: '#1A2B49' }}>Structured Project Foundation</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#1A2B49' }}>Capture project objectives, stakeholder roles, scope boundaries, and success criteria through AI-guided conversations</p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Charter Module - Featured */}
            <Card className="group hover:shadow-xl transition-all duration-300 bg-white border rounded-xl" style={{ borderColor: '#D9D6D0' }}>
              <CardHeader className="p-8">
                <div className="w-20 h-20 rounded-xl flex items-center justify-center group-hover:opacity-80 transition-colors mb-6 mx-auto" style={{ backgroundColor: '#F7F3ED' }}>
                  <EngageIcon size="lg" className="text-orange" />
                </div>
                <CardTitle className="text-3xl font-medium mb-4 text-center">
                  <span style={{ color: '#1A2B49' }}>Charter</span>
                  <span style={{ color: '#E98B2A' }}>AI</span>
                </CardTitle>
                <CardDescription className="text-lg leading-relaxed text-center" style={{ color: '#1A2B49' }}>
                  AI-facilitated Project Charter creation with guided stakeholder interviews and intelligent documentation
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-10 text-base" style={{ color: '#1A2B49' }}>
                  <li className="flex items-center space-x-4">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                      <CheckCircle className="h-4 w-4" style={{ color: '#F7F3ED' }} />
                    </div>
                    <span>Structured stakeholder interviews</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                      <CheckCircle className="h-4 w-4" style={{ color: '#F7F3ED' }} />
                    </div>
                    <span>Automated scope and objective capture</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                      <CheckCircle className="h-4 w-4" style={{ color: '#F7F3ED' }} />
                    </div>
                    <span>Role and responsibility mapping</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                      <CheckCircle className="h-4 w-4" style={{ color: '#F7F3ED' }} />
                    </div>
                    <span>Risk identification and documentation</span>
                  </li>
                </ul>
                <Link to="/engage">
                  <Button className="w-full rounded-lg text-white font-medium py-4 text-lg transition-all hover:opacity-90" style={{ backgroundColor: '#E98B2A' }}>
                    Create Project Charter
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Project Charter Benefits */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#E98B2A' }}>
                <CheckCircle className="h-6 w-6" style={{ color: '#F7F3ED' }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1A2B49' }}>Stakeholder Alignment</h3>
              <p className="text-sm" style={{ color: '#1A2B49' }}>Ensure all parties share a unified understanding from project initiation</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#1A2B49' }}>
                <CheckCircle className="h-6 w-6" style={{ color: '#F7F3ED' }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1A2B49' }}>Clear Scope Definition</h3>
              <p className="text-sm" style={{ color: '#1A2B49' }}>Define project boundaries, deliverables, and success criteria</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#7C9C95' }}>
                <CheckCircle className="h-6 w-6" style={{ color: '#F7F3ED' }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1A2B49' }}>Risk Mitigation</h3>
              <p className="text-sm" style={{ color: '#1A2B49' }}>Identify potential challenges and assumptions early in the process</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
