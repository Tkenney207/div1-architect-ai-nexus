
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Edit, Share, Download } from "lucide-react";

interface ObjectDetailViewProps {
  object: any;
  objectType: string;
  onBack: () => void;
  onAction: (action: string, object: any) => void;
  relationships?: { [key: string]: any[] };
  children?: React.ReactNode;
}

export const ObjectDetailView: React.FC<ObjectDetailViewProps> = ({
  object,
  objectType,
  onBack,
  onAction,
  relationships = {},
  children
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

  const commonActions = ['edit', 'share', 'export'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center space-x-3">
            <span className="text-3xl">{getObjectIcon(objectType)}</span>
            <div>
              <h1 className="text-3xl font-bold text-white">
                {object.name || object.title || `${objectType} Details`}
              </h1>
              {object.status && (
                <Badge className="mt-2">
                  {object.status.replace('-', ' ')}
                </Badge>
              )}
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => onAction('edit', object)}>
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
          <Button variant="outline" onClick={() => onAction('share', object)}>
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" onClick={() => onAction('export', object)}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Object Properties */}
          <Card>
            <CardHeader>
              <CardTitle>Properties</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {object.description && (
                  <div>
                    <label className="text-sm font-medium text-gray-300">Description</label>
                    <p className="text-gray-100">{object.description}</p>
                  </div>
                )}
                {object.type && (
                  <div>
                    <label className="text-sm font-medium text-gray-300">Type</label>
                    <p className="text-gray-100">{object.type}</p>
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <label className="font-medium text-gray-300">Created</label>
                    <p className="text-gray-100">{new Date(object.createdAt || Date.now()).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <label className="font-medium text-gray-300">Updated</label>
                    <p className="text-gray-100">{new Date(object.updatedAt || Date.now()).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Custom Content */}
          {children}
        </div>

        {/* Sidebar - Relationships */}
        <div className="space-y-6">
          {Object.entries(relationships).map(([relationshipType, relatedObjects]) => (
            <Card key={relationshipType}>
              <CardHeader>
                <CardTitle className="text-lg">
                  {relationshipType} ({relatedObjects.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {relatedObjects.slice(0, 5).map((relatedObj, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-gray-100">
                      <span className="text-sm">{relatedObj.name || relatedObj.title || 'Unnamed'}</span>
                      <Badge variant="outline" className="text-xs">
                        {relatedObj.status || 'Active'}
                      </Badge>
                    </div>
                  ))}
                  {relatedObjects.length > 5 && (
                    <Button variant="ghost" size="sm" className="w-full">
                      View all {relatedObjects.length}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
