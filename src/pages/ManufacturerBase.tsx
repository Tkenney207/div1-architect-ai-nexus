
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ArrowLeft, Zap, Shield, Globe, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ManufacturerBase = () => {
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
                  <h1 className="text-xl font-bold">Manufacturer-Base</h1>
                  <Badge variant="secondary" className="text-xs rounded-full">AI Product Intelligence</Badge>
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
            🔍 Real-time Product Intelligence
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Find the perfect 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> building products </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover products from thousands of manufacturers with AI-powered search, real-time availability, and quality scoring.
          </p>
        </div>

        {/* Search Interface */}
        <Card className="mb-12 shadow-xl border-0 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardTitle className="flex items-center text-2xl">
              <Search className="h-6 w-6 mr-3 text-blue-600" />
              Advanced Product Search
            </CardTitle>
            <CardDescription className="text-lg">
              GraphQL federation with Elasticsearch semantic search
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="Search products, materials, specifications..." 
                  className="pl-12 h-14 text-lg border-2 rounded-2xl focus:border-blue-500 transition-colors"
                />
              </div>
              <Button size="lg" className="px-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
              <Button variant="outline" size="lg" className="px-6 rounded-2xl border-2">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="px-4 py-2 rounded-full hover:bg-blue-50 transition-colors cursor-pointer">Steel Products</Badge>
              <Badge variant="outline" className="px-4 py-2 rounded-full hover:bg-green-50 transition-colors cursor-pointer">LEED Certified</Badge>
              <Badge variant="outline" className="px-4 py-2 rounded-full hover:bg-purple-50 transition-colors cursor-pointer">In Stock</Badge>
              <Badge variant="secondary" className="px-4 py-2 rounded-full cursor-pointer">+ Add Filter</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Architecture Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardHeader>
              <div className="bg-blue-100 rounded-2xl p-3 w-fit mb-4 group-hover:bg-blue-200 transition-colors">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Real-Time Ingestion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Apache Kafka + Debezium for continuous data streaming from manufacturer sources.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Adaptive scraping strategies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>ML optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Multi-source federation</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardHeader>
              <div className="bg-green-100 rounded-2xl p-3 w-fit mb-4 group-hover:bg-green-200 transition-colors">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">Quality Assurance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Multi-layer validation with confidence scoring and anomaly detection.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Completeness validation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Cross-reference checking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Business rule enforcement</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardHeader>
              <div className="bg-purple-100 rounded-2xl p-3 w-fit mb-4 group-hover:bg-purple-200 transition-colors">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Global Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Kubernetes-native deployment with Istio service mesh for global scale.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Multi-region deployment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>CDN optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>99.99% uptime SLA</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Sample Product Results */}
        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-2xl">Featured Products</CardTitle>
            <CardDescription className="text-lg">Real-time product intelligence with quality scoring</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "High-Performance Steel Beam",
                  manufacturer: "Nucor Corporation",
                  completeness: 98,
                  sustainability: "LEED Certified",
                  availability: "In Stock",
                  rating: 4.9
                },
                {
                  name: "Insulated Glass Units",
                  manufacturer: "Guardian Glass",
                  completeness: 95,
                  sustainability: "Energy Star",
                  availability: "2-3 weeks",
                  rating: 4.7
                },
                {
                  name: "Concrete Admixtures",
                  manufacturer: "BASF Construction",
                  completeness: 92,
                  sustainability: "Green Building",
                  availability: "In Stock",
                  rating: 4.8
                }
              ].map((product, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">{product.name}</h4>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{product.manufacturer}</p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Data Quality:</span>
                        <Badge variant={product.completeness > 95 ? "default" : "secondary"} className="rounded-full">
                          {product.completeness}%
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Sustainability:</span>
                        <Badge variant="outline" className="rounded-full">{product.sustainability}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Availability:</span>
                        <span className="text-green-600 font-medium">{product.availability}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ManufacturerBase;
