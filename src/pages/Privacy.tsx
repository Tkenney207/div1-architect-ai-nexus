
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";
import Header from "@/components/Header";

const Privacy = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D9D6D0' }}>
      <Header />

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <div className="rounded-2xl p-4 w-fit mx-auto mb-8" style={{ backgroundColor: '#E98B2A' }}>
              <Shield className="h-12 w-12" style={{ color: '#F7F3ED' }} />
            </div>
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#1A2B49' }}>Privacy Policy</h1>
            <p className="text-xl" style={{ color: '#1A2B49' }}>
              Your privacy is important to us. This policy outlines how we handle your data.
            </p>
          </div>

          <Card className="bg-white border" style={{ borderColor: '#F7F3ED' }}>
            <CardHeader>
              <CardTitle className="text-2xl" style={{ color: '#1A2B49' }}>Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6" style={{ color: '#1A2B49' }}>
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1A2B49' }}>Data Collection</h3>
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1A2B49' }}>Data Usage</h3>
                <p>
                  We use the information we collect to provide, maintain, and improve our services, 
                  process transactions, and communicate with you.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1A2B49' }}>Data Protection</h3>
                <p>
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1A2B49' }}>Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy, please contact us through 
                  our support channels.
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
