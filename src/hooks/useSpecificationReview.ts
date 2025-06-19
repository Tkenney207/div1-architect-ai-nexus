import { useState } from 'react';

interface SuggestionItem {
  id: string;
  type: 'update' | 'addition' | 'removal' | 'compliance';
  category: string;
  title: string;
  description: string;
  originalText?: string;
  suggestedText: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'approved' | 'rejected';
  lineNumber?: number;
}

export const useSpecificationReview = () => {
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);
  const [fileContent, setFileContent] = useState<string>('');

  const analyzeContentForSuggestions = (content: string): SuggestionItem[] => {
    const lines = content.split('\n');
    const suggestions: SuggestionItem[] = [];
    let suggestionId = 1;

    // Analyze content line by line for potential issues
    lines.forEach((line, index) => {
      const lineNumber = index + 1;
      const lowerLine = line.toLowerCase();

      // Check for outdated code references
      if (lowerLine.includes('ibc 2018') || lowerLine.includes('ibc2018')) {
        suggestions.push({
          id: suggestionId.toString(),
          type: 'compliance',
          category: 'Building Code',
          title: 'Update IBC Reference',
          description: 'The International Building Code reference is outdated and should be updated to IBC 2021.',
          originalText: line.match(/IBC\s*20\d{2}/i)?.[0] || 'IBC 2018',
          suggestedText: 'IBC 2021',
          priority: 'high',
          status: 'pending',
          lineNumber
        });
        suggestionId++;
      }

      // Check for outdated ASTM standards
      if (lowerLine.includes('astm') && (lowerLine.includes('-20') || lowerLine.includes('-19'))) {
        const astmMatch = line.match(/ASTM\s+[A-Z]\d+[-–]\d{2}/i);
        if (astmMatch) {
          suggestions.push({
            id: suggestionId.toString(),
            type: 'compliance',
            category: 'Material Standard',
            title: 'Update ASTM Standard',
            description: 'ASTM standard reference may be outdated. Consider updating to the latest version.',
            originalText: astmMatch[0],
            suggestedText: astmMatch[0].replace(/[-–]\d{2}$/, '-23'),
            priority: 'medium',
            status: 'pending',
            lineNumber
          });
          suggestionId++;
        }
      }

      // Check for missing sustainability requirements
      if (lowerLine.includes('material') && !content.toLowerCase().includes('leed') && !content.toLowerCase().includes('recycled')) {
        suggestions.push({
          id: suggestionId.toString(),
          type: 'addition',
          category: 'Sustainability',
          title: 'Add LEED Requirements',
          description: 'Consider adding LEED v4.1 recycled content requirements for better sustainability compliance.',
          suggestedText: 'Materials shall contain minimum 50% recycled content per LEED v4.1 MR Credit: Building Product Disclosure and Optimization.',
          priority: 'medium',
          status: 'pending',
          lineNumber
        });
        suggestionId++;
      }

      // Check for R-value specifications that might be outdated
      if (lowerLine.includes('r-') && (lowerLine.includes('r-30') || lowerLine.includes('r-25'))) {
        const rValueMatch = line.match(/R[-–]\d+/i);
        if (rValueMatch) {
          suggestions.push({
            id: suggestionId.toString(),
            type: 'update',
            category: 'Performance',
            title: 'Improve R-Value Specification',
            description: 'Current R-value specification may not meet current energy efficiency requirements.',
            originalText: rValueMatch[0],
            suggestedText: 'R-38 minimum per current energy codes',
            priority: 'high',
            status: 'pending',
            lineNumber
          });
          suggestionId++;
        }
      }

      // Check for manufacturer-specific product references that might be discontinued
      if (lowerLine.includes('armstrong') && lowerLine.includes('model')) {
        suggestions.push({
          id: suggestionId.toString(),
          type: 'update',
          category: 'Manufacturer',
          title: 'Verify Product Availability',
          description: 'Product model references should be verified for current availability.',
          originalText: line.trim(),
          suggestedText: 'Armstrong Ultima Vector Ceiling Tiles or approved equivalent',
          priority: 'medium',
          status: 'pending',
          lineNumber
        });
        suggestionId++;
      }
    });

    // If no specific issues found, add some general suggestions based on content analysis
    if (suggestions.length === 0) {
      if (!content.toLowerCase().includes('leed')) {
        suggestions.push({
          id: suggestionId.toString(),
          type: 'addition',
          category: 'Sustainability',
          title: 'Add Sustainability Requirements',
          description: 'Consider adding LEED or other green building requirements to improve sustainability compliance.',
          suggestedText: 'Include LEED v4.1 material requirements where applicable.',
          priority: 'low',
          status: 'pending',
          lineNumber: Math.floor(lines.length / 2)
        });
        suggestionId++;
      }

      if (!content.toLowerCase().includes('astm')) {
        suggestions.push({
          id: suggestionId.toString(),
          type: 'addition',
          category: 'Standards',
          title: 'Add Material Standards',
          description: 'Consider referencing relevant ASTM standards for material specifications.',
          suggestedText: 'Materials shall comply with applicable ASTM standards.',
          priority: 'medium',
          status: 'pending',
          lineNumber: Math.floor(lines.length * 0.75)
        });
        suggestionId++;
      }
    }

    return suggestions;
  };

  const generateSuggestions = (fileName: string, content?: string): SuggestionItem[] => {
    console.log('Generating suggestions for:', fileName);
    console.log('Content length:', content?.length || 0);
    
    // Store the file content if provided
    if (content) {
      setFileContent(content);
      // Analyze the actual content to generate relevant suggestions
      return analyzeContentForSuggestions(content);
    }

    // If no content provided, return empty array
    return [];
  };

  const approveSuggestion = (suggestionId: string) => {
    setSuggestions(prev => 
      prev.map(suggestion => 
        suggestion.id === suggestionId 
          ? { ...suggestion, status: 'approved' as const }
          : suggestion
      )
    );
  };

  const rejectSuggestion = (suggestionId: string) => {
    setSuggestions(prev => 
      prev.map(suggestion => 
        suggestion.id === suggestionId 
          ? { ...suggestion, status: 'rejected' as const }
          : suggestion
      )
    );
  };

  const approveAllSuggestions = () => {
    setSuggestions(prev => 
      prev.map(suggestion => 
        suggestion.status === 'pending'
          ? { ...suggestion, status: 'approved' as const }
          : suggestion
      )
    );
  };

  const downloadRevisedSpecification = (fileName: string, approvedSuggestions: SuggestionItem[]) => {
    // Generate revised document content
    const revisedContent = `
# Revised Specification: ${fileName}

## Applied Changes:
${approvedSuggestions.map(suggestion => `
- ${suggestion.title}: ${suggestion.description}
  ${suggestion.originalText ? `Original: ${suggestion.originalText}` : ''}
  Revised: ${suggestion.suggestedText}
`).join('\n')}

## Full Specification Content:
[This would contain the complete specification with all approved changes applied]

Generated by AI Specification Review System
Date: ${new Date().toLocaleDateString()}
    `;

    const blob = new Blob([revisedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName.replace('.', '_revised.')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
    fileContent,
    setFileContent
  };
};
