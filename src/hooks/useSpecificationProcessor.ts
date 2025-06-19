
import { useState } from 'react';
import mammoth from 'mammoth';

export const useSpecificationProcessor = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [processingStatus, setProcessingStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const extractTextFromFile = async (file) => {
    console.log('Starting file extraction:', {
      fileName: file.name,
      fileType: file.type,
      fileSize: file.size
    });

    try {
      // Handle text files
      if (file.type.startsWith('text/') || file.name.endsWith('.txt')) {
        return await extractTextFile(file);
      }
      
      // Handle PDF files  
      if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
        return await extractPdfFile(file);
      }
      
      // Handle Word documents
      if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || 
          file.name.toLowerCase().endsWith('.docx')) {
        return await extractWordFile(file);
      }
      
      // Handle legacy Word documents
      if (file.type === 'application/msword' || file.name.toLowerCase().endsWith('.doc')) {
        console.warn('Legacy .doc files are not supported. Please convert to .docx format.');
        throw new Error('Legacy .doc files are not supported. Please convert to .docx format.');
      }
      
      // Fallback for unknown file types
      console.warn('Unsupported file type:', file.type);
      throw new Error(`Unsupported file type: ${file.type}`);
      
    } catch (error) {
      console.error('File extraction failed:', error);
      throw error;
    }
  };

  const extractTextFile = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const result = e.target?.result;
        if (!result) {
          reject(new Error('Failed to read text file'));
          return;
        }
        
        // Ensure we have a string
        const content = typeof result === 'string' ? result : new TextDecoder().decode(result);
        
        if (!content || content.trim().length === 0) {
          reject(new Error('File appears to be empty'));
          return;
        }
        
        console.log('Text file extracted successfully:', {
          fileName: file.name,
          contentLength: content.length,
          contentPreview: content.substring(0, 200) + '...'
        });
        resolve(content);
      };
      
      reader.onerror = () => {
        reject(new Error('Failed to read text file'));
      };
      
      reader.readAsText(file);
    });
  };

  const extractPdfFile = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = async (e) => {
        try {
          const result = e.target?.result;
          if (!result) {
            reject(new Error('Failed to read PDF file'));
            return;
          }

          // Ensure we have an ArrayBuffer
          const arrayBuffer = result instanceof ArrayBuffer ? result : new ArrayBuffer(0);

          try {
            // Use pdf-parse to extract text
            const pdfParse = await import('pdf-parse');
            const pdfData = await pdfParse.default(Buffer.from(arrayBuffer));
            
            if (!pdfData.text || pdfData.text.trim().length === 0) {
              reject(new Error('PDF appears to be empty or contains no extractable text'));
              return;
            }

            console.log('PDF extracted successfully:', {
              fileName: file.name,
              pages: pdfData.numpages,
              contentLength: pdfData.text.length,
              contentPreview: pdfData.text.substring(0, 200) + '...'
            });
            resolve(pdfData.text);
          } catch (pdfError) {
            console.warn('PDF extraction failed, falling back to basic text extraction:', pdfError);
            // Fallback: try to extract as plain text
            const text = new TextDecoder().decode(arrayBuffer);
            if (text && text.trim().length > 0) {
              resolve(text);
            } else {
              reject(new Error('Failed to extract text from PDF'));
            }
          }
        } catch (error) {
          console.error('PDF extraction failed:', error);
          reject(new Error('Failed to extract text from PDF'));
        }
      };
      
      reader.onerror = () => {
        reject(new Error('Failed to read PDF file'));
      };
      
      reader.readAsArrayBuffer(file);
    });
  };

  const extractWordFile = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = async (e) => {
        try {
          const result = e.target?.result;
          if (!result) {
            reject(new Error('Failed to read Word file'));
            return;
          }

          // Ensure we have an ArrayBuffer
          const arrayBuffer = result instanceof ArrayBuffer ? result : new ArrayBuffer(0);

          console.log('Processing Word file with mammoth...');
          const mammothResult = await mammoth.extractRawText({ arrayBuffer });
          
          console.log('Mammoth extraction result:', {
            hasValue: !!mammothResult.value,
            valueType: typeof mammothResult.value,
            valueLength: mammothResult.value?.length || 0,
            value: mammothResult.value,
            messages: mammothResult.messages
          });

          if (!mammothResult.value || mammothResult.value.trim().length === 0) {
            reject(new Error('Word document appears to be empty'));
            return;
          }

          // Log any conversion messages
          if (mammothResult.messages.length > 0) {
            console.warn('Word extraction messages:', mammothResult.messages);
          }

          console.log('Word document extracted successfully:', {
            fileName: file.name,
            contentLength: mammothResult.value.length,
            contentPreview: mammothResult.value.substring(0, 200) + '...',
            warnings: mammothResult.messages.length
          });
          
          resolve(mammothResult.value);
        } catch (error) {
          console.error('Word extraction failed:', error);
          reject(new Error('Failed to extract text from Word document'));
        }
      };
      
      reader.onerror = () => {
        reject(new Error('Failed to read Word file'));
      };
      
      reader.readAsArrayBuffer(file);
    });
  };

  const validateContent = (content, fileName) => {
    if (!content || typeof content !== 'string') {
      console.error('Content validation failed: content is not a valid string', { fileName });
      return false;
    }

    const trimmedContent = content.trim();
    if (trimmedContent.length === 0) {
      console.error('Content validation failed: content is empty', { fileName });
      return false;
    }

    if (trimmedContent.length < 10) {
      console.warn('Content validation warning: content is very short', { 
        fileName, 
        length: trimmedContent.length 
      });
    }

    console.log('Content validation passed:', {
      fileName,
      contentLength: trimmedContent.length,
      isValid: true
    });
    return true;
  };

  const analyzeSpecificationContent = async (content, fileName) => {
    // Simulate AI analysis based on actual content
    // In a real implementation, this would call an AI service like OpenAI
    
    // Basic content analysis to make it more realistic
    const lines = content.split('\n');
    const wordCount = content.split(/\s+/).length;
    const hasASTM = content.toLowerCase().includes('astm');
    const hasIBC = content.toLowerCase().includes('ibc');
    const hasLEED = content.toLowerCase().includes('leed');
    
    // Generate analysis based on actual content characteristics
    const criticalIssues = Math.floor(Math.random() * 3) + (hasASTM ? 0 : 1) + (hasIBC ? 0 : 1);
    const warningsCount = Math.floor(Math.random() * 5) + Math.floor(wordCount / 100);
    const overallCompliance = Math.max(60, 100 - (criticalIssues * 10) - (warningsCount * 2));

    return {
      overview: {
        overallCompliance,
        criticalIssues,
        warningsCount,
        upToDatePercentage: Math.floor(Math.random() * 40) + 60,
        lastReviewDate: new Date().toISOString()
      },
      manufacturerCompliance: [
        {
          manufacturer: 'Armstrong Ceiling Systems',
          products: ['Mineral Fiber Tiles', 'Suspension Systems'],
          status: Math.random() > 0.5 ? 'current' : 'outdated',
          alternatives: ['USG Boral', 'Rockfon'],
          lastUpdated: '2023-01-15'
        },
        {
          manufacturer: 'Sherwin-Williams',
          products: ['ProClassic Interior Latex', 'ProMar 200'],
          status: Math.random() > 0.3 ? 'current' : 'discontinued',
          lastUpdated: '2023-06-20'
        }
      ],
      codeCompliance: [
        {
          code: 'IBC',
          section: 'Section 705.8 - Fire Rating',
          status: hasIBC ? 'compliant' : 'requires-update',
          currentVersion: '2021',
          specifiedVersion: hasIBC ? '2021' : '2018',
          description: 'Fire-rated wall assembly requirements',
          recommendations: hasIBC ? undefined : 'Update to IBC 2021 requirements'
        },
        {
          code: 'IECC',
          section: 'Section C402 - Building Envelope',
          status: Math.random() > 0.6 ? 'compliant' : 'non-compliant',
          currentVersion: '2021',
          specifiedVersion: '2018',
          description: 'Energy efficiency requirements for building envelope'
        }
      ],
      materialStandards: [
        {
          standard: 'ASTM E84',
          material: 'Interior Finishes',
          status: hasASTM ? 'compliant' : 'outdated',
          currentStandard: 'ASTM E84-23',
          specifiedStandard: hasASTM ? 'ASTM E84-23' : 'ASTM E84-20',
          criticalityLevel: 'high'
        },
        {
          standard: 'ASTM C97',
          material: 'Natural Stone',
          status: Math.random() > 0.4 ? 'compliant' : 'missing',
          currentStandard: 'ASTM C97-18',
          specifiedStandard: 'ASTM C97-15',
          criticalityLevel: 'medium'
        }
      ],
      sustainabilityMetrics: [
        {
          category: 'LEED v4.1',
          metric: 'Recycled Content',
          value: hasLEED ? '45%' : 'Not specified',
          benchmark: '50%',
          status: hasLEED ? 'meets' : 'not-specified',
          recommendations: hasLEED ? undefined : 'Specify recycled content requirements per LEED v4.1'
        },
        {
          category: 'Indoor Air Quality',
          metric: 'Low-Emitting Materials',
          value: Math.random() > 0.5 ? 'Compliant' : 'Not specified',
          benchmark: 'GREENGUARD Gold',
          status: Math.random() > 0.5 ? 'meets' : 'below'
        }
      ],
      performanceSpecs: [
        {
          component: 'Thermal Insulation',
          specification: 'R-Value',
          measuredValue: 'R-30',
          requiredValue: 'R-38',
          status: 'marginal',
          testMethod: 'ASTM C518'
        },
        {
          component: 'Fire Rating',
          specification: 'Fire Resistance',
          measuredValue: '2-hour',
          requiredValue: '2-hour',
          status: 'pass',
          testMethod: 'ASTM E119'
        }
      ]
    };
  };

  const uploadSpecification = async (file) => {
    const fileId = `file-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newFile = {
      id: fileId,
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      uploadDate: new Date().toISOString(),
      status: 'uploading'
    };

    // Add file to list immediately
    setUploadedFiles(prev => [...prev, newFile]);
    setIsLoading(true);

    try {
      // Step 1: Extract file content
      setProcessingStatus({
        stage: 'Extracting content...',
        progress: 20,
        message: `Reading ${file.name}`
      });

      const extractedContent = await extractTextFromFile(file);
      
      console.log('UPLOAD: Content extracted:', {
        fileId,
        fileName: file.name,
        contentType: typeof extractedContent,
        contentLength: typeof extractedContent === 'string' ? extractedContent.length : 0,
        contentPreview: typeof extractedContent === 'string' ? extractedContent.substring(0, 100) : 'No content'
      });

      // Step 2: Validate extracted content
      if (!validateContent(extractedContent, file.name)) {
        throw new Error('File content validation failed');
      }

      console.log('Content extraction and validation successful:', {
        fileId,
        fileName: file.name,
        contentLength: typeof extractedContent === 'string' ? extractedContent.length : 0,
        contentPreview: typeof extractedContent === 'string' ? extractedContent.substring(0, 150) + '...' : 'No preview'
      });

      // Step 3: Update file with extracted content and set to processing
      setUploadedFiles(prev => prev.map(f => 
        f.id === fileId 
          ? { ...f, status: 'processing', content: extractedContent }
          : f
      ));

      // Step 4: Perform AI analysis
      setProcessingStatus({
        stage: 'Analyzing specification...',
        progress: 50,
        message: 'AI analysis in progress'
      });

      await new Promise(resolve => setTimeout(resolve, 2000));

      setProcessingStatus({
        stage: 'Generating compliance report...',
        progress: 80,
        message: 'Checking standards and codes'
      });

      const analysisResults = await analyzeSpecificationContent(extractedContent, file.name);

      // Step 5: Complete processing - ensure content is preserved
      setProcessingStatus({
        stage: 'Complete',
        progress: 100,
        message: 'Analysis complete'
      });

      setUploadedFiles(prev => prev.map(f => 
        f.id === fileId 
          ? { 
              ...f, 
              status: 'processed', 
              analysisResults,
              content: extractedContent // Ensure content is preserved
            }
          : f
      ));

      console.log('File processing completed successfully:', {
        fileId,
        fileName: file.name,
        hasContent: !!extractedContent,
        contentLength: typeof extractedContent === 'string' ? extractedContent.length : 0,
        hasAnalysis: !!analysisResults
      });

      // Clear processing status after a short delay
      setTimeout(() => {
        setProcessingStatus(null);
        setIsLoading(false);
      }, 1000);

    } catch (error) {
      console.error('Error processing file:', error);
      
      // Update file status to error with error message
      setUploadedFiles(prev => prev.map(f => 
        f.id === fileId 
          ? { 
              ...f, 
              status: 'error',
              content: `Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`
            }
          : f
      ));
      
      setProcessingStatus(null);
      setIsLoading(false);
    }
  };

  const getFileContent = (fileId) => {
    console.log('=== GET FILE CONTENT DEBUG ===');
    console.log('Requested fileId:', fileId);
    console.log('Available files:', uploadedFiles.map(f => ({ id: f.id, name: f.name, hasContent: !!f.content, contentLength: typeof f.content === 'string' ? f.content.length : 0 })));
    
    const file = uploadedFiles.find(f => f.id === fileId);
    if (!file) {
      console.warn('File not found:', fileId);
      return undefined;
    }

    console.log('Found file:', {
      id: file.id,
      name: file.name,
      status: file.status,
      hasContent: !!file.content,
      contentType: typeof file.content,
      contentLength: typeof file.content === 'string' ? file.content.length : 0,
      contentPreview: typeof file.content === 'string' ? file.content.substring(0, 100) : 'No content'
    });

    if (!file.content) {
      console.warn('File content is empty:', {
        fileId,
        fileName: file.name,
        status: file.status
      });
      return undefined;
    }

    console.log('Retrieved file content successfully:', {
      fileId,
      fileName: file.name,
      contentLength: typeof file.content === 'string' ? file.content.length : 0,
      status: file.status
    });
    
    return file.content;
  };

  return {
    uploadSpecification,
    uploadedFiles,
    processingStatus,
    isLoading,
    getFileContent
  };
};
