
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ArrowLeft, Zap, Shield, Globe, Star, CheckCircle, Database, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ManufacturerBase = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 text-white">
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
                  <h1 className="text-xl font-bold text-white">Manufacturer-Base</h1>
                  <Badge variant="secondary" className="text-xs bg-blue-600/20 text-blue-300 border-blue-500/30">AI Product Intelligence</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-6 py-3 rounded-full border-blue-500/30 bg-blue-600/10 text-blue-300">
            🔍 Real-time Product Intelligence
          </Badge>
          <h2 className="text-6xl font-bold text-white mb-8">
            Find the perfect 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> building products </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover products from thousands of manufacturers with AI-powered search, real-time availability, and quality scoring.
          </p>
        </div>

        {/* Search Interface */}
        <Card className="mb-12 shadow-2xl border-0 overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700">
          <CardHeader className="bg-gradient-to-r from-blue-600/10 to-purple-600/10">
            <CardTitle className="flex items-center text-2xl text-white">
              <Search className="h-6 w-6 mr-3 text-blue-400" />
              Advanced Product Search
            </CardTitle>
            <CardDescription className="text-lg text-gray-300">
              GraphQL federation with Elasticsearch semantic search
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="Search products, materials, specifications..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg border-2 rounded-2xl focus:border-blue-500 transition-colors bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>
              <Button size="lg" className="px-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
              <Button variant="outline" size="lg" className="px-6 rounded-2xl border-2 border-gray-600 text-gray-300 hover:bg-gray-800">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Steel Products", "LEED Certified", "In Stock", "High Quality Score", "Local Supplier"].map(filter => (
                <Badge 
                  key={filter}
                  variant={selectedFilters.includes(filter) ? "default" : "outline"} 
                  className={`px-4 py-2 rounded-full cursor-pointer transition-colors ${
                    selectedFilters.includes(filter) 
                      ? "bg-blue-600 text-white" 
                      : "border-gray-500 text-gray-300 hover:bg-gray-700"
                  }`}
                  onClick={() => toggleFilter(filter)}
                >
                  {filter}
                </Badge>
              ))}
              <Badge variant="secondary" className="px-4 py-2 rounded-full cursor-pointer bg-gray-700 text-gray-300">+ Add Filter</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Real-time Data Pipeline */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50">
            <CardHeader>
              <div className="bg-blue-600/20 rounded-2xl p-3 w-fit mb-4 group-hover:bg-blue-500/30 transition-colors">
                <Zap className="h-8 w-8 text-blue-400" />
              </div>
              <CardTitle className="text-xl text-white">Real-Time Ingestion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Apache Kafka + Debezium for continuous data streaming from manufacturer sources.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Data Sources:</span>
                  <Badge variant="default" className="bg-green-600">847 Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Updates/Min:</span>
                  <Badge variant="secondary" className="bg-blue-600">15.2K</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Processing Lag:</span>
                  <Badge variant="outline" className="border-green-500 text-green-400">< 500ms</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-gray-800/50 border border-gray-700 hover:border-green-500/50">
            <CardHeader>
              <div className="bg-green-600/20 rounded-2xl p-3 w-fit mb-4 group-hover:bg-green-500/30 transition-colors">
                <Shield className="h-8 w-8 text-green-400" />
              </div>
              <CardTitle className="text-xl text-white">Quality Assurance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Multi-layer validation with confidence scoring and anomaly detection.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Data Quality:</span>
                  <Badge variant="default" className="bg-green-600">98.7%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Validated Today:</span>
                  <Badge variant="secondary" className="bg-blue-600">2.3M</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Anomalies Detected:</span>
                  <Badge variant="outline" className="border-yellow-500 text-yellow-400">247</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50">
            <CardHeader>
              <div className="bg-purple-600/20 rounded-2xl p-3 w-fit mb-4 group-hover:bg-purple-500/30 transition-colors">
                <Globe className="h-8 w-8 text-purple-400" />
              </div>
              <CardTitle className="text-xl text-white">Global Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Kubernetes-native deployment with Istio service mesh for global scale.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Uptime:</span>
                  <Badge variant="default" className="bg-green-600">99.97%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Response Time:</span>
                  <Badge variant="secondary" className="bg-blue-600">< 100ms</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Global Regions:</span>
                  <Badge variant="outline" className="border-purple-500 text-purple-400">12 Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sample Product Results */}
        <Card className="shadow-2xl border-0 bg-gray-800/50 border border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Featured Products</CardTitle>
            <CardDescription className="text-lg text-gray-300">Real-time product intelligence with quality scoring</CardDescription>
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
                  rating: 4.9,
                  price: "$2,450/ton",
                  updated: "2 min ago"
                },
                {
                  name: "Insulated Glass Units",
                  manufacturer: "Guardian Glass",
                  completeness: 95,
                  sustainability: "Energy Star",
                  availability: "2-3 weeks",
                  rating: 4.7,
                  price: "$145/sq ft",
                  updated: "5 min ago"
                },
                {
                  name: "Concrete Admixtures",
                  manufacturer: "BASF Construction",
                  completeness: 92,
                  sustainability: "Green Building",
                  availability: "In Stock",
                  rating: 4.8,
                  price: "$850/pallet",
                  updated: "1 min ago"
                }
              ].map((product, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500/50 cursor-pointer bg-gray-900/50 border-gray-600">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-semibold text-lg group-hover:text-blue-400 transition-colors text-white">{product.name}</h4>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-300">{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-4">{product.manufacturer}</p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Data Quality:</span>
                        <Badge variant={product.completeness > 95 ? "default" : "secondary"} className={product.completeness > 95 ? "bg-green-600" : "bg-blue-600"}>
                          {product.completeness}%
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Sustainability:</span>
                        <Badge variant="outline" className="border-green-500 text-green-400">{product.sustainability}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Availability:</span>
                        <span className="text-green-400 font-medium">{product.availability}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Price:</span>
                        <span className="text-blue-400 font-medium">{product.price}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Updated:</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-400">{product.updated}</span>
                        </div>
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
