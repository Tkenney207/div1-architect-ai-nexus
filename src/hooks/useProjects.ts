
import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export interface Project {
  id: string;
  user_id: string;
  name: string;
  description: string | null;
  type: string | null;
  status: string;
  budget: number | null;
  location: string | null;
  objectives: string[] | null;
  sustainability_goals: string[] | null;
  is_archived: boolean;
  created_at: string;
  updated_at: string;
}

export const useProjects = (showArchived: boolean = false) => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: projects = [], isLoading, error } = useQuery({
    queryKey: ['projects', user?.id, showArchived],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('user_id', user.id)
        .eq('is_archived', showArchived)
        .order('updated_at', { ascending: false });

      if (error) {
        console.error('Error fetching projects:', error);
        throw error;
      }

      return data as Project[];
    },
    enabled: !!user,
  });

  const archiveProject = useMutation({
    mutationFn: async (projectId: string) => {
      const { error } = await supabase
        .from('projects')
        .update({ is_archived: true, updated_at: new Date().toISOString() })
        .eq('id', projectId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast.success('Project archived successfully');
    },
    onError: (error) => {
      console.error('Error archiving project:', error);
      toast.error('Failed to archive project');
    },
  });

  const unarchiveProject = useMutation({
    mutationFn: async (projectId: string) => {
      const { error } = await supabase
        .from('projects')
        .update({ is_archived: false, updated_at: new Date().toISOString() })
        .eq('id', projectId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast.success('Project restored successfully');
    },
    onError: (error) => {
      console.error('Error restoring project:', error);
      toast.error('Failed to restore project');
    },
  });

  const deleteProject = useMutation({
    mutationFn: async (projectId: string) => {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', projectId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast.success('Project deleted permanently');
    },
    onError: (error) => {
      console.error('Error deleting project:', error);
      toast.error('Failed to delete project');
    },
  });

  return {
    projects,
    isLoading,
    error,
    archiveProject: archiveProject.mutate,
    unarchiveProject: unarchiveProject.mutate,
    deleteProject: deleteProject.mutate,
    isArchiving: archiveProject.isPending,
    isDeleting: deleteProject.isPending,
    isUnarchiving: unarchiveProject.isPending,
  };
};
