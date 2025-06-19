import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Factory, 
  Shield, 
  Leaf, 
  Gauge,
  FileText,
  TrendingUp,
  Building
} from "lucide-react";
import { SpecificationReviewWindow } from "./SpecificationReviewWindow";
import { useSpecificationReview } from "@/hooks/useSpecificationReview";

interface DocumentAnalysis {
  manufacturerCompliance: ManufacturerAnalysis[];
  codeCompliance: CodeCompliance[];
  materialStandards: MaterialStandard[];
  sustainabilityMetrics: SustainabilityMetric[];
  performanceSpecs: PerformanceSpec[];
  overview: AnalysisOverview;
}

interface ManufacturerAnalysis {
  manufacturer: string;
  products: string[];
  status: 'current' | 'outdated' | 'discontinued';
  alternatives?: string[];
  lastUpdated: string;
}

interface CodeCompliance {
  code: string;
  section: string;
  status: 'compliant' | 'non-compliant' | 'requires-update';
  currentVersion: string;
  specifiedVersion: string;
  description: string;
  recommendations?: string;
}

interface MaterialStandard {
  standard: string;
  material: string;
  status: 'compliant' | 'outdated' | 'missing';
  currentStandard: string;
  specifiedStandard: string;
  criticalityLevel: 'high' | 'medium' | 'low';
}

interface SustainabilityMetric {
  category: string;
  metric: string;
  value: string;
  benchmark: string;
  status: 'exceeds' | 'meets' | 'below' | 'not-specified';
  recommendations?: string;
}

interface PerformanceSpec {
  component: string;
  specification: string;
  measuredValue: string;
  requiredValue: string;
  status: 'pass' | 'fail' | 'marginal';
  testMethod: string;
}

interface AnalysisOverview {
  overallCompliance: number;
  criticalIssues: number;
  warningsCount: number;
  upToDatePercentage: number;
  lastReviewDate: string;
}

interface SpecificationAnalysisProps {
  fileName: string;
  analysis: DocumentAnalysis;
}

export const SpecificationAnalysis: React.FC<SpecificationAnalysisProps> = ({ fileName, analysis }) => {
  const [showReviewWindow, setShowReviewWindow] = useState(false);
  const {
    suggestions,
    setSuggestions,
    generateSuggestions,
    approveSuggestion,
    rejectSuggestion,
    approveAllSuggestions,
    downloadRevisedSpecification
  } = useSpecificationReview();

  const handleReviewChanges = () => {
    // Generate suggestions for this file if not already generated
    if (suggestions.length === 0) {
      const newSuggestions = generateSuggestions(fileName);
      setSuggestions(newSuggestions);
    }
    setShowReviewWindow(true);
  };

  const handleCloseReview = () => {
    setShowReviewWindow(false);
  };

  const handleDownloadRevised = () => {
    const approvedSuggestions = suggestions.filter(s => s.status === 'approved');
    downloadRevisedSpecification(fileName, approvedSuggestions);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'compliant':
      case 'current':
      case 'pass':
      case 'exceeds':
      case 'meets':
        return <CheckCircle className="h-4 w-4" style={{ color: '#7C9C95' }} />;
      case 'requires-update':
      case 'outdated':
      case 'marginal':
      case 'below':
        return <AlertTriangle className="h-4 w-4" style={{ color: '#B04A4A' }} />;
      case 'non-compliant':
      case 'discontinued':
      case 'fail':
      case 'missing':
      case 'not-specified':
        return <XCircle className="h-4 w-4" style={{ color: '#B04A4A' }} />;
      default:
        return <AlertTriangle className="h-4 w-4" style={{ color: '#7C9C95' }} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant':
      case 'current':
      case 'pass':
      case 'exceeds':
      case 'meets':
        return '#7C9C95';
      case 'requires-update':
      case 'outdated':
      case 'marginal':
      case 'below':
        return '#B04A4A';
      case 'non-compliant':
      case 'discontinued':
      case 'fail':
      case 'missing':
      case 'not-specified':
        return '#B04A4A';
      default:
        return '#7C9C95';
    }
  };

  const hasIssue = (status: string) => {
    return ['requires-update', 'outdated', 'marginal', 'below', 'non-compliant', 'discontinued', 'fail', 'missing', 'not-specified'].includes(status);
  };

  return (
    <>
      <div className="space-y-6 mt-6">
        {/* Overview */}
        <Card className="bg-white border" style={{ borderColor: '#D9D6D0' }}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between" style={{ color: '#1A2B49' }}>
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5" style={{ color: '#E98B2A' }} />
                <span>Analysis Overview - {fileName}</span>
              </div>
              <Button 
                size="sm"
                className="text-white"
                style={{ backgroundColor: '#E98B2A' }}
                onClick={handleReviewChanges}
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Review Changes
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: '#E98B2A' }}>{analysis.overview.overallCompliance}%</div>
                <div className="text-sm" style={{ color: '#7C9C95' }}>Overall Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: '#B04A4A' }}>{analysis.overview.criticalIssues}</div>
                <div className="text-sm" style={{ color: '#7C9C95' }}>Critical Issues</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: '#B04A4A' }}>{analysis.overview.warningsCount}</div>
                <div className="text-sm" style={{ color: '#7C9C95' }}>Warnings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: '#7C9C95' }}>{analysis.overview.upToDatePercentage}%</div>
                <div className="text-sm" style={{ color: '#7C9C95' }}>Up-to-Date</div>
              </div>
            </div>
            <Progress value={analysis.overview.overallCompliance} className="w-full" />
          </CardContent>
        </Card>

        {/* Manufacturer Compliance */}
        <Card className="border" style={{ backgroundColor: '#C6A664', borderColor: '#D9D6D0' }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3" style={{ color: '#1A2B49' }}>
              <Factory className="h-5 w-5" style={{ color: '#E98B2A' }} />
              <span>Manufacturer Compliance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analysis.manufacturerCompliance.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start justify-between p-4 rounded-lg" 
                  style={{ 
                    backgroundColor: '#F7F3ED',
                    border: hasIssue(item.status) ? '2px solid #B04A4A' : 'none'
                  }}
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      {getStatusIcon(item.status)}
                      <h4 className="font-semibold" style={{ color: '#1A2B49' }}>{item.manufacturer}</h4>
                      <Badge className="text-white" style={{ backgroundColor: getStatusColor(item.status) }}>
                        {item.status}
                      </Badge>
                    </div>
                    <div className="text-sm mb-2" style={{ color: '#1A2B49' }}>
                      Products: {item.products.join(', ')}
                    </div>
                    <div className="text-xs" style={{ color: '#7C9C95' }}>
                      Last Updated: {new Date(item.lastUpdated).toLocaleDateString()}
                    </div>
                    {item.alternatives && (
                      <div className="text-sm mt-2" style={{ color: '#E98B2A' }}>
                        Alternatives: {item.alternatives.join(', ')}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Code Compliance */}
        <Card className="border" style={{ backgroundColor: '#C6A664', borderColor: '#D9D6D0' }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3" style={{ color: '#1A2B49' }}>
              <Building className="h-5 w-5" style={{ color: '#E98B2A' }} />
              <span>Building Code Compliance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analysis.codeCompliance.map((item, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg" 
                  style={{ 
                    backgroundColor: '#F7F3ED',
                    border: hasIssue(item.status) ? '2px solid #B04A4A' : 'none'
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(item.status)}
                      <h4 className="font-semibold" style={{ color: '#1A2B49' }}>{item.code}</h4>
                      <Badge className="text-white" style={{ backgroundColor: getStatusColor(item.status) }}>
                        {item.status}
                      </Badge>
                    </div>
                    <div className="text-sm" style={{ color: '#7C9C95' }}>
                      {item.specifiedVersion} → {item.currentVersion}
                    </div>
                  </div>
                  <div className="text-sm mb-2" style={{ color: '#1A2B49' }}>{item.section}</div>
                  <div className="text-sm mb-2" style={{ color: '#7C9C95' }}>{item.description}</div>
                  {item.recommendations && (
                    <div className="text-sm" style={{ color: '#E98B2A' }}>
                      Recommendation: {item.recommendations}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Material Standards */}
        <Card className="border" style={{ backgroundColor: '#C6A664', borderColor: '#D9D6D0' }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3" style={{ color: '#1A2B49' }}>
              <Shield className="h-5 w-5" style={{ color: '#E98B2A' }} />
              <span>Material Standards (ASTM/ANSI)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analysis.materialStandards.map((item, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg" 
                  style={{ 
                    backgroundColor: '#F7F3ED',
                    border: hasIssue(item.status) ? '2px solid #B04A4A' : 'none'
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(item.status)}
                      <h4 className="font-semibold" style={{ color: '#1A2B49' }}>{item.standard}</h4>
                      <Badge className="text-white" style={{ backgroundColor: getStatusColor(item.status) }}>
                        {item.status}
                      </Badge>
                      <Badge 
                        className="text-white"
                        style={{ 
                          backgroundColor: item.criticalityLevel === 'high' ? '#E98B2A' : item.criticalityLevel === 'medium' ? '#E98B2A' : '#7C9C95',
                          border: `1px solid ${item.criticalityLevel === 'high' ? '#E98B2A' : item.criticalityLevel === 'medium' ? '#E98B2A' : '#7C9C95'}`
                        }}
                      >
                        {item.criticalityLevel} priority
                      </Badge>
                    </div>
                  </div>
                  <div className="text-sm mb-2" style={{ color: '#1A2B49' }}>Material: {item.material}</div>
                  <div className="text-sm" style={{ color: '#7C9C95' }}>
                    Specified: {item.specifiedStandard} | Current: {item.currentStandard}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sustainability Metrics */}
        <Card className="border" style={{ backgroundColor: '#C6A664', borderColor: '#D9D6D0' }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3" style={{ color: '#1A2B49' }}>
              <Leaf className="h-5 w-5" style={{ color: '#7C9C95' }} />
              <span>Sustainability & LEED Compliance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analysis.sustainabilityMetrics.map((item, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg" 
                  style={{ 
                    backgroundColor: '#F7F3ED',
                    border: hasIssue(item.status) ? '2px solid #B04A4A' : 'none'
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(item.status)}
                      <h4 className="font-semibold" style={{ color: '#1A2B49' }}>{item.metric}</h4>
                      <Badge className="text-white" style={{ backgroundColor: getStatusColor(item.status) }}>
                        {item.status}
                      </Badge>
                    </div>
                    <div className="text-sm" style={{ color: '#7C9C95' }}>
                      {item.value} (Target: {item.benchmark})
                    </div>
                  </div>
                  <div className="text-sm mb-2" style={{ color: '#1A2B49' }}>Category: {item.category}</div>
                  {item.recommendations && (
                    <div className="text-sm" style={{ color: '#E98B2A' }}>
                      Recommendation: {item.recommendations}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Specifications */}
        <Card className="border" style={{ backgroundColor: '#C6A664', borderColor: '#D9D6D0' }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3" style={{ color: '#1A2B49' }}>
              <Gauge className="h-5 w-5" style={{ color: '#E98B2A' }} />
              <span>Performance Specifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analysis.performanceSpecs.map((item, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg" 
                  style={{ 
                    backgroundColor: '#F7F3ED',
                    border: hasIssue(item.status) ? '2px solid #B04A4A' : 'none'
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(item.status)}
                      <h4 className="font-semibold" style={{ color: '#1A2B49' }}>{item.component}</h4>
                      <Badge className="text-white" style={{ backgroundColor: getStatusColor(item.status) }}>
                        {item.status}
                      </Badge>
                    </div>
                    <div className="text-sm" style={{ color: '#7C9C95' }}>
                      {item.measuredValue} / {item.requiredValue}
                    </div>
                  </div>
                  <div className="text-sm mb-1" style={{ color: '#1A2B49' }}>
                    Specification: {item.specification}
                  </div>
                  <div className="text-sm" style={{ color: '#7C9C95' }}>
                    Test Method: {item.testMethod}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Review Window */}
      {showReviewWindow && (
        <SpecificationReviewWindow
          fileName={fileName}
          fileContent="Sample specification content would be displayed here..."
          suggestions={suggestions}
          onClose={handleCloseReview}
          onApproveSuggestion={approveSuggestion}
          onRejectSuggestion={rejectSuggestion}
          onApproveAll={approveAllSuggestions}
          onDownloadRevised={handleDownloadRevised}
        />
      )}
    </>
  );
};
