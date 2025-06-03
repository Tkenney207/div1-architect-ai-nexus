
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Download, Bookmark, TrendingUp, Globe, Shield, Zap } from "lucide-react";
import { useProductSearch } from "@/hooks/useProductSearch";

export const ProductSearchInterface = () => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    sustainability: '',
    priceRange: '',
    availability: ''
  });
  
  const { searchProducts, isLoading, results, saveProduct } = useProductSearch();

  const handleSearch = () => {
    searchProducts(query, filters);
  };

  const handleSaveProduct = (productId: string) => {
    saveProduct(productId);
  };

  return (
    <div className="space-y-8">
      {/* Advanced Search Interface */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-3">
            <Search className="h-6 w-6 text-blue-400" />
            <span>AI-Powered Product Discovery</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex space-x-4">
            <div className="flex-1">
              <Input
                placeholder="Search for products, specifications, or manufacturers..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-gray-900 border-gray-600 text-white placeholder-gray-400"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button 
              onClick={handleSearch}
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Search className="h-4 w-4 mr-2" />
              {isLoading ? 'Searching...' : 'Search'}
            </Button>
          </div>

          {/* Advanced Filters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <select 
              className="bg-gray-900 border-gray-600 rounded-md p-2 text-white"
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})}
            >
              <option value="">All Categories</option>
              <option value="insulation">Insulation</option>
              <option value="roofing">Roofing</option>
              <option value="windows">Windows & Doors</option>
              <option value="hvac">HVAC Systems</option>
            </select>
            
            <select 
              className="bg-gray-900 border-gray-600 rounded-md p-2 text-white"
              value={filters.sustainability}
              onChange={(e) => setFilters({...filters, sustainability: e.target.value})}
            >
              <option value="">Sustainability</option>
              <option value="leed">LEED Certified</option>
              <option value="recycled">High Recycled Content</option>
              <option value="low-carbon">Low Embodied Carbon</option>
            </select>
            
            <select 
              className="bg-gray-900 border-gray-600 rounded-md p-2 text-white"
              value={filters.priceRange}
              onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
            >
              <option value="">Price Range</option>
              <option value="budget">Budget Friendly</option>
              <option value="mid">Mid Range</option>
              <option value="premium">Premium</option>
            </select>
            
            <select 
              className="bg-gray-900 border-gray-600 rounded-md p-2 text-white"
              value={filters.availability}
              onChange={(e) => setFilters({...filters, availability: e.target.value})}
            >
              <option value="">Availability</option>
              <option value="in-stock">In Stock</option>
              <option value="quick-ship">Quick Ship</option>
              <option value="made-to-order">Made to Order</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Search Results */}
      {results.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">Search Results ({results.length})</h3>
          <div className="grid gap-6">
            {results.map((product) => (
              <Card key={product.id} className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{product.name}</h4>
                      <p className="text-gray-300 mb-3">{product.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.certifications.map((cert, idx) => (
                          <Badge key={idx} variant="outline" className="border-green-500 text-green-400">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSaveProduct(product.id)}
                      className="border-orange-500 text-orange-400 hover:bg-orange-600"
                    >
                      <Bookmark className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Price:</span>
                      <span className="text-white ml-2">${product.cost.unitCost}/unit</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Carbon:</span>
                      <span className="text-white ml-2">{product.sustainability.embodiedCarbon} kgCO2e</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Lead Time:</span>
                      <span className="text-white ml-2">{product.procurement.leadTime} days</span>
                    </div>
                    <div>
                      <span className="text-gray-400">R-Value:</span>
                      <span className="text-white ml-2">{product.technical.thermalProperties}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex space-x-3">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Download className="h-4 w-4 mr-2" />
                      Technical Data
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Real-time Data Insights */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border-blue-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-3">
              <TrendingUp className="h-5 w-5 text-blue-400" />
              <span>Market Trends</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Sustainable Products</span>
                <span className="text-green-400">↑ 23%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Steel Prices</span>
                <span className="text-red-400">↑ 8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Lead Times</span>
                <span className="text-yellow-400">↓ 12%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-900/30 to-orange-800/30 border-orange-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-3">
              <Globe className="h-5 w-5 text-orange-400" />
              <span>Global Availability</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">North America</span>
                <span className="text-green-400">Available</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Europe</span>
                <span className="text-green-400">Available</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Asia Pacific</span>
                <span className="text-yellow-400">Limited</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-900/30 to-green-800/30 border-green-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-3">
              <Shield className="h-5 w-5 text-green-400" />
              <span>Quality Score</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Data Accuracy</span>
                <span className="text-green-400">98.7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Updated Today</span>
                <span className="text-blue-400">2.3M items</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Verified Sources</span>
                <span className="text-green-400">847</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
