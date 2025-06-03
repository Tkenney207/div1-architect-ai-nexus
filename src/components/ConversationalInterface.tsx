
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Send, Users, CheckCircle, Brain, Shield, Activity } from "lucide-react";
import { useProjectCharter } from '@/hooks/useProjectCharter';

export const ConversationalInterface = () => {
  const { messages, sendMessage } = useProjectCharter();
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="grid lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <Card className="shadow-2xl border-0 overflow-hidden bg-gray-800/50 border border-gray-700">
          <CardHeader className="bg-gradient-to-r from-green-600/10 to-blue-600/10">
            <CardTitle className="flex items-center text-2xl text-white">
              <Bot className="h-6 w-6 mr-3 text-green-400" />
              AI Project Charter Assistant
            </CardTitle>
            <CardDescription className="text-lg text-gray-300">
              Conversational intelligence for stakeholder interviews and project synthesis
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-96 overflow-y-auto p-6 space-y-6 bg-gray-900/30">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-start space-x-4 ${msg.type === 'user' ? 'justify-end' : ''}`}>
                  {msg.type === 'ai' && (
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full p-2 flex-shrink-0">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                  )}
                  <div className={`rounded-2xl p-4 shadow-sm max-w-md ${
                    msg.type === 'ai' 
                      ? 'bg-gray-800 border border-gray-600' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600'
                  }`}>
                    <p className="text-white text-sm">{msg.content}</p>
                    <span className="text-xs text-gray-400 mt-2 block">{msg.timestamp}</span>
                  </div>
                  {msg.type === 'user' && (
                    <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-gray-800/50 border-t border-gray-700">
              <div className="flex space-x-3">
                <Textarea 
                  placeholder="Type your response..." 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 resize-none border-2 rounded-2xl focus:border-green-500 transition-colors bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400"
                  rows={2}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button 
                  size="lg" 
                  className="rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-6" 
                  onClick={handleSendMessage}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="shadow-xl border-0 bg-gray-800/50 border border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg flex items-center text-white">
              <Shield className="h-5 w-5 mr-2 text-green-400" />
              Privacy Protection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Differential Privacy: ε=1.0</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Zero-Knowledge Architecture</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Homomorphic Encryption</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Federated Learning</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-0 bg-gray-800/50 border border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg flex items-center text-white">
              <Brain className="h-5 w-5 mr-2 text-blue-400" />
              Real-Time Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Engagement Score:</span>
                <Badge variant="default" className="bg-green-600">94%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Sentiment:</span>
                <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-500/30">Positive</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Completion:</span>
                <Badge variant="outline" className="border-blue-500 text-blue-400">25%</Badge>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Topics Identified:</span>
                <Badge variant="outline" className="border-purple-500 text-purple-400">12</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-0 bg-gray-800/50 border border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg flex items-center text-white">
              <Activity className="h-5 w-5 mr-2 text-purple-400" />
              Agent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Interviewer Agent:</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400">Active</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Synthesis Agent:</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-blue-400">Processing</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Validation Agent:</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-xs text-yellow-400">Standby</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Moderation Agent:</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400">Monitoring</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
