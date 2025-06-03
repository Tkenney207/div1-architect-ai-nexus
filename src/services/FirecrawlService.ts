
interface FirecrawlConfig {
  apiKey: string;
}

interface CrawlResult {
  success: boolean;
  status?: string;
  completed?: number;
  total?: number;
  creditsUsed?: number;
  expiresAt?: string;
  data?: any[];
}

interface ManufacturerScrapeTarget {
  name: string;
  url: string;
  selectors: {
    products: string;
    specifications: string;
    datasheets: string;
  };
}

export class FirecrawlService {
  private static config: FirecrawlConfig | null = null;

  static setConfig(config: FirecrawlConfig) {
    this.config = config;
  }

  static async scrapeManufacturerData(target: ManufacturerScrapeTarget): Promise<{ success: boolean; data?: any; error?: string }> {
    if (!this.config) {
      return { success: false, error: 'Firecrawl API not configured' };
    }

    try {
      const crawlOptions = {
        url: target.url,
        limit: 50,
        scrapeOptions: {
          formats: ['markdown', 'html'],
          includePaths: ['/products', '/specifications', '/datasheets'],
          excludePaths: ['/admin', '/login'],
          extractorOptions: {
            mode: 'llm-extraction',
            extractionPrompt: `Extract manufacturer product information including:
              - Product names and model numbers
              - Technical specifications
              - Performance data
              - Compliance standards
              - Material properties
              Format as structured JSON.`
          }
        }
      };

      const response = await fetch('https://api.firecrawl.dev/v0/crawl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`,
        },
        body: JSON.stringify(crawlOptions),
      });

      if (!response.ok) {
        throw new Error(`Firecrawl request failed: ${response.statusText}`);
      }

      const result = await response.json();
      return { success: true, data: result };
    } catch (error) {
      console.error('Error scraping manufacturer data:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Scraping failed' };
    }
  }

  static async scrapeMultipleManufacturers(targets: ManufacturerScrapeTarget[]): Promise<{ success: boolean; results?: any[]; error?: string }> {
    if (!this.config) {
      return { success: false, error: 'Firecrawl API not configured' };
    }

    try {
      const results = await Promise.allSettled(
        targets.map(target => this.scrapeManufacturerData(target))
      );

      const successfulResults = results
        .filter(result => result.status === 'fulfilled' && result.value.success)
        .map(result => (result as PromiseFulfilledResult<any>).value.data);

      return { success: true, results: successfulResults };
    } catch (error) {
      console.error('Error scraping multiple manufacturers:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Batch scraping failed' };
    }
  }

  static getCommonManufacturerTargets(): ManufacturerScrapeTarget[] {
    return [
      {
        name: 'Armstrong Ceiling & Wall Solutions',
        url: 'https://www.armstrongceilings.com',
        selectors: {
          products: '.product-card',
          specifications: '.spec-sheet',
          datasheets: '.datasheet-link'
        }
      },
      {
        name: 'USG Corporation',
        url: 'https://www.usg.com',
        selectors: {
          products: '.product-item',
          specifications: '.technical-data',
          datasheets: '.pdf-download'
        }
      },
      {
        name: 'Owens Corning',
        url: 'https://www.owenscorning.com',
        selectors: {
          products: '.product-tile',
          specifications: '.product-specs',
          datasheets: '.literature-link'
        }
      }
    ];
  }
}
