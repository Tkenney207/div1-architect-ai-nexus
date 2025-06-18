

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Brain, Shield, CheckCircle } from "lucide-react";
import Header from "@/components/Header";

const Master1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-8">
            Process specifications with 
            <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent"> AI precision </span>
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6">Upload. Validate. Publish.</h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              AI Specification review and updating engine.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
              <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                <p className="text-gray-200 text-sm">AI creates structured specs based on project + product inputs</p>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                <p className="text-gray-200 text-sm">Detects duplicates, gaps, and conflicting requirements</p>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                <p className="text-gray-200 text-sm">Runs clause-level validation against building codes (ICC, ADA, LEED, ASTM, etc.)</p>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                <p className="text-gray-200 text-sm">Outputs editable, versioned, fully auditable specifications</p>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                <p className="text-gray-200 text-sm">Delivers ready-to-submit specifications — faster, safer, smarter.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Features */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50">
            <CardHeader>
              <div className="bg-blue-600/20 rounded-2xl p-3 w-fit mb-4 group-hover:bg-blue-500/30 transition-colors">
                <FileText className="h-8 w-8 text-blue-400" />
              </div>
              <CardTitle className="text-xl text-white">Technical Content Comprehension</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                AI review of products, systems, or practices change.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Materials & Products discontinued models, or old manufacturer names.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Methods & Means: Construction techniques no longer in use or superseded.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Performance Criteria: New testing standards, durability benchmarks, or code requirements.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50">
            <CardHeader>
              <div className="bg-slate-600/20 rounded-2xl p-3 w-fit mb-4 group-hover:bg-slate-500/30 transition-colors">
                <Brain className="h-8 w-8 text-slate-400" />
              </div>
              <CardTitle className="text-xl text-white">Intelligent Synthesis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Eliminate internal inconsistencies.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Section Numbers: Follow CSI MasterFormat updates.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Cross-References: Align terms and scopes between related sections (e.g., waterproofing & roofing).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Terminology Consistency: "Installer" vs. "Applicator" vs. "Contractor."</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-slate-800/50 border border-slate-700 hover:border-green-500/50">
            <CardHeader>
              <div className="bg-green-600/20 rounded-2xl p-3 w-fit mb-4 group-hover:bg-green-500/30 transition-colors">
                <Shield className="h-8 w-8 text-green-400" />
              </div>
              <CardTitle className="text-xl text-white">Standard & Code Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Real-time Code * Standard Compliance Analysis & Validation
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Referenced Standards: ASTM, ANSI, UL, NFPA, ASHRAE, etc.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Building Codes: IBC, IRC, energy codes (e.g., IECC), accessibility codes (ADA).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
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

