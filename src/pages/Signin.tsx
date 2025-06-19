
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Div1Logo from "@/components/Div1Logo";
import Header from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { signIn, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await signIn(formData.email, formData.password);

      if (error) {
        console.error('Signin error:', error);
        if (error.message.includes('Invalid login credentials')) {
          toast.error("Invalid email or password");
        } else if (error.message.includes('Email not confirmed')) {
          toast.error("Please check your email and confirm your account first");
        } else {
          toast.error(error.message || "Failed to sign in");
        }
      } else {
        toast.success("Welcome back!");
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Signin error:', error);
      toast.error("Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D9D6D0' }}>
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <Div1Logo size="5xl" className="mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-2" style={{ color: '#1A2B49' }}>Welcome Back</h1>
            <p style={{ color: '#1A2B49' }}>Login to continue your construction intelligence journey</p>
          </div>

          <Card className="bg-white border" style={{ borderColor: '#F7F3ED' }}>
            <CardHeader>
              <CardTitle style={{ color: '#1A2B49' }}>Login to your account</CardTitle>
              <CardDescription style={{ color: '#1A2B49' }}>
                Access your AI-driven construction intelligence platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email" style={{ color: '#1A2B49' }}>Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border placeholder:text-slate-600"
                    style={{ borderColor: '#D9D6D0', backgroundColor: '#F7F3ED', color: '#1A2B49' }}
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <Label htmlFor="password" style={{ color: '#1A2B49' }}>Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleInputChange}
                      className="border placeholder:text-slate-600 pr-10"
                      style={{ borderColor: '#D9D6D0', backgroundColor: '#F7F3ED', color: '#1A2B49' }}
                      required
                      disabled={loading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-70"
                      style={{ color: '#7C9C95' }}
                      disabled={loading}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Link to="/forgot-password" className="text-sm hover:opacity-70" style={{ color: '#E98B2A' }}>
                    Forgot your password?
                  </Link>
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-white font-semibold py-3 rounded-full hover:opacity-90"
                  style={{ backgroundColor: '#E98B2A' }}
                  disabled={loading}
                >
                  {loading ? "Signing In..." : "Login"}
                  {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p style={{ color: '#1A2B49' }}>
                  Don't have an account?{" "}
                  <Link to="/signup" className="font-medium hover:opacity-70" style={{ color: '#E98B2A' }}>
                    Sign up for free
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Signin;
