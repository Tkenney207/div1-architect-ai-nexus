
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface NavigationItem {
  label: string;
  path: string;
  objectType: string;
  icon: string;
  count?: number;
  description: string;
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Projects',
    path: '/projects',
    objectType: 'Project',
    icon: '🏗️',
    description: 'Manage all your construction projects'
  },
  {
    label: 'Engage',
    path: '/engage',
    objectType: 'Charter',
    icon: '📋',
    description: 'Create project charters through AI interviews'
  },
  {
    label: 'Division 1',
    path: '/division1',
    objectType: 'Division1Spec',
    icon: '📄',
    description: 'Generate CSI Division 1 specifications'
  },
  {
    label: 'Master1',
    path: '/master1',
    objectType: 'Specification',
    icon: '📑',
    description: 'Review and process specifications'
  },
  {
    label: 'Sessions',
    path: '/sessions',
    objectType: 'Session',
    icon: '💬',
    description: 'View conversation and work sessions'
  },
  {
    label: 'Stakeholders',
    path: '/stakeholders',
    objectType: 'Stakeholder',
    icon: '👥',
    description: 'Manage project stakeholders'
  }
];

export const ObjectNavigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="space-y-2">
      {navigationItems.map((item) => {
        const isActive = location.pathname === item.path;
        
        return (
          <Link key={item.path} to={item.path}>
            <Button
              variant={isActive ? 'default' : 'ghost'}
              className={`w-full justify-start space-x-3 ${
                isActive 
                  ? 'bg-orange-600 hover:bg-orange-700' 
                  : 'hover:bg-gray-800'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <div className="flex-1 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item.label}</span>
                  {item.count && (
                    <Badge variant="secondary" className="ml-2">
                      {item.count}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-1">{item.description}</p>
              </div>
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};
