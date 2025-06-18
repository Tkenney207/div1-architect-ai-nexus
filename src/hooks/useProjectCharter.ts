import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

interface Stakeholder {
  id: string;
  role: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  interviewLink?: string;
  responses?: { question: string; answer: string }[];
}

interface ProjectData {
  id?: string;
  name: string;
  description: string;
  type: string;
  budget?: number;
  timeline?: string;
  location?: string;
  vision?: string;
  objectives?: string[];
  constraints?: string[];
  sustainabilityGoals?: string[];
  qualityRequirements?: string[];
  submittalProcedures?: string[];
  wasteManagement?: string[];
}

export const useProjectCharter = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [projectData, setProjectData] = useState<ProjectData>({
    name: '',
    description: '',
    type: ''
  });
  const [stakeholders, setStakeholders] = useState<Stakeholder[]>([]);
  const [charterComplete, setCharterComplete] = useState(false);

  const createProjectMutation = useMutation({
    mutationFn: async (projectName: string) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newProject: ProjectData = {
        id: Math.random().toString(36).substr(2, 9),
        name: projectName,
        description: '',
        type: ''
      };
      
      setProjectData(newProject);
      
      const welcomeMessage: Message = {
        id: Math.random().toString(36).substr(2, 9),
        content: `Hello! I'm your AI project charter assistant. I see you've created a project called "${projectName}". Let's start by understanding your project better. What type of project is this - commercial, residential, healthcare, industrial, or something else? And what's the main purpose or goal you're trying to achieve?`,
        sender: 'ai',
        timestamp: new Date().toISOString()
      };
      
      setMessages([welcomeMessage]);
      
      const defaultStakeholders: Stakeholder[] = [
        {
          id: '1',
          role: 'Owner/Client',
          description: 'Project initiator and primary decision maker',
          status: 'pending'
        },
        {
          id: '2',
          role: 'Architect',
          description: 'Lead design professional',
          status: 'pending'
        },
        {
          id: '3',
          role: 'General Contractor',
          description: 'Construction management and execution',
          status: 'pending'
        },
        {
          id: '4',
          role: 'Structural Engineer',
          description: 'Structural systems design and analysis',
          status: 'pending'
        },
        {
          id: '5',
          role: 'MEP Engineer',
          description: 'Mechanical, electrical, and plumbing systems',
          status: 'pending'
        },
        {
          id: '6',
          role: 'Legal Advisor',
          description: 'Contract and risk management guidance',
          status: 'pending'
        }
      ];
      
      setStakeholders(defaultStakeholders);
      return newProject;
    }
  });

  const sendMessageMutation = useMutation({
    mutationFn: async (content: string) => {
      const userMessage: Message = {
        id: Math.random().toString(36).substr(2, 9),
        content,
        sender: 'user',
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, userMessage]);
      
      try {
        console.log('Calling AI edge function...');
        
        const { data, error } = await supabase.functions.invoke('ai-charter-chat', {
          body: {
            message: content,
            projectData,
            messages: [...messages, userMessage]
          }
        });

        console.log('Edge function response:', { data, error });

        if (error) {
          console.error('Supabase function error:', error);
          throw error;
        }

        let aiResponse = data.response;

        // Check if the AI response suggests charter completion
        if (aiResponse.toLowerCase().includes('charter') && 
            (aiResponse.toLowerCase().includes('complete') || 
             aiResponse.toLowerCase().includes('finished') ||
             aiResponse.toLowerCase().includes('division 1'))) {
          setCharterComplete(true);
          
          // Enhance the response with navigation link
          aiResponse += `\n\n🎉 **Charter Complete!** \n\nNow that we have all the essential project information, would you like me to generate your Division 1 specifications? I can automatically create CSI MasterFormat specifications using the charter data we've collected.\n\n[**Generate Division 1 Specifications →**](/division1)\n\nThis will create professional specifications including:\n- 011000 Summary of Work\n- 013100 Project Management \n- 014000 Quality Requirements\n- 018113 Sustainable Design Requirements\n- And more based on your charter data`;
        }
        
        const aiMessage: Message = {
          id: Math.random().toString(36).substr(2, 9),
          content: aiResponse,
          sender: 'ai',
          timestamp: new Date().toISOString()
        };
        
        setMessages(prev => [...prev, aiMessage]);
        return aiMessage;

      } catch (error) {
        console.error('Error calling AI:', error);
        
        // Extract the actual error message from the API response
        let errorMessage = "I apologize, but I'm having trouble connecting to the AI service right now.";
        
        if (error && typeof error === 'object') {
          // Check for Supabase function error with details
          if ('message' in error && error.message) {
            errorMessage += ` Error: ${error.message}`;
          }
          
          // Check for nested error details
          if ('details' in error && error.details) {
            errorMessage += ` Details: ${error.details}`;
          }
        }
        
        // If it's a quota error, provide specific guidance
        if (errorMessage.includes('quota') || errorMessage.includes('429')) {
          errorMessage = "⚠️ **OpenAI API Quota Exceeded**\n\nYour OpenAI API key has exceeded its usage quota or billing limits. Please:\n\n1. Check your OpenAI billing at https://platform.openai.com/account/billing\n2. Add payment method or increase quota\n3. Try again once resolved\n\nThe AI service will work once your OpenAI account is properly configured.";
        }
        
        const errorMessageObj: Message = {
          id: Math.random().toString(36).substr(2, 9),
          content: errorMessage,
          sender: 'ai',
          timestamp: new Date().toISOString()
        };
        
        setMessages(prev => [...prev, errorMessageObj]);
        return errorMessageObj;
      }
    }
  });

  const generateLinksMutation = useMutation({
    mutationFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const updatedStakeholders = stakeholders.map(stakeholder => ({
        ...stakeholder,
        interviewLink: `https://div1.app/interview/${Math.random().toString(36).substr(2, 12)}`,
        status: 'pending' as const
      }));
      
      setStakeholders(updatedStakeholders);
      
      const aiMessage: Message = {
        id: Math.random().toString(36).substr(2, 9),
        content: "Perfect! I've generated unique interview links for each stakeholder. Each link is customized based on their role and will guide them through a conversational interview tailored to their expertise and perspective. You can now share these links with your team members. The interviews are anonymized, so participants can share candid feedback.",
        sender: 'ai',
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      
      return updatedStakeholders;
    }
  });

  const createProject = (projectName: string) => {
    createProjectMutation.mutate(projectName);
  };

  const sendMessage = (content: string) => {
    sendMessageMutation.mutate(content);
  };

  const generateStakeholderLinks = () => {
    generateLinksMutation.mutate();
  };

  return {
    createProject,
    sendMessage,
    generateStakeholderLinks,
    messages,
    projectData,
    stakeholders,
    charterComplete,
    isLoading: createProjectMutation.isPending || sendMessageMutation.isPending || generateLinksMutation.isPending
  };
};
