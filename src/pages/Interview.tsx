
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Shield, Zap, CheckCircle } from "lucide-react";
import Div1Logo from "@/components/Div1Logo";
import { ConversationalInterface } from "@/components/ConversationalInterface";

const Interview = () => {
  const { interviewId } = useParams();
  
  // In a real implementation, you would fetch project details based on interviewId
  // For now, we'll use placeholder data
  const projectName = "New Project 1"; // This would come from the interview link data

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D9D6D0' }}>
      {/* Simplified Header */}
      <header className="border-b-2" style={{ backgroundColor: '#0F1B2E', borderBottomColor: '#162239' }}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Div1Logo size="xl" className="drop-shadow-lg" />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/about" style={{ color: '#F7F3ED' }} className="hover:text-white transition-colors font-medium">
                About
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-8 leading-tight" style={{ color: '#1A2B49' }}>
            Stakeholder Interview for
            <span className="font-light" style={{ color: '#E98B2A' }}> {projectName}</span>
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-sm border p-12 mb-12" style={{ borderColor: '#F7F3ED' }}>
              <h3 className="text-2xl font-medium mb-6" style={{ color: '#E98B2A' }}>Share your perspective on this project</h3>
              <p className="text-xl leading-relaxed" style={{ color: '#1A2B49' }}>
                Your input is valuable in creating a comprehensive project charter. Please share your insights, requirements, and concerns about this project.
              </p>
            </div>
          </div>
        </div>

        {/* AI Conversation Interface */}
        <Card className="bg-white border shadow-sm mb-16" style={{ borderColor: '#D9D6D0' }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3" style={{ color: '#1A2B49' }}>
              <span>AI Project Charter Assistant - {projectName}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center py-8">
              <p className="mb-6" style={{ color: '#1A2B49' }}>
                Welcome! I'm here to collect your insights about {projectName}. Your responses will help create a comprehensive project charter.
              </p>
              <div className="rounded-lg p-4 h-96 overflow-y-auto mb-4 space-y-4" style={{ backgroundColor: '#1A2B49' }}>
                <div className="text-center py-8" style={{ color: '#F7F3ED' }}>
                  <p>Hello! I'm your AI interview assistant for {projectName}.</p>
                  <p className="text-sm mt-2">Let's start with your role in this project and your initial thoughts about it.</p>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <input
                  placeholder="Tell me about your role and perspective on this project..."
                  className="flex-1 border text-white placeholder-opacity-70 px-4 py-2 rounded"
                  style={{ backgroundColor: '#1A2B49', borderColor: '#D9D6D0', color: '#F7F3ED' }}
                />
                <button 
                  className="text-white font-medium transition-all hover:opacity-90 px-6 py-2 rounded"
                  style={{ backgroundColor: '#E98B2A' }}
                >
                  Send
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Architecture Features - Same as Engage page */}
        <div className="grid lg:grid-cols-3 gap-8">
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

export default Interview;
