
import { useState } from "react";
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

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    title: ""
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { signUp } = useAuth();
  const navigate = useNavigate();

  const validateWorkEmail = (email: string) => {
    const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com'];
    const domain = email.split('@')[1]?.toLowerCase();
    return !personalDomains.includes(domain);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'email') {
      if (value && !validateWorkEmail(value)) {
        setEmailError("Please use a work email address");
      } else {
        setEmailError("");
      }
    }

    if (name === 'confirmPassword' || name === 'password') {
      if (name === 'confirmPassword') {
        if (value !== formData.password) {
          setPasswordError("Passwords do not match");
        } else {
          setPasswordError("");
        }
      } else {
        if (formData.confirmPassword && value !== formData.confirmPassword) {
          setPasswordError("Passwords do not match");
        } else {
          setPasswordError("");
        }
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!validateWorkEmail(formData.email)) {
      setEmailError("Please use a work email address");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const { error } = await signUp(formData.email, formData.password, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        company: formData.company,
        title: formData.title
      });

      if (error) {
        console.error('Signup error:', error);
        if (error.message.includes('already registered')) {
          toast.error("This email is already registered. Please sign in instead.");
        } else {
          toast.error(error.message || "Failed to create account");
        }
      } else {
        toast.success("Account created successfully! Please check your email to verify your account.");
        navigate('/signin');
      }
    } catch (error) {
      console.error('Signup error:', error);
      toast.error("Failed to create account");
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
            <h1 className="text-3xl font-bold mb-2" style={{ color: '#1A2B49' }}>Get Started Free</h1>
            <p style={{ color: '#1A2B49' }}>Join thousands of AEC professionals transforming their workflow</p>
          </div>

          <Card className="bg-white border" style={{ borderColor: '#F7F3ED' }}>
            <CardHeader>
              <CardTitle style={{ color: '#1A2B49' }}>Create your account</CardTitle>
              <CardDescription style={{ color: '#1A2B49' }}>
                Start your journey with our AI-driven construction intelligence platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" style={{ color: '#1A2B49' }}>First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="border placeholder:text-slate-600"
                      style={{ borderColor: '#D9D6D0', backgroundColor: '#F7F3ED', color: '#1A2B49' }}
                      required
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" style={{ color: '#1A2B49' }}>Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="border placeholder:text-slate-600"
                      style={{ borderColor: '#D9D6D0', backgroundColor: '#F7F3ED', color: '#1A2B49' }}
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" style={{ color: '#1A2B49' }}>Work Email</Label>
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
                  {emailError && (
                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="title" style={{ color: '#1A2B49' }}>Job Title</Label>
                  <Input
                    id="title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="border placeholder:text-slate-600"
                    style={{ borderColor: '#D9D6D0', backgroundColor: '#F7F3ED', color: '#1A2B49' }}
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <Label htmlFor="company" style={{ color: '#1A2B49' }}>Company</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
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
                      minLength={6}
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

                <div>
                  <Label htmlFor="confirmPassword" style={{ color: '#1A2B49' }}>Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="border placeholder:text-slate-600"
                    style={{ borderColor: '#D9D6D0', backgroundColor: '#F7F3ED', color: '#1A2B49' }}
                    required
                    disabled={loading}
                  />
                  {passwordError && (
                    <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-white font-semibold py-3 rounded-full hover:opacity-90"
                  style={{ backgroundColor: '#E98B2A' }}
                  disabled={loading}
                >
                  {loading ? "Creating Account..." : "Create Account"}
                  {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p style={{ color: '#1A2B49' }}>
                  Already have an account?{" "}
                  <Link to="/signin" className="font-medium hover:opacity-70" style={{ color: '#E98B2A' }}>
                    Sign in
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

export default Signup;
