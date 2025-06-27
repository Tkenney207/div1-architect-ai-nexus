
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
    console.log('Download charter');
  };

  const handleShare = () => {
    console.log('Share charter');
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: '#D9D6D0' }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold" style={{ color: '#1A2B49' }}>Project Charter</h1>
            <p style={{ color: '#7C9C95' }}>{charter.projectName}</p>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={onEdit} 
              className="flex items-center gap-2 text-white hover:opacity-90"
              style={{ backgroundColor: '#E98B2A' }}
            >
              <Edit className="h-4 w-4" />
              Edit Charter
            </Button>
            <Button 
              variant="outline" 
              onClick={handleDownload} 
              className="flex items-center gap-2 border-2 hover:opacity-70 text-white"
              style={{ borderColor: '#7C9C95', backgroundColor: '#7C9C95' }}
            >
              <Download className="h-4 w-4" />
              Download
            </Button>
            <Button 
              variant="outline" 
              onClick={handleShare} 
              className="flex items-center gap-2 border-2 hover:opacity-70 text-white"
              style={{ borderColor: '#7C9C95', backgroundColor: '#7C9C95' }}
            >
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button 
              variant="outline" 
              onClick={onClose}
              className="border-2 hover:opacity-70 text-white"
              style={{ borderColor: '#1A2B49', backgroundColor: '#1A2B49' }}
            >
              Close
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2" style={{ color: '#1A2B49' }}>
                <FileText className="h-5 w-5" style={{ color: '#E98B2A' }} />
                Project Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: '#1A2B49' }}>Project Name</h3>
                <p style={{ color: '#1A2B49' }}>{charter.projectName}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2" style={{ color: '#1A2B49' }}>Description</h3>
                <p style={{ color: '#1A2B49' }}>{charter.projectDescription}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#1A2B49' }}>Timeline</h3>
                  <p style={{ color: '#1A2B49' }}>{charter.timeline}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#1A2B49' }}>Budget</h3>
                  <p style={{ color: '#1A2B49' }}>{charter.budget}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
            <CardHeader>
              <CardTitle style={{ color: '#1A2B49' }}>Project Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {charter.objectives?.map((objective: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <Badge 
                      variant="outline" 
                      className="mt-1"
                      style={{ borderColor: '#7C9C95', color: '#1A2B49' }}
                    >
                      {index + 1}
                    </Badge>
                    <span style={{ color: '#1A2B49' }}>{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
            <CardHeader>
              <CardTitle style={{ color: '#1A2B49' }}>Stakeholders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {charter.stakeholders?.map((stakeholder: string, index: number) => (
                  <div key={index} className="flex items-center gap-2 p-2 rounded" style={{ backgroundColor: '#F7F3ED' }}>
                    <Badge 
                      variant="secondary"
                      style={{ backgroundColor: '#7C9C95', color: 'white' }}
                    >
                      {index + 1}
                    </Badge>
                    <span style={{ color: '#1A2B49' }}>{stakeholder}</span>
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
