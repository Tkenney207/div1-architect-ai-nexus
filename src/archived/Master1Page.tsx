
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, FileText, Zap, Shield, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
// Import from archived ModuleIcons instead of main ModuleIcons
import { Master1Logo } from "./ModuleIcons-archived";

const Master1 = () => {
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
                <Master1Logo size="lg" className="mx-auto hover:scale-105 transition-transform duration-500 drop-shadow-2xl" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-light mb-5 leading-tight" style={{ color: '#F7F3ED' }}>
                <span style={{ color: '#E98B2A' }} className="font-medium">Intelligent Specification Synthesis</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-light mb-10" style={{ color: '#F7F3ED' }}>
                AI-powered specification analysis and compliance verification
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
                  Transform your specification documents into intelligent, compliant, and actionable project deliverables with our advanced AI synthesis engine.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button size="lg" style={{ backgroundColor: '#E98B2A', color: '#F7F3ED' }} className="text-lg px-10 py-4 rounded-lg hover:opacity-90 font-medium transition-all">
                  Start Synthesis
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" style={{ borderColor: '#1A2B49', color: '#1A2B49', backgroundColor: 'transparent' }} className="text-lg px-10 py-4 rounded-lg border-2 hover:bg-white hover:bg-opacity-50 transition-all font-medium">
                  View Examples
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16" style={{ backgroundColor: '#D9D6D0' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ color: '#1A2B49' }}>Specification Intelligence</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#1A2B49' }}>Advanced AI capabilities for comprehensive specification analysis and synthesis</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 bg-white border rounded-xl" style={{ borderColor: '#D9D6D0' }}>
              <CardHeader className="p-8">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:opacity-80 transition-colors mb-6" style={{ backgroundColor: '#F7F3ED' }}>
                  <FileText className="h-8 w-8" style={{ color: '#E98B2A' }} />
                </div>
                <CardTitle className="text-2xl font-medium mb-4" style={{ color: '#1A2B49' }}>Document Analysis</CardTitle>
                <CardDescription className="text-base leading-relaxed" style={{ color: '#1A2B49' }}>
                  Advanced parsing and understanding of specification documents, drawings, and project requirements
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 bg-white border rounded-xl" style={{ borderColor: '#D9D6D0' }}>
              <CardHeader className="p-8">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:opacity-80 transition-colors mb-6" style={{ backgroundColor: '#F7F3ED' }}>
                  <Shield className="h-8 w-8" style={{ color: '#1A2B49' }} />
                </div>
                <CardTitle className="text-2xl font-medium mb-4" style={{ color: '#1A2B49' }}>Compliance Verification</CardTitle>
                <CardDescription className="text-base leading-relaxed" style={{ color: '#1A2B49' }}>
                  Automated checking against building codes, industry standards, and regulatory requirements
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 bg-white border rounded-xl" style={{ borderColor: '#D9D6D0' }}>
              <CardHeader className="p-8">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:opacity-80 transition-colors mb-6" style={{ backgroundColor: '#F7F3ED' }}>
                  <Zap className="h-8 w-8" style={{ color: '#7C9C95' }} />
                </div>
                <CardTitle className="text-2xl font-medium mb-4" style={{ color: '#1A2B49' }}>Intelligent Synthesis</CardTitle>
                <CardDescription className="text-base leading-relaxed" style={{ color: '#1A2B49' }}>
                  AI-powered generation of comprehensive specifications from project requirements and constraints
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 4 */}
            <Card className="group hover:shadow-xl transition-all duration-300 bg-white border rounded-xl" style={{ borderColor: '#D9D6D0' }}>
              <CardHeader className="p-8">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:opacity-80 transition-colors mb-6" style={{ backgroundColor: '#F7F3ED' }}>
                  <Target className="h-8 w-8" style={{ color: '#E98B2A' }} />
                </div>
                <CardTitle className="text-2xl font-medium mb-4" style={{ color: '#1A2B49' }}>Quality Assurance</CardTitle>
                <CardDescription className="text-base leading-relaxed" style={{ color: '#1A2B49' }}>
                  Continuous monitoring and validation of specification quality and completeness
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 5 */}
            <Card className="group hover:shadow-xl transition-all duration-300 bg-white border rounded-xl" style={{ borderColor: '#D9D6D0' }}>
              <CardHeader className="p-8">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:opacity-80 transition-colors mb-6" style={{ backgroundColor: '#F7F3ED' }}>
                  <CheckCircle className="h-8 w-8" style={{ color: '#7C9C95' }} />
                </div>
                <CardTitle className="text-2xl font-medium mb-4" style={{ color: '#1A2B49' }}>Version Control</CardTitle>
                <CardDescription className="text-base leading-relaxed" style={{ color: '#1A2B49' }}>
                  Track changes, manage revisions, and maintain specification history throughout the project lifecycle
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 6 */}
            <Card className="group hover:shadow-xl transition-all duration-300 bg-white border rounded-xl" style={{ borderColor: '#D9D6D0' }}>
              <CardHeader className="p-8">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:opacity-80 transition-colors mb-6" style={{ backgroundColor: '#F7F3ED' }}>
                  <ArrowRight className="h-8 w-8" style={{ color: '#1A2B49' }} />
                </div>
                <CardTitle className="text-2xl font-medium mb-4" style={{ color: '#1A2B49' }}>Export & Integration</CardTitle>
                <CardDescription className="text-base leading-relaxed" style={{ color: '#1A2B49' }}>
                  Seamless export to industry-standard formats and integration with existing project management tools
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16" style={{ backgroundColor: '#F7F3ED' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ color: '#1A2B49' }}>How Master1 Works</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#1A2B49' }}>Four simple steps to intelligent specification synthesis</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center font-bold text-2xl" style={{ backgroundColor: '#E98B2A', color: '#F7F3ED' }}>
                1
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#1A2B49' }}>Upload Documents</h3>
              <p className="text-base" style={{ color: '#1A2B49' }}>Upload your project specifications, drawings, and requirements</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center font-bold text-2xl" style={{ backgroundColor: '#1A2B49', color: '#F7F3ED' }}>
                2
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#1A2B49' }}>AI Analysis</h3>
              <p className="text-base" style={{ color: '#1A2B49' }}>Our AI analyzes and understands your project requirements</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center font-bold text-2xl" style={{ backgroundColor: '#7C9C95', color: '#F7F3ED' }}>
                3
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#1A2B49' }}>Synthesis</h3>
              <p className="text-base" style={{ color: '#1A2B49' }}>Generate comprehensive, compliant specifications automatically</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center font-bold text-2xl" style={{ backgroundColor: '#E98B2A', color: '#F7F3ED' }}>
                4
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#1A2B49' }}>Review & Export</h3>
              <p className="text-base" style={{ color: '#1A2B49' }}>Review, refine, and export your specifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#1A2B49' }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ color: '#F7F3ED' }}>
            Ready to Transform Your Specifications?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: '#F7F3ED' }}>
            Join thousands of AEC professionals who are already using Master1 to create better specifications faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/signup">
              <Button size="lg" style={{ backgroundColor: '#E98B2A', color: '#F7F3ED' }} className="text-lg px-10 py-4 rounded-lg hover:opacity-90 font-medium transition-all">
                Start Free Trial
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" style={{ borderColor: '#F7F3ED', color: '#F7F3ED', backgroundColor: 'transparent' }} className="text-lg px-10 py-4 rounded-lg border-2 hover:bg-white hover:bg-opacity-10 transition-all font-medium">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Master1;
