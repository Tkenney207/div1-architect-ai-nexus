
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50 text-gray-900 flex flex-col">
      <Header />

      {/* Content */}
      <section className="py-32 flex-1">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-6 w-fit mx-auto mb-12 shadow-lg">
              <MessageCircle className="h-16 w-16 text-orange-500" />
            </div>
            <h1 className="text-6xl font-light text-gray-900 mb-8 tracking-tight">Support</h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Get help when you need it. Our support team is here to assist you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="bg-white/90 backdrop-blur-sm border border-slate-200 shadow-xl">
              <CardHeader className="pt-10 pb-8">
                <CardTitle className="text-gray-900 text-3xl font-light">Submit a Support Request</CardTitle>
                <CardDescription className="text-gray-600 text-lg font-light">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-10 pb-10">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 text-lg font-medium">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your full name" 
                              className="bg-white border-slate-300 text-gray-900 text-lg py-6 rounded-xl focus:border-orange-400 focus:ring-orange-400" 
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
                          <FormLabel className="text-gray-700 text-lg font-medium">Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="your@email.com" 
                              className="bg-white border-slate-300 text-gray-900 text-lg py-6 rounded-xl focus:border-orange-400 focus:ring-orange-400" 
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
                          <FormLabel className="text-gray-700 text-lg font-medium">Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="What's this about?" 
                              className="bg-white border-slate-300 text-gray-900 text-lg py-6 rounded-xl focus:border-orange-400 focus:ring-orange-400" 
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
                          <FormLabel className="text-gray-700 text-lg font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe your issue or question in detail..." 
                              rows={6} 
                              className="bg-white border-slate-300 text-gray-900 text-lg rounded-xl focus:border-orange-400 focus:ring-orange-400" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                      <Send className="h-5 w-5 mr-3" />
                      Submit Support Request
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-10">
                  <div className="flex items-center space-x-6">
                    <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-4 shadow-md">
                      <Mail className="h-8 w-8 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium text-xl mb-2">Email Support</h3>
                      <p className="text-gray-700 text-lg">support@div1.ai</p>
                      <p className="text-base text-gray-500 mt-2">We typically respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-10">
                  <div className="flex items-center space-x-6">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-4 shadow-md">
                      <MessageCircle className="h-8 w-8 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium text-xl mb-2">Live Chat</h3>
                      <p className="text-gray-700 text-lg">Available Now</p>
                      <p className="text-base text-gray-500 mt-2">Click the chat button to get instant help</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-10">
                  <div className="flex items-center space-x-6">
                    <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-4 shadow-md">
                      <Phone className="h-8 w-8 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium text-xl mb-2">Phone Support</h3>
                      <p className="text-gray-700 text-lg">(802) 233-2529</p>
                      <p className="text-base text-gray-500 mt-2">Direct phone support for premium users</p>
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
