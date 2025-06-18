
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Upload, FileText, AlertCircle, CheckCircle, Lightbulb, Download } from "lucide-react";

interface Division1ReviewProps {
  onBack: () => void;
}

interface ReviewResult {
  score: number;
  suggestions: ReviewSuggestion[];
  compliance: ComplianceCheck[];
  improvements: string[];
}

interface ReviewSuggestion {
  section: string;
  type: 'warning' | 'suggestion' | 'improvement';
  message: string;
  priority: 'high' | 'medium' | 'low';
}

interface ComplianceCheck {
  standard: string;
  status: 'compliant' | 'non-compliant' | 'needs-review';
  details: string;
}

export const Division1Review: React.FC<Division1ReviewProps> = ({ onBack }) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [reviewResult, setReviewResult] = useState<ReviewResult | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const analyzeDocument = async () => {
    if (!uploadedFile) return;

    setIsAnalyzing(true);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockResult: ReviewResult = {
      score: 82,
      suggestions: [
        {
          section: '011000',
          type: 'improvement',
          message: 'Consider adding more specific contract type details for better clarity',
          priority: 'medium'
        },
        {
          section: '013300',
          type: 'warning',
          message: 'Submittal procedures section lacks digital submission requirements',
          priority: 'high'
        },
        {
          section: '014000',
          type: 'suggestion',
          message: 'Quality requirements could benefit from third-party inspection protocols',
          priority: 'low'
        }
      ],
      compliance: [
        {
          standard: 'CSI MasterFormat 2020',
          status: 'compliant',
          details: 'Document follows current CSI formatting standards'
        },
        {
          standard: 'AIA Document Requirements',
          status: 'needs-review',
          details: 'Some sections may need alignment with latest AIA standards'
        }
      ],
      improvements: [
        'Add sustainability requirements section',
        'Include BIM coordination protocols',
        'Expand waste management procedures',
        'Add digital project delivery requirements'
      ]
    };
    
    setReviewResult(mockResult);
    setIsAnalyzing(false);
  };

  const getSuggestionIcon = (type: ReviewSuggestion['type']) => {
    switch (type) {
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-orange-500" />;
      case 'improvement':
        return <Lightbulb className="h-4 w-4 text-blue-500" />;
      default:
        return <CheckCircle className="h-4 w-4 text-green-500" />;
    }
  };

  const getPriorityBadge = (priority: ReviewSuggestion['priority']) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-red-600">High Priority</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-600">Medium Priority</Badge>;
      default:
        return <Badge variant="secondary">Low Priority</Badge>;
    }
  };

  const getComplianceStatus = (status: ComplianceCheck['status']) => {
    switch (status) {
      case 'compliant':
        return <Badge className="bg-green-600">Compliant</Badge>;
      case 'non-compliant':
        return <Badge className="bg-red-600">Non-Compliant</Badge>;
      default:
        return <Badge className="bg-yellow-600">Needs Review</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-green-300 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Modules
        </Button>
        <div>
          <h2 className="text-4xl font-bold text-white">Division 01 Review & Enhancement</h2>
          <p className="text-xl text-green-300">Upload your specification for AI-powered analysis</p>
        </div>
      </div>

      {/* Upload Section */}
      {!reviewResult && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Upload className="h-6 w-6 text-green-400" />
              <span>Upload Division 01 Specification</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center hover:border-green-500/50 transition-colors">
              <input
                type="file"
                accept=".pdf,.docx,.doc,.txt"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="space-y-4">
                  <div className="bg-green-600/20 rounded-full p-4 w-fit mx-auto">
                    <FileText className="h-8 w-8 text-green-400" />
                  </div>
                  <div>
                    <p className="text-lg text-white mb-2">
                      Drag and drop your file here, or click to browse
                    </p>
                    <p className="text-sm text-gray-400">
                      Supports PDF, DOCX, DOC, and TXT files
                    </p>
                  </div>
                </div>
              </label>
            </div>

            {uploadedFile && (
              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-green-400" />
                    <div>
                      <p className="text-white font-medium">{uploadedFile.name}</p>
                      <p className="text-sm text-gray-400">
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={analyzeDocument}
                    disabled={isAnalyzing}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    {isAnalyzing ? 'Analyzing...' : 'Analyze Document'}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Analysis Results */}
      {reviewResult && (
        <div className="space-y-6">
          {/* Overall Score */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Analysis Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-green-400">{reviewResult.score}%</p>
                  <p className="text-gray-300">Overall Quality Score</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-white">{reviewResult.suggestions.length} Suggestions</p>
                  <p className="text-sm text-gray-400">Ready for implementation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Suggestions */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">AI Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reviewResult.suggestions.map((suggestion, index) => (
                  <div key={index} className="bg-slate-700/30 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {getSuggestionIcon(suggestion.type)}
                        <p className="font-medium text-white">Section {suggestion.section}</p>
                      </div>
                      {getPriorityBadge(suggestion.priority)}
                    </div>
                    <p className="text-gray-300">{suggestion.message}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Compliance Check */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Standards Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reviewResult.compliance.map((check, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div>
                      <p className="font-medium text-white">{check.standard}</p>
                      <p className="text-sm text-gray-400">{check.details}</p>
                    </div>
                    {getComplianceStatus(check.status)}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Improvements */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Recommended Improvements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {reviewResult.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{improvement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6">
              <div className="flex space-x-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Download className="h-4 w-4 mr-2" />
                  Download Enhanced Version
                </Button>
                <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-600 hover:text-white">
                  Apply All Suggestions
                </Button>
                <Button variant="ghost" onClick={() => setReviewResult(null)} className="text-gray-400 hover:text-white">
                  Upload New Document
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
