
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, MapPin, Mail, Phone } from "lucide-react";
import Header from "@/components/Header";

const About = () => {
  const platformData = [
    {
      module: "Engage",
      outcome: "Structured project charter from stakeholders", 
      usedBy: "Owners, PMs, Architects"
    },
    {
      module: "Division1",
      outcome: "AI-generated CSI MasterFormat specifications from charter data",
      usedBy: "Spec Writers, Engineers, Architects"
    },
    {
      module: "Master1",
      outcome: "Validated, editable specs with AI acceleration",
      usedBy: "Spec Writers, Engineers, Contractors"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <Header />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're dedicated to transforming the AEC industry with intelligent AI solutions
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 hover:border-blue-500/50 transition-colors">
              <CardHeader className="text-center">
                <div className="bg-blue-600/20 rounded-xl p-3 w-fit mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">Office Location</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300">Portland, ME</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 hover:border-green-500/50 transition-colors">
              <CardHeader className="text-center">
                <div className="bg-green-600/20 rounded-xl p-3 w-fit mx-auto mb-4">
                  <Mail className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300">Div1team@Div1.com</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 hover:border-orange-500/50 transition-colors">
              <CardHeader className="text-center">
                <div className="bg-orange-600/20 rounded-xl p-3 w-fit mx-auto mb-4">
                  <Phone className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-white">Phone</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300">(802)-233-2529</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Platform Summary</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three integrated modules delivering intelligent solutions for the AEC industry
            </p>
          </div>

          <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 max-w-6xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Div1 Platform Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-4 px-6 text-blue-400 font-semibold">Module</th>
                      <th className="text-left py-4 px-6 text-green-400 font-semibold">Outcome Delivered</th>
                      <th className="text-left py-4 px-6 text-orange-400 font-semibold">Used By</th>
                    </tr>
                  </thead>
                  <tbody>
                    {platformData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
                        <td className="py-6 px-6 font-medium text-blue-300">{row.module}</td>
                        <td className="py-6 px-6 text-gray-300">{row.outcome}</td>
                        <td className="py-6 px-6 text-gray-300">{row.usedBy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
