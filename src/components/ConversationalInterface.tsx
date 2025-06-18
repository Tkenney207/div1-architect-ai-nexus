
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Users, Send, Mic, FileText, Share, BarChart3, CheckCircle } from "lucide-react";
import { useProjectCharter } from "@/hooks/useProjectCharter";

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

  return (
    <div className="space-y-8">
      {/* Project Setup */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-3">
            <MessageSquare className="h-6 w-6 text-green-400" />
            <span>AI Project Charter Assistant</span>
            {charterComplete && (
              <Badge className="bg-green-600 text-white">Charter Complete</Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {!projectData.name ? (
            <div className="text-center py-8">
              <p className="text-gray-300 mb-6">Start by creating a new project charter with AI guidance</p>
              <Button 
                onClick={handleCreateProject}
                className="bg-green-600 hover:bg-green-700"
              >
                <FileText className="h-4 w-4 mr-2" />
                Create New Project Charter
              </Button>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">{projectData.name}</h3>
                  <p className="text-gray-400">{projectData.description || 'Building your project charter...'}</p>
                </div>
                <Badge variant="outline" className="border-green-500 text-green-400">
                  Active Project
                </Badge>
              </div>
              
              {/* Chat Interface */}
              <div className="bg-gray-900 rounded-lg p-4 h-96 overflow-y-auto mb-4 space-y-4">
                {messages.length === 0 && (
                  <div className="text-center text-gray-400 py-8">
                    <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Your AI charter assistant is ready to help!</p>
                    <p className="text-sm">Ask questions about your project to build a comprehensive charter.</p>
                  </div>
                )}
                
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${
                      msg.sender === 'user' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-700 text-gray-200'
                    }`}>
                      <div className="whitespace-pre-wrap text-sm">{msg.content}</div>
                      <div className="text-xs opacity-70 mt-1">
                        {new Date(msg.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-700 text-gray-200 p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="animate-pulse flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
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
                    className="bg-gray-900 border-gray-600 text-white placeholder-gray-400"
                    onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleRecording}
                    className={`border-gray-600 ${isRecording ? 'bg-red-600 text-white' : 'text-gray-300'}`}
                    disabled
                    title="Voice recording coming soon"
                  >
                    <Mic className="h-4 w-4" />
                  </Button>
                </div>
                <Button 
                  onClick={handleSendMessage}
                  disabled={!message.trim() || isLoading}
                  className="bg-green-600 hover:bg-green-700"
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
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-3">
              <Users className="h-6 w-6 text-blue-400" />
              <span>Stakeholder Interviews</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {stakeholders.map((stakeholder) => (
                <Card key={stakeholder.id} className="bg-gray-900 border-gray-600">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-white">{stakeholder.role}</h4>
                      <Badge 
                        variant={stakeholder.status === 'completed' ? 'default' : 'outline'}
                        className={stakeholder.status === 'completed' ? 'bg-green-600' : 'border-yellow-500 text-yellow-400'}
                      >
                        {stakeholder.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{stakeholder.description}</p>
                    {stakeholder.interviewLink ? (
                      <div className="space-y-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="w-full border-blue-500 text-blue-400 hover:bg-blue-600"
                          onClick={() => window.open(stakeholder.interviewLink, '_blank')}
                        >
                          <Share className="h-4 w-4 mr-2" />
                          Open Interview Link
                        </Button>
                        <div className="text-xs text-gray-500 break-all">
                          {stakeholder.interviewLink}
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-500">
                        Generate links to create interview
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button 
              onClick={generateStakeholderLinks}
              className="bg-blue-600 hover:bg-blue-700"
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
          <Card className="bg-gradient-to-br from-green-900/30 to-green-800/30 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-3">
                <BarChart3 className="h-5 w-5 text-green-400" />
                <span>Interview Progress</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Completed</span>
                  <span className="text-green-400">
                    {stakeholders.filter(s => s.status === 'completed').length}/{stakeholders.length}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-300" 
                    style={{
                      width: `${(stakeholders.filter(s => s.status === 'completed').length / stakeholders.length) * 100}%`
                    }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-3">
                <MessageSquare className="h-5 w-5 text-blue-400" />
                <span>AI Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">AI assistant connected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Project charter started</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className={`h-4 w-4 ${messages.length > 5 ? 'text-green-400' : 'text-gray-400'}`} />
                  <span className="text-gray-300">Requirements gathering</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-3">
                <FileText className="h-5 w-5 text-purple-400" />
                <span>Charter Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Messages</span>
                  <span className="text-purple-400">{messages.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Stakeholders</span>
                  <span className="text-white">{stakeholders.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Status</span>
                  <span className={charterComplete ? 'text-green-400' : 'text-yellow-400'}>
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
