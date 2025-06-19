
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Database, Eye, CheckCircle } from "lucide-react";
import Header from "@/components/Header";

const Security = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D9D6D0' }}>
      <Header />

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="rounded-2xl p-4 w-fit mx-auto mb-8" style={{ backgroundColor: '#E98B2A' }}>
              <Shield className="h-12 w-12" style={{ color: '#F7F3ED' }} />
            </div>
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#1A2B49' }}>Security You Can Trust</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#1A2B49' }}>
              At Div1, your data's safety is our top priority. From specifications to project insights, everything is protected with enterprise-grade security, so you can focus on building — not worrying.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="bg-white hover:shadow-xl transition-all duration-300" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader>
                <div className="rounded-xl p-3 w-fit mb-4" style={{ backgroundColor: '#7C9C95' }}>
                  <Lock className="h-6 w-6" style={{ color: '#F7F3ED' }} />
                </div>
                <CardTitle style={{ color: '#1A2B49' }}>Encrypted Data</CardTitle>
                <CardDescription style={{ color: '#1A2B49' }}>
                  All your information is encrypted in transit and at rest, just like online banking.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader>
                <div className="rounded-xl p-3 w-fit mb-4" style={{ backgroundColor: '#1A2B49' }}>
                  <Shield className="h-6 w-6" style={{ color: '#F7F3ED' }} />
                </div>
                <CardTitle style={{ color: '#1A2B49' }}>Strict Access Control</CardTitle>
                <CardDescription style={{ color: '#1A2B49' }}>
                  Only the right people see the right data, thanks to role-based permissions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader>
                <div className="rounded-xl p-3 w-fit mb-4" style={{ backgroundColor: '#E98B2A' }}>
                  <Database className="h-6 w-6" style={{ color: '#F7F3ED' }} />
                </div>
                <CardTitle style={{ color: '#1A2B49' }}>Trusted Cloud Hosting</CardTitle>
                <CardDescription style={{ color: '#1A2B49' }}>
                  We run on secure, reliable cloud infrastructure used by Fortune 500 companies.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center" style={{ color: '#1A2B49' }}>
                <Eye className="h-8 w-8 mr-3" style={{ color: '#E98B2A' }} />
                Privacy by Design
              </h2>
              <div className="space-y-6">
                <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3" style={{ color: '#1A2B49' }}>You Control Your Data</h3>
                    <p style={{ color: '#1A2B49' }}>
                      We never share sensitive info — and our AI keeps personal inputs anonymous.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3" style={{ color: '#1A2B49' }}>Compliance Ready</h3>
                    <p style={{ color: '#1A2B49' }}>
                      Built to meet top industry standards like GDPR, SOC 2, and ISO 27001.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center" style={{ color: '#1A2B49' }}>
                <Shield className="h-8 w-8 mr-3" style={{ color: '#7C9C95' }} />
                Always On Guard
              </h2>
              <div className="space-y-6">
                <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3" style={{ color: '#1A2B49' }}>Real-Time Threat Detection</h3>
                    <p style={{ color: '#1A2B49' }}>
                      We monitor for suspicious activity 24/7.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3" style={{ color: '#1A2B49' }}>Audit Trails</h3>
                    <p style={{ color: '#1A2B49' }}>
                      Every action is logged for full transparency and accountability.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Card className="bg-white max-w-4xl mx-auto" style={{ borderColor: '#F7F3ED' }}>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4" style={{ color: '#1A2B49' }}>Built-In Protection</h2>
                <p className="text-xl mb-6" style={{ color: '#1A2B49' }}>
                  With Div1, you get powerful tools backed by smart, secure technology — giving you confidence every step of the way.
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-6 w-6" style={{ color: '#7C9C95' }} />
                  <span className="text-lg font-semibold" style={{ color: '#1A2B49' }}>Enterprise-Grade Security</span>
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
