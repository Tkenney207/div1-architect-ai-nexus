
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, ArrowLeft, Users, Brain, Shield, Zap, Send, Bot, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Engage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="rounded-full">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/6eb78a22-dce5-46e7-8899-e05debdec84e.png" 
                  alt="Div1 Logo" 
                  className="h-8 w-auto"
                />
                <div>
                  <h1 className="text-xl font-bold">Engage</h1>
                  <Badge variant="secondary" className="text-xs rounded-full">AI Project Charter</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 rounded-full">
            🤖 Conversational Intelligence
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Create project charters with 
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> AI guidance </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Multi-agent conversational AI system with privacy-preserving architecture for seamless stakeholder interviews and requirements gathering.
          </p>
        </div>

        {/* AI Conversation Interface */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          <div className="lg:col-span-3">
            <Card className="shadow-xl border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                <CardTitle className="flex items-center text-2xl">
                  <Bot className="h-6 w-6 mr-3 text-green-600" />
                  AI Project Charter Assistant
                </CardTitle>
                <CardDescription className="text-lg">
                  Conversational intelligence for stakeholder interviews and project synthesis
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-96 overflow-y-auto p-6 space-y-6 bg-gray-50">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full p-2 flex-shrink-0">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-sm max-w-md">
                      <p className="text-gray-800">Welcome! I'm here to help facilitate your project charter process. Let's start by understanding your project goals. What type of construction project are you planning?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 justify-end">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 shadow-sm max-w-md">
                      <p className="text-white">We're planning a new commercial office building in downtown Seattle.</p>
                    </div>
                    <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full p-2 flex-shrink-0">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-sm max-w-md">
                      <p className="text-gray-800">Excellent! A commercial office building is a significant undertaking. To help create a comprehensive project charter, I'd like to understand more about your stakeholders and requirements. Who are the key decision makers on this project?</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-white border-t">
                  <div className="flex space-x-3">
                    <Textarea 
                      placeholder="Type your response..." 
                      className="flex-1 resize-none border-2 rounded-2xl focus:border-green-500 transition-colors"
                      rows={2}
                    />
                    <Button size="lg" className="rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 px-6">
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-600" />
                  Privacy Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Differential Privacy: ε=1.0</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Zero-Knowledge Architecture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Homomorphic Encryption</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-blue-600" />
                  Real-Time Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Engagement Score:</span>
                    <Badge variant="default" className="rounded-full">94%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sentiment:</span>
                    <Badge variant="secondary" className="rounded-full bg-green-100 text-green-700">Positive</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Completion:</span>
                    <Badge variant="outline" className="rounded-full">25%</Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Architecture Features */}
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardHeader>
              <div className="bg-green-100 rounded-2xl p-3 w-fit mb-4 group-hover:bg-green-200 transition-colors">
                <Brain className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">Multi-Agent System</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Specialized AI agents for interviewing, synthesis, validation, and moderation.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Interviewer Agent: Dynamic questioning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Synthesis Agent: Content aggregation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Validation Agent: Consistency checking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Moderation Agent: Conversation flow</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardHeader>
              <div className="bg-blue-100 rounded-2xl p-3 w-fit mb-4 group-hover:bg-blue-200 transition-colors">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Privacy-Preserving</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Advanced privacy techniques ensuring stakeholder data protection.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Differential privacy implementation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Secure multi-party computation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Federated learning architecture</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Zero-knowledge proofs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardHeader>
              <div className="bg-purple-100 rounded-2xl p-3 w-fit mb-4 group-hover:bg-purple-200 transition-colors">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Real-Time Intelligence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Live sentiment analysis and engagement monitoring during conversations.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Intent classification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Entity extraction</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Sentiment analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
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
