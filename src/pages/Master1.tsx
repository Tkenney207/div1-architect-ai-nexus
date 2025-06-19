
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
    <div className="min-h-screen" style={{ backgroundColor: '#F7F3ED' }}>
      <Header />

      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight" style={{ color: '#1A2B49' }}>
              Process specifications with 
              <span className="font-medium font-serif italic" style={{ color: '#E98B2A' }}> AI precision </span>
            </h1>
            <div className="bg-white rounded-2xl shadow-sm border p-12 mb-12" style={{ borderColor: '#D9D6D0' }}>
              <h2 className="text-2xl font-medium mb-6 font-serif italic" style={{ color: '#E98B2A' }}>Upload. Validate. Publish.</h2>
              <p className="text-xl leading-relaxed font-serif italic" style={{ color: '#7C9C95' }}>
                AI Specification review and updating engine.
              </p>
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="mb-20">
          <Card className="bg-white border shadow-sm" style={{ borderColor: '#D9D6D0' }}>
            <CardHeader className="border-b p-8" style={{ borderColor: '#D9D6D0' }}>
              <CardTitle className="flex items-center space-x-3 text-xl font-medium" style={{ color: '#1A2B49' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#D6F0E5' }}>
                  <Upload className="h-5 w-5" style={{ color: '#E98B2A' }} />
                </div>
                <span>Upload Your Specifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div 
                className={`border-2 border-dashed rounded-xl p-12 text-center transition-all ${
                  dragActive 
                    ? 'bg-mint bg-opacity-30' 
                    : 'hover:bg-opacity-30'
                }`}
                style={{ 
                  borderColor: dragActive ? '#E98B2A' : '#D9D6D0',
                  backgroundColor: dragActive ? '#D6F0E5' : 'transparent'
                }}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#D9D6D0' }}>
                  <Upload className="h-8 w-8" style={{ color: '#7C9C95' }} />
                </div>
                <h3 className="text-lg font-medium mb-4" style={{ color: '#1A2B49' }}>
                  Drop your specification files here or click to upload
                </h3>
                <p className="mb-6 font-serif italic" style={{ color: '#7C9C95' }}>
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
                  className="text-white px-8 py-3 rounded-lg font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: '#E98B2A' }}
                >
                  Select Files
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Architecture Features */}
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="group bg-white border shadow-sm hover:shadow-md transition-all duration-300" style={{ borderColor: '#D9D6D0' }}>
            <CardHeader className="p-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:opacity-80 transition-colors" style={{ backgroundColor: '#D6F0E5' }}>
                <FileText className="h-7 w-7" style={{ color: '#E98B2A' }} />
              </div>
              <CardTitle className="text-xl font-medium mb-4" style={{ color: '#1A2B49' }}>Technical Content Comprehension</CardTitle>
              <p className="leading-relaxed font-serif italic" style={{ color: '#7C9C95' }}>
                AI review of products, systems, or practices change.
              </p>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <ul className="space-y-4 text-sm" style={{ color: '#7C9C95' }}>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: '#D6F0E5' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#E98B2A' }} />
                  </div>
                  <span>Materials & Products discontinued models, or old manufacturer names.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: '#D6F0E5' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#E98B2A' }} />
                  </div>
                  <span>Methods & Means: Construction techniques no longer in use or superseded.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: '#D6F0E5' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#E98B2A' }} />
                  </div>
                  <span>Performance Criteria: New testing standards, durability benchmarks, or code requirements.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group bg-white border shadow-sm hover:shadow-md transition-all duration-300" style={{ borderColor: '#D9D6D0' }}>
            <CardHeader className="p-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:opacity-80 transition-colors" style={{ backgroundColor: '#C2D3DF' }}>
                <Brain className="h-7 w-7" style={{ color: '#7C9C95' }} />
              </div>
              <CardTitle className="text-xl font-medium mb-4" style={{ color: '#1A2B49' }}>Intelligent Synthesis</CardTitle>
              <p className="leading-relaxed font-serif italic" style={{ color: '#7C9C95' }}>
                Eliminate internal inconsistencies.
              </p>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <ul className="space-y-4 text-sm" style={{ color: '#7C9C95' }}>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: '#D6F0E5' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#E98B2A' }} />
                  </div>
                  <span>Section Numbers: Follow CSI MasterFormat updates.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: '#D6F0E5' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#E98B2A' }} />
                  </div>
                  <span>Cross-References: Align terms and scopes between related sections (e.g., waterproofing & roofing).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: '#D6F0E5' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#E98B2A' }} />
                  </div>
                  <span>Terminology Consistency: "Installer" vs. "Applicator" vs. "Contractor."</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group bg-white border shadow-sm hover:shadow-md transition-all duration-300" style={{ borderColor: '#D9D6D0' }}>
            <CardHeader className="p-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:opacity-80 transition-colors" style={{ backgroundColor: '#D6F0E5' }}>
                <Shield className="h-7 w-7" style={{ color: '#7C9C95' }} />
              </div>
              <CardTitle className="text-xl font-medium mb-4" style={{ color: '#1A2B49' }}>Standard & Code Compliance</CardTitle>
              <p className="leading-relaxed font-serif italic" style={{ color: '#7C9C95' }}>
                Real-time Code & Standard Compliance Analysis & Validation
              </p>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <ul className="space-y-4 text-sm" style={{ color: '#7C9C95' }}>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: '#D6F0E5' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#E98B2A' }} />
                  </div>
                  <span>Referenced Standards: ASTM, ANSI, UL, NFPA, ASHRAE, etc.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: '#D6F0E5' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#E98B2A' }} />
                  </div>
                  <span>Building Codes: IBC, IRC, energy codes (e.g., IECC), accessibility codes (ADA).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: '#D6F0E5' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#E98B2A' }} />
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
