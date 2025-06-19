
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Users, Send, Mic, FileText, Share, BarChart3, CheckCircle, Copy } from "lucide-react";
import { useProjectCharter } from "@/hooks/useProjectCharter";
import { toast } from "@/hooks/use-toast";

export const ConversationalInterface = () => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const { 
    createProject, 
    sendMessage, 
    generateStakeholderLinks, 
    messages, 
    projectData, 
    stakeholders, 
    charterComplete,
    isLoading
  } = useProjectCharter();

  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
    }
  };

  const handleCreateProject = () => {
    const projectName = prompt('Enter project name:');
    if (projectName) {
      createProject(projectName);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Voice recording logic would go here
  };

  const handleCopyLink = async (link: string, stakeholderRole: string) => {
    try {
      await navigator.clipboard.writeText(link);
      toast({
        title: "Link Copied!",
        description: `Interview link for ${stakeholderRole} copied to clipboard.`,
      });
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = link;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      toast({
        title: "Link Copied!",
        description: `Interview link for ${stakeholderRole} copied to clipboard.`,
      });
    }
  };

  const handleShareLink = async (link: string, stakeholderRole: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Interview Link - ${stakeholderRole}`,
          text: `Please complete this stakeholder interview for our project: ${projectData.name}`,
          url: link,
        });
        toast({
          title: "Link Shared!",
          description: `Interview link for ${stakeholderRole} shared successfully.`,
        });
      } catch (err) {
        // User cancelled sharing or error occurred
        if (err.name !== 'AbortError') {
          // Fallback to copy
          handleCopyLink(link, stakeholderRole);
        }
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      handleCopyLink(link, stakeholderRole);
    }
  };

  return (
    <div className="space-y-8">
      {/* Project Setup */}
      <Card className="bg-white border shadow-sm" style={{ borderColor: '#D9D6D0' }}>
        <CardHeader>
          <CardTitle className="flex items-center space-x-3" style={{ color: '#1A2B49' }}>
            <MessageSquare className="h-6 w-6" style={{ color: '#E98B2A' }} />
            <span>AI Project Charter Assistant</span>
            {charterComplete && (
              <Badge className="text-white" style={{ backgroundColor: '#7C9C95' }}>Charter Complete</Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {!projectData.name ? (
            <div className="text-center py-8">
              <p className="mb-6" style={{ color: '#1A2B49' }}>Start by creating a new project charter with AI guidance</p>
              <Button 
                onClick={handleCreateProject}
                className="text-white font-medium px-8 py-3 rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: '#E98B2A' }}
              >
                <FileText className="h-4 w-4 mr-2" />
                Create New Project Charter
              </Button>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: '#1A2B49' }}>{projectData.name}</h3>
                  <p style={{ color: '#1A2B49', opacity: 0.7 }}>{projectData.description || 'Building your project charter...'}</p>
                </div>
                <Badge variant="outline" className="text-white" style={{ borderColor: '#7C9C95', backgroundColor: '#7C9C95' }}>
                  Active Project
                </Badge>
              </div>
              
              {/* Chat Interface */}
              <div className="rounded-lg p-4 h-96 overflow-y-auto mb-4 space-y-4" style={{ backgroundColor: '#1A2B49' }}>
                {messages.length === 0 && (
                  <div className="text-center py-8" style={{ color: '#F7F3ED' }}>
                    <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Your AI charter assistant is ready to help!</p>
                    <p className="text-sm">Ask questions about your project to build a comprehensive charter.</p>
                  </div>
                )}
                
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${
                      msg.sender === 'user' 
                        ? 'text-white' 
                        : 'text-white'
                    }`} style={{ backgroundColor: msg.sender === 'user' ? '#E98B2A' : '#7C9C95' }}>
                      <div className="whitespace-pre-wrap text-sm">{msg.content}</div>
                      <div className="text-xs opacity-70 mt-1">
                        {new Date(msg.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="p-3 rounded-lg text-white" style={{ backgroundColor: '#7C9C95' }}>
                      <div className="flex items-center space-x-2">
                        <div className="animate-pulse flex space-x-1">
                          <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#F7F3ED' }}></div>
                          <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#F7F3ED', animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#F7F3ED', animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-sm">AI is thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Message Input */}
              <div className="flex space-x-3">
                <div className="flex-1 flex space-x-2">
                  <Input
                    placeholder="Describe your project or ask questions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border text-white placeholder-opacity-70"
                    style={{ backgroundColor: '#1A2B49', borderColor: '#D9D6D0', color: '#F7F3ED' }}
                    onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleRecording}
                    className={`${isRecording ? 'text-white' : ''}`}
                    style={{ 
                      borderColor: '#D9D6D0', 
                      color: isRecording ? '#F7F3ED' : '#1A2B49',
                      backgroundColor: isRecording ? '#E98B2A' : 'transparent'
                    }}
                    disabled
                    title="Voice recording coming soon"
                  >
                    <Mic className="h-4 w-4" />
                  </Button>
                </div>
                <Button 
                  onClick={handleSendMessage}
                  disabled={!message.trim() || isLoading}
                  className="text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: '#E98B2A' }}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Stakeholder Management */}
      {projectData.name && (
        <Card className="bg-white border shadow-sm" style={{ borderColor: '#D9D6D0' }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3" style={{ color: '#1A2B49' }}>
              <Users className="h-6 w-6" style={{ color: '#7C9C95' }} />
              <span>Stakeholder Interviews</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {stakeholders.map((stakeholder) => (
                <Card key={stakeholder.id} className="border" style={{ backgroundColor: '#1A2B49', borderColor: '#D9D6D0' }}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold" style={{ color: '#F7F3ED' }}>{stakeholder.role}</h4>
                      <Badge 
                        variant={stakeholder.status === 'completed' ? 'default' : 'outline'}
                        className={stakeholder.status === 'completed' ? 'text-white' : ''}
                        style={{ 
                          backgroundColor: stakeholder.status === 'completed' ? '#7C9C95' : 'transparent',
                          borderColor: stakeholder.status === 'completed' ? '#7C9C95' : '#E98B2A',
                          color: stakeholder.status === 'completed' ? '#F7F3ED' : '#E98B2A'
                        }}
                      >
                        {stakeholder.status}
                      </Badge>
                    </div>
                    <p className="text-sm mb-3" style={{ color: '#F7F3ED', opacity: 0.7 }}>{stakeholder.description}</p>
                    {stakeholder.interviewLink ? (
                      <div className="space-y-3">
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="flex-1 text-white hover:text-white"
                            style={{ borderColor: '#7C9C95', color: '#7C9C95', backgroundColor: 'transparent' }}
                            onClick={() => handleCopyLink(stakeholder.interviewLink!, stakeholder.role)}
                          >
                            <Copy className="h-4 w-4 mr-2" />
                            Copy Link
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="flex-1 text-white hover:text-white"
                            style={{ borderColor: '#E98B2A', color: '#E98B2A', backgroundColor: 'transparent' }}
                            onClick={() => handleShareLink(stakeholder.interviewLink!, stakeholder.role)}
                          >
                            <Share className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                        </div>
                        <Button 
                          size="sm" 
                          variant="ghost"
                          className="w-full hover:opacity-80"
                          style={{ color: '#7C9C95', backgroundColor: 'transparent' }}
                          onClick={() => window.open(stakeholder.interviewLink, '_blank')}
                        >
                          Open Interview →
                        </Button>
                        <div className="text-xs break-all font-mono p-2 rounded" style={{ color: '#F7F3ED', backgroundColor: '#D9D6D0', opacity: 0.7 }}>
                          {stakeholder.interviewLink}
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm" style={{ color: '#F7F3ED', opacity: 0.5 }}>
                        Generate links to create interview
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button 
              onClick={generateStakeholderLinks}
              className="text-white font-medium transition-all hover:opacity-90"
              style={{ backgroundColor: '#7C9C95' }}
              disabled={isLoading}
            >
              <Users className="h-4 w-4 mr-2" />
              {stakeholders.some(s => s.interviewLink) ? 'Regenerate Interview Links' : 'Generate Interview Links'}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Project Analytics */}
      {projectData.name && (
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="bg-white border shadow-sm" style={{ borderColor: '#D9D6D0' }}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3" style={{ color: '#1A2B49' }}>
                <BarChart3 className="h-5 w-5" style={{ color: '#7C9C95' }} />
                <span>Interview Progress</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span style={{ color: '#1A2B49' }}>Completed</span>
                  <span style={{ color: '#E98B2A' }}>
                    {stakeholders.filter(s => s.status === 'completed').length}/{stakeholders.length}
                  </span>
                </div>
                <div className="w-full rounded-full h-2" style={{ backgroundColor: '#D9D6D0' }}>
                  <div 
                    className="h-2 rounded-full transition-all duration-300" 
                    style={{
                      backgroundColor: '#7C9C95',
                      width: `${(stakeholders.filter(s => s.status === 'completed').length / stakeholders.length) * 100}%`
                    }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border shadow-sm" style={{ borderColor: '#D9D6D0' }}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3" style={{ color: '#1A2B49' }}>
                <MessageSquare className="h-5 w-5" style={{ color: '#E98B2A' }} />
                <span>AI Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" style={{ color: '#7C9C95' }} />
                  <span style={{ color: '#1A2B49' }}>AI assistant connected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" style={{ color: '#7C9C95' }} />
                  <span style={{ color: '#1A2B49' }}>Project charter started</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className={`h-4 w-4`} style={{ color: messages.length > 5 ? '#7C9C95' : '#D9D6D0' }} />
                  <span style={{ color: '#1A2B49' }}>Requirements gathering</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border shadow-sm" style={{ borderColor: '#D9D6D0' }}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3" style={{ color: '#1A2B49' }}>
                <FileText className="h-5 w-5" style={{ color: '#E98B2A' }} />
                <span>Charter Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span style={{ color: '#1A2B49' }}>Messages</span>
                  <span style={{ color: '#E98B2A' }}>{messages.length}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#1A2B49' }}>Stakeholders</span>
                  <span style={{ color: '#1A2B49' }}>{stakeholders.length}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#1A2B49' }}>Status</span>
                  <span style={{ color: charterComplete ? '#7C9C95' : '#E98B2A' }}>
                    {charterComplete ? 'Complete' : 'In Progress'}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
