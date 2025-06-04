
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Brain, Shield, Zap, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import { ConversationalInterface } from "@/components/ConversationalInterface";

const Engage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-green-900 text-white">
      <Header />

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-6 py-3 rounded-full border-green-500/30 bg-green-600/10 text-green-300">
            🤖 Conversational Intelligence
          </Badge>
          <h2 className="text-6xl font-bold text-white mb-8">
            Create project charters with 
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> AI guidance </span>
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-semibold text-green-300 mb-6">Capture intent. Structure requirements.</h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              AI-powered project charter workspace that extracts stakeholder goals and technical needs through structured interviews.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                <p className="text-gray-200 text-sm">Auto-generates project briefs from conversations</p>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                <p className="text-gray-200 text-sm">Links goals to product categories and performance standards</p>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                <p className="text-gray-200 text-sm">Provides clean input for specification generation</p>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                <p className="text-gray-200 text-sm">Fully private, encrypted, and compliant</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Conversation Interface */}
        <ConversationalInterface />

        {/* Architecture Features */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-gray-800/50 border border-gray-700 hover:border-green-500/50">
            <CardHeader>
              <div className="bg-green-600/20 rounded-2xl p-3 w-fit mb-4 group-hover:bg-green-500/30 transition-colors">
                <Brain className="h-8 w-8 text-green-400" />
              </div>
              <CardTitle className="text-xl text-white">Multi-Agent System</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Specialized AI agents for interviewing, synthesis, validation, and moderation.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Interviewer Agent: Dynamic questioning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Synthesis Agent: Content aggregation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Validation Agent: Consistency checking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Moderation Agent: Conversation flow</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50">
            <CardHeader>
              <div className="bg-blue-600/20 rounded-2xl p-3 w-fit mb-4 group-hover:bg-blue-500/30 transition-colors">
                <Shield className="h-8 w-8 text-blue-400" />
              </div>
              <CardTitle className="text-xl text-white">Privacy-Preserving</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Advanced privacy techniques ensuring stakeholder data protection.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Differential privacy implementation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Secure multi-party computation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Federated learning architecture</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Zero-knowledge proofs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50">
            <CardHeader>
              <div className="bg-purple-600/20 rounded-2xl p-3 w-fit mb-4 group-hover:bg-purple-500/30 transition-colors">
                <Zap className="h-8 w-8 text-purple-400" />
              </div>
              <CardTitle className="text-xl text-white">Real-Time Intelligence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Live sentiment analysis and engagement monitoring during conversations.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Intent classification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Entity extraction</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Sentiment analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
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
