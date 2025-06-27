
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  Download,
  Brain,
  MessageSquare,
  Users,
  TrendingUp,
  Eye,
  Quote
} from "lucide-react";
import { toast } from 'sonner';
import Header from "@/components/Header";

interface StakeholderQuote {
  id: string;
  stakeholderType: string;
  stakeholderName: string;
  content: string;
  category: string;
  tags: string[];
  relevanceScore: number;
  timestamp: string;
}

interface AnalyticsSummary {
  totalResponses: number;
  completionRate: number;
  avgResponseLength: number;
  sentimentScore: number;
  keyThemes: string[];
  criticalIssues: number;
}

const ResponseAnalytics = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [quotes, setQuotes] = useState<StakeholderQuote[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsSummary>({
    totalResponses: 0,
    completionRate: 0,
    avgResponseLength: 0,
    sentimentScore: 0,
    keyThemes: [],
    criticalIssues: 0
  });

  useEffect(() => {
    loadAnalyticsData();
  }, [projectId]);

  const loadAnalyticsData = async () => {
    // Mock data - in real implementation, this would come from your data store
    const mockQuotes: StakeholderQuote[] = [
      {
        id: '1',
        stakeholderType: 'Project Sponsor',
        stakeholderName: 'John Smith',
        content: 'The budget constraints are our primary concern. We need to ensure we stay within the $2.5M limit while achieving all objectives.',
        category: 'Budget',
        tags: ['Budget', 'Constraint', 'Critical'],
        relevanceScore: 95,
        timestamp: '2024-01-15T10:30:00Z'
      },
      {
        id: '2',
        stakeholderType: 'End User',
        stakeholderName: 'Sarah Johnson',
        content: 'User experience should be the top priority. The current system is difficult to navigate and causes daily frustration.',
        category: 'Requirements',
        tags: ['UX', 'Requirements', 'Pain Point'],
        relevanceScore: 88,
        timestamp: '2024-01-15T14:20:00Z'
      },
      {
        id: '3',
        stakeholderType: 'Technical Expert',
        stakeholderName: 'Mike Chen',
        content: 'Integration with legacy systems will be challenging. We need at least 3 months for proper testing and migration.',
        category: 'Risk',
        tags: ['Technical', 'Risk', 'Timeline'],
        relevanceScore: 92,
        timestamp: '2024-01-16T09:15:00Z'
      }
    ];

    const mockAnalytics: AnalyticsSummary = {
      totalResponses: 24,
      completionRate: 85,
      avgResponseLength: 180,
      sentimentScore: 72,
      keyThemes: ['Budget Management', 'User Experience', 'Technical Integration', 'Timeline Concerns', 'Resource Allocation'],
      criticalIssues: 3
    };

    setQuotes(mockQuotes);
    setAnalytics(mockAnalytics);
  };

  const filteredQuotes = quotes.filter(quote => {
    const matchesSearch = quote.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quote.stakeholderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quote.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' || 
                         quote.stakeholderType.toLowerCase().includes(selectedFilter.toLowerCase()) ||
                         quote.category.toLowerCase().includes(selectedFilter.toLowerCase());
    
    return matchesSearch && matchesFilter;
  });

  const handleExportAnalytics = () => {
    toast.success('Analytics exported successfully');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D9D6D0' }}>
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Navigation Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 border-2 hover:opacity-70"
              style={{ borderColor: '#1A2B49', color: '#1A2B49' }}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-2xl font-bold" style={{ color: '#1A2B49' }}>
                Response Analytics
              </h1>
              <p style={{ color: '#7C9C95' }}>
                Analyze stakeholder interview responses and insights
              </p>
            </div>
          </div>
          
          <Button
            onClick={handleExportAnalytics}
            className="flex items-center gap-2 text-white hover:opacity-90"
            style={{ backgroundColor: '#E98B2A' }}
          >
            <Download className="h-4 w-4" />
            Export Analytics
          </Button>
        </div>

        {/* Analytics Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium" style={{ color: '#7C9C95' }}>Total Responses</p>
                  <p className="text-3xl font-bold" style={{ color: '#1A2B49' }}>{analytics.totalResponses}</p>
                </div>
                <MessageSquare className="h-8 w-8" style={{ color: '#E98B2A' }} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium" style={{ color: '#7C9C95' }}>Completion Rate</p>
                  <p className="text-3xl font-bold" style={{ color: '#1A2B49' }}>{analytics.completionRate}%</p>
                </div>
                <TrendingUp className="h-8 w-8" style={{ color: '#7C9C95' }} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium" style={{ color: '#7C9C95' }}>Sentiment Score</p>
                  <p className="text-3xl font-bold" style={{ color: '#1A2B49' }}>{analytics.sentimentScore}%</p>
                </div>
                <Brain className="h-8 w-8" style={{ color: '#E98B2A' }} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium" style={{ color: '#7C9C95' }}>Critical Issues</p>
                  <p className="text-3xl font-bold" style={{ color: '#1A2B49' }}>{analytics.criticalIssues}</p>
                </div>
                <Users className="h-8 w-8" style={{ color: '#7C9C95' }} />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="synopsis" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-2xl">
            <TabsTrigger value="synopsis">AI Synopsis</TabsTrigger>
            <TabsTrigger value="quotes">Stakeholder Quotes</TabsTrigger>
            <TabsTrigger value="mindmap">Mind Map</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="synopsis" className="space-y-6">
            <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: '#1A2B49' }}>
                  <Brain className="h-5 w-5" style={{ color: '#E98B2A' }} />
                  AI Executive Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#F7F3ED' }}>
                  <h3 className="font-semibold mb-3" style={{ color: '#1A2B49' }}>Project Overview Synthesis</h3>
                  <p style={{ color: '#1A2B49' }}>
                    Based on 24 stakeholder interviews, this downtown office complex project has strong support 
                    with clear consensus on sustainability goals and smart building integration. Key stakeholders 
                    emphasize the importance of staying within the $2.5M budget while achieving LEED Gold certification.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3" style={{ color: '#1A2B49' }}>Key Themes</h4>
                    <div className="space-y-2">
                      {analytics.keyThemes.map((theme, index) => (
                        <Badge key={index} variant="outline" className="mr-2 mb-2">
                          {theme}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3" style={{ color: '#1A2B49' }}>Priority Recommendations</h4>
                    <ul className="space-y-2 text-sm" style={{ color: '#1A2B49' }}>
                      <li>• Address budget constraint concerns early in planning</li>
                      <li>• Prioritize user experience requirements</li>
                      <li>• Develop comprehensive technical integration plan</li>
                      <li>• Establish clear communication protocols</li>
                    </ul>
                  </div>
                </div>

                <div className="border-t pt-4" style={{ borderColor: '#D9D6D0' }}>
                  <h4 className="font-semibold mb-3" style={{ color: '#1A2B49' }}>Charter Readiness Assessment</h4>
                  <div className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: '#E8F5E8' }}>
                    <span style={{ color: '#1A2B49' }}>Charter completion readiness</span>
                    <Badge className="text-white" style={{ backgroundColor: '#7C9C95' }}>Ready to Proceed</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quotes" className="space-y-6">
            <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2" style={{ color: '#1A2B49' }}>
                    <Quote className="h-5 w-5" style={{ color: '#E98B2A' }} />
                    Stakeholder Quotes Database
                  </CardTitle>
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4" style={{ color: '#7C9C95' }} />
                      <Input
                        placeholder="Search quotes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 border-2"
                        style={{ borderColor: '#7C9C95' }}
                      />
                    </div>
                    <select
                      value={selectedFilter}
                      onChange={(e) => setSelectedFilter(e.target.value)}
                      className="px-3 py-2 border-2 rounded-md"
                      style={{ borderColor: '#7C9C95', color: '#1A2B49' }}
                    >
                      <option value="all">All Categories</option>
                      <option value="sponsor">Project Sponsor</option>
                      <option value="user">End User</option>
                      <option value="technical">Technical Expert</option>
                      <option value="budget">Budget</option>
                      <option value="risk">Risk</option>
                      <option value="requirements">Requirements</option>
                    </select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredQuotes.map((quote) => (
                    <div 
                      key={quote.id}
                      className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                      style={{ borderColor: '#D9D6D0' }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Badge 
                            className="text-white"
                            style={{ backgroundColor: '#1A2B49' }}
                          >
                            {quote.stakeholderType}
                          </Badge>
                          <Badge 
                            variant="outline"
                            style={{ borderColor: '#E98B2A', color: '#E98B2A' }}
                          >
                            {quote.category}
                          </Badge>
                          <span className="text-sm font-medium" style={{ color: '#1A2B49' }}>
                            {quote.stakeholderName}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {quote.relevanceScore}% relevance
                          </Badge>
                          <Button size="sm" variant="ghost">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <blockquote 
                        className="text-sm italic mb-3 pl-4 border-l-4"
                        style={{ 
                          color: '#1A2B49',
                          borderLeftColor: '#E98B2A'
                        }}
                      >
                        "{quote.content}"
                      </blockquote>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {quote.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <span className="text-xs" style={{ color: '#7C9C95' }}>
                          {new Date(quote.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mindmap" className="space-y-6">
            <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: '#1A2B49' }}>
                  <Brain className="h-5 w-5" style={{ color: '#E98B2A' }} />
                  Interactive Concept Mind Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  className="w-full h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed"
                  style={{ borderColor: '#D9D6D0' }}
                >
                  <div className="text-center">
                    <Brain className="h-16 w-16 mx-auto mb-4" style={{ color: '#7C9C95' }} />
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#1A2B49' }}>
                      Interactive Mind Map
                    </h3>
                    <p className="text-sm" style={{ color: '#7C9C95' }}>
                      Visual representation of stakeholder feedback themes and relationships
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#E98B2A' }}></div>
                          <span className="text-sm" style={{ color: '#1A2B49' }}>Project Goals</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#7C9C95' }}></div>
                          <span className="text-sm" style={{ color: '#1A2B49' }}>Stakeholder Needs</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#1A2B49' }}></div>
                          <span className="text-sm" style={{ color: '#1A2B49' }}>Risks & Concerns</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#F7F3ED' }}></div>
                          <span className="text-sm" style={{ color: '#1A2B49' }}>Resources</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
                <CardHeader>
                  <CardTitle style={{ color: '#1A2B49' }}>Response Quality Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span style={{ color: '#1A2B49' }}>Average Response Length</span>
                      <span className="font-semibold" style={{ color: '#E98B2A' }}>
                        {analytics.avgResponseLength} words
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span style={{ color: '#1A2B49' }}>Engagement Score</span>
                      <span className="font-semibold" style={{ color: '#E98B2A' }}>8.5/10</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span style={{ color: '#1A2B49' }}>Data Quality Index</span>
                      <span className="font-semibold" style={{ color: '#E98B2A' }}>92%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
                <CardHeader>
                  <CardTitle style={{ color: '#1A2B49' }}>Charter Section Readiness</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { section: 'Project Scope', readiness: 95 },
                      { section: 'Stakeholders', readiness: 88 },
                      { section: 'Budget & Resources', readiness: 75 },
                      { section: 'Risk Assessment', readiness: 82 },
                      { section: 'Timeline', readiness: 70 }
                    ].map((item, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-sm" style={{ color: '#1A2B49' }}>{item.section}</span>
                          <span className="text-sm font-medium" style={{ color: '#E98B2A' }}>
                            {item.readiness}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full" 
                            style={{ 
                              width: `${item.readiness}%`,
                              backgroundColor: '#7C9C95'
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ResponseAnalytics;
