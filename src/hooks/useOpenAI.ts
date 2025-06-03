
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

interface OpenAIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export const useOpenAI = () => {
  const [apiKey, setApiKey] = useState<string>('');

  const sendMessageMutation = useMutation({
    mutationFn: async ({ messages, systemPrompt }: { messages: OpenAIMessage[], systemPrompt?: string }) => {
      if (!apiKey) {
        throw new Error('OpenAI API key is required');
      }

      const messagesToSend = systemPrompt 
        ? [{ role: 'system' as const, content: systemPrompt }, ...messages]
        : messages;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: messagesToSend,
          max_tokens: 1000,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to get AI response');
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || 'No response received';
    },
  });

  return {
    sendMessage: sendMessageMutation.mutate,
    isLoading: sendMessageMutation.isPending,
    error: sendMessageMutation.error,
    apiKey,
    setApiKey,
  };
};
