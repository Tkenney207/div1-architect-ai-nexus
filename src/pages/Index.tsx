
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, MessageSquare, FileText, Users, Building, Cog } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Div1 Platform Suite</h1>
              <Badge variant="secondary" className="ml-2">v2.0</Badge>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/manufacturer-base" className="text-gray-600 hover:text-blue-600 transition-colors">
                Manufacturer-Base
              </Link>
              <Link to="/engage" className="text-gray-600 hover:text-blue-600 transition-colors">
                Engage
              </Link>
              <Link to="/master1" className="text-gray-600 hover:text-blue-600 transition-colors">
                Master1
              </Link>
              <Button variant="outline" size="sm">
                <Users className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            AI-Driven AEC Intelligence Platform
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Comprehensive ecosystem for Architecture, Engineering, and Construction professionals. 
            Streamline product discovery, project planning, and specification management with advanced AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Platform Modules</h3>
          <p className="text-lg text-gray-600">Three interconnected modules designed for seamless AEC workflows</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Manufacturer-Base Module */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <Database className="h-8 w-8 text-blue-600" />
                <Badge variant="secondary">Module 1</Badge>
              </div>
              <CardTitle className="text-xl">Manufacturer-Base</CardTitle>
              <CardDescription className="text-base">
                AI-driven product intelligence platform with real-time data aggregation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6 text-sm text-gray-600">
                <li>• Microservices architecture with Kafka streams</li>
                <li>• Multi-modal data normalization</li>
                <li>• GraphQL federation with semantic search</li>
                <li>• Real-time quality assurance framework</li>
              </ul>
              <Link to="/manufacturer-base">
                <Button className="w-full">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Engage Module */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <MessageSquare className="h-8 w-8 text-green-600" />
                <Badge variant="secondary">Module 2</Badge>
              </div>
              <CardTitle className="text-xl">Engage</CardTitle>
              <CardDescription className="text-base">
                AI-facilitated project charter platform with conversational intelligence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6 text-sm text-gray-600">
                <li>• Multi-agent conversation system</li>
                <li>• Privacy-preserving architecture</li>
                <li>• Real-time sentiment analysis</li>
                <li>• Zero-knowledge stakeholder data</li>
              </ul>
              <Link to="/engage">
                <Button className="w-full" variant="secondary">
                  Start Project Charter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Master1 Module */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <FileText className="h-8 w-8 text-purple-600" />
                <Badge variant="secondary">Module 3</Badge>
              </div>
              <CardTitle className="text-xl">Master1</CardTitle>
              <CardDescription className="text-base">
                Intelligent specification synthesis with compliance validation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6 text-sm text-gray-600">
                <li>• Multi-modal document processing</li>
                <li>• Real-time standards validation</li>
                <li>• Semantic deduplication engine</li>
                <li>• Automated compliance checking</li>
              </ul>
              <Link to="/master1">
                <Button className="w-full" variant="outline">
                  Process Specifications
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Features */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Architecture</h3>
            <p className="text-lg text-gray-600">Built with modern software engineering practices</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Cog className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Kubernetes Native</h4>
              <p className="text-sm text-gray-600">Microservices with Istio service mesh</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Database className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Event-Driven</h4>
              <p className="text-sm text-gray-600">Apache Kafka with real-time processing</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">AI/ML Pipeline</h4>
              <p className="text-sm text-gray-600">TensorFlow Extended with MLOps</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileText className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-semibold mb-2">Security First</h4>
              <p className="text-sm text-gray-600">Zero-trust with differential privacy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building className="h-6 w-6" />
                <span className="text-lg font-semibold">Div1 Platform</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-driven ecosystem for the Architecture, Engineering, and Construction industry.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Modules</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/manufacturer-base" className="hover:text-white">Manufacturer-Base</Link></li>
                <li><Link to="/engage" className="hover:text-white">Engage</Link></li>
                <li><Link to="/master1" className="hover:text-white">Master1</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Resources</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">API Reference</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Company</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 Div1 Platform Suite. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
