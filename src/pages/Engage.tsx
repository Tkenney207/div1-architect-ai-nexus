
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ArrowLeft, Users, Shield, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Engage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-6 w-6 text-green-600" />
                <h1 className="text-xl font-bold">Engage</h1>
                <Badge variant="secondary">AI-Facilitated Project Charter</Badge>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Project Charter Platform
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Multi-agent conversational AI system with privacy-preserving architecture 
            for stakeholder interviews and project requirements gathering.
          </p>
        </div>

        {/* AI Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <Brain className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Multi-Agent Conversation System</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Intelligent orchestration of interviewer, synthesizer, validator, and moderator agents.
              </p>
              <ul className="text-sm space-y-2 text-gray-500">
                <li>• Adaptive questioning strategies</li>
                <li>• Real-time engagement analysis</li>
                <li>• Context-aware conversation flow</li>
                <li>• Sentiment and coherence scoring</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Privacy-Preserving Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Zero-knowledge data processing with differential privacy guarantees.
              </p>
              <ul className="text-sm space-y-2 text-gray-500">
                <li>• Homomorphic encryption</li>
                <li>• Secure multi-party computation</li>
                <li>• Federated learning capabilities</li>
                <li>• GDPR/CCPA compliance</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Conversation Interface */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              AI Interview Assistant
            </CardTitle>
            <CardDescription>
              Start a new project charter conversation with stakeholders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 rounded-full p-2">
                  <MessageSquare className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 mb-2">
                    Welcome! I'm here to help you create a comprehensive project charter. 
                    Let's start by understanding your project's key objectives.
                  </p>
                  <p className="text-sm text-gray-600">
                    What type of construction project are you planning?
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button className="flex-1">
                <Users className="h-4 w-4 mr-2" />
                Start Stakeholder Interview
              </Button>
              <Button variant="outline">
                Load Previous Session
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Process Overview */}
        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              step: "1",
              title: "Stakeholder Discovery",
              description: "AI-guided interviews to identify all project stakeholders and their requirements.",
              icon: Users
            },
            {
              step: "2", 
              title: "Requirements Synthesis",
              description: "Intelligent aggregation and conflict resolution of stakeholder inputs.",
              icon: Brain
            },
            {
              step: "3",
              title: "Charter Generation", 
              description: "Automated creation of comprehensive project charter documents.",
              icon: MessageSquare
            },
            {
              step: "4",
              title: "Validation & Approval",
              description: "Stakeholder review and approval workflow with change tracking.",
              icon: Zap
            }
          ].map((process, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <process.icon className="h-6 w-6 text-green-600" />
                </div>
                <Badge variant="outline" className="mx-auto w-fit mb-2">Step {process.step}</Badge>
                <CardTitle className="text-lg">{process.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{process.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Sessions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Project Charters</CardTitle>
            <CardDescription>Continue working on existing project charters</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Downtown Office Complex",
                  stakeholders: 8,
                  progress: 85,
                  status: "Review Phase"
                },
                {
                  name: "Residential Tower Project",
                  stakeholders: 12,
                  progress: 60,
                  status: "Requirements Gathering"
                },
                {
                  name: "Industrial Warehouse Facility",
                  stakeholders: 6,
                  progress: 95,
                  status: "Final Approval"
                }
              ].map((project, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold">{project.name}</h4>
                    <p className="text-sm text-gray-600">{project.stakeholders} stakeholders • {project.status}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">{project.progress}%</p>
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-green-600 rounded-full" 
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Continue</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Engage;
