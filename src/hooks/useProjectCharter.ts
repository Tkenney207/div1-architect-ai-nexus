
import { useState } from 'react';

export interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: string;
  stakeholder?: string;
}

export interface Stakeholder {
  id: string;
  name: string;
  role: string;
  email: string;
  status: 'pending' | 'invited' | 'completed';
  interviewLink?: string;
}

export interface ProjectCharter {
  id: string;
  name: string;
  description: string;
  stakeholders: Stakeholder[];
  messages: ChatMessage[];
  status: 'draft' | 'interviews' | 'synthesis' | 'completed';
  createdAt: string;
  completionPercentage: number;
  insights: {
    sentiment: 'positive' | 'neutral' | 'negative';
    engagementScore: number;
    topicsIdentified: number;
    conflictsDetected: number;
  };
}

const mockStakeholders: Stakeholder[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'Owner/Client',
    email: 'john@company.com',
    status: 'completed'
  },
  {
    id: '2',
    name: 'Sarah Wilson',
    role: 'Architect',
    email: 'sarah@architects.com',
    status: 'completed'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    role: 'General Contractor',
    email: 'mike@construction.com',
    status: 'invited'
  },
  {
    id: '4',
    name: 'Lisa Chen',
    role: 'MEP Engineer',
    email: 'lisa@engineering.com',
    status: 'pending'
  }
];

export const useProjectCharter = () => {
  const [currentProject, setCurrentProject] = useState<ProjectCharter | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: "Welcome! I'm here to help facilitate your project charter process. Let's start by understanding your project goals. What type of construction project are you planning?",
      timestamp: '2 min ago'
    },
    {
      id: '2',
      type: 'user',
      content: "We're planning a new commercial office building in downtown Seattle.",
      timestamp: '1 min ago'
    },
    {
      id: '3',
      type: 'ai',
      content: "Excellent! A commercial office building is a significant undertaking. To help create a comprehensive project charter, I'd like to understand more about your stakeholders and requirements. Who are the key decision makers on this project?",
      timestamp: '30 sec ago'
    }
  ]);

  const sendMessage = async (content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: 'now'
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI processing
    setTimeout(() => {
      const aiResponses = [
        "Thank you for that information. I'm analyzing the stakeholder dynamics and project scope. Can you tell me about the expected timeline and budget constraints for this project?",
        "I understand. Let me help you identify potential risks and opportunities. What are your main concerns about this project?",
        "Based on your input, I'm seeing some important themes emerge. How do you envision the collaboration between your team members?",
        "That's valuable insight. I'm now synthesizing this information with best practices for similar projects. What sustainability goals do you have?"
      ];

      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: 'now'
      };

      setMessages(prev => [...prev, aiMessage]);
    }, 1500);
  };

  const createProject = (name: string, description: string) => {
    const newProject: ProjectCharter = {
      id: Date.now().toString(),
      name,
      description,
      stakeholders: mockStakeholders,
      messages: [],
      status: 'draft',
      createdAt: new Date().toISOString(),
      completionPercentage: 25,
      insights: {
        sentiment: 'positive',
        engagementScore: 94,
        topicsIdentified: 12,
        conflictsDetected: 0
      }
    };

    setCurrentProject(newProject);
    return newProject;
  };

  const inviteStakeholder = (stakeholderId: string) => {
    if (!currentProject) return;

    const updatedStakeholders = currentProject.stakeholders.map(s =>
      s.id === stakeholderId
        ? { ...s, status: 'invited' as const, interviewLink: `${window.location.origin}/interview/${s.id}` }
        : s
    );

    setCurrentProject({
      ...currentProject,
      stakeholders: updatedStakeholders
    });
  };

  return {
    currentProject,
    messages,
    sendMessage,
    createProject,
    inviteStakeholder,
    stakeholders: mockStakeholders
  };
};
