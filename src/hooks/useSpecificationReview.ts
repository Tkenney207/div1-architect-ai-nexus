
import { useState } from 'react';

interface Suggestion {
  id: string;
  type: string;
  category: string;
  title: string;
  description: string;
  originalText?: string;
  suggestedText: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'approved' | 'rejected';
  lineNumber?: number;
}

export const useSpecificationReview = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [fileContent, setFileContent] = useState<string>('');

  const generateSuggestions = (fileName: string, content: string): Suggestion[] => {
    console.log('Generating suggestions for:', fileName);
    console.log('Content length:', content?.length || 0);
    
    if (!content || typeof content !== 'string' || content.trim().length === 0) {
      console.warn('No valid content provided for suggestions');
      return [];
    }

    // Analyze the actual content to generate more relevant suggestions
    const lines = content.split(/\r?\n/);
    const contentLower = content.toLowerCase();
    const generatedSuggestions: Suggestion[] = [];
    
    // Check for missing ASTM standards
    if (!contentLower.includes('astm')) {
      generatedSuggestions.push({
        id: 'astm-' + Date.now(),
        type: 'compliance',
        category: 'Standards',
        title: 'Add ASTM Standards Reference',
        description: 'Consider referencing relevant ASTM standards for material specifications.',
        suggestedText: 'Materials shall comply with applicable ASTM standards.',
        priority: 'medium',
        status: 'pending',
        lineNumber: Math.min(10, lines.length)
      });
    }

    // Check for missing LEED requirements
    if (!contentLower.includes('leed')) {
      generatedSuggestions.push({
        id: 'leed-' + Date.now(),
        type: 'addition',
        category: 'Sustainability',
        title: 'Add Sustainability Requirements',
        description: 'Consider adding LEED or other green building requirements to improve sustainability compliance.',
        suggestedText: 'Include LEED v4.1 material requirements where applicable.',
        priority: 'low',
        status: 'pending',
        lineNumber: Math.min(5, lines.length)
      });
    }

    // Check for fire rating requirements
    if (contentLower.includes('fire') && !contentLower.includes('fire rating')) {
      generatedSuggestions.push({
        id: 'fire-rating-' + Date.now(),
        type: 'compliance',
        category: 'Fire Safety',
        title: 'Specify Fire Rating Requirements',
        description: 'Fire-related materials should include specific fire rating requirements.',
        suggestedText: 'Materials shall meet fire rating requirements per applicable building codes.',
        priority: 'high',
        status: 'pending',
        lineNumber: lines.findIndex(line => line.toLowerCase().includes('fire')) + 1 || 1
      });
    }

    // Check for installation requirements
    if (!contentLower.includes('installation') && !contentLower.includes('install')) {
      generatedSuggestions.push({
        id: 'installation-' + Date.now(),
        type: 'addition',
        category: 'Installation',
        title: 'Add Installation Requirements',
        description: 'Specify detailed installation requirements and procedures.',
        suggestedText: 'Installation shall be performed by qualified installers in accordance with manufacturer recommendations.',
        priority: 'medium',
        status: 'pending',
        lineNumber: Math.floor(lines.length / 2)
      });
    }

    // Check for warranty information
    if (!contentLower.includes('warranty') && !contentLower.includes('guarantee')) {
      generatedSuggestions.push({
        id: 'warranty-' + Date.now(),
        type: 'addition',
        category: 'Warranty',
        title: 'Add Warranty Requirements',
        description: 'Include warranty requirements for materials and workmanship.',
        suggestedText: 'Provide manufacturer warranty for materials and installation warranty for workmanship.',
        priority: 'low',
        status: 'pending',
        lineNumber: lines.length - 5 > 0 ? lines.length - 5 : lines.length
      });
    }

    return generatedSuggestions;
  };

  const approveSuggestion = (suggestionId: string) => {
    setSuggestions(prev => prev.map(s => 
      s.id === suggestionId ? { ...s, status: 'approved' as const } : s
    ));
  };

  const rejectSuggestion = (suggestionId: string) => {
    setSuggestions(prev => prev.map(s => 
      s.id === suggestionId ? { ...s, status: 'rejected' as const } : s
    ));
  };

  const approveAllSuggestions = () => {
    setSuggestions(prev => prev.map(s => 
      s.status === 'pending' ? { ...s, status: 'approved' as const } : s
    ));
  };

  const downloadRevisedSpecification = (fileName: string, approvedSuggestions: Suggestion[]) => {
    let revisedContent = fileContent;
    
    // Apply approved suggestions to the content
    approvedSuggestions.forEach(suggestion => {
      if (suggestion.originalText) {
        revisedContent = revisedContent.replace(suggestion.originalText, suggestion.suggestedText);
      } else {
        // For additions, append to the content
        revisedContent += '\n\n' + suggestion.suggestedText;
      }
    });

    // Create and download the file
    const blob = new Blob([revisedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `revised_${fileName}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return {
    suggestions,
    setSuggestions,
    generateSuggestions,
    approveSuggestion,
    rejectSuggestion,
    approveAllSuggestions,
    downloadRevisedSpecification,
    setFileContent
  };
};
