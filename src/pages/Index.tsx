
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, MessageSquare, FileText, Users, Cog, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/6eb78a22-dce5-46e7-8899-e05debdec84e.png" 
                alt="Div1 Logo" 
                className="h-8 w-auto"
              />
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Platform Suite</h1>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/manufacturer-base" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Manufacturer-Base
              </Link>
              <Link to="/engage" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Engage
              </Link>
              <Link to="/master1" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Master1
              </Link>
              <Button size="sm" className="rounded-full px-6">
                <Users className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium rounded-full">
              ✨ AI-Powered AEC Platform
            </Badge>
            <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Transform your 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> construction </span>
              workflow
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Streamline product discovery, project planning, and specification management with our comprehensive AI-driven ecosystem designed for AEC professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-2 hover:bg-gray-50">
                Watch Demo
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>Trusted by 1000+ teams</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Three powerful modules</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Interconnected tools designed to work seamlessly together for your complete AEC workflow</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Manufacturer-Base Module */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 rounded-2xl p-3 group-hover:bg-blue-200 transition-colors">
                    <Database className="h-8 w-8 text-blue-600" />
                  </div>
                  <Badge variant="outline" className="rounded-full">Module 1</Badge>
                </div>
                <CardTitle className="text-2xl mb-2">Manufacturer-Base</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  AI-driven product intelligence with real-time data aggregation and semantic search
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8 text-sm text-gray-600">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Microservices with Kafka streams</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Multi-modal data normalization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>GraphQL federation</span>
                  </li>
                </ul>
                <Link to="/manufacturer-base">
                  <Button className="w-full rounded-full group-hover:bg-blue-700 transition-colors">
                    Explore Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Engage Module */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-gradient-to-br from-green-50 to-white">
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-green-100 rounded-2xl p-3 group-hover:bg-green-200 transition-colors">
                    <MessageSquare className="h-8 w-8 text-green-600" />
                  </div>
                  <Badge variant="outline" className="rounded-full">Module 2</Badge>
                </div>
                <CardTitle className="text-2xl mb-2">Engage</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  AI-facilitated project charter with conversational intelligence and privacy protection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8 text-sm text-gray-600">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Multi-agent conversation system</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Privacy-preserving architecture</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Real-time sentiment analysis</span>
                  </li>
                </ul>
                <Link to="/engage">
                  <Button variant="secondary" className="w-full rounded-full group-hover:bg-green-100 transition-colors">
                    Start Charter
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Master1 Module */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-purple-100 rounded-2xl p-3 group-hover:bg-purple-200 transition-colors">
                    <FileText className="h-8 w-8 text-purple-600" />
                  </div>
                  <Badge variant="outline" className="rounded-full">Module 3</Badge>
                </div>
                <CardTitle className="text-2xl mb-2">Master1</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Intelligent specification synthesis with compliance validation and standards checking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8 text-sm text-gray-600">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Multi-modal document processing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Real-time standards validation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Automated compliance checking</span>
                  </li>
                </ul>
                <Link to="/master1">
                  <Button variant="outline" className="w-full rounded-full border-2 hover:bg-purple-50 transition-colors">
                    Process Specs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Enterprise-grade architecture</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Built with modern engineering practices for scale, security, and performance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Cog,
                title: "Kubernetes Native",
                description: "Microservices with Istio service mesh",
                color: "blue"
              },
              {
                icon: Database,
                title: "Event-Driven",
                description: "Apache Kafka with real-time processing",
                color: "green"
              },
              {
                icon: MessageSquare,
                title: "AI/ML Pipeline",
                description: "TensorFlow Extended with MLOps",
                color: "purple"
              },
              {
                icon: FileText,
                title: "Security First",
                description: "Zero-trust with differential privacy",
                color: "orange"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`bg-${feature.color}-100 rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:bg-${feature.color}-200 transition-colors`}>
                  <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                </div>
                <h4 className="font-semibold text-lg mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/6eb78a22-dce5-46e7-8899-e05debdec84e.png" 
                  alt="Div1 Logo" 
                  className="h-6 w-auto brightness-0 invert"
                />
                <span className="text-lg font-semibold">Platform</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                AI-driven ecosystem for the Architecture, Engineering, and Construction industry.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4 text-lg">Modules</h5>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/manufacturer-base" className="hover:text-white transition-colors">Manufacturer-Base</Link></li>
                <li><Link to="/engage" className="hover:text-white transition-colors">Engage</Link></li>
                <li><Link to="/master1" className="hover:text-white transition-colors">Master1</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4 text-lg">Resources</h5>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4 text-lg">Company</h5>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © 2024 Div1 Platform Suite. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
