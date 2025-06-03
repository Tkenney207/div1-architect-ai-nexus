
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Star, Clock, Loader2 } from "lucide-react";
import { useProductSearch } from '@/hooks/useProductSearch';

export const ProductSearchInterface = () => {
  const { products, loading, searchProducts } = useProductSearch();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    const newFilters = selectedFilters.includes(filter) 
      ? selectedFilters.filter(f => f !== filter)
      : [...selectedFilters, filter];
    
    setSelectedFilters(newFilters);
    searchProducts(searchQuery, newFilters);
  };

  const handleSearch = () => {
    searchProducts(searchQuery, selectedFilters);
  };

  const availableFilters = ["Steel Products", "LEED Certified", "In Stock", "High Quality Score", "Local Supplier"];

  return (
    <div className="space-y-8">
      {/* Search Interface */}
      <Card className="shadow-2xl border-0 overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700">
        <CardHeader className="bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <CardTitle className="flex items-center text-2xl text-white">
            <Search className="h-6 w-6 mr-3 text-blue-400" />
            Advanced Product Search
          </CardTitle>
          <CardDescription className="text-lg text-gray-300">
            GraphQL federation with Elasticsearch semantic search
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Search products, materials, specifications..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="pl-12 h-14 text-lg border-2 rounded-2xl focus:border-blue-500 transition-colors bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400"
              />
            </div>
            <Button 
              size="lg" 
              onClick={handleSearch}
              disabled={loading}
              className="px-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              ) : (
                <Search className="h-5 w-5 mr-2" />
              )}
              Search
            </Button>
            <Button variant="outline" size="lg" className="px-6 rounded-2xl border-2 border-gray-600 text-gray-300 hover:bg-gray-800">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {availableFilters.map(filter => (
              <Badge 
                key={filter}
                variant={selectedFilters.includes(filter) ? "default" : "outline"} 
                className={`px-4 py-2 rounded-full cursor-pointer transition-colors ${
                  selectedFilters.includes(filter) 
                    ? "bg-blue-600 text-white" 
                    : "border-gray-500 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => toggleFilter(filter)}
              >
                {filter}
              </Badge>
            ))}
            <Badge variant="secondary" className="px-4 py-2 rounded-full cursor-pointer bg-gray-700 text-gray-300">+ Add Filter</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Search Results */}
      <Card className="shadow-2xl border-0 bg-gray-800/50 border border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Search Results</CardTitle>
          <CardDescription className="text-lg text-gray-300">
            {loading ? 'Searching...' : `Found ${products.length} products`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
              <span className="ml-3 text-gray-300">Searching products...</span>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500/50 cursor-pointer bg-gray-900/50 border-gray-600">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-semibold text-lg group-hover:text-blue-400 transition-colors text-white">{product.name}</h4>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-300">{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-4">{product.manufacturer}</p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Data Quality:</span>
                        <Badge variant={product.completeness > 95 ? "default" : "secondary"} className={product.completeness > 95 ? "bg-green-600" : "bg-blue-600"}>
                          {product.completeness}%
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Sustainability:</span>
                        <Badge variant="outline" className="border-green-500 text-green-400">{product.sustainability}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Availability:</span>
                        <span className="text-green-400 font-medium">{product.availability}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Price:</span>
                        <span className="text-blue-400 font-medium">{product.price}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Updated:</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-400">{product.lastUpdated}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
