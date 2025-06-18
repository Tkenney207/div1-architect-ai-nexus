
import React, { useState } from 'react';
import Header from "@/components/Header";
import { ObjectList } from "@/components/ooux/ObjectList";
import { ObjectDetailView } from "@/components/ooux/ObjectDetailView";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useProjects, type Project } from "@/hooks/useProjects";
import { useAuth } from "@/contexts/AuthContext";
import { Archive, Trash2, RotateCcw } from "lucide-react";
import { toast } from 'sonner';

const Projects = () => {
  const { user } = useAuth();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showArchived, setShowArchived] = useState(false);
  
  const {
    projects,
    isLoading,
    archiveProject,
    unarchiveProject,
    deleteProject,
    isArchiving,
    isDeleting,
    isUnarchiving,
  } = useProjects(showArchived);

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <Header />
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Please sign in to view your projects</h2>
            <p className="text-gray-400">You need to be logged in to access your projects.</p>
          </div>
        </div>
      </div>
    );
  }

  const handleProjectAction = (action: string, project: Project) => {
    switch (action) {
      case 'view':
        setSelectedProject(project);
        break;
      case 'edit':
        toast.info('Edit functionality coming soon');
        break;
      case 'duplicate':
        toast.info('Duplicate functionality coming soon');
        break;
      case 'archive':
        archiveProject(project.id);
        break;
      case 'unarchive':
        unarchiveProject(project.id);
        break;
      case 'delete':
        if (window.confirm('Are you sure you want to permanently delete this project? This action cannot be undone.')) {
          deleteProject(project.id);
        }
        break;
      default:
        console.log('Unknown action:', action);
    }
  };

  const handleCreateNew = () => {
    toast.info('Create new project functionality coming soon');
  };

  // Transform projects to match ObjectCard expectations
  const transformedProjects = projects.map(project => ({
    ...project,
    owner: user?.email || 'Unknown',
    updatedAt: project.updated_at,
  }));

  if (selectedProject) {
    const relationships = {
      'Stakeholders': [
        { name: 'Architect Lead', status: 'active' },
        { name: 'General Contractor', status: 'active' },
        { name: 'Client Representative', status: 'active' }
      ],
      'Specifications': [
        { title: 'Division 1 - General Requirements', status: 'complete' },
        { title: 'Division 2 - Site Construction', status: 'draft' }
      ],
      'Sessions': [
        { title: 'Charter Interview', status: 'complete' },
        { title: 'Stakeholder Review', status: 'complete' }
      ]
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <Header />
        <div className="container mx-auto px-6 py-12">
          <ObjectDetailView
            object={selectedProject}
            objectType="Project"
            onBack={() => setSelectedProject(null)}
            onAction={handleProjectAction}
            relationships={relationships}
          >
            {/* Project-specific content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Charter Completion</span>
                        <span>100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Division 1 Specs</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Overall Progress</span>
                        <span>60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Key Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Budget</span>
                      <span className="font-semibold">${selectedProject.budget?.toLocaleString() || 'Not set'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Location</span>
                      <span className="font-semibold">{selectedProject.location || 'Not specified'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Objectives</span>
                      <span className="font-semibold">{selectedProject.objectives?.length || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sustainability Goals</span>
                      <span className="font-semibold">{selectedProject.sustainability_goals?.length || 0}</span>
                    </div>
                    {selectedProject.is_archived && (
                      <div className="pt-2">
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                          Archived Project
                        </Badge>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </ObjectDetailView>
        </div>
      </div>
    );
  }

  const getActions = (project: Project) => {
    if (project.is_archived) {
      return ['view', 'unarchive', 'delete'];
    }
    return ['view', 'edit', 'duplicate', 'archive'];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <Header />
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">
              {showArchived ? 'Archived Projects' : 'Projects'}
            </h1>
            <p className="text-gray-400 mt-2">
              {showArchived 
                ? 'View and manage your archived projects' 
                : 'Manage your active projects'
              }
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant={showArchived ? "default" : "outline"}
              onClick={() => setShowArchived(!showArchived)}
              className="flex items-center gap-2"
            >
              {showArchived ? (
                <>
                  <RotateCcw className="h-4 w-4" />
                  View Active
                </>
              ) : (
                <>
                  <Archive className="h-4 w-4" />
                  View Archived
                </>
              )}
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-400">Loading projects...</p>
          </div>
        ) : (
          <ObjectList
            objects={transformedProjects.map(project => ({
              ...project,
              actions: getActions(project)
            }))}
            objectType="Project"
            actions={showArchived ? ['view', 'unarchive', 'delete'] : ['view', 'edit', 'duplicate', 'archive']}
            onAction={handleProjectAction}
            onCreateNew={showArchived ? undefined : handleCreateNew}
            title={showArchived ? `Archived Projects (${projects.length})` : `Active Projects (${projects.length})`}
            emptyMessage={showArchived ? "No archived projects found" : "No active projects found"}
            searchable={true}
            filterable={true}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
