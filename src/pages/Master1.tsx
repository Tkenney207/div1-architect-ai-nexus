
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Brain, Shield, CheckCircle, Upload } from "lucide-react";
import Header from "@/components/Header";
import { useState, useRef } from "react";

const Master1 = () => {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      console.log('Files dropped:', Array.from(files).map(f => f.name));
    }
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files && files.length > 0) {
      console.log('Files selected:', Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
              Process specifications with 
              <span className="text-orange-500 font-medium"> AI precision </span>
            </h1>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 mb-12">
              <h2 className="text-2xl font-medium text-orange-500 mb-6">Upload. Validate. Publish.</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                AI Specification review and updating engine.
              </p>
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="mb-20">
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader className="border-b border-gray-100">
              <CardTitle className="text-gray-900 flex items-center space-x-3 text-xl font-medium">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Upload className="h-5 w-5 text-orange-500" />
                </div>
                <span>Upload Your Specifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div 
                className={`border-2 border-dashed rounded-xl p-12 text-center transition-all ${
                  dragActive 
                    ? 'border-orange-400 bg-orange-50/50' 
                    : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50/50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Upload className="h-8 w-8 text-gray-500" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Drop your specification files here or click to upload
                </h3>
                <p className="text-gray-600 mb-6">
                  Supports Word documents, PDFs, and text files. Analysis begins automatically.
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".doc,.docx,.pdf,.txt"
                  onChange={(e) => handleFileUpload(e.target.files)}
                  className="hidden"
                />
                <Button 
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Select Files
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Architecture Features */}
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="group bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader className="p-8">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                <FileText className="h-7 w-7 text-orange-500" />
              </div>
              <CardTitle className="text-xl font-medium text-gray-900 mb-4">Technical Content Comprehension</CardTitle>
              <p className="text-gray-600 leading-relaxed">
                AI review of products, systems, or practices change.
              </p>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                  </div>
                  <span>Materials & Products discontinued models, or old manufacturer names.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                  </div>
                  <span>Methods & Means: Construction techniques no longer in use or superseded.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                  </div>
                  <span>Performance Criteria: New testing standards, durability benchmarks, or code requirements.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader className="p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Brain className="h-7 w-7 text-blue-500" />
              </div>
              <CardTitle className="text-xl font-medium text-gray-900 mb-4">Intelligent Synthesis</CardTitle>
              <p className="text-gray-600 leading-relaxed">
                Eliminate internal inconsistencies.
              </p>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                  </div>
                  <span>Section Numbers: Follow CSI MasterFormat updates.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                  </div>
                  <span>Cross-References: Align terms and scopes between related sections (e.g., waterproofing & roofing).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                  </div>
                  <span>Terminology Consistency: "Installer" vs. "Applicator" vs. "Contractor."</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader className="p-8">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <Shield className="h-7 w-7 text-green-500" />
              </div>
              <CardTitle className="text-xl font-medium text-gray-900 mb-4">Standard & Code Compliance</CardTitle>
              <p className="text-gray-600 leading-relaxed">
                Real-time Code * Standard Compliance Analysis & Validation
              </p>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                  </div>
                  <span>Referenced Standards: ASTM, ANSI, UL, NFPA, ASHRAE, etc.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                  </div>
                  <span>Building Codes: IBC, IRC, energy codes (e.g., IECC), accessibility codes (ADA).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                  </div>
                  <span>Green Building: LEED, WELL, local sustainability requirements.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Master1;
