
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

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

  const createProjectMutation = useMutation({
    mutationFn: async (projectName: string) => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newProject: ProjectData = {
        id: Math.random().toString(36).substr(2, 9),
        name: projectName,
        description: '',
        type: 'commercial'
      };
      
      setProjectData(newProject);
      
      // Initialize with AI welcome message
      const welcomeMessage: Message = {
        id: Math.random().toString(36).substr(2, 9),
        content: `Hello! I'm your AI project charter assistant. I see you've created a project called "${projectName}". Let's start by understanding your project better. Can you tell me about the type of project, its purpose, and any initial goals you have in mind?`,
        sender: 'ai',
        timestamp: new Date().toISOString()
      };
      
      setMessages([welcomeMessage]);
      
      // Initialize default stakeholders
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
      // Add user message
      const userMessage: Message = {
        id: Math.random().toString(36).substr(2, 9),
        content,
        sender: 'user',
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, userMessage]);
      
      // Simulate AI processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate AI response based on content
      let aiResponse = '';
      
      if (content.toLowerCase().includes('commercial') || content.toLowerCase().includes('office')) {
        aiResponse = "Great! A commercial office project. I'd like to understand more about the scale and vision. What's the approximate size in square feet, and what are the key functional requirements? Also, do you have any sustainability goals or specific performance targets in mind?";
        setProjectData(prev => ({ ...prev, type: 'commercial office', description: content }));
      } else if (content.toLowerCase().includes('residential')) {
        aiResponse = "Excellent! A residential project. Can you tell me more about the type of residential development - is this single-family, multi-family, or mixed-use? What's the target market, and are there any specific design philosophies or community goals driving this project?";
        setProjectData(prev => ({ ...prev, type: 'residential', description: content }));
      } else if (content.toLowerCase().includes('healthcare') || content.toLowerCase().includes('hospital')) {
        aiResponse = "A healthcare facility - this is a specialized project type with unique requirements. What type of healthcare services will be provided? We'll need to consider infection control, accessibility, technology infrastructure, and regulatory compliance. What's the expected patient capacity?";
        setProjectData(prev => ({ ...prev, type: 'healthcare', description: content }));
      } else if (content.toLowerCase().includes('budget') || content.toLowerCase().includes('cost')) {
        const budgetMatch = content.match(/\$?(\d+(?:,\d{3})*(?:\.\d{2})?)/);
        if (budgetMatch) {
          const budget = parseFloat(budgetMatch[1].replace(/,/g, ''));
          setProjectData(prev => ({ ...prev, budget }));
          aiResponse = `Thank you for sharing the budget information. With a budget of $${budget.toLocaleString()}, we can start aligning the project scope and expectations. What are your top three priorities for this budget allocation - quality, schedule, sustainability, or other factors?`;
        } else {
          aiResponse = "I understand budget is important. Could you share the anticipated budget range for this project? This will help me tailor the charter discussions and ensure realistic scope expectations.";
        }
      } else if (content.toLowerCase().includes('sustainable') || content.toLowerCase().includes('green') || content.toLowerCase().includes('leed')) {
        aiResponse = "Sustainability is a key focus - excellent! Are you targeting specific certifications like LEED, WELL, or Living Building Challenge? What sustainability priorities are most important: energy efficiency, material selection, indoor air quality, or operational carbon reduction?";
        setProjectData(prev => ({ 
          ...prev, 
          objectives: [...(prev.objectives || []), 'Achieve sustainability certification', 'Minimize environmental impact']
        }));
      } else if (content.toLowerCase().includes('timeline') || content.toLowerCase().includes('schedule')) {
        aiResponse = "Timeline is crucial for project success. Based on what you've shared, I'd recommend we discuss this with your construction team during their stakeholder interview. Are there any hard deadlines we need to work around - occupancy dates, lease expirations, or seasonal considerations?";
        setProjectData(prev => ({ ...prev, timeline: content }));
      } else {
        aiResponse = "Thank you for that information. I'm building a comprehensive understanding of your project. Based on what you've shared so far, would you like to start generating the stakeholder interview guides, or are there other aspects of the project vision you'd like to discuss first?";
      }
      
      const aiMessage: Message = {
        id: Math.random().toString(36).substr(2, 9),
        content: aiResponse,
        sender: 'ai',
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      
      return aiMessage;
    }
  });

  const generateLinksMutation = useMutation({
    mutationFn: async () => {
      // Simulate API call to generate unique interview links
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const updatedStakeholders = stakeholders.map(stakeholder => ({
        ...stakeholder,
        interviewLink: `https://div1.app/interview/${Math.random().toString(36).substr(2, 12)}`,
        status: 'pending' as const
      }));
      
      setStakeholders(updatedStakeholders);
      
      // Add AI message about links being generated
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
    isLoading: createProjectMutation.isPending || sendMessageMutation.isPending || generateLinksMutation.isPending
  };
};
