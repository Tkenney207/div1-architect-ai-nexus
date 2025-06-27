import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mic, MicOff, Send, Save, FileText, MessageSquare } from "lucide-react";
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface CharterEditorProps {
  projectId: string;
  onSave: (charter: any) => void;
  onClose: () => void;
  initialCharter?: any;
}

export const CharterEditor: React.FC<CharterEditorProps> = ({
  projectId,
  onSave,
  onClose,
  initialCharter
}) => {
  const [charter, setCharter] = useState({
    projectName: initialCharter?.projectName || '',
    projectDescription: initialCharter?.projectDescription || '',
    objectives: initialCharter?.objectives || [''],
    stakeholders: initialCharter?.stakeholders || [''],
    timeline: initialCharter?.timeline || '',
    budget: initialCharter?.budget || '',
    risks: initialCharter?.risks || [''],
    deliverables: initialCharter?.deliverables || [''],
    ...initialCharter
  });

  const [chatMessages, setChatMessages] = useState([
    {
      type: 'ai',
      content: 'Hello! I\'m here to help you create and refine your project charter. I can suggest improvements, help with formatting, and guide you through best practices. What would you like to work on first?'
    }
  ]);
  
  const [currentMessage, setCurrentMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [isProcessingVoice, setIsProcessingVoice] = useState(false);
  const audioChunks = useRef<Blob[]>([]);

  const handleVoiceToText = async (audioBlob: Blob) => {
    setIsProcessingVoice(true);
    try {
      const base64Audio = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = (reader.result as string).split(',')[1];
          resolve(base64);
        };
        reader.readAsDataURL(audioBlob);
      });

      console.log('Calling voice-to-text function...');
      const { data, error } = await supabase.functions.invoke('voice-to-text', {
        body: { audio: base64Audio }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      if (data && data.text) {
        setCurrentMessage(prev => prev + (prev ? ' ' : '') + data.text);
        toast.success('Voice converted to text');
      } else {
        throw new Error('No text returned from voice processing');
      }
    } catch (error) {
      console.error('Voice to text error:', error);
      toast.error('Failed to convert voice to text. Please check your microphone permissions.');
    } finally {
      setIsProcessingVoice(false);
    }
  };

  const startRecording = async () => {
    try {
      console.log('Requesting microphone access...');
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          sampleRate: 16000,
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true
        }
      });
      
      console.log('Microphone access granted, starting recording...');
      const recorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus'
      });
      
      audioChunks.current = [];
      
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.current.push(event.data);
        }
      };
      
      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
        console.log('Recording stopped, processing audio...', audioBlob.size, 'bytes');
        handleVoiceToText(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };
      
      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
      toast.success('Recording started');
    } catch (error) {
      console.error('Failed to start recording:', error);
      toast.error('Failed to access microphone. Please check your browser permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      console.log('Stopping recording...');
      mediaRecorder.stop();
      setIsRecording(false);
      setMediaRecorder(null);
      toast.success('Recording stopped');
    }
  };

  const sendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage = currentMessage;
    setChatMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setCurrentMessage('');

    try {
      setTimeout(() => {
        const aiResponse = generateAIResponse(userMessage, charter);
        setChatMessages(prev => [...prev, { type: 'ai', content: aiResponse }]);
      }, 1000);
    } catch (error) {
      toast.error('Failed to get AI response');
    }
  };

  const generateAIResponse = (message: string, currentCharter: any) => {
    const responses = [
      "I notice your project objectives could be more specific. Consider using SMART criteria (Specific, Measurable, Achievable, Relevant, Time-bound).",
      "Your stakeholder list looks good. Have you considered including end users or regulatory bodies?",
      "The timeline seems ambitious. Would you like me to suggest a more detailed project schedule?",
      "I can help you identify potential risks based on similar projects in our database.",
      "Your budget allocation looks reasonable. Consider adding a 10-15% contingency buffer."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSave = () => {
    onSave(charter);
    toast.success('Charter saved successfully');
  };

  const updateArrayField = (field: string, index: number, value: string) => {
    setCharter(prev => ({
      ...prev,
      [field]: prev[field].map((item: string, i: number) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field: string) => {
    setCharter(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field: string, index: number) => {
    setCharter(prev => ({
      ...prev,
      [field]: prev[field].filter((_: string, i: number) => i !== index)
    }));
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: '#D9D6D0' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold" style={{ color: '#1A2B49' }}>Charter Editor</h1>
            <p style={{ color: '#1A2B49' }}>AI-assisted project charter creation and editing</p>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={handleSave} 
              className="flex items-center gap-2 text-white hover:opacity-90"
              style={{ backgroundColor: '#7C9C95' }}
            >
              <Save className="h-4 w-4" />
              Save Charter
            </Button>
            <Button 
              variant="outline" 
              onClick={onClose}
              className="border-2 hover:opacity-70"
              style={{ borderColor: '#1A2B49', color: '#1A2B49' }}
            >
              Close
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Charter Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: '#1A2B49' }}>
                  <FileText className="h-5 w-5" style={{ color: '#E98B2A' }} />
                  Project Charter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>Project Name</label>
                  <Input
                    value={charter.projectName}
                    onChange={(e) => setCharter(prev => ({ ...prev, projectName: e.target.value }))}
                    placeholder="Enter project name"
                    className="border-2 focus:ring-2"
                    style={{ 
                      borderColor: '#7C9C95',
                      backgroundColor: '#F7F3ED',
                      color: '#1A2B49'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>Project Description</label>
                  <Textarea
                    value={charter.projectDescription}
                    onChange={(e) => setCharter(prev => ({ ...prev, projectDescription: e.target.value }))}
                    placeholder="Describe the project scope and purpose"
                    rows={4}
                    className="border-2 focus:ring-2"
                    style={{ 
                      borderColor: '#7C9C95',
                      backgroundColor: '#F7F3ED',
                      color: '#1A2B49'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>Objectives</label>
                  {charter.objectives.map((objective: string, index: number) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <Input
                        value={objective}
                        onChange={(e) => updateArrayField('objectives', index, e.target.value)}
                        placeholder="Enter project objective"
                        className="border-2 focus:ring-2"
                        style={{ 
                          borderColor: '#7C9C95',
                          backgroundColor: '#F7F3ED',
                          color: '#1A2B49'
                        }}
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeArrayItem('objectives', index)}
                        className="border-2 hover:opacity-70"
                        style={{ borderColor: '#E98B2A', color: '#E98B2A' }}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addArrayItem('objectives')}
                    className="border-2 hover:opacity-70"
                    style={{ borderColor: '#7C9C95', color: '#7C9C95' }}
                  >
                    Add Objective
                  </Button>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>Stakeholders</label>
                  {charter.stakeholders.map((stakeholder: string, index: number) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <Input
                        value={stakeholder}
                        onChange={(e) => updateArrayField('stakeholders', index, e.target.value)}
                        placeholder="Enter stakeholder name and role"
                        className="border-2 focus:ring-2"
                        style={{ 
                          borderColor: '#7C9C95',
                          backgroundColor: '#F7F3ED',
                          color: '#1A2B49'
                        }}
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeArrayItem('stakeholders', index)}
                        className="border-2 hover:opacity-70"
                        style={{ borderColor: '#E98B2A', color: '#E98B2A' }}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addArrayItem('stakeholders')}
                    className="border-2 hover:opacity-70"
                    style={{ borderColor: '#7C9C95', color: '#7C9C95' }}
                  >
                    Add Stakeholder
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>Timeline</label>
                    <Input
                      value={charter.timeline}
                      onChange={(e) => setCharter(prev => ({ ...prev, timeline: e.target.value }))}
                      placeholder="e.g., 6 months"
                      className="border-2 focus:ring-2"
                      style={{ 
                        borderColor: '#7C9C95',
                        backgroundColor: '#F7F3ED',
                        color: '#1A2B49'
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>Budget</label>
                    <Input
                      value={charter.budget}
                      onChange={(e) => setCharter(prev => ({ ...prev, budget: e.target.value }))}
                      placeholder="e.g., $500,000"
                      className="border-2 focus:ring-2"
                      style={{ 
                        borderColor: '#7C9C95',
                        backgroundColor: '#F7F3ED',
                        color: '#1A2B49'
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Chat Assistant */}
          <div className="lg:col-span-1">
            <Card className="h-full bg-white" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: '#1A2B49' }}>
                  <MessageSquare className="h-5 w-5" style={{ color: '#E98B2A' }} />
                  AI Assistant
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-96">
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {chatMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg ${
                        message.type === 'ai'
                          ? 'text-white'
                          : 'ml-4'
                      }`}
                      style={{
                        backgroundColor: message.type === 'ai' ? '#7C9C95' : '#F7F3ED',
                        color: message.type === 'ai' ? 'white' : '#1A2B49'
                      }}
                    >
                      <Badge 
                        className="mb-2 text-white"
                        style={{ 
                          backgroundColor: message.type === 'ai' ? '#1A2B49' : '#E98B2A'
                        }}
                      >
                        {message.type === 'ai' ? 'AI' : 'You'}
                      </Badge>
                      <p className="text-sm">{message.content}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Input
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    placeholder="Ask for help or guidance..."
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    disabled={isProcessingVoice}
                    className="border-2 focus:ring-2"
                    style={{ 
                      borderColor: '#7C9C95',
                      backgroundColor: '#F7F3ED',
                      color: '#1A2B49'
                    }}
                  />
                  <Button
                    size="sm"
                    onClick={isRecording ? stopRecording : startRecording}
                    disabled={isProcessingVoice}
                    className="text-white hover:opacity-90"
                    style={{ 
                      backgroundColor: isRecording ? '#E98B2A' : '#7C9C95'
                    }}
                  >
                    {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={sendMessage} 
                    disabled={!currentMessage.trim()}
                    className="text-white hover:opacity-90"
                    style={{ backgroundColor: '#1A2B49' }}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                {isProcessingVoice && (
                  <p className="text-sm mt-2" style={{ color: '#7C9C95' }}>Processing voice...</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
