import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, TrendingUp, Users, FileText, Calendar, Edit, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { ObjectCard } from "@/components/ooux/ObjectCard";
import { CharterManager } from "@/components/charter/CharterManager";

const Dashboard = () => {
  const [showCharterManager, setShowCharterManager] = useState(false);
  const [charterMode, setCharterMode] = useState<'view' | 'edit' | 'create'>('edit');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');

  // Mock data - would come from API in real implementation
  const recentProjects = [
    {
      id: '1',
      name: 'Downtown Office Complex',
      type: 'commercial',
      status: 'charter-complete',
      updatedAt: '2024-01-15',
      owner: 'John Smith',
      hasCharter: true
    },
    {
      id: '2',
      name: 'Green Residential Tower',
      type: 'residential',
      status: 'in-progress',
      updatedAt: '2024-01-14',
      owner: 'Sarah Johnson',
      hasCharter: false
    }
  ];

  const handleObjectAction = (action: string, object: any) => {
    console.log(`Action: ${action} on object:`, object);
    
    if (action === 'view-charter' || action === 'edit-charter') {
      setSelectedProjectId(object.id);
      setCharterMode(action === 'view-charter' ? 'view' : 'edit');
      setShowCharterManager(true);
    }
  };

  const handleEditCharter = () => {
    setCharterMode('edit');
    setSelectedProjectId('current'); // Or get from context
    setShowCharterManager(true);
  };

  const stats = [
    {
      title: 'Active Projects',
      value: '12',
      icon: FileText,
      change: '+2 this week',
      color: 'text-blue-400'
    },
    {
      title: 'Completed Charters',
      value: '8',
      icon: Users,
      change: '+3 this month',
      color: 'text-green-400'
    },
    {
      title: 'Charter Sessions',
      value: '24',
      icon: TrendingUp,
      change: '+8 completed',
      color: 'text-orange-400'
    },
    {
      title: 'Active Sessions',
      value: '4',
      icon: Calendar,
      change: 'Today',
      color: 'text-purple-400'
    }
  ];

  if (showCharterManager) {
    return (
      <CharterManager
        projectId={selectedProjectId}
        mode={charterMode}
        onClose={() => setShowCharterManager(false)}
        initialCharter={charterMode === 'view' ? {
          projectName: 'Downtown Office Complex',
          projectDescription: 'A modern office complex featuring sustainable design and smart building technology.',
          objectives: ['Complete construction within 18 months', 'Achieve LEED Gold certification', 'Stay within $2.5M budget'],
          stakeholders: ['John Smith - Project Manager', 'Sarah Johnson - Lead Architect', 'Mike Brown - General Contractor'],
          timeline: '18 months',
          budget: '$2,500,000'
        } : undefined}
      />
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D9D6D0' }}>
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#1A2B49' }}>Welcome back, John!</h1>
          <p className="text-xl" style={{ color: '#1A2B49' }}>
            Manage your projects and charters from your central dashboard.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <Card key={stat.title} className="bg-white border" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium" style={{ color: '#1A2B49' }}>
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-5 w-5" style={{ color: '#E98B2A' }} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2" style={{ color: '#1A2B49' }}>
                  {stat.value}
                </div>
                <p className="text-sm" style={{ color: '#7C9C95' }}>{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#1A2B49' }}>Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/projects/new">
              <Card className="group hover:shadow-lg transition-all bg-white border-2 hover:border-opacity-70 cursor-pointer" style={{ borderColor: '#E98B2A' }}>
                <CardContent className="p-6 text-center">
                  <div className="rounded-full p-4 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#E98B2A' }}>
                    <Plus className="h-8 w-8" style={{ color: '#F7F3ED' }} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#1A2B49' }}>New Project</h3>
                  <p style={{ color: '#7C9C95' }}>Start a new construction project</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/engage">
              <Card className="group hover:shadow-lg transition-all bg-white border-2 hover:border-opacity-70 cursor-pointer" style={{ borderColor: '#7C9C95' }}>
                <CardContent className="p-6 text-center">
                  <div className="rounded-full p-4 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#7C9C95' }}>
                    <Users className="h-8 w-8" style={{ color: '#F7F3ED' }} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#1A2B49' }}>Start Charter</h3>
                  <p style={{ color: '#7C9C95' }}>Begin AI-guided charter creation</p>
                </CardContent>
              </Card>
            </Link>

            <Card 
              className="group hover:shadow-lg transition-all bg-white border-2 hover:border-opacity-70 cursor-pointer" 
              style={{ borderColor: '#1A2B49' }}
              onClick={handleEditCharter}
            >
              <CardContent className="p-6 text-center">
                <div className="rounded-full p-4 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#1A2B49' }}>
                  <Edit className="h-8 w-8" style={{ color: '#F7F3ED' }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#1A2B49' }}>Edit Charter</h3>
                <p style={{ color: '#7C9C95' }}>Review and edit with AI assistance</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Objects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Recent Projects */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold" style={{ color: '#1A2B49' }}>Recent Projects</h2>
              <Link to="/projects">
                <Button variant="outline" size="sm" className="border-2 hover:opacity-70" style={{ borderColor: '#1A2B49', color: '#1A2B49' }}>View All</Button>
              </Link>
            </div>
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-lg transition-all duration-200" style={{ backgroundColor: '#1A2B49' }}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🏗️</span>
                        <div>
                          <CardTitle className="text-lg font-semibold text-white">
                            {project.name}
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge className={`text-xs ${project.status === 'charter-complete' ? 'bg-blue-600' : 'bg-blue-500'}`}>
                              {project.status.replace('-', ' ')}
                            </Badge>
                            {project.type && (
                              <Badge variant="outline" className="text-xs border-gray-300 text-gray-300">
                                {project.type}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleObjectAction('view-charter', project)}
                          className="border-2 text-white hover:text-gray-900"
                          style={{ borderColor: '#7C9C95', backgroundColor: 'transparent' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#7C9C95';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleObjectAction('edit-charter', project)}
                          className="border-2 text-white hover:text-gray-900"
                          style={{ borderColor: '#E98B2A', backgroundColor: 'transparent' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#E98B2A';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          {project.hasCharter ? 'Edit' : 'Create Charter'}
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-xs text-gray-300">
                      <span>Updated {new Date(project.updatedAt).toLocaleDateString()}</span>
                      <span>By {project.owner}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#1A2B49' }}>Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-white" style={{ borderLeft: '4px solid #7C9C95' }}>
                <div className="rounded-full p-2" style={{ backgroundColor: '#7C9C95' }}>
                  <FileText className="h-4 w-4" style={{ color: '#F7F3ED' }} />
                </div>
                <div className="flex-1">
                  <p style={{ color: '#1A2B49' }}>Charter completed for Downtown Office Complex</p>
                  <p className="text-sm" style={{ color: '#7C9C95' }}>2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-white" style={{ borderLeft: '4px solid #1A2B49' }}>
                <div className="rounded-full p-2" style={{ backgroundColor: '#1A2B49' }}>
                  <Users className="h-4 w-4" style={{ color: '#F7F3ED' }} />
                </div>
                <div className="flex-1">
                  <p style={{ color: '#1A2B49' }}>New stakeholder added to Green Residential Tower</p>
                  <p className="text-sm" style={{ color: '#7C9C95' }}>1 day ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-white" style={{ borderLeft: '4px solid #E98B2A' }}>
                <div className="rounded-full p-2" style={{ backgroundColor: '#E98B2A' }}>
                  <TrendingUp className="h-4 w-4" style={{ color: '#F7F3ED' }} />
                </div>
                <div className="flex-1">
                  <p style={{ color: '#1A2B49' }}>Charter session completed successfully</p>
                  <p className="text-sm" style={{ color: '#7C9C95' }}>2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
