
import React, { useState } from 'react';
import { CharterEditor } from './CharterEditor';
import { CharterViewer } from './CharterViewer';

interface CharterManagerProps {
  projectId: string;
  mode: 'view' | 'edit' | 'create';
  onClose: () => void;
  initialCharter?: any;
}

export const CharterManager: React.FC<CharterManagerProps> = ({
  projectId,
  mode: initialMode,
  onClose,
  initialCharter
}) => {
  const [mode, setMode] = useState<'view' | 'edit' | 'create'>(initialMode);
  const [charter, setCharter] = useState(initialCharter || {
    projectName: '',
    projectDescription: '',
    objectives: [''],
    stakeholders: [''],
    timeline: '',
    budget: '',
    risks: [''],
    deliverables: ['']
  });

  const handleSave = (updatedCharter: any) => {
    setCharter(updatedCharter);
    // Here you would typically save to your database
    console.log('Saving charter:', updatedCharter);
    if (initialMode === 'create') {
      setMode('view');
    }
  };

  const handleEdit = () => {
    setMode('edit');
  };

  if (mode === 'view') {
    return (
      <CharterViewer
        charter={charter}
        onEdit={handleEdit}
        onClose={onClose}
      />
    );
  }

  return (
    <CharterEditor
      projectId={projectId}
      onSave={handleSave}
      onClose={onClose}
      initialCharter={charter}
    />
  );
};
