
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Div1Logo from "@/components/Div1Logo";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link to="/" className="flex items-center space-x-3">
                <Div1Logo size="sm" />
                <span className="text-xl font-semibold">Platform</span>
              </Link>
            </div>
            <Link to="/">
              <Button variant="outline" size="sm" className="rounded-full border-orange-500/50 text-orange-300 hover:bg-orange-600 hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <div className="bg-orange-600/20 rounded-2xl p-4 w-fit mx-auto mb-8">
              <Shield className="h-12 w-12 text-orange-400" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300">
              Your privacy is important to us. This policy outlines how we handle your data.
            </p>
          </div>

          <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Data Collection</h3>
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Data Usage</h3>
                <p>
                  We use the information we collect to provide, maintain, and improve our services, 
                  process transactions, and communicate with you.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Data Protection</h3>
                <p>
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy, please contact us through 
                  our support channels.
                </p>
              </div>
              
              <div className="text-center pt-8">
                <p className="text-sm text-gray-400">
                  Last updated: Coming Soon
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
