
interface CosmosConfig {
  endpoint: string;
  key: string;
  databaseId: string;
  containerId: string;
}

interface SpecificationDocument {
  id: string;
  fileName: string;
  content: string;
  analysisResults: any;
  uploadDate: string;
  lastModified: string;
  userId: string;
}

interface ManufacturerData {
  id: string;
  name: string;
  products: string[];
  specifications: any;
  lastUpdated: string;
  source: string;
}

export class AzureCosmosService {
  private static config: CosmosConfig | null = null;

  static setConfig(config: CosmosConfig) {
    this.config = config;
  }

  private static async makeCosmosRequest(method: string, path: string, body?: any) {
    if (!this.config) {
      throw new Error('Azure Cosmos DB not configured');
    }

    const url = `${this.config.endpoint}/${path}`;
    const headers = {
      'Authorization': `type=master&ver=1.0&sig=${this.config.key}`,
      'Content-Type': 'application/json',
      'x-ms-version': '2020-07-15',
      'x-ms-documentdb-query-enablecrosspartition': 'true',
    };

    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Cosmos DB request failed: ${response.statusText}`);
    }

    return await response.json();
  }

  static async saveSpecification(specification: SpecificationDocument): Promise<{ success: boolean; error?: string }> {
    try {
      await this.makeCosmosRequest(
        'POST',
        `dbs/${this.config?.databaseId}/colls/${this.config?.containerId}/docs`,
        specification
      );
      return { success: true };
    } catch (error) {
      console.error('Error saving specification:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Save failed' };
    }
  }

  static async getSpecifications(userId: string): Promise<{ success: boolean; data?: SpecificationDocument[]; error?: string }> {
    try {
      const query = {
        query: 'SELECT * FROM c WHERE c.userId = @userId',
        parameters: [{ name: '@userId', value: userId }]
      };

      const result = await this.makeCosmosRequest(
        'POST',
        `dbs/${this.config?.databaseId}/colls/${this.config?.containerId}/docs`,
        query
      );

      return { success: true, data: result.Documents };
    } catch (error) {
      console.error('Error fetching specifications:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Fetch failed' };
    }
  }

  static async saveManufacturerData(manufacturerData: ManufacturerData): Promise<{ success: boolean; error?: string }> {
    try {
      await this.makeCosmosRequest(
        'POST',
        `dbs/${this.config?.databaseId}/colls/manufacturers/docs`,
        manufacturerData
      );
      return { success: true };
    } catch (error) {
      console.error('Error saving manufacturer data:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Save failed' };
    }
  }

  static async searchManufacturers(searchTerm: string): Promise<{ success: boolean; data?: ManufacturerData[]; error?: string }> {
    try {
      const query = {
        query: 'SELECT * FROM c WHERE CONTAINS(c.name, @searchTerm) OR ARRAY_CONTAINS(c.products, @searchTerm)',
        parameters: [{ name: '@searchTerm', value: searchTerm }]
      };

      const result = await this.makeCosmosRequest(
        'POST',
        `dbs/${this.config?.databaseId}/colls/manufacturers/docs`,
        query
      );

      return { success: true, data: result.Documents };
    } catch (error) {
      console.error('Error searching manufacturers:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Search failed' };
    }
  }
}
