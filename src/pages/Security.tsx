
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Database, Eye, CheckCircle } from "lucide-react";
import Header from "@/components/Header";

const Security = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <Header />

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="bg-orange-600/20 rounded-2xl p-4 w-fit mx-auto mb-8">
              <Shield className="h-12 w-12 text-orange-400" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">Security & Privacy</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your data security and privacy are our top priorities. Learn how we protect your information in our closed-loop system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 hover:border-green-500/50 transition-colors">
              <CardHeader>
                <div className="bg-green-600/20 rounded-xl p-3 w-fit mb-4">
                  <Lock className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Data Protection</CardTitle>
                <CardDescription className="text-gray-300">
                  Enterprise-grade security measures protect your sensitive project data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>End-to-end encryption</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Zero-trust architecture</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Role-based access control</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <div className="bg-blue-600/20 rounded-xl p-3 w-fit mb-4">
                  <Database className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">Closed-Loop System</CardTitle>
                <CardDescription className="text-gray-300">
                  Your data stays within our secure, isolated environment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>No external data sharing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Isolated processing environment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Data residency compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 max-w-4xl mx-auto">
            <CardHeader>
              <div className="bg-orange-600/20 rounded-xl p-3 w-fit mb-4">
                <Eye className="h-6 w-6 text-orange-400" />
              </div>
              <CardTitle className="text-white text-2xl">No LLM Training on Your Data</CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                Your project data is never used to train AI models
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Complete Data Isolation</h3>
                <p>
                  Your project charters, specifications, and documents remain completely isolated within our secure environment. 
                  We never use your data to train, improve, or enhance any AI models or machine learning systems.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Proprietary Processing</h3>
                <p>
                  Our AI processes your data using pre-trained models in a closed-loop system. Your sensitive AEC project 
                  information stays private and is never exposed to external training processes or third-party AI services.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Your Data, Your Control</h3>
                <p>
                  You maintain complete ownership and control over your data. We provide AI-powered insights without 
                  compromising your intellectual property or competitive advantage.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Security;
