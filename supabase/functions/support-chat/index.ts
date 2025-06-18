
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversation } = await req.json();

    console.log('Received support chat request:', { message, conversationLength: conversation?.length });

    if (!openAIApiKey) {
      console.error('OpenAI API key not found');
      return new Response(JSON.stringify({ 
        error: 'OpenAI API key not configured',
        errorType: 'config' 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Build conversation context
    const systemPrompt = `You are a helpful customer support assistant for Div1, a construction and architecture AI platform. Your role is to:

1. Help users with technical issues and questions
2. Provide guidance on using Div1's features and tools
3. Assist with account-related inquiries
4. Offer solutions for common problems
5. Escalate complex issues when necessary

Key information about Div1:
- Div1 specializes in construction and architecture project management
- We offer AI-powered Division 1 specifications generation
- We provide project charter creation tools
- We focus on construction industry workflows

Be friendly, professional, and solution-oriented. If you can't solve a problem immediately, offer to escalate it to human support. Always aim to provide clear, actionable guidance.`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...(conversation || []),
      { role: 'user', content: message }
    ];

    const requestBody = {
      model: 'gpt-4o-mini',
      messages: messages,
      temperature: 0.7,
      max_tokens: 500,
    };

    console.log('Making OpenAI request for support chat');

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    console.log('OpenAI response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', errorText);
      
      return new Response(JSON.stringify({ 
        error: `OpenAI API error: ${response.status}`,
        errorType: 'api_error'
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    console.log('OpenAI response received successfully');

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error('Invalid OpenAI response structure:', data);
      return new Response(JSON.stringify({ 
        error: 'Invalid response from OpenAI',
        errorType: 'invalid_response' 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const aiResponse = data.choices[0].message.content;

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in support-chat function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      errorType: 'function_error' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
