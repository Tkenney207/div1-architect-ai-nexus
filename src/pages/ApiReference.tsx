import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Globe } from "lucide-react";
import Header from "@/components/Header";
import Div1Logo from "@/components/Div1Logo";

const ApiReference = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <Header />

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="bg-orange-600/20 rounded-2xl p-4 w-fit mx-auto mb-8">
              <Code2 className="h-12 w-12 text-orange-400" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">API Reference</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete API documentation for developers integrating with the Div1 Platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 hover:border-orange-500/50 transition-colors">
              <CardHeader>
                <div className="bg-orange-600/20 rounded-xl p-3 w-fit mb-4">
                  <Globe className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-white">REST API</CardTitle>
                <CardDescription className="text-gray-300">
                  RESTful endpoints for platform integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 hover:border-orange-500/50 transition-colors">
              <CardHeader>
                <div className="bg-orange-600/20 rounded-xl p-3 w-fit mb-4">
                  <Database className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-white">GraphQL</CardTitle>
                <CardDescription className="text-gray-300">
                  Flexible GraphQL API for complex queries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 hover:border-orange-500/50 transition-colors">
              <CardHeader>
                <div className="bg-orange-600/20 rounded-xl p-3 w-fit mb-4">
                  <Code2 className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-white">SDKs</CardTitle>
                <CardDescription className="text-gray-300">
                  Official SDKs for popular programming languages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600">
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
