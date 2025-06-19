
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Brain, Shield, Zap, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import { ConversationalInterface } from "@/components/ConversationalInterface";

const Engage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F798ED' }}>
      <Header />

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-light mb-8 leading-tight" style={{ color: '#122B49' }}>
            Create project charters with 
            <span className="font-medium" style={{ color: '#C205DF' }}> AI guidance </span>
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-sm border p-12 mb-12" style={{ borderColor: '#D30609' }}>
              <h3 className="text-2xl font-medium mb-6" style={{ color: '#C205DF' }}>Capture intent. Structure requirements.</h3>
              <p className="text-xl leading-relaxed" style={{ color: '#290BC' }}>
                AI-powered project charter generation - extract stakeholder goals and technical needs through Agentic guided & structured interviews.
              </p>
            </div>
          </div>
        </div>

        {/* AI Conversation Interface */}
        <ConversationalInterface />

        {/* Architecture Features */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          <Card className="group bg-white border shadow-sm hover:shadow-md transition-all duration-300" style={{ borderColor: '#D30609' }}>
            <CardHeader className="p-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:opacity-80 transition-colors" style={{ backgroundColor: '#F798ED' }}>
                <Brain className="h-7 w-7" style={{ color: '#C205DF' }} />
              </div>
              <CardTitle className="text-xl font-medium" style={{ color: '#122B49' }}>Multi-Agent System</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="mb-6 leading-relaxed" style={{ color: '#290BC' }}>
                Specialized AI agents for interviewing, synthesis, validation, and moderation.
              </p>
              <ul className="space-y-3 text-sm" style={{ color: '#290BC' }}>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F798ED' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#C205DF' }} />
                  </div>
                  <span>Interviewer Agent: Dynamic questioning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F798ED' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#C205DF' }} />
                  </div>
                  <span>Synthesis Agent: Content aggregation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F798ED' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#C205DF' }} />
                  </div>
                  <span>Validation Agent: Consistency checking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F798ED' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#C205DF' }} />
                  </div>
                  <span>Moderation Agent: Conversation flow</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group bg-white border shadow-sm hover:shadow-md transition-all duration-300" style={{ borderColor: '#D30609' }}>
            <CardHeader className="p-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:opacity-80 transition-colors" style={{ backgroundColor: '#E03795' }}>
                <Shield className="h-7 w-7" style={{ color: '#290BC' }} />
              </div>
              <CardTitle className="text-xl font-medium" style={{ color: '#122B49' }}>Privacy-Preserving</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="mb-6 leading-relaxed" style={{ color: '#290BC' }}>
                Advanced privacy techniques ensuring stakeholder data protection.
              </p>
              <ul className="space-y-3 text-sm" style={{ color: '#290BC' }}>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F798ED' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#C205DF' }} />
                  </div>
                  <span>Differential privacy implementation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F798ED' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#C205DF' }} />
                  </div>
                  <span>Secure multi-party computation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F798ED' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#C205DF' }} />
                  </div>
                  <span>Federated learning architecture</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F798ED' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#C205DF' }} />
                  </div>
                  <span>Zero-knowledge proofs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group bg-white border shadow-sm hover:shadow-md transition-all duration-300" style={{ borderColor: '#D30609' }}>
            <CardHeader className="p-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:opacity-80 transition-colors" style={{ backgroundColor: '#F20547' }}>
                <Zap className="h-7 w-7" style={{ color: '#290BC' }} />
              </div>
              <CardTitle className="text-xl font-medium" style={{ color: '#122B49' }}>Real-Time Intelligence</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="mb-6 leading-relaxed" style={{ color: '#290BC' }}>
                Live sentiment analysis and engagement monitoring during conversations.
              </p>
              <ul className="space-y-3 text-sm" style={{ color: '#290BC' }}>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F798ED' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#C205DF' }} />
                  </div>
                  <span>Intent classification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F798ED' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#C205DF' }} />
                  </div>
                  <span>Entity extraction</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F798ED' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#C205DF' }} />
                  </div>
                  <span>Sentiment analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F798ED' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#C205DF' }} />
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
