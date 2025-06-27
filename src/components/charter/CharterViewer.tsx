
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Edit, Download, Share2 } from "lucide-react";

interface CharterViewerProps {
  charter: any;
  onEdit: () => void;
  onClose: () => void;
}

export const CharterViewer: React.FC<CharterViewerProps> = ({
  charter,
  onEdit,
  onClose
}) => {
  const handleDownload = () => {
    // Implementation for downloading charter as PDF
    console.log('Download charter');
  };

  const handleShare = () => {
    // Implementation for sharing charter
    console.log('Share charter');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Project Charter</h1>
            <p className="text-gray-600">{charter.projectName}</p>
          </div>
          <div className="flex gap-3">
            <Button onClick={onEdit} className="flex items-center gap-2">
              <Edit className="h-4 w-4" />
              Edit Charter
            </Button>
            <Button variant="outline" onClick={handleDownload} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download
            </Button>
            <Button variant="outline" onClick={handleShare} className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Project Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Project Name</h3>
                <p className="text-gray-700">{charter.projectName}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700">{charter.projectDescription}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Timeline</h3>
                  <p className="text-gray-700">{charter.timeline}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Budget</h3>
                  <p className="text-gray-700">{charter.budget}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {charter.objectives?.map((objective: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1">
                      {index + 1}
                    </Badge>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stakeholders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {charter.stakeholders?.map((stakeholder: string, index: number) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                    <Badge variant="secondary">
                      {index + 1}
                    </Badge>
                    <span className="text-gray-700">{stakeholder}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
