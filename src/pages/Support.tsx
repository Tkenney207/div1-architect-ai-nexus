import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Mail, Phone } from "lucide-react";
import Header from "@/components/Header";

const Support = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <Header />

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="bg-orange-600/20 rounded-2xl p-4 w-fit mx-auto mb-8">
              <MessageCircle className="h-12 w-12 text-orange-400" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">Support</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get help when you need it. Our support team is here to assist you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 hover:border-orange-500/50 transition-colors">
              <CardHeader>
                <div className="bg-orange-600/20 rounded-xl p-3 w-fit mb-4">
                  <MessageCircle className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-white">Live Chat</CardTitle>
                <CardDescription className="text-gray-300">
                  Get instant help with our live chat support
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
                  <Mail className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-white">Email Support</CardTitle>
                <CardDescription className="text-gray-300">
                  Send us an email and we'll get back to you
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
                  <Phone className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-white">Phone Support</CardTitle>
                <CardDescription className="text-gray-300">
                  Speak directly with our support specialists
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

export default Support;
