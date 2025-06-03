
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MicrosoftGraphService } from "@/services/MicrosoftGraphService";
import { AzureCosmosService } from "@/services/AzureCosmosService";
import { FirecrawlService } from "@/services/FirecrawlService";
import { Cloud, Database, Globe, CheckCircle } from "lucide-react";

export const ServiceConfiguration = () => {
  const { toast } = useToast();
  const [configurations, setConfigurations] = useState({
    microsoftGraph: {
      clientId: '',
      tenantId: '',
      accessToken: '',
      configured: false
    },
    azureCosmos: {
      endpoint: '',
      key: '',
      databaseId: '',
      containerId: '',
      configured: false
    },
    firecrawl: {
      apiKey: '',
      configured: false
    }
  });

  const configureMicrosoftGraph = () => {
    const { clientId, tenantId, accessToken } = configurations.microsoftGraph;
    if (!clientId || !tenantId || !accessToken) {
      toast({
        title: "Error",
        description: "Please fill in all Microsoft Graph API fields",
        variant: "destructive",
      });
      return;
    }

    MicrosoftGraphService.setConfig({ clientId, tenantId, accessToken });
    setConfigurations(prev => ({
      ...prev,
      microsoftGraph: { ...prev.microsoftGraph, configured: true }
    }));

    toast({
      title: "Success",
      description: "Microsoft Graph API configured successfully",
    });
  };

  const configureAzureCosmos = () => {
    const { endpoint, key, databaseId, containerId } = configurations.azureCosmos;
    if (!endpoint || !key || !databaseId || !containerId) {
      toast({
        title: "Error",
        description: "Please fill in all Azure Cosmos DB fields",
        variant: "destructive",
      });
      return;
    }

    AzureCosmosService.setConfig({ endpoint, key, databaseId, containerId });
    setConfigurations(prev => ({
      ...prev,
      azureCosmos: { ...prev.azureCosmos, configured: true }
    }));

    toast({
      title: "Success",
      description: "Azure Cosmos DB configured successfully",
    });
  };

  const configureFirecrawl = () => {
    const { apiKey } = configurations.firecrawl;
    if (!apiKey) {
      toast({
        title: "Error",
        description: "Please enter your Firecrawl API key",
        variant: "destructive",
      });
      return;
    }

    FirecrawlService.setConfig({ apiKey });
    setConfigurations(prev => ({
      ...prev,
      firecrawl: { ...prev.firecrawl, configured: true }
    }));

    toast({
      title: "Success",
      description: "Firecrawl API configured successfully",
    });
  };

  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-3">
          <Cloud className="h-6 w-6 text-blue-400" />
          <span>Service Configuration</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="microsoft-graph" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-900">
            <TabsTrigger value="microsoft-graph" className="data-[state=active]:bg-blue-600">
              Microsoft Graph
              {configurations.microsoftGraph.configured && (
                <CheckCircle className="h-4 w-4 ml-2 text-green-400" />
              )}
            </TabsTrigger>
            <TabsTrigger value="azure-cosmos" className="data-[state=active]:bg-purple-600">
              Azure Cosmos
              {configurations.azureCosmos.configured && (
                <CheckCircle className="h-4 w-4 ml-2 text-green-400" />
              )}
            </TabsTrigger>
            <TabsTrigger value="firecrawl" className="data-[state=active]:bg-orange-600">
              Firecrawl
              {configurations.firecrawl.configured && (
                <CheckCircle className="h-4 w-4 ml-2 text-green-400" />
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="microsoft-graph" className="space-y-4 mt-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Client ID
                </label>
                <Input
                  placeholder="Enter Microsoft Graph Client ID"
                  value={configurations.microsoftGraph.clientId}
                  onChange={(e) => setConfigurations(prev => ({
                    ...prev,
                    microsoftGraph: { ...prev.microsoftGraph, clientId: e.target.value }
                  }))}
                  className="bg-gray-900 border-gray-600 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Tenant ID
                </label>
                <Input
                  placeholder="Enter Microsoft Graph Tenant ID"
                  value={configurations.microsoftGraph.tenantId}
                  onChange={(e) => setConfigurations(prev => ({
                    ...prev,
                    microsoftGraph: { ...prev.microsoftGraph, tenantId: e.target.value }
                  }))}
                  className="bg-gray-900 border-gray-600 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Access Token
                </label>
                <Input
                  type="password"
                  placeholder="Enter Microsoft Graph Access Token"
                  value={configurations.microsoftGraph.accessToken}
                  onChange={(e) => setConfigurations(prev => ({
                    ...prev,
                    microsoftGraph: { ...prev.microsoftGraph, accessToken: e.target.value }
                  }))}
                  className="bg-gray-900 border-gray-600 text-white"
                />
              </div>
              <Button onClick={configureMicrosoftGraph} className="w-full bg-blue-600 hover:bg-blue-700">
                Configure Microsoft Graph API
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="azure-cosmos" className="space-y-4 mt-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Cosmos DB Endpoint
                </label>
                <Input
                  placeholder="https://your-account.documents.azure.com:443/"
                  value={configurations.azureCosmos.endpoint}
                  onChange={(e) => setConfigurations(prev => ({
                    ...prev,
                    azureCosmos: { ...prev.azureCosmos, endpoint: e.target.value }
                  }))}
                  className="bg-gray-900 border-gray-600 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Primary Key
                </label>
                <Input
                  type="password"
                  placeholder="Enter Cosmos DB Primary Key"
                  value={configurations.azureCosmos.key}
                  onChange={(e) => setConfigurations(prev => ({
                    ...prev,
                    azureCosmos: { ...prev.azureCosmos, key: e.target.value }
                  }))}
                  className="bg-gray-900 border-gray-600 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Database ID
                </label>
                <Input
                  placeholder="div1-specifications"
                  value={configurations.azureCosmos.databaseId}
                  onChange={(e) => setConfigurations(prev => ({
                    ...prev,
                    azureCosmos: { ...prev.azureCosmos, databaseId: e.target.value }
                  }))}
                  className="bg-gray-900 border-gray-600 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Container ID
                </label>
                <Input
                  placeholder="specifications"
                  value={configurations.azureCosmos.containerId}
                  onChange={(e) => setConfigurations(prev => ({
                    ...prev,
                    azureCosmos: { ...prev.azureCosmos, containerId: e.target.value }
                  }))}
                  className="bg-gray-900 border-gray-600 text-white"
                />
              </div>
              <Button onClick={configureAzureCosmos} className="w-full bg-purple-600 hover:bg-purple-700">
                Configure Azure Cosmos DB
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="firecrawl" className="space-y-4 mt-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Firecrawl API Key
                </label>
                <Input
                  type="password"
                  placeholder="fc-xxxxxxxxxxxxxxxxxxxxxxxx"
                  value={configurations.firecrawl.apiKey}
                  onChange={(e) => setConfigurations(prev => ({
                    ...prev,
                    firecrawl: { ...prev.firecrawl, apiKey: e.target.value }
                  }))}
                  className="bg-gray-900 border-gray-600 text-white"
                />
              </div>
              <Button onClick={configureFirecrawl} className="w-full bg-orange-600 hover:bg-orange-700">
                Configure Firecrawl API
              </Button>
              <div className="text-sm text-gray-400">
                <p className="mb-2">Firecrawl will be used to scrape manufacturer data from:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Armstrong Ceiling & Wall Solutions</li>
                  <li>USG Corporation</li>
                  <li>Owens Corning</li>
                  <li>Custom manufacturer websites</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
          <h4 className="text-white font-medium mb-2">Integration Status</h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <Badge variant={configurations.microsoftGraph.configured ? "default" : "outline"} 
                     className={configurations.microsoftGraph.configured ? "bg-green-600" : "border-gray-500"}>
                Graph API
              </Badge>
            </div>
            <div className="text-center">
              <Badge variant={configurations.azureCosmos.configured ? "default" : "outline"} 
                     className={configurations.azureCosmos.configured ? "bg-green-600" : "border-gray-500"}>
                Cosmos DB
              </Badge>
            </div>
            <div className="text-center">
              <Badge variant={configurations.firecrawl.configured ? "default" : "outline"} 
                     className={configurations.firecrawl.configured ? "bg-green-600" : "border-gray-500"}>
                Firecrawl
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
