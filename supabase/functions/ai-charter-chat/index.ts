
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
    const { message, projectData, messages } = await req.json();

    // Build conversation context
    const systemPrompt = `You are an AI project charter assistant specializing in construction and architecture projects. Your role is to help users create comprehensive project charters by gathering essential information through conversational interviews.

Key responsibilities:
1. Guide users through project discovery with thoughtful questions
2. Extract project requirements, goals, and constraints
3. Identify stakeholders and their roles
4. Help define project scope, timeline, and budget considerations
5. Suggest sustainability goals and quality requirements
6. Provide insights on submittal procedures and waste management

Current project context:
- Project Name: ${projectData?.name || 'Not specified'}
- Project Type: ${projectData?.type || 'Not specified'}
- Description: ${projectData?.description || 'Not specified'}

Be conversational, professional, and ask one focused question at a time. When you sense the charter is becoming comprehensive, suggest completion and offer to generate Division 1 specifications.`;

    const conversationHistory = messages.map((msg: any) => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.content
    }));

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          ...conversationHistory,
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ai-charter-chat function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
