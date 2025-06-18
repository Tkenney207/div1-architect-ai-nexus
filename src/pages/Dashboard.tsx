
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, TrendingUp, Users, FileText, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { ObjectCard } from "@/components/ooux/ObjectCard";

const Dashboard = () => {
  // Mock data - would come from API in real implementation
  const recentProjects = [
    {
      id: '1',
      name: 'Downtown Office Complex',
      type: 'commercial',
      status: 'charter-complete',
      updatedAt: '2024-01-15',
      owner: 'John Smith'
    },
    {
      id: '2',
      name: 'Green Residential Tower',
      type: 'residential',
      status: 'in-progress',
      updatedAt: '2024-01-14',
      owner: 'Sarah Johnson'
    }
  ];

  const handleObjectAction = (action: string, object: any) => {
    console.log(`Action: ${action} on object:`, object);
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
      title: 'Division 1 Specs',
      value: '15',
      icon: TrendingUp,
      change: '+5 generated',
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome back, John!</h1>
          <p className="text-xl text-gray-300">
            Manage your projects, charters, and specifications from your central dashboard.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <Card key={stat.title} className="bg-gray-800/50 border-gray-700">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-300">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-400">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/projects/new">
              <Card className="group hover:shadow-lg transition-all bg-gradient-to-br from-orange-600/20 to-orange-500/20 border-orange-500/30 hover:border-orange-500/50 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-600 rounded-full p-4 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Plus className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">New Project</h3>
                  <p className="text-gray-300">Start a new construction project</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/engage">
              <Card className="group hover:shadow-lg transition-all bg-gradient-to-br from-green-600/20 to-green-500/20 border-green-500/30 hover:border-green-500/50 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-600 rounded-full p-4 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Start Charter</h3>
                  <p className="text-gray-300">Begin AI-guided charter creation</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/division1">
              <Card className="group hover:shadow-lg transition-all bg-gradient-to-br from-blue-600/20 to-blue-500/20 border-blue-500/30 hover:border-blue-500/50 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-600 rounded-full p-4 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Generate Specs</h3>
                  <p className="text-gray-300">Create Division 1 specifications</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Recent Objects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Recent Projects */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recent Projects</h2>
              <Link to="/projects">
                <Button variant="outline" size="sm">View All</Button>
              </Link>
            </div>
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <ObjectCard
                  key={project.id}
                  object={project}
                  objectType="Project"
                  actions={['view', 'edit', 'duplicate']}
                  onAction={handleObjectAction}
                  variant="compact"
                />
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-gray-800/30">
                <div className="bg-green-600 rounded-full p-2">
                  <FileText className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white">Charter completed for Downtown Office Complex</p>
                  <p className="text-sm text-gray-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-gray-800/30">
                <div className="bg-blue-600 rounded-full p-2">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white">New stakeholder added to Green Residential Tower</p>
                  <p className="text-sm text-gray-400">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-gray-800/30">
                <div className="bg-orange-600 rounded-full p-2">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white">Division 1 specification generated</p>
                  <p className="text-sm text-gray-400">2 days ago</p>
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
