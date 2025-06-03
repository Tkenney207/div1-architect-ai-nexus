
import React from 'react';
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
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'compliant':
      case 'current':
      case 'pass':
      case 'exceeds':
      case 'meets':
        return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'requires-update':
      case 'outdated':
      case 'marginal':
      case 'below':
        return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
      case 'non-compliant':
      case 'discontinued':
      case 'fail':
      case 'missing':
      case 'not-specified':
        return <XCircle className="h-4 w-4 text-red-400" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant':
      case 'current':
      case 'pass':
      case 'exceeds':
      case 'meets':
        return 'bg-green-600';
      case 'requires-update':
      case 'outdated':
      case 'marginal':
      case 'below':
        return 'bg-yellow-600';
      case 'non-compliant':
      case 'discontinued':
      case 'fail':
      case 'missing':
      case 'not-specified':
        return 'bg-red-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="space-y-6 mt-6">
      {/* Overview */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="h-5 w-5 text-blue-400" />
              <span>Analysis Overview - {fileName}</span>
            </div>
            <Button 
              size="sm"
              className="bg-purple-600 hover:bg-purple-700"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Review Changes
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{analysis.overview.overallCompliance}%</div>
              <div className="text-sm text-gray-400">Overall Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">{analysis.overview.criticalIssues}</div>
              <div className="text-sm text-gray-400">Critical Issues</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">{analysis.overview.warningsCount}</div>
              <div className="text-sm text-gray-400">Warnings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{analysis.overview.upToDatePercentage}%</div>
              <div className="text-sm text-gray-400">Up-to-Date</div>
            </div>
          </div>
          <Progress value={analysis.overview.overallCompliance} className="w-full" />
        </CardContent>
      </Card>

      {/* Manufacturer Compliance */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-3">
            <Factory className="h-5 w-5 text-purple-400" />
            <span>Manufacturer Compliance</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analysis.manufacturerCompliance.map((item, index) => (
              <div key={index} className="flex items-start justify-between p-4 bg-gray-900/50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    {getStatusIcon(item.status)}
                    <h4 className="font-semibold text-white">{item.manufacturer}</h4>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-300 mb-2">
                    Products: {item.products.join(', ')}
                  </div>
                  <div className="text-xs text-gray-400">
                    Last Updated: {new Date(item.lastUpdated).toLocaleDateString()}
                  </div>
                  {item.alternatives && (
                    <div className="text-sm text-blue-400 mt-2">
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
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-3">
            <Building className="h-5 w-5 text-orange-400" />
            <span>Building Code Compliance</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analysis.codeCompliance.map((item, index) => (
              <div key={index} className="p-4 bg-gray-900/50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(item.status)}
                    <h4 className="font-semibold text-white">{item.code}</h4>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-400">
                    {item.specifiedVersion} → {item.currentVersion}
                  </div>
                </div>
                <div className="text-sm text-gray-300 mb-2">{item.section}</div>
                <div className="text-sm text-gray-400 mb-2">{item.description}</div>
                {item.recommendations && (
                  <div className="text-sm text-blue-400">
                    Recommendation: {item.recommendations}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Material Standards */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-3">
            <Shield className="h-5 w-5 text-cyan-400" />
            <span>Material Standards (ASTM/ANSI)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analysis.materialStandards.map((item, index) => (
              <div key={index} className="p-4 bg-gray-900/50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(item.status)}
                    <h4 className="font-semibold text-white">{item.standard}</h4>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                    <Badge variant="outline" className={`border-${item.criticalityLevel === 'high' ? 'red' : item.criticalityLevel === 'medium' ? 'yellow' : 'green'}-500`}>
                      {item.criticalityLevel} priority
                    </Badge>
                  </div>
                </div>
                <div className="text-sm text-gray-300 mb-2">Material: {item.material}</div>
                <div className="text-sm text-gray-400">
                  Specified: {item.specifiedStandard} | Current: {item.currentStandard}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sustainability Metrics */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-3">
            <Leaf className="h-5 w-5 text-green-400" />
            <span>Sustainability & LEED Compliance</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analysis.sustainabilityMetrics.map((item, index) => (
              <div key={index} className="p-4 bg-gray-900/50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(item.status)}
                    <h4 className="font-semibold text-white">{item.metric}</h4>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-400">
                    {item.value} (Target: {item.benchmark})
                  </div>
                </div>
                <div className="text-sm text-gray-300 mb-2">Category: {item.category}</div>
                {item.recommendations && (
                  <div className="text-sm text-blue-400">
                    Recommendation: {item.recommendations}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Specifications */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-3">
            <Gauge className="h-5 w-5 text-indigo-400" />
            <span>Performance Specifications</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analysis.performanceSpecs.map((item, index) => (
              <div key={index} className="p-4 bg-gray-900/50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(item.status)}
                    <h4 className="font-semibold text-white">{item.component}</h4>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-400">
                    {item.measuredValue} / {item.requiredValue}
                  </div>
                </div>
                <div className="text-sm text-gray-300 mb-1">
                  Specification: {item.specification}
                </div>
                <div className="text-sm text-gray-400">
                  Test Method: {item.testMethod}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
