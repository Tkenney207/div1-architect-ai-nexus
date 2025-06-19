
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Contact = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D9D6D0' }}>
      <Header />

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="rounded-2xl p-4 w-fit mx-auto mb-8" style={{ backgroundColor: '#E98B2A' }}>
              <Mail className="h-12 w-12" style={{ color: '#F7F3ED' }} />
            </div>
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#1A2B49' }}>Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#1A2B49' }}>
              Get in touch with our team. We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white border" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader>
                <CardTitle className="text-2xl" style={{ color: '#1A2B49' }}>Send us a message</CardTitle>
                <CardDescription style={{ color: '#1A2B49' }}>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>First Name</label>
                    <Input placeholder="Your first name" className="border" style={{ borderColor: '#D9D6D0', backgroundColor: '#7C9C95', color: '#F7F3ED', '--placeholder-color': '#1A2B49' } as React.CSSProperties & { '--placeholder-color': string }} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>Last Name</label>
                    <Input placeholder="Your last name" className="border" style={{ borderColor: '#D9D6D0', backgroundColor: '#7C9C95', color: '#F7F3ED', '--placeholder-color': '#1A2B49' } as React.CSSProperties & { '--placeholder-color': string }} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>Email</label>
                  <Input type="email" placeholder="your@email.com" className="border" style={{ borderColor: '#D9D6D0', backgroundColor: '#7C9C95', color: '#F7F3ED', '--placeholder-color': '#1A2B49' } as React.CSSProperties & { '--placeholder-color': string }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>Subject</label>
                  <Input placeholder="What's this about?" className="border" style={{ borderColor: '#D9D6D0', backgroundColor: '#7C9C95', color: '#F7F3ED', '--placeholder-color': '#1A2B49' } as React.CSSProperties & { '--placeholder-color': string }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>Message</label>
                  <Textarea placeholder="Tell us more..." rows={5} className="border" style={{ borderColor: '#D9D6D0', backgroundColor: '#7C9C95', color: '#F7F3ED', '--placeholder-color': '#1A2B49' } as React.CSSProperties & { '--placeholder-color': string }} />
                </div>
                <Button className="w-full text-white hover:opacity-90" style={{ backgroundColor: '#E98B2A' }}>
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-white border" style={{ borderColor: '#F7F3ED' }}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-xl p-3" style={{ backgroundColor: '#E98B2A' }}>
                      <MapPin className="h-6 w-6" style={{ color: '#F7F3ED' }} />
                    </div>
                    <div>
                      <h3 className="font-semibold" style={{ color: '#1A2B49' }}>Office</h3>
                      <p style={{ color: '#1A2B49' }}>Portland, ME</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border" style={{ borderColor: '#F7F3ED' }}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-xl p-3" style={{ backgroundColor: '#E98B2A' }}>
                      <Mail className="h-6 w-6" style={{ color: '#F7F3ED' }} />
                    </div>
                    <div>
                      <h3 className="font-semibold" style={{ color: '#1A2B49' }}>Email</h3>
                      <p style={{ color: '#1A2B49' }}>Div1team@Div1.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border" style={{ borderColor: '#F7F3ED' }}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-xl p-3" style={{ backgroundColor: '#E98B2A' }}>
                      <Phone className="h-6 w-6" style={{ color: '#F7F3ED' }} />
                    </div>
                    <div>
                      <h3 className="font-semibold" style={{ color: '#1A2B49' }}>Phone</h3>
                      <p style={{ color: '#1A2B49' }}>(802)-233-2529</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
