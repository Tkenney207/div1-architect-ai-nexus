
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Key, Eye, EyeOff } from "lucide-react";

interface OpenAIKeySetupProps {
  apiKey: string;
  setApiKey: (key: string) => void;
  onComplete: () => void;
}

export const OpenAIKeySetup: React.FC<OpenAIKeySetupProps> = ({ apiKey, setApiKey, onComplete }) => {
  const [inputKey, setInputKey] = useState(apiKey);
  const [showKey, setShowKey] = useState(false);

  const handleSave = () => {
    setApiKey(inputKey);
    localStorage.setItem('openai_api_key', inputKey);
    onComplete();
  };

  return (
    <Card className="bg-gray-800/50 border-gray-700 max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-3">
          <Key className="h-6 w-6 text-yellow-400" />
          <span>OpenAI API Key Setup</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-300 text-sm">
          To enable AI-powered conversations, please enter your OpenAI API key. 
          Your key will be stored locally in your browser.
        </p>
        <div className="relative">
          <Input
            type={showKey ? "text" : "password"}
            placeholder="sk-proj-..."
            value={inputKey}
            onChange={(e) => setInputKey(e.target.value)}
            className="bg-gray-900 border-gray-600 text-white pr-10"
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
            onClick={() => setShowKey(!showKey)}
          >
            {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>
        <Button 
          onClick={handleSave}
          disabled={!inputKey.trim()}
          className="w-full bg-green-600 hover:bg-green-700"
        >
          Save & Continue
        </Button>
      </CardContent>
    </Card>
  );
};
