import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, FileText, Users, Target, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const ProjectCharter = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D9D6D0' }}>
      <Header />

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight" style={{ color: '#1A2B49' }}>
            What is a 
            <span className="font-medium" style={{ color: '#E98B2A' }}> Project Charter?</span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-sm border p-12" style={{ borderColor: '#F7F3ED' }}>
              <p className="text-xl leading-relaxed mb-8" style={{ color: '#1A2B49' }}>
                A project charter can be the essential foundation for a successful capital or construction project—serving as both formal authorization and a strategic blueprint. It defines the project's scope, objectives, stakeholders, authority structure, and key milestones, aligning the effort with your organization's broader goals. For owners, a well-prepared charter is a powerful tool for establishing governance, driving accountability, and securing stakeholder alignment from the outset.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#1A2B49' }}>
                More than just documentation, the charter serves as your mechanism for clarity and control. It helps prevent scope creep, accelerates informed decision‑making, and empowers your team with a shared direction—greatly improving the chances that your investment stays on track, within budget, and delivers lasting value.
              </p>
            </div>
          </div>

          <Link to="/engage">
            <Button size="lg" style={{ backgroundColor: '#E98B2A', color: '#F7F3ED' }} className="text-lg px-10 py-4 rounded-lg hover:opacity-90 font-medium transition-all">
              Create Your Project Charter
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-light mb-12 text-center" style={{ color: '#1A2B49' }}>
            Benefits of a Strong Project Charter
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Official Authorization */}
            <Card className="bg-white border shadow-sm hover:shadow-md transition-all duration-300" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#E98B2A' }}>
                  <FileText className="h-7 w-7" style={{ color: '#F7F3ED' }} />
                </div>
                <CardTitle className="text-xl font-medium" style={{ color: '#1A2B49' }}>Official Authorization</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="leading-relaxed" style={{ color: '#1A2B49' }}>
                  Grants formal approval to proceed and signals organizational commitment.
                </p>
              </CardContent>
            </Card>

            {/* Strategic Alignment */}
            <Card className="bg-white border shadow-sm hover:shadow-md transition-all duration-300" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#1A2B49' }}>
                  <Target className="h-7 w-7" style={{ color: '#F7F3ED' }} />
                </div>
                <CardTitle className="text-xl font-medium" style={{ color: '#1A2B49' }}>Clear Strategic Alignment</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="leading-relaxed" style={{ color: '#1A2B49' }}>
                  Connects project goals to company objectives, especially critical in large‑scale capital investments.
                </p>
              </CardContent>
            </Card>

            {/* Authority & Responsibilities */}
            <Card className="bg-white border shadow-sm hover:shadow-md transition-all duration-300" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#7C9C95' }}>
                  <Shield className="h-7 w-7" style={{ color: '#F7F3ED' }} />
                </div>
                <CardTitle className="text-xl font-medium" style={{ color: '#1A2B49' }}>Defined Authority & Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="leading-relaxed" style={{ color: '#1A2B49' }}>
                  Clarifies roles and empowers the project manager, reducing confusion and improving accountability.
                </p>
              </CardContent>
            </Card>

            {/* Stakeholder Alignment */}
            <Card className="bg-white border shadow-sm hover:shadow-md transition-all duration-300" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#E98B2A' }}>
                  <Users className="h-7 w-7" style={{ color: '#F7F3ED' }} />
                </div>
                <CardTitle className="text-xl font-medium" style={{ color: '#1A2B49' }}>Unified Stakeholder Alignment</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="leading-relaxed" style={{ color: '#1A2B49' }}>
                  Ensures everyone—from owners to team members—is on the same page from the start.
                </p>
              </CardContent>
            </Card>

            {/* Governance Foundation */}
            <Card className="bg-white border shadow-sm hover:shadow-md transition-all duration-300" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#1A2B49' }}>
                  <CheckCircle className="h-7 w-7" style={{ color: '#F7F3ED' }} />
                </div>
                <CardTitle className="text-xl font-medium" style={{ color: '#1A2B49' }}>Foundation for Governance</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="leading-relaxed" style={{ color: '#1A2B49' }}>
                  Serves as a contract and reference for scope changes, resources, milestones, and risk controls.
                </p>
              </CardContent>
            </Card>

            {/* Performance Baseline */}
            <Card className="bg-white border shadow-sm hover:shadow-md transition-all duration-300" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader className="p-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#7C9C95' }}>
                  <Target className="h-7 w-7" style={{ color: '#F7F3ED' }} />
                </div>
                <CardTitle className="text-xl font-medium" style={{ color: '#1A2B49' }}>Performance Measurement Baseline</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="leading-relaxed" style={{ color: '#1A2B49' }}>
                  Enables tracking of outcomes vs charter objectives rather than just activity completion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-sm border p-12" style={{ borderColor: '#F7F3ED' }}>
            <h3 className="text-3xl font-medium mb-6" style={{ color: '#1A2B49' }}>
              Ready to Create Your Project Charter?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#1A2B49' }}>
              Use our AI-powered platform to guide stakeholder conversations and generate comprehensive Project Charters that align your team and set your project up for success.
            </p>
            <Link to="/engage">
              <Button size="lg" style={{ backgroundColor: '#E98B2A', color: '#F7F3ED' }} className="text-lg px-10 py-4 rounded-lg hover:opacity-90 font-medium transition-all">
                Get Started Now
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCharter;
