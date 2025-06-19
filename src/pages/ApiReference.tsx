
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Globe } from "lucide-react";
import Header from "@/components/Header";
import Div1Logo from "@/components/Div1Logo";

const ApiReference = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D9D6D0' }}>
      <Header />

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="rounded-2xl p-4 w-fit mx-auto mb-8" style={{ backgroundColor: '#E98B2A' }}>
              <Code2 className="h-12 w-12" style={{ color: '#F7F3ED' }} />
            </div>
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#1A2B49' }}>API Reference</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#1A2B49' }}>
              Complete API documentation for developers integrating with the Div1 Platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border hover:shadow-lg transition-colors" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader>
                <div className="rounded-xl p-3 w-fit mb-4" style={{ backgroundColor: '#E98B2A' }}>
                  <Globe className="h-6 w-6" style={{ color: '#F7F3ED' }} />
                </div>
                <CardTitle style={{ color: '#1A2B49' }}>REST API</CardTitle>
                <CardDescription style={{ color: '#1A2B49' }}>
                  RESTful endpoints for platform integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full text-white hover:opacity-90" style={{ backgroundColor: '#E98B2A' }}>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border hover:shadow-lg transition-colors" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader>
                <div className="rounded-xl p-3 w-fit mb-4" style={{ backgroundColor: '#E98B2A' }}>
                  <Database className="h-6 w-6" style={{ color: '#F7F3ED' }} />
                </div>
                <CardTitle style={{ color: '#1A2B49' }}>GraphQL</CardTitle>
                <CardDescription style={{ color: '#1A2B49' }}>
                  Flexible GraphQL API for complex queries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full text-white hover:opacity-90" style={{ backgroundColor: '#E98B2A' }}>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border hover:shadow-lg transition-colors" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader>
                <div className="rounded-xl p-3 w-fit mb-4" style={{ backgroundColor: '#E98B2A' }}>
                  <Code2 className="h-6 w-6" style={{ color: '#F7F3ED' }} />
                </div>
                <CardTitle style={{ color: '#1A2B49' }}>SDKs</CardTitle>
                <CardDescription style={{ color: '#1A2B49' }}>
                  Official SDKs for popular programming languages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full text-white hover:opacity-90" style={{ backgroundColor: '#E98B2A' }}>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiReference;
