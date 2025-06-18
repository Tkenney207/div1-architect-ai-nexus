
import React, { useState } from 'react';
import Header from "@/components/Header";
import { ObjectList } from "@/components/ooux/ObjectList";
import { ObjectDetailView } from "@/components/ooux/ObjectDetailView";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [projects] = useState([
    {
      id: '1',
      name: 'Downtown Office Complex',
      description: 'A 25-story mixed-use development in the downtown core',
      type: 'commercial',
      status: 'charter-complete',
      budget: 50000000,
      location: 'Downtown City Center',
      createdAt: '2024-01-01',
      updatedAt: '2024-01-15',
      owner: 'John Smith',
      objectives: ['LEED Gold certification', 'Efficient space utilization', 'Sustainable design'],
      sustainabilityGoals: ['30% energy reduction', 'Water conservation', 'Green materials']
    },
    {
      id: '2',
      name: 'Green Residential Tower',
      description: 'Eco-friendly residential complex with 200 units',
      type: 'residential',
      status: 'in-progress',
      budget: 25000000,
      location: 'Riverside District',
      createdAt: '2024-01-10',
      updatedAt: '2024-01-14',
      owner: 'Sarah Johnson',
      objectives: ['Affordable housing', 'Community integration', 'Environmental stewardship'],
      sustainabilityGoals: ['Net-zero energy', 'Rainwater harvesting', 'Urban farming spaces']
    }
  ]);

  const handleProjectAction = (action: string, project: any) => {
    switch (action) {
      case 'view':
        setSelectedProject(project);
        break;
      case 'edit':
        console.log('Edit project:', project);
        break;
      case 'duplicate':
        console.log('Duplicate project:', project);
        break;
      case 'archive':
        console.log('Archive project:', project);
        break;
      default:
        console.log('Unknown action:', action);
    }
  };

  const handleCreateNew = () => {
    console.log('Create new project');
  };

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
                      <span className="font-semibold">${selectedProject.budget?.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Location</span>
                      <span className="font-semibold">{selectedProject.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Objectives</span>
                      <span className="font-semibold">{selectedProject.objectives?.length || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sustainability Goals</span>
                      <span className="font-semibold">{selectedProject.sustainabilityGoals?.length || 0}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ObjectDetailView>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <Header />
      <div className="container mx-auto px-6 py-12">
        <ObjectList
          objects={projects}
          objectType="Project"
          actions={['view', 'edit', 'duplicate', 'archive']}
          onAction={handleProjectAction}
          onCreateNew={handleCreateNew}
          title="Projects"
          searchable={true}
          filterable={true}
        />
      </div>
    </div>
  );
};

export default Projects;
