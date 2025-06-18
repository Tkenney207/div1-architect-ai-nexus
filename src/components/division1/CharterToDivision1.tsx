
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, FileText, Calendar, Building } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Division1Generator } from "@/components/Division1Generator";

interface CharterToDivision1Props {
  onBack: () => void;
}

interface ProjectCharter {
  id: string;
  name: string;
  type: string;
  date: string;
  status: 'draft' | 'complete' | 'approved';
  description: string;
}

// Mock data - replace with actual database query
const mockCharters: ProjectCharter[] = [
  {
    id: '1',
    name: 'Downtown Office Complex',
    type: 'Commercial',
    date: '2024-03-15',
    status: 'complete',
    description: '12-story mixed-use office building with ground floor retail'
  },
  {
    id: '2',
    name: 'Riverside Healthcare Center',
    type: 'Healthcare',
    date: '2024-03-10',
    status: 'approved',
    description: 'Modern healthcare facility with emergency and outpatient services'
  },
  {
    id: '3',
    name: 'Tech Campus Phase 2',
    type: 'Industrial',
    date: '2024-03-08',
    status: 'complete',
    description: 'Technology campus expansion with research and development facilities'
  }
];

export const CharterToDivision1: React.FC<CharterToDivision1Props> = ({ onBack }) => {
  const [selectedCharter, setSelectedCharter] = useState<ProjectCharter | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showGenerator, setShowGenerator] = useState(false);

  const filteredCharters = mockCharters.filter(charter =>
    charter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    charter.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: ProjectCharter['status']) => {
    switch (status) {
      case 'complete':
        return <Badge className="bg-green-600">Complete</Badge>;
      case 'approved':
        return <Badge className="bg-blue-600">Approved</Badge>;
      default:
        return <Badge variant="secondary">Draft</Badge>;
    }
  };

  const handleCharterSelect = (charter: ProjectCharter) => {
    setSelectedCharter(charter);
    setShowGenerator(true);
  };

  if (showGenerator && selectedCharter) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <Button
            variant="ghost"
            onClick={() => setShowGenerator(false)}
            className="text-purple-300 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Charter Selection
          </Button>
          <div>
            <h2 className="text-2xl font-bold text-white">Generating Division 01</h2>
            <p className="text-purple-300">From: {selectedCharter.name}</p>
          </div>
        </div>
        
        <Division1Generator />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-purple-300 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Modules
        </Button>
        <div>
          <h2 className="text-4xl font-bold text-white">Select Project Charter</h2>
          <p className="text-xl text-purple-300">Choose a charter to generate Division 01 specifications</p>
        </div>
      </div>

      {/* Search */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search charters by name or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
            />
          </div>
        </CardContent>
      </Card>

      {/* Charter List */}
      <div className="grid gap-4">
        {filteredCharters.map((charter) => (
          <Card 
            key={charter.id}
            className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 cursor-pointer"
            onClick={() => handleCharterSelect(charter)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600/20 rounded-lg p-3 group-hover:bg-purple-500/30 transition-colors">
                    <FileText className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">
                      {charter.name}
                    </CardTitle>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Building className="h-4 w-4" />
                        <span>{charter.type}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span>{charter.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {getStatusBadge(charter.status)}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">{charter.description}</p>
              <Button
                size="sm"
                className="bg-purple-600 hover:bg-purple-700 group-hover:bg-purple-500"
              >
                Generate Division 01
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCharters.length === 0 && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="pt-6 text-center">
            <p className="text-gray-400">No charters found matching your search criteria.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
