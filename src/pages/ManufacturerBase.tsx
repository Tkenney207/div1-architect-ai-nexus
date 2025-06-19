
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import { ProductSearchInterface } from "@/components/ProductSearchInterface";

const ManufacturerBase = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D9D6D0' }}>
      <Header />

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-8" style={{ color: '#1A2B49' }}>
            Find the perfect 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> building products </span>
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#E98B2A' }}>Manufacturer-Base™<br />Ingest. Structure. Verify.</h3>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: '#1A2B49' }}>
              AI-driven ingestion and normalization at your figure tips: A single source for standardized manufacturer product data — from PDFs, websites, CAD, images, and spreadsheets - easily searchable, easily accessible.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              <div className="bg-white rounded-lg p-4 border" style={{ borderColor: '#F7F3ED' }}>
                <p className="text-sm" style={{ color: '#1A2B49' }}>Cleans and maps data to a unified schema</p>
              </div>
              <div className="bg-white rounded-lg p-4 border" style={{ borderColor: '#F7F3ED' }}>
                <p className="text-sm" style={{ color: '#1A2B49' }}>Enriches with certifications, LCA, and performance metrics</p>
              </div>
              <div className="bg-white rounded-lg p-4 border" style={{ borderColor: '#F7F3ED' }}>
                <p className="text-sm" style={{ color: '#1A2B49' }}>Enables real-time semantic search across millions of SKUs</p>
              </div>
              <div className="bg-white rounded-lg p-4 border" style={{ borderColor: '#F7F3ED' }}>
                <p className="text-sm" style={{ color: '#1A2B49' }}>Keeps data up-to-date with adaptive scraping and APIs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Functional Search Interface */}
        <ProductSearchInterface />

        {/* Real-time Data Pipeline */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 mt-16">
          <Card className="group hover:shadow-2xl transition-all duration-300 bg-white border hover:shadow-lg" style={{ borderColor: '#F7F3ED' }}>
            <CardHeader>
              <div className="rounded-2xl p-3 w-fit mb-4 transition-colors" style={{ backgroundColor: '#E98B2A' }}>
                <Zap className="h-8 w-8" style={{ color: '#F7F3ED' }} />
              </div>
              <CardTitle className="text-xl" style={{ color: '#1A2B49' }}>Real-Time Ingestion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6" style={{ color: '#1A2B49' }}>
                Live product data streams from manufacturer catalogs, ensuring you always have the latest pricing, availability, and specifications.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: '#7C9C95' }}>Data Sources:</span>
                  <Badge variant="default" className="text-white" style={{ backgroundColor: '#7C9C95' }}>847 Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: '#7C9C95' }}>Updates/Min:</span>
                  <Badge variant="secondary" className="text-white" style={{ backgroundColor: '#E98B2A' }}>15.2K</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: '#7C9C95' }}>Processing Lag:</span>
                  <Badge variant="outline" style={{ borderColor: '#7C9C95', color: '#7C9C95' }}>{"< 500ms"}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 bg-white border hover:shadow-lg" style={{ borderColor: '#F7F3ED' }}>
            <CardHeader>
              <div className="rounded-2xl p-3 w-fit mb-4 transition-colors" style={{ backgroundColor: '#7C9C95' }}>
                <Shield className="h-8 w-8" style={{ color: '#F7F3ED' }} />
              </div>
              <CardTitle className="text-xl" style={{ color: '#1A2B49' }}>Quality Scoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6" style={{ color: '#1A2B49' }}>
                AI-powered algorithms analyze product data completeness, manufacturer reliability, and specification accuracy to provide quality scores for informed procurement decisions.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: '#7C9C95' }}>Avg Quality Score:</span>
                  <Badge variant="default" className="text-white" style={{ backgroundColor: '#7C9C95' }}>94.2/100</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: '#7C9C95' }}>Products Scored:</span>
                  <Badge variant="secondary" className="text-white" style={{ backgroundColor: '#E98B2A' }}>2.3M</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: '#7C9C95' }}>Score Updates:</span>
                  <Badge variant="outline" style={{ borderColor: '#E98B2A', color: '#E98B2A' }}>Real-time</Badge>
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
