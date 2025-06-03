
import { useState, useEffect } from 'react';

export interface Product {
  id: string;
  name: string;
  manufacturer: string;
  category: string;
  specifications: Record<string, any>;
  sustainability: string;
  availability: string;
  price: string;
  rating: number;
  completeness: number;
  lastUpdated: string;
  image?: string;
  description?: string;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'High-Performance Steel Beam',
    manufacturer: 'Nucor Corporation',
    category: 'Structural Steel',
    specifications: {
      grade: 'ASTM A992',
      yield_strength: '50 ksi',
      tensile_strength: '65 ksi',
      dimensions: 'W24x76'
    },
    sustainability: 'LEED Certified',
    availability: 'In Stock',
    price: '$2,450/ton',
    rating: 4.9,
    completeness: 98,
    lastUpdated: '2 min ago',
    description: 'Wide flange steel beam suitable for commercial construction'
  },
  {
    id: '2',
    name: 'Insulated Glass Units',
    manufacturer: 'Guardian Glass',
    category: 'Glazing Systems',
    specifications: {
      thickness: '1" IGU',
      u_value: '0.25',
      shgc: '0.23',
      vlt: '70%'
    },
    sustainability: 'Energy Star',
    availability: '2-3 weeks',
    price: '$145/sq ft',
    rating: 4.7,
    completeness: 95,
    lastUpdated: '5 min ago',
    description: 'High-performance insulated glass for energy efficiency'
  },
  {
    id: '3',
    name: 'Concrete Admixtures',
    manufacturer: 'BASF Construction',
    category: 'Concrete',
    specifications: {
      type: 'Superplasticizer',
      compressive_strength: '6000 psi',
      slump_retention: '60 min',
      air_content: '4-7%'
    },
    sustainability: 'Green Building',
    availability: 'In Stock',
    price: '$850/pallet',
    rating: 4.8,
    completeness: 92,
    lastUpdated: '1 min ago',
    description: 'Advanced concrete admixture for high-performance applications'
  },
  {
    id: '4',
    name: 'Acoustic Ceiling Tiles',
    manufacturer: 'Armstrong World Industries',
    category: 'Ceiling Systems',
    specifications: {
      nrc: '0.85',
      cac: '35',
      fire_rating: 'Class A',
      dimensions: '24" x 24"'
    },
    sustainability: 'GREENGUARD Gold',
    availability: 'In Stock',
    price: '$3.50/sq ft',
    rating: 4.6,
    completeness: 89,
    lastUpdated: '8 min ago',
    description: 'High-performance acoustic ceiling system'
  },
  {
    id: '5',
    name: 'LED Light Fixtures',
    manufacturer: 'Philips Lighting',
    category: 'Electrical',
    specifications: {
      lumens: '4000 lm',
      efficacy: '120 lm/W',
      cct: '4000K',
      cri: '90+'
    },
    sustainability: 'ENERGY STAR',
    availability: '1-2 weeks',
    price: '$185/fixture',
    rating: 4.8,
    completeness: 94,
    lastUpdated: '12 min ago',
    description: 'Energy-efficient LED lighting solution'
  }
];

export const useProductSearch = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<string[]>([]);

  const searchProducts = async (query: string, selectedFilters: string[] = []) => {
    setLoading(true);
    setSearchQuery(query);
    setFilters(selectedFilters);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    let filteredProducts = mockProducts;

    if (query) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.manufacturer.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.description?.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedFilters.length > 0) {
      filteredProducts = filteredProducts.filter(product => {
        return selectedFilters.some(filter => {
          switch (filter) {
            case 'Steel Products':
              return product.category.includes('Steel');
            case 'LEED Certified':
              return product.sustainability.includes('LEED');
            case 'In Stock':
              return product.availability === 'In Stock';
            case 'High Quality Score':
              return product.completeness > 95;
            case 'Local Supplier':
              return Math.random() > 0.5; // Mock local supplier logic
            default:
              return false;
          }
        });
      });
    }

    setProducts(filteredProducts);
    setLoading(false);
  };

  useEffect(() => {
    // Load initial products
    searchProducts('');
  }, []);

  return {
    products,
    loading,
    searchQuery,
    filters,
    searchProducts
  };
};
