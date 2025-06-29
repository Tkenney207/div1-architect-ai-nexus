
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import { ProductSearchInterface } from "@/components/ProductSearchInterface";

const ManufacturerBase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 text-white">
      <Header />

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-8">
            Find the perfect 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> building products </span>
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6">Manufacturer-Base™<br />Ingest. Structure. Verify.</h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              AI-driven ingestion and normalization at your figure tips: A single source for standardized manufacturer product data — from PDFs, websites, CAD, images, and spreadsheets - easily searchable, easily accessible.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                <p className="text-gray-200 text-sm">Cleans and maps data to a unified schema</p>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                <p className="text-gray-200 text-sm">Enriches with certifications, LCA, and performance metrics</p>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                <p className="text-gray-200 text-sm">Enables real-time semantic search across millions of SKUs</p>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                <p className="text-gray-200 text-sm">Keeps data up-to-date with adaptive scraping and APIs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Functional Search Interface */}
        <ProductSearchInterface />

        {/* Real-time Data Pipeline */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 mt-16">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50">
            <CardHeader>
              <div className="bg-blue-600/20 rounded-2xl p-3 w-fit mb-4 group-hover:bg-blue-500/30 transition-colors">
                <Zap className="h-8 w-8 text-blue-400" />
              </div>
              <CardTitle className="text-xl text-white">Real-Time Ingestion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Live product data streams from manufacturer catalogs, ensuring you always have the latest pricing, availability, and specifications.
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
              <CardTitle className="text-xl text-white">Quality Scoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                AI-powered algorithms analyze product data completeness, manufacturer reliability, and specification accuracy to provide quality scores for informed procurement decisions.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Avg Quality Score:</span>
                  <Badge variant="default" className="bg-green-600">94.2/100</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Products Scored:</span>
                  <Badge variant="secondary" className="bg-blue-600">2.3M</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Score Updates:</span>
                  <Badge variant="outline" className="border-yellow-500 text-yellow-400">Real-time</Badge>
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
