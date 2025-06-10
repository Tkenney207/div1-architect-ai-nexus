
import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

interface ProductData {
  id: string;
  name: string;
  description: string;
  manufacturer: string;
  category: string;
  cost: {
    unitCost: number;
    volumePricing: { quantity: number; price: number }[];
    regionalVariations: { region: string; adjustment: number }[];
    installationCost: number;
    maintenanceCost: number;
  };
  sustainability: {
    embodiedCarbon: number;
    recycledContent: number;
    recyclability: number;
    transportationEmissions: number;
    manufacturingLocation: string;
    renewableEnergyPercentage: number;
    waterUsage: number;
    vocEmissions: number;
    leedCredits: string[];
  };
  procurement: {
    primarySuppliers: { name: string; contact: string }[];
    alternativeSuppliers: { name: string; contact: string }[];
    leadTime: number;
    expeditedLeadTime: number;
    minimumOrderQuantity: number;
    stockAvailability: 'in-stock' | 'limited' | 'out-of-stock';
    shippingOptions: string[];
    paymentTerms: string;
    warranty: string;
  };
  installation: {
    instructions: string;
    requiredTools: string[];
    crewSize: number;
    skillRequirements: string;
    duration: number;
    weatherConstraints: string[];
    qualityCheckpoints: string[];
  };
  safety: {
    msdsSheet: string;
    requiredPPE: string[];
    hazardClassifications: string[];
    firstAidProcedures: string;
    storageRequirements: string;
    fireRating: string;
    structuralLimits: string;
  };
  technical: {
    dimensions: { length: number; width: number; height: number };
    weight: number;
    density: number;
    thermalProperties: string;
    acousticProperties: string;
    structuralProperties: string;
    electricalProperties: string;
    chemicalResistance: string;
    uvResistance: string;
    moistureResistance: string;
  };
  compliance: {
    buildingCodes: string[];
    industryStandards: string[];
    certifications: string[];
    testingReports: string[];
    seismicRating: string;
    windRating: string;
    accessibilityCompliance: boolean;
  };
  maintenance: {
    cleaningRequirements: string;
    inspectionIntervals: string;
    expectedLifespan: number;
    replacementIndicators: string[];
    repairProcedures: string;
    sparePartsAvailability: string;
  };
  certifications: string[];
}

interface SearchFilters {
  category: string;
  sustainability: string;
  priceRange: string;
  availability: string;
}

export const useProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({
    category: '',
    sustainability: '',
    priceRange: '',
    availability: ''
  });
  const queryClient = useQueryClient();

  // Mock data for demonstration
  const mockProducts: ProductData[] = [
    {
      id: '1',
      name: 'High-Performance Insulation Panel',
      description: 'Advanced polyisocyanurate insulation with superior thermal performance and fire resistance.',
      manufacturer: 'ThermalMax Industries',
      category: 'insulation',
      cost: {
        unitCost: 45.99,
        volumePricing: [
          { quantity: 100, price: 42.99 },
          { quantity: 500, price: 39.99 },
          { quantity: 1000, price: 36.99 }
        ],
        regionalVariations: [
          { region: 'West Coast', adjustment: 1.15 },
          { region: 'East Coast', adjustment: 1.08 },
          { region: 'Midwest', adjustment: 0.95 }
        ],
        installationCost: 12.50,
        maintenanceCost: 2.30
      },
      sustainability: {
        embodiedCarbon: 8.5,
        recycledContent: 35,
        recyclability: 85,
        transportationEmissions: 2.1,
        manufacturingLocation: 'Portland, OR',
        renewableEnergyPercentage: 78,
        waterUsage: 15.2,
        vocEmissions: 0.02,
        leedCredits: ['EAc1', 'MRc4', 'IEQc4.1']
      },
      procurement: {
        primarySuppliers: [
          { name: 'BuildMart Supply', contact: 'orders@buildmart.com' },
          { name: 'ProCon Materials', contact: 'sales@procon.com' }
        ],
        alternativeSuppliers: [
          { name: 'Regional Building Supply', contact: 'info@regbuild.com' },
          { name: 'Metro Construction', contact: 'orders@metrocon.com' },
          { name: 'Allied Materials', contact: 'sales@allied.com' }
        ],
        leadTime: 14,
        expeditedLeadTime: 7,
        minimumOrderQuantity: 50,
        stockAvailability: 'in-stock',
        shippingOptions: ['Standard Ground', 'Express', 'White Glove'],
        paymentTerms: 'Net 30',
        warranty: '25-year limited warranty'
      },
      installation: {
        instructions: 'Follow ASTM C1289 installation guidelines with proper vapor barrier placement.',
        requiredTools: ['Utility knife', 'Straightedge', 'Measuring tape', 'Adhesive spreader'],
        crewSize: 2,
        skillRequirements: 'Basic insulation installation experience',
        duration: 45,
        weatherConstraints: ['Temperature above 40°F', 'Dry conditions', 'Wind speed below 15mph'],
        qualityCheckpoints: ['Vapor barrier continuity', 'Joint sealing', 'Thermal bridge elimination']
      },
      safety: {
        msdsSheet: 'Available at thermalmax.com/safety/msds-hpi-2024',
        requiredPPE: ['Safety glasses', 'Work gloves', 'Dust mask'],
        hazardClassifications: ['Non-hazardous material'],
        firstAidProcedures: 'Standard workplace safety protocols apply',
        storageRequirements: 'Store in dry area, protect from moisture',
        fireRating: 'Class A flame spread rating',
        structuralLimits: 'Maximum load: 150 psf'
      },
      technical: {
        dimensions: { length: 4, width: 2, height: 0.25 },
        weight: 1.2,
        density: 2.1,
        thermalProperties: 'R-value: 6.5 per inch',
        acousticProperties: 'STC 45, NRC 0.85',
        structuralProperties: 'Compressive strength: 25 psi',
        electricalProperties: 'Dielectric constant: 1.8',
        chemicalResistance: 'Excellent resistance to most chemicals',
        uvResistance: 'UV stabilized for outdoor exposure',
        moistureResistance: 'Water absorption < 2%'
      },
      compliance: {
        buildingCodes: ['IBC 2021', 'IRC 2021', 'IECC 2021'],
        industryStandards: ['ASTM C1289', 'ASTM E84', 'FM 4880'],
        certifications: ['UL Listed', 'GREENGUARD Gold', 'Energy Star'],
        testingReports: ['ASTM C518 thermal performance', 'ASTM E84 flame spread'],
        seismicRating: 'Seismic Design Category D approved',
        windRating: 'Wind Zone 3 compliant',
        accessibilityCompliance: true
      },
      maintenance: {
        cleaningRequirements: 'Periodic inspection, no routine cleaning required',
        inspectionIntervals: 'Annual visual inspection recommended',
        expectedLifespan: 25,
        replacementIndicators: ['Visible damage', 'Moisture infiltration', 'Thermal performance degradation'],
        repairProcedures: 'Replace damaged sections with matching material',
        sparePartsAvailability: 'Standard inventory maintained by manufacturer'
      },
      certifications: ['LEED', 'Energy Star', 'GREENGUARD Gold']
    },
    {
      id: '2',
      name: 'Sustainable Steel Roofing System',
      description: 'Recyclable steel roofing with advanced coating technology for maximum durability.',
      manufacturer: 'EcoSteel Corporation',
      category: 'roofing',
      cost: {
        unitCost: 89.99,
        volumePricing: [
          { quantity: 50, price: 84.99 },
          { quantity: 200, price: 79.99 },
          { quantity: 500, price: 74.99 }
        ],
        regionalVariations: [
          { region: 'West Coast', adjustment: 1.20 },
          { region: 'East Coast', adjustment: 1.12 },
          { region: 'Midwest', adjustment: 0.92 }
        ],
        installationCost: 25.00,
        maintenanceCost: 8.50
      },
      sustainability: {
        embodiedCarbon: 12.8,
        recycledContent: 75,
        recyclability: 95,
        transportationEmissions: 3.2,
        manufacturingLocation: 'Gary, IN',
        renewableEnergyPercentage: 65,
        waterUsage: 28.5,
        vocEmissions: 0.01,
        leedCredits: ['MRc4', 'SSc7.1', 'EAc1']
      },
      procurement: {
        primarySuppliers: [
          { name: 'Roofing Supply Plus', contact: 'orders@roofplus.com' },
          { name: 'Steel Building Materials', contact: 'sales@steelbm.com' }
        ],
        alternativeSuppliers: [
          { name: 'Construction Depot', contact: 'info@condepot.com' },
          { name: 'Metal Roofing Direct', contact: 'orders@metalroof.com' },
          { name: 'Professional Building Supply', contact: 'sales@probuild.com' }
        ],
        leadTime: 21,
        expeditedLeadTime: 10,
        minimumOrderQuantity: 25,
        stockAvailability: 'limited',
        shippingOptions: ['Standard Freight', 'Express Freight', 'Direct Delivery'],
        paymentTerms: 'Net 30',
        warranty: '50-year paint warranty, 25-year substrate warranty'
      },
      installation: {
        instructions: 'Install per SMACNA guidelines with proper fastening schedule.',
        requiredTools: ['Drill', 'Metal snips', 'Measuring tape', 'Chalk line', 'Safety harness'],
        crewSize: 3,
        skillRequirements: 'Certified roofing installer with metal roofing experience',
        duration: 90,
        weatherConstraints: ['Dry conditions only', 'Temperature above 32°F', 'Wind speed below 25mph'],
        qualityCheckpoints: ['Fastener pattern verification', 'Sealant application', 'Flashing installation']
      },
      safety: {
        msdsSheet: 'Available at ecosteel.com/safety/msds-ssr-2024',
        requiredPPE: ['Hard hat', 'Safety harness', 'Non-slip footwear', 'Cut-resistant gloves'],
        hazardClassifications: ['Sharp edges warning'],
        firstAidProcedures: 'Standard cut and laceration protocols',
        storageRequirements: 'Store flat on pallets, protect from moisture',
        fireRating: 'Class A fire rating',
        structuralLimits: 'Live load capacity: 40 psf'
      },
      technical: {
        dimensions: { length: 12, width: 1, height: 0.032 },
        weight: 1.8,
        density: 490,
        thermalProperties: 'Thermal conductivity: 45 W/m·K',
        acousticProperties: 'STC 28 (with insulation)',
        structuralProperties: 'Yield strength: 80,000 psi',
        electricalProperties: 'Conductive material',
        chemicalResistance: 'Excellent corrosion resistance',
        uvResistance: 'PVDF coating with 20-year fade warranty',
        moistureResistance: 'Waterproof with proper installation'
      },
      compliance: {
        buildingCodes: ['IBC 2021', 'IRC 2021', 'FBC 2020'],
        industryStandards: ['ASTM A792', 'SMACNA guidelines', 'UL 790'],
        certifications: ['UL Listed', 'FM Approved', 'ICC-ES Report'],
        testingReports: ['UL 790 fire test', 'ASTM D3359 adhesion test'],
        seismicRating: 'Seismic Design Category E approved',
        windRating: 'Wind Zone 4 compliant (180 mph)',
        accessibilityCompliance: true
      },
      maintenance: {
        cleaningRequirements: 'Annual cleaning with mild detergent',
        inspectionIntervals: 'Semi-annual inspection recommended',
        expectedLifespan: 50,
        replacementIndicators: ['Coating failure', 'Substrate corrosion', 'Structural damage'],
        repairProcedures: 'Touch-up coating for minor damage, panel replacement for major damage',
        sparePartsAvailability: 'Replacement panels available for 30 years'
      },
      certifications: ['Energy Star', 'Cool Roof Rating Council', 'LEED']
    }
  ];

  const { data: results = [], isLoading } = useQuery({
    queryKey: ['productSearch', searchQuery, filters],
    queryFn: async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      let filteredProducts = mockProducts;
      
      if (searchQuery) {
        filteredProducts = filteredProducts.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.manufacturer.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      
      if (filters.category) {
        filteredProducts = filteredProducts.filter(product => product.category === filters.category);
      }
      
      if (filters.availability) {
        filteredProducts = filteredProducts.filter(product => product.procurement.stockAvailability === filters.availability);
      }
      
      return filteredProducts;
    },
    enabled: false // Only run when explicitly called
  });

  const searchMutation = useMutation({
    mutationFn: async ({ query, searchFilters }: { query: string; searchFilters: SearchFilters }) => {
      setSearchQuery(query);
      setFilters(searchFilters);
      return queryClient.invalidateQueries({ queryKey: ['productSearch'] });
    }
  });

  const saveMutation = useMutation({
    mutationFn: async (productId: string) => {
      // Simulate API call to save product
      console.log('Saving product:', productId);
      await new Promise(resolve => setTimeout(resolve, 500));
      return productId;
    }
  });

  const searchProducts = (query: string, searchFilters: SearchFilters) => {
    searchMutation.mutate({ query, searchFilters });
    queryClient.invalidateQueries({ queryKey: ['productSearch', query, searchFilters] });
  };

  const saveProduct = (productId: string) => {
    saveMutation.mutate(productId);
  };

  return {
    searchProducts,
    saveProduct,
    results,
    isLoading: isLoading || searchMutation.isPending,
    error: searchMutation.error
  };
};
