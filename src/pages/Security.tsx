
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
            <h1 className="text-5xl font-bold text-white mb-6">Security You Can Trust</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At Div1, your data's safety is our top priority. From specifications to project insights, everything is protected with enterprise-grade security, so you can focus on building — not worrying.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 hover:border-green-500/50 transition-colors">
              <CardHeader>
                <div className="bg-green-600/20 rounded-xl p-3 w-fit mb-4">
                  <Lock className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Encrypted Data</CardTitle>
                <CardDescription className="text-gray-300">
                  All your information is encrypted in transit and at rest, just like online banking.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <div className="bg-blue-600/20 rounded-xl p-3 w-fit mb-4">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">Strict Access Control</CardTitle>
                <CardDescription className="text-gray-300">
                  Only the right people see the right data, thanks to role-based permissions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 hover:border-orange-500/50 transition-colors">
              <CardHeader>
                <div className="bg-orange-600/20 rounded-xl p-3 w-fit mb-4">
                  <Database className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-white">Trusted Cloud Hosting</CardTitle>
                <CardDescription className="text-gray-300">
                  We run on secure, reliable cloud infrastructure used by Fortune 500 companies.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Eye className="h-8 w-8 text-orange-400 mr-3" />
                Privacy by Design
              </h2>
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">You Control Your Data</h3>
                    <p className="text-gray-300">
                      We never share sensitive info — and our AI keeps personal inputs anonymous.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Compliance Ready</h3>
                    <p className="text-gray-300">
                      Built to meet top industry standards like GDPR, SOC 2, and ISO 27001.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Shield className="h-8 w-8 text-green-400 mr-3" />
                Always On Guard
              </h2>
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Real-Time Threat Detection</h3>
                    <p className="text-gray-300">
                      We monitor for suspicious activity 24/7.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Audit Trails</h3>
                    <p className="text-gray-300">
                      Every action is logged for full transparency and accountability.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Built-In Protection</h2>
                <p className="text-xl text-gray-300 mb-6">
                  With Div1, you get powerful tools backed by smart, secure technology — giving you confidence every step of the way.
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span className="text-lg text-white font-semibold">Enterprise-Grade Security</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;
