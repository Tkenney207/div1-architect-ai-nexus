
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MessageCircle, Mail, Phone, Send } from "lucide-react";
import Header from "@/components/Header";
import SupportChatbot from "@/components/SupportChatbot";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface SupportFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Support = () => {
  const form = useForm<SupportFormData>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: SupportFormData) => {
    console.log('Support form submitted:', data);
    toast.success("Your support request has been submitted. We'll get back to you soon!");
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#D9D6D0' }}>
      <Header />

      {/* Content */}
      <section className="py-24 flex-1">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: '#D6F0E5' }}>
              <MessageCircle className="h-10 w-10" style={{ color: '#C6A664' }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-6" style={{ color: '#1A2B49' }}>Support</h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#426A8C' }}>
              Get help when you need it. Our support team is here to assist you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white border shadow-sm" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader className="border-b p-8" style={{ borderColor: '#F7F3ED' }}>
                <CardTitle className="text-2xl font-medium" style={{ color: '#1A2B49' }}>Submit a Support Request</CardTitle>
                <CardDescription style={{ color: '#426A8C' }}>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium" style={{ color: '#1A2B49' }}>Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your full name" 
                              className="bg-white border-2 focus:border-brass focus:ring-brass"
                              style={{ borderColor: '#F7F3ED', color: '#1A2B49' }}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium" style={{ color: '#1A2B49' }}>Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="your@email.com" 
                              className="bg-white border-2 focus:border-brass focus:ring-brass"
                              style={{ borderColor: '#F7F3ED', color: '#1A2B49' }}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium" style={{ color: '#1A2B49' }}>Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="What's this about?" 
                              className="bg-white border-2 focus:border-brass focus:ring-brass"
                              style={{ borderColor: '#F7F3ED', color: '#1A2B49' }}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium" style={{ color: '#1A2B49' }}>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe your issue or question in detail..." 
                              rows={5} 
                              className="bg-white border-2 focus:border-brass focus:ring-brass"
                              style={{ borderColor: '#F7F3ED', color: '#1A2B49' }}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full text-white py-3 rounded-lg font-medium transition-all hover:opacity-90"
                      style={{ backgroundColor: '#C6A664' }}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Submit Support Request
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-white border shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: '#F7F3ED' }}>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#D6F0E5' }}>
                      <Mail className="h-6 w-6" style={{ color: '#C6A664' }} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg" style={{ color: '#1A2B49' }}>Email Support</h3>
                      <p className="font-medium" style={{ color: '#1A2B49' }}>support@div1.ai</p>
                      <p className="text-sm mt-1" style={{ color: '#426A8C' }}>We typically respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: '#F7F3ED' }}>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#D6F0E5' }}>
                      <MessageCircle className="h-6 w-6" style={{ color: '#426A8C' }} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg" style={{ color: '#1A2B49' }}>Live Chat</h3>
                      <p className="font-medium" style={{ color: '#1A2B49' }}>Available Now</p>
                      <p className="text-sm mt-1" style={{ color: '#426A8C' }}>Click the chat button to get instant help</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: '#F7F3ED' }}>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#C2D3DF' }}>
                      <Phone className="h-6 w-6" style={{ color: '#426A8C' }} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg" style={{ color: '#1A2B49' }}>Phone Support</h3>
                      <p className="font-medium" style={{ color: '#1A2B49' }}>Coming Soon</p>
                      <p className="text-sm mt-1" style={{ color: '#426A8C' }}>Direct phone support for premium users</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <SupportChatbot />
    </div>
  );
};

export default Support;
