
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, ArrowLeft, Users, Brain, Shield, Zap, Send, Bot, CheckCircle, Activity, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Engage = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Welcome! I'm here to help facilitate your project charter process. Let's start by understanding your project goals. What type of construction project are you planning?",
      timestamp: "2 min ago"
    },
    {
      type: "user", 
      content: "We're planning a new commercial office building in downtown Seattle.",
      timestamp: "1 min ago"
    },
    {
      type: "bot",
      content: "Excellent! A commercial office building is a significant undertaking. To help create a comprehensive project charter, I'd like to understand more about your stakeholders and requirements. Who are the key decision makers on this project?",
      timestamp: "30 sec ago"
    }
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, {
        type: "user",
        content: message,
        timestamp: "now"
      }]);
      setMessage("");
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: "bot",
          content: "Thank you for that information. I'm analyzing the stakeholder dynamics and project scope. Can you tell me about the expected timeline and budget constraints for this project?",
          timestamp: "now"
        }]);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-green-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="rounded-full text-gray-300 hover:text-white">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center space-x-4">
                <img 
                  src="/lovable-uploads/0014a989-3a3c-4d12-94b3-4e2301cc77b1.png" 
                  alt="Div1 Logo" 
                  className="h-8 w-auto"
                />
                <div>
                  <h1 className="text-xl font-bold text-white">Engage</h1>
                  <Badge variant="secondary" className="text-xs bg-green-600/20 text-green-300 border-green-500/30">AI Project Charter</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

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
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Multi-agent conversational AI system with privacy-preserving architecture for seamless stakeholder interviews and requirements gathering.
          </p>
        </div>

        {/* AI Conversation Interface */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          <div className="lg:col-span-3">
            <Card className="shadow-2xl border-0 overflow-hidden bg-gray-800/50 border border-gray-700">
              <CardHeader className="bg-gradient-to-r from-green-600/10 to-blue-600/10">
                <CardTitle className="flex items-center text-2xl text-white">
                  <Bot className="h-6 w-6 mr-3 text-green-400" />
                  AI Project Charter Assistant
                </CardTitle>
                <CardDescription className="text-lg text-gray-300">
                  Conversational intelligence for stakeholder interviews and project synthesis
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-96 overflow-y-auto p-6 space-y-6 bg-gray-900/30">
                  {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start space-x-4 ${msg.type === 'user' ? 'justify-end' : ''}`}>
                      {msg.type === 'bot' && (
                        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full p-2 flex-shrink-0">
                          <Bot className="h-5 w-5 text-white" />
                        </div>
                      )}
                      <div className={`rounded-2xl p-4 shadow-sm max-w-md ${
                        msg.type === 'bot' 
                          ? 'bg-gray-800 border border-gray-600' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600'
                      }`}>
                        <p className="text-white text-sm">{msg.content}</p>
                        <span className="text-xs text-gray-400 mt-2 block">{msg.timestamp}</span>
                      </div>
                      {msg.type === 'user' && (
                        <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
                          <Users className="h-5 w-5 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="p-6 bg-gray-800/50 border-t border-gray-700">
                  <div className="flex space-x-3">
                    <Textarea 
                      placeholder="Type your response..." 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-1 resize-none border-2 rounded-2xl focus:border-green-500 transition-colors bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400"
                      rows={2}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          sendMessage();
                        }
                      }}
                    />
                    <Button size="lg" className="rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-6" onClick={sendMessage}>
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-xl border-0 bg-gray-800/50 border border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg flex items-center text-white">
                  <Shield className="h-5 w-5 mr-2 text-green-400" />
                  Privacy Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">Differential Privacy: ε=1.0</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">Zero-Knowledge Architecture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">Homomorphic Encryption</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">Federated Learning</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-gray-800/50 border border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg flex items-center text-white">
                  <Brain className="h-5 w-5 mr-2 text-blue-400" />
                  Real-Time Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Engagement Score:</span>
                    <Badge variant="default" className="bg-green-600">94%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Sentiment:</span>
                    <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-500/30">Positive</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Completion:</span>
                    <Badge variant="outline" className="border-blue-500 text-blue-400">25%</Badge>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Topics Identified:</span>
                    <Badge variant="outline" className="border-purple-500 text-purple-400">12</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-gray-800/50 border border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg flex items-center text-white">
                  <Activity className="h-5 w-5 mr-2 text-purple-400" />
                  Agent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Interviewer Agent:</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400">Active</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Synthesis Agent:</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-blue-400">Processing</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Validation Agent:</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-xs text-yellow-400">Standby</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Moderation Agent:</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400">Monitoring</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Architecture Features */}
        <div className="grid lg:grid-cols-3 gap-8">
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
