
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Building2, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Div1Logo from "@/components/Div1Logo";

const About = () => {
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
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="bg-orange-600/20 rounded-2xl p-4 w-fit mx-auto mb-8">
              <Building2 className="h-12 w-12 text-orange-400" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">About Div1 Platform</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionizing the Architecture, Engineering, and Construction industry with AI-driven solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 hover:border-orange-500/50 transition-colors">
              <CardHeader>
                <div className="bg-orange-600/20 rounded-xl p-3 w-fit mb-4">
                  <Target className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-white">Our Mission</CardTitle>
                <CardDescription className="text-gray-300">
                  To transform how AEC professionals work with intelligent, integrated solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  We're building the future of construction intelligence with AI-powered tools that streamline workflows and enhance productivity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 hover:border-orange-500/50 transition-colors">
              <CardHeader>
                <div className="bg-orange-600/20 rounded-xl p-3 w-fit mb-4">
                  <Users className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-white">Our Team</CardTitle>
                <CardDescription className="text-gray-300">
                  Industry experts and technology innovators working together
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  Our diverse team combines deep AEC industry knowledge with cutting-edge AI and software development expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 hover:border-orange-500/50 transition-colors">
              <CardHeader>
                <div className="bg-orange-600/20 rounded-xl p-3 w-fit mb-4">
                  <Building2 className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-white">Our Vision</CardTitle>
                <CardDescription className="text-gray-300">
                  A connected ecosystem for the entire construction lifecycle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  We envision a world where technology seamlessly integrates with construction workflows to create better buildings faster.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
