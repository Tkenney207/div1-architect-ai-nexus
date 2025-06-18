
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Archive, Trash2, RotateCcw } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface ObjectCardProps {
  object: any;
  objectType: string;
  actions: string[];
  onAction: (action: string, object: any) => void;
  variant?: 'default' | 'compact' | 'detailed';
  className?: string;
}

export const ObjectCard: React.FC<ObjectCardProps> = ({
  object,
  objectType,
  actions,
  onAction,
  variant = 'default',
  className = ''
}) => {
  const getObjectIcon = (type: string) => {
    const icons = {
      Project: '🏗️',
      Charter: '📋',
      Division1Spec: '📄',
      Specification: '📑',
      User: '👤',
      Session: '💬',
      Stakeholder: '👥',
      Tool: '🔧'
    };
    return icons[type as keyof typeof icons] || '📦';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'draft': 'bg-gray-500',
      'in-progress': 'bg-blue-500',
      'complete': 'bg-green-500',
      'review': 'bg-yellow-500',
      'approved': 'bg-green-600',
      'planning': 'bg-purple-500',
      'charter-complete': 'bg-blue-600'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-500';
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'archive':
        return <Archive className="h-4 w-4 mr-2" />;
      case 'unarchive':
        return <RotateCcw className="h-4 w-4 mr-2" />;
      case 'delete':
        return <Trash2 className="h-4 w-4 mr-2" />;
      default:
        return null;
    }
  };

  const getActionStyle = (action: string) => {
    switch (action) {
      case 'delete':
        return 'text-red-600 hover:text-red-700';
      case 'archive':
        return 'text-yellow-600 hover:text-yellow-700';
      case 'unarchive':
        return 'text-green-600 hover:text-green-700';
      default:
        return '';
    }
  };

  return (
    <Card className={`group hover:shadow-lg transition-all duration-200 ${object.is_archived ? 'opacity-75 border-yellow-200' : ''} ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{getObjectIcon(objectType)}</span>
            <div>
              <CardTitle className="text-lg font-semibold">
                {object.name || object.title || `${objectType} ${object.id?.slice(-6)}`}
              </CardTitle>
              <div className="flex items-center gap-2 mt-1">
                {object.status && (
                  <Badge className={`text-xs ${getStatusColor(object.status)}`}>
                    {object.status.replace('-', ' ')}
                  </Badge>
                )}
                {object.is_archived && (
                  <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-800">
                    Archived
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {actions.map((action) => (
                <DropdownMenuItem 
                  key={action} 
                  onClick={() => onAction(action, object)}
                  className={`capitalize flex items-center ${getActionStyle(action)}`}
                >
                  {getActionIcon(action)}
                  {action.replace('-', ' ')}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      {variant !== 'compact' && (
        <CardContent>
          <div className="space-y-2">
            {object.description && (
              <p className="text-sm text-gray-600 line-clamp-2">{object.description}</p>
            )}
            {object.type && (
              <Badge variant="outline" className="text-xs">
                {object.type}
              </Badge>
            )}
            <div className="flex justify-between text-xs text-gray-500">
              <span>Updated {new Date(object.updatedAt || Date.now()).toLocaleDateString()}</span>
              {object.owner && <span>By {object.owner}</span>}
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};
