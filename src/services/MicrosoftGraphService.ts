
interface GraphApiConfig {
  clientId: string;
  tenantId: string;
  accessToken: string;
}

interface DocumentModification {
  type: 'insert' | 'replace' | 'delete';
  location: string;
  content?: string;
  originalText?: string;
}

export class MicrosoftGraphService {
  private static config: GraphApiConfig | null = null;

  static setConfig(config: GraphApiConfig) {
    this.config = config;
  }

  static async uploadDocument(file: File): Promise<{ success: boolean; driveItemId?: string; error?: string }> {
    if (!this.config) {
      return { success: false, error: 'Microsoft Graph API not configured' };
    }

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`https://graph.microsoft.com/v1.0/me/drive/root:/${file.name}:/content`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${this.config.accessToken}`,
          'Content-Type': file.type,
        },
        body: file,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const result = await response.json();
      return { success: true, driveItemId: result.id };
    } catch (error) {
      console.error('Error uploading to OneDrive:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Upload failed' };
    }
  }

  static async modifyDocument(driveItemId: string, modifications: DocumentModification[]): Promise<{ success: boolean; error?: string }> {
    if (!this.config) {
      return { success: false, error: 'Microsoft Graph API not configured' };
    }

    try {
      // Get the document content first
      const response = await fetch(`https://graph.microsoft.com/v1.0/me/drive/items/${driveItemId}/content`, {
        headers: {
          'Authorization': `Bearer ${this.config.accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch document: ${response.statusText}`);
      }

      // For Word documents, we would use the Word API to make modifications
      // This is a simplified implementation - real implementation would require Word API
      const modifyResponse = await fetch(`https://graph.microsoft.com/v1.0/me/drive/items/${driveItemId}/workbook/worksheets`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          modifications: modifications
        }),
      });

      return { success: modifyResponse.ok };
    } catch (error) {
      console.error('Error modifying document:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Modification failed' };
    }
  }

  static async downloadModifiedDocument(driveItemId: string): Promise<{ success: boolean; blob?: Blob; error?: string }> {
    if (!this.config) {
      return { success: false, error: 'Microsoft Graph API not configured' };
    }

    try {
      const response = await fetch(`https://graph.microsoft.com/v1.0/me/drive/items/${driveItemId}/content`, {
        headers: {
          'Authorization': `Bearer ${this.config.accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Download failed: ${response.statusText}`);
      }

      const blob = await response.blob();
      return { success: true, blob };
    } catch (error) {
      console.error('Error downloading document:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Download failed' };
    }
  }
}
