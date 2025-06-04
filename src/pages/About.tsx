
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, X } from "lucide-react";
import Header from "@/components/Header";

const About = () => {
  const comparisonData = [
    {
      category: "Product Data",
      legacy: "Product data is siloed & inconsistent",
      div1: "Unified, searchable, structured product data"
    },
    {
      category: "Stakeholder Input",
      legacy: "Stakeholder input is informal", 
      div1: "Structured project charters with AI context"
    },
    {
      category: "Spec Writing",
      legacy: "Spec writing is manual and error-prone",
      div1: "AI-generated, code-validated documentation"
    },
    {
      category: "Compliance",
      legacy: "Compliance is reactive",
      div1: "Real-time validation as specs are written"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <Header />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">What Makes Div1 Different</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming traditional AEC workflows with intelligent, integrated solutions
            </p>
          </div>

          <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 max-w-6xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Legacy Process vs. Div1 Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-4 px-6 text-gray-300 font-semibold"></th>
                      <th className="text-left py-4 px-6 text-red-400 font-semibold">Legacy Process</th>
                      <th className="text-left py-4 px-6 text-green-400 font-semibold">With Div1</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
                        <td className="py-6 px-6 font-medium text-white">{row.category}</td>
                        <td className="py-6 px-6">
                          <div className="flex items-start space-x-3">
                            <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{row.legacy}</span>
                          </div>
                        </td>
                        <td className="py-6 px-6">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{row.div1}</span>
                          </div>
                        </td>
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
