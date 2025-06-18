
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Content */}
      <section className="py-24 flex-1">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <MessageCircle className="h-10 w-10 text-orange-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Support</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get help when you need it. Our support team is here to assist you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader className="border-b border-gray-100 p-8">
                <CardTitle className="text-gray-900 text-2xl font-medium">Submit a Support Request</CardTitle>
                <CardDescription className="text-gray-600">
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
                          <FormLabel className="text-gray-700 font-medium">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your full name" 
                              className="bg-white border-gray-300 text-gray-900 focus:border-orange-500 focus:ring-orange-500" 
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
                          <FormLabel className="text-gray-700 font-medium">Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="your@email.com" 
                              className="bg-white border-gray-300 text-gray-900 focus:border-orange-500 focus:ring-orange-500" 
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
                          <FormLabel className="text-gray-700 font-medium">Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="What's this about?" 
                              className="bg-white border-gray-300 text-gray-900 focus:border-orange-500 focus:ring-orange-500" 
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
                          <FormLabel className="text-gray-700 font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe your issue or question in detail..." 
                              rows={5} 
                              className="bg-white border-gray-300 text-gray-900 focus:border-orange-500 focus:ring-orange-500" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition-colors">
                      <Send className="h-4 w-4 mr-2" />
                      Submit Support Request
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium text-lg">Email Support</h3>
                      <p className="text-gray-700 font-medium">support@div1.ai</p>
                      <p className="text-sm text-gray-600 mt-1">We typically respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium text-lg">Live Chat</h3>
                      <p className="text-gray-700 font-medium">Available Now</p>
                      <p className="text-sm text-gray-600 mt-1">Click the chat button to get instant help</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium text-lg">Phone Support</h3>
                      <p className="text-gray-700 font-medium">Coming Soon</p>
                      <p className="text-sm text-gray-600 mt-1">Direct phone support for premium users</p>
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
