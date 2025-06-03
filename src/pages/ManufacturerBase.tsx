
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Database, ArrowLeft, Zap, Shield, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const ManufacturerBase = () => {
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
                <Database className="h-6 w-6 text-blue-600" />
                <h1 className="text-xl font-bold">Manufacturer-Base</h1>
                <Badge variant="secondary">AI-Driven Product Intelligence</Badge>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Product Intelligence Platform
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Real-time product data aggregation with microservices architecture, 
            multi-modal normalization, and semantic search capabilities.
          </p>
        </div>

        {/* Search Interface */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="h-5 w-5 mr-2" />
              Advanced Product Search
            </CardTitle>
            <CardDescription>
              GraphQL federation with Elasticsearch semantic search
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <Input 
                placeholder="Search products, materials, specifications..." 
                className="flex-1"
              />
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Steel Products</Badge>
              <Badge variant="outline">LEED Certified</Badge>
              <Badge variant="outline">In Stock</Badge>
              <Badge variant="outline">+ Add Filter</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Architecture Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Real-Time Ingestion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Apache Kafka + Debezium for continuous data streaming from manufacturer sources.
              </p>
              <ul className="text-sm space-y-1 text-gray-500">
                <li>• Adaptive scraping strategies</li>
                <li>• Rate limiting with ML optimization</li>
                <li>• Multi-source data federation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Quality Assurance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Multi-layer validation with confidence scoring and anomaly detection.
              </p>
              <ul className="text-sm space-y-1 text-gray-500">
                <li>• Completeness validation</li>
                <li>• Cross-reference checking</li>
                <li>• Business rule enforcement</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Globe className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Global Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Kubernetes-native deployment with Istio service mesh for global scale.
              </p>
              <ul className="text-sm space-y-1 text-gray-500">
                <li>• Multi-region deployment</li>
                <li>• CDN optimization</li>
                <li>• 99.99% uptime SLA</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Sample Product Results */}
        <Card>
          <CardHeader>
            <CardTitle>Featured Products</CardTitle>
            <CardDescription>Real-time product intelligence with quality scoring</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "High-Performance Steel Beam",
                  manufacturer: "Nucor Corporation",
                  completeness: 98,
                  sustainability: "LEED Certified",
                  availability: "In Stock"
                },
                {
                  name: "Insulated Glass Units",
                  manufacturer: "Guardian Glass",
                  completeness: 95,
                  sustainability: "Energy Star",
                  availability: "2-3 weeks"
                },
                {
                  name: "Concrete Admixtures",
                  manufacturer: "BASF Construction",
                  completeness: 92,
                  sustainability: "Green Building",
                  availability: "In Stock"
                }
              ].map((product, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2">{product.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{product.manufacturer}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Data Quality:</span>
                      <Badge variant={product.completeness > 95 ? "default" : "secondary"}>
                        {product.completeness}%
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Sustainability:</span>
                      <Badge variant="outline">{product.sustainability}</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Availability:</span>
                      <span className="text-green-600">{product.availability}</span>
                    </div>
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

export default ManufacturerBase;
