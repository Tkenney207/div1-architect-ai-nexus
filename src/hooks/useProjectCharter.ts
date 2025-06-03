
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useOpenAI } from './useOpenAI';

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
}

export const useProjectCharter = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [projectData, setProjectData] = useState<ProjectData>({
    name: '',
    description: '',
    type: ''
  });
  const [stakeholders, setStakeholders] = useState<Stakeholder[]>([]);
  const [conversationHistory, setConversationHistory] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);
  
  const { sendMessage: sendOpenAIMessage, isLoading: isAILoading, apiKey, setApiKey } = useOpenAI();

  const systemPrompt = `You are an expert AI project charter assistant specializing in construction and development projects. Your role is to:

1. Help users define their project vision, scope, and requirements
2. Ask intelligent follow-up questions to gather comprehensive project information
3. Identify key stakeholders and their roles
4. Extract important project details like budget, timeline, sustainability goals, and constraints
5. Maintain a conversational, professional tone while being thorough

Key guidelines:
- Ask one focused question at a time to avoid overwhelming the user
- Build on previous responses - don't repeat questions you've already asked
- When you have enough information about a topic, move to the next important aspect
- Be specific about construction/development terminology and considerations
- Help identify potential risks, constraints, or missing requirements

Current project context: ${projectData.name ? `Project "${projectData.name}" - ${projectData.description}` : 'New project being defined'}`;

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
      setConversationHistory([{
        role: 'assistant',
        content: welcomeMessage.content
      }]);
      
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
      if (!apiKey) {
        throw new Error('Please set your OpenAI API key first');
      }

      const userMessage: Message = {
        id: Math.random().toString(36).substr(2, 9),
        content,
        sender: 'user',
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, userMessage]);
      
      const newConversationHistory = [...conversationHistory, { role: 'user' as const, content }];
      setConversationHistory(newConversationHistory);

      return new Promise((resolve, reject) => {
        sendOpenAIMessage(
          { messages: newConversationHistory, systemPrompt },
          {
            onSuccess: (aiResponse: string) => {
              const aiMessage: Message = {
                id: Math.random().toString(36).substr(2, 9),
                content: aiResponse,
                sender: 'ai',
                timestamp: new Date().toISOString()
              };
              
              setMessages(prev => [...prev, aiMessage]);
              setConversationHistory(prev => [...prev, { role: 'assistant', content: aiResponse }]);
              resolve(aiMessage);
            },
            onError: (error: any) => {
              reject(error);
            }
          }
        );
      });
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
    isLoading: createProjectMutation.isPending || sendMessageMutation.isPending || generateLinksMutation.isPending,
    apiKey,
    setApiKey
  };
};
