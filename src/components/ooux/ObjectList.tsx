
import React from 'react';
import { ObjectCard } from './ObjectCard';
import { Button } from "@/components/ui/button";
import { Plus, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ObjectListProps {
  objects: any[];
  objectType: string;
  actions: string[];
  onAction: (action: string, object: any) => void;
  onCreateNew?: () => void;
  title: string;
  emptyMessage?: string;
  searchable?: boolean;
  filterable?: boolean;
}

export const ObjectList: React.FC<ObjectListProps> = ({
  objects,
  objectType,
  actions,
  onAction,
  onCreateNew,
  title,
  emptyMessage = `No ${objectType.toLowerCase()}s found`,
  searchable = true,
  filterable = false
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredObjects, setFilteredObjects] = React.useState(objects);

  React.useEffect(() => {
    if (searchTerm) {
      const filtered = objects.filter(obj => 
        (obj.name || obj.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (obj.description || '').toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredObjects(filtered);
    } else {
      setFilteredObjects(objects);
    }
  }, [searchTerm, objects]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        {onCreateNew && (
          <Button onClick={onCreateNew} className="bg-orange-600 hover:bg-orange-700">
            <Plus className="h-4 w-4 mr-2" />
            New {objectType}
          </Button>
        )}
      </div>

      {/* Search and Filters */}
      {(searchable || filterable) && (
        <div className="flex space-x-4">
          {searchable && (
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder={`Search ${objectType.toLowerCase()}s...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          )}
          {filterable && (
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          )}
        </div>
      )}

      {/* Object Grid */}
      {filteredObjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredObjects.map((object) => (
            <ObjectCard
              key={object.id}
              object={object}
              objectType={objectType}
              actions={object.actions || actions}
              onAction={onAction}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400 mb-4">{emptyMessage}</p>
          {onCreateNew && (
            <Button onClick={onCreateNew} variant="outline">
              Create your first {objectType.toLowerCase()}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
