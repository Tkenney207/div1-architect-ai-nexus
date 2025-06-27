import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Brain, Shield, Zap, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import { ConversationalInterface } from "@/components/ConversationalInterface";

const Engage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D9D6D0' }}>
      <Header />

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          {/* CharterAI Logo */}
          <div className="mb-8">
            <img
              src="/lovable-uploads/edc62dac-b8ed-4efa-a2b3-49c2b6688e77.png"
              alt="CharterAI Logo"
              className="mx-auto h-32 w-auto"
            />
          </div>
          
          <h2 className="text-6xl font-light mb-8 leading-tight" style={{ color: '#1A2B49' }}>
            Create Project Charters with AI guidance
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-sm border p-12 mb-12" style={{ borderColor: '#F7F3ED' }}>
              <h3 className="text-2xl font-medium mb-6" style={{ color: '#E98B2A' }}>Capture intent. Structure requirements.</h3>
              <p className="text-xl leading-relaxed" style={{ color: '#1A2B49' }}>
                AI-powered Project Charter generation - extract stakeholder goals and technical needs through Agentic guided & structured interviews.
              </p>
            </div>
          </div>
        </div>

        {/* AI Conversation Interface */}
        <ConversationalInterface />

        {/* Architecture Features */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          <Card className="group bg-white border shadow-sm hover:shadow-md transition-all duration-300" style={{ borderColor: '#F7F3ED' }}>
            <CardHeader className="p-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:opacity-80 transition-colors" style={{ backgroundColor: '#7C9C95' }}>
                <Brain className="h-7 w-7" style={{ color: '#F7F3ED' }} />
              </div>
              <CardTitle className="text-xl font-medium" style={{ color: '#1A2B49' }}>Multi-Agent System</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="mb-6 leading-relaxed" style={{ color: '#1A2B49' }}>
                Specialized AI agents for interviewing, synthesis, validation, and moderation.
              </p>
              <ul className="space-y-3 text-sm" style={{ color: '#1A2B49' }}>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Interviewer Agent: Dynamic questioning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Synthesis Agent: Content aggregation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Validation Agent: Consistency checking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Moderation Agent: Conversation flow</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group bg-white border shadow-sm hover:shadow-md transition-all duration-300" style={{ borderColor: '#F7F3ED' }}>
            <CardHeader className="p-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:opacity-80 transition-colors" style={{ backgroundColor: '#F7F3ED' }}>
                <Shield className="h-7 w-7" style={{ color: '#1A2B49' }} />
              </div>
              <CardTitle className="text-xl font-medium" style={{ color: '#1A2B49' }}>Privacy-Preserving</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="mb-6 leading-relaxed" style={{ color: '#1A2B49' }}>
                Advanced privacy techniques ensuring stakeholder data protection.
              </p>
              <ul className="space-y-3 text-sm" style={{ color: '#1A2B49' }}>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Differential privacy implementation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Secure multi-party computation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Federated learning architecture</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Zero-knowledge proofs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group bg-white border shadow-sm hover:shadow-md transition-all duration-300" style={{ borderColor: '#F7F3ED' }}>
            <CardHeader className="p-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:opacity-80 transition-colors" style={{ backgroundColor: '#E98B2A' }}>
                <Zap className="h-7 w-7" style={{ color: '#F7F3ED' }} />
              </div>
              <CardTitle className="text-xl font-medium" style={{ color: '#1A2B49' }}>Real-Time Intelligence</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="mb-6 leading-relaxed" style={{ color: '#1A2B49' }}>
                Live sentiment analysis and engagement monitoring during conversations.
              </p>
              <ul className="space-y-3 text-sm" style={{ color: '#1A2B49' }}>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Intent classification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Entity extraction</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Sentiment analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Topic modeling</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Engage;
