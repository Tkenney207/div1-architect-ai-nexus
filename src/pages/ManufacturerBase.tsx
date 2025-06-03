
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Zap, Shield, Globe, Database, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductSearchInterface } from "@/components/ProductSearchInterface";

const ManufacturerBase = () => {
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

        {/* Functional Search Interface */}
        <ProductSearchInterface />

        {/* Real-time Data Pipeline */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 mt-16">
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
                  <Badge variant="outline" className="border-green-500 text-green-400">{"< 500ms"}</Badge>
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
                  <Badge variant="secondary" className="bg-blue-600">{"< 100ms"}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Global Regions:</span>
                  <Badge variant="outline" className="border-purple-500 text-purple-400">12 Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ManufacturerBase;
