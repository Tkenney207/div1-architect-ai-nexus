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
      outcome: "AI-guided CSI MasterFormat Division 01 generation",
      usedBy: "Spec Writers, Engineers, Architects"
    },
    {
      module: "Master1",
      outcome: "Validated, editable specs with AI acceleration",
      usedBy: "Spec Writers, Engineers, Contractors"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D9D6D0' }}>
      <Header />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#1A2B49' }}>About Us</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#1A2B49' }}>
              We're dedicated to transforming the AEC industry with intelligent AI solutions
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <Card className="bg-white border hover:shadow-lg transition-colors" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader className="text-center">
                <div className="rounded-xl p-3 w-fit mx-auto mb-4" style={{ backgroundColor: '#7C9C95' }}>
                  <MapPin className="h-6 w-6" style={{ color: '#F7F3ED' }} />
                </div>
                <CardTitle style={{ color: '#1A2B49' }}>Office Location</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p style={{ color: '#1A2B49' }}>Portland, ME</p>
              </CardContent>
            </Card>

            <Card className="bg-white border hover:shadow-lg transition-colors" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader className="text-center">
                <div className="rounded-xl p-3 w-fit mx-auto mb-4" style={{ backgroundColor: '#E98B2A' }}>
                  <Mail className="h-6 w-6" style={{ color: '#F7F3ED' }} />
                </div>
                <CardTitle style={{ color: '#1A2B49' }}>Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p style={{ color: '#1A2B49' }}>Div1team@Div1.com</p>
              </CardContent>
            </Card>

            <Card className="bg-white border hover:shadow-lg transition-colors" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader className="text-center">
                <div className="rounded-xl p-3 w-fit mx-auto mb-4" style={{ backgroundColor: '#E98B2A' }}>
                  <Phone className="h-6 w-6" style={{ color: '#F7F3ED' }} />
                </div>
                <CardTitle style={{ color: '#1A2B49' }}>Phone</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p style={{ color: '#1A2B49' }}>(802)-233-2529</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1A2B49' }}>Platform Summary</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#1A2B49' }}>
              Three integrated modules delivering intelligent solutions for the AEC industry
            </p>
          </div>

          <Card className="bg-white border max-w-6xl mx-auto" style={{ borderColor: '#F7F3ED' }}>
            <CardHeader>
              <CardTitle className="text-2xl text-center" style={{ color: '#1A2B49' }}>Div1 Platform Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b" style={{ borderColor: '#D9D6D0' }}>
                      <th className="text-left py-4 px-6 font-semibold" style={{ color: '#E98B2A' }}>Module</th>
                      <th className="text-left py-4 px-6 font-semibold" style={{ color: '#7C9C95' }}>Outcome Delivered</th>
                      <th className="text-left py-4 px-6 font-semibold" style={{ color: '#E98B2A' }}>Used By</th>
                    </tr>
                  </thead>
                  <tbody>
                    {platformData.map((row, index) => (
                      <tr key={index} className="border-b hover:bg-opacity-30 transition-colors" style={{ borderColor: '#F7F3ED', backgroundColor: 'rgba(217, 214, 208, 0.1)' }}>
                        <td className="py-6 px-6 font-medium" style={{ color: '#1A2B49' }}>{row.module}</td>
                        <td className="py-6 px-6" style={{ color: '#1A2B49' }}>{row.outcome}</td>
                        <td className="py-6 px-6" style={{ color: '#1A2B49' }}>{row.usedBy}</td>
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
