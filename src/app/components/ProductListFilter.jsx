"use client";
import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from './ProductCard'; 
import { marineCategories, marineBrands } from '@/app/lib/products'; 
import { ChevronDown, ChevronUp, Filter, SlidersHorizontal, X } from 'lucide-react';

// Define sorting options
const sortOptions = [
  { name: 'Default', value: 'default' },
  { name: 'Price', value: 'price_asc' },
  { name: 'Price', value: 'price_desc' },
  { name: 'Newest', value: 'newest' },
  { name: 'Popularity', value: 'best_seller' },
];

export default function ProductListFilter({ products }) {
  const searchParams = useSearchParams();
  
  const initialSearchTerm = searchParams.get('q') || '';
  
  // Filter States
  const [searchTerm] = useState(initialSearchTerm); 
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('default'); 
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Mobile sidebar toggle

  // UI Toggle States for the Sidebar
  const [showCategories, setShowCategories] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  
  // Get all unique brands for the filter dropdown
  const uniqueBrands = useMemo(() => {
    return marineBrands.map(b => b.name);
  }, []);

  // --- Filtering and Sorting Logic (Optimized with useMemo) ---
  const filteredAndSortedProducts = useMemo(() => {
    let filteredProducts = products;

    // 1. Filtering by Price Range
    const minP = parseFloat(minPrice);
    const maxP = parseFloat(maxPrice);
    
    filteredProducts = filteredProducts.filter(p => {
        const price = p.price || 0; // Use p.price (if it exists) or 0 for safe comparison
        const passesMin = isNaN(minP) || price >= minP;
        const passesMax = isNaN(maxP) || price <= maxP;
        return passesMin && passesMax;
    });

    // 2. Filtering by Category
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
    }

    // 3. Filtering by Brand
    if (selectedBrand) {
      filteredProducts = filteredProducts.filter(p => p.brand === selectedBrand);
    }
    
    // 4. Filtering by Search Term
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      filteredProducts = filteredProducts.filter(p => 
        (p.name && p.name.toLowerCase().includes(lowerSearchTerm)) ||
        (p.description && p.description.toLowerCase().includes(lowerSearchTerm))
      );
    }

    // 5. Sorting
    return filteredProducts.sort((a, b) => {
      switch (sortBy) {
        case 'price_asc':
          return (a.price || 0) - (b.price || 0); 
        case 'price_desc':
          return (b.price || 0) - (a.price || 0);
        case 'newest':
          return b.id - a.id; 
        case 'best_seller':
          return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
        case 'default':
        default:
          return 0;
      }
    });
  }, [products, searchTerm, selectedCategory, selectedBrand, sortBy, minPrice, maxPrice]);

  // Handler to clear all filters (excluding the URL-sourced search term)
  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSelectedBrand(null);
    setMinPrice('');
    setMaxPrice('');
  };
  
  const hasActiveLocalFilters = selectedCategory || selectedBrand || minPrice || maxPrice;

  return (
    <div>
      {/* Top Controls Bar (Sort and Mobile Toggle) */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-lg mb-8 border border-gray-100">
        
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center py-2 px-4 text-marine-blue rounded-full font-semibold hover:bg-gray-100 transition duration-200 lg:hidden"
        >
          <SlidersHorizontal className="h-5 w-5 mr-2" />
          {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
        </button>

        {/* Product Count (Visible on Desktop) */}
        <div className="hidden lg:block text-lg font-semibold text-gray-700">
            <span className="font-bold text-marine-blue">{filteredAndSortedProducts.length}</span> Products Found
        </div>
        
        {/* Sort By Options (Horizontal Tabs) */}
        <div className="flex items-center space-x-2 text-sm font-semibold">
          <span className="text-gray-600 hidden sm:block">Sort By:</span>
          {sortOptions.map(option => {
            const isActive = sortBy === option.value;
            const Icon = isActive && (option.value.includes('price') ? (option.value === 'price_asc' ? ChevronUp : ChevronDown) : null);

            return (
              <button
                key={option.value}
                onClick={() => setSortBy(option.value)}
                className={`
                  flex items-center px-4 py-2 rounded-full transition-all duration-200 
                  ${isActive 
                    ? 'bg-marine-blue text-white shadow-md' 
                    : 'bg-gray-100 text-marine-blue hover:bg-gray-200'
                  }
                `}
              >
                {option.name} 
                {Icon && <Icon className="h-4 w-4 ml-1" />}
                {option.value === 'price_asc' && !Icon && option.name === 'Price' && <ChevronUp className="h-4 w-4 ml-1 opacity-50" />}
                {option.value === 'price_desc' && !Icon && option.name === 'Price' && <ChevronDown className="h-4 w-4 ml-1 opacity-50" />}
                {option.value !== 'price_asc' && option.value !== 'price_desc' && option.value === 'Default' && isActive && <ChevronDown className="h-4 w-4 ml-1" />}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Main Layout: Filters (Sidebar) and Products (Grid) */}
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* FILTER SIDEBAR */}
        <div 
          className={`
            lg:block w-full lg:w-72 flex-shrink-0 
            ${isFilterOpen ? 'block' : 'hidden'} 
            bg-white p-6 rounded-xl shadow-lg h-fit border border-gray-100
          `}
        >
          <h3 className="text-xl font-bold text-marine-blue mb-6 flex items-center">
            <Filter className="h-5 w-5 mr-2" /> 
            Active Filters
          </h3>

          {/* Active Search Filter Display (If URL parameter is set) */}
          {searchTerm && (
            <div className="mb-6 p-3 bg-accent-yellow/10 border border-accent-yellow rounded-lg">
              <p className="text-sm font-semibold text-marine-blue flex items-center">
                <X className="h-4 w-4 mr-1 cursor-pointer text-red-600" onClick={() => window.location.href = '/products'} /> 
                Searching for: 
              </p>
              <p className="text-lg font-bold text-marine-blue break-words">{searchTerm}</p>
            </div>
          )}
          
          <hr className="my-4" />

          {/* --- Price Filter --- */}
          <div className="mb-8 border-b border-gray-200 pb-4">
            <button 
              className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-700 hover:text-marine-blue transition"
              onClick={() => setShowPrice(!showPrice)}
            >
              Price Range
              {showPrice ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            
            {showPrice && (
              <div className="pt-4 space-y-3">
                <div className="flex space-x-3 items-center">
                  <input
                    type="number"
                    placeholder="Min $"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-accent-yellow focus:border-accent-yellow text-sm"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="number"
                    placeholder="Max $"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-accent-yellow focus:border-accent-yellow text-sm"
                  />
                </div>
              </div>
            )}
          </div>

          {/* --- Category Filter --- */}
          <div className="mb-8 border-b border-gray-200 pb-4">
            <button 
              className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-700 hover:text-marine-blue transition"
              onClick={() => setShowCategories(!showCategories)}
            >
              Category
              {showCategories ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            
            {showCategories && (
              <div className="pt-4 space-y-2 max-h-48 overflow-y-auto pr-2">
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left p-2 rounded-lg transition ${!selectedCategory ? 'bg-marine-blue text-white font-bold' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  All Categories
                </button>
                {marineCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`w-full text-left p-2 rounded-lg transition ${selectedCategory === cat.slug ? 'bg-accent-yellow text-marine-blue font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* --- Brand Filter --- */}
          <div className="mb-8 border-b border-gray-200 pb-4">
            <button 
              className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-700 hover:text-marine-blue transition"
              onClick={() => setShowBrands(!showBrands)}
            >
              Brand
              {showBrands ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>

            {showBrands && (
              <div className="pt-4 space-y-2 max-h-48 overflow-y-auto pr-2">
              <button 
                  onClick={() => setSelectedBrand(null)}
                  className={`w-full text-left p-2 rounded-lg transition ${!selectedBrand ? 'bg-marine-blue text-white font-bold' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  All Brands
                </button>
                {uniqueBrands.map(brand => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`w-full text-left p-2 rounded-lg transition ${selectedBrand === brand ? 'bg-accent-yellow text-marine-blue font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Clear Filters Button */}
          {hasActiveLocalFilters && (
            <button
              onClick={handleClearFilters}
              className="w-full mt-4 py-2 px-4 text-sm font-semibold text-red-600 border border-red-300 rounded-full hover:bg-red-50 transition duration-200"
            >
              Clear Active Filters
            </button>
          )}

        </div>
        
        {/* PRODUCT GRID */}
        <div className="flex-1">
          {/* Product count repeater for small screens */}
          <div className="lg:hidden mb-4 text-lg font-semibold text-gray-700">
            <span className="font-bold text-marine-blue">{filteredAndSortedProducts.length}</span> Products Found
            {searchTerm && <span className="text-gray-500 italic ml-2"> (filtered by "{searchTerm}")</span>}
          </div>

          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredAndSortedProducts.map(product => (
                <ProductCard key={product.id} product={product} /> 
              ))}
            </div>
          ) : (
            <div className="text-center p-20 bg-white rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-marine-blue mb-4">No Products Match Your Criteria</h3>
              <p className="text-gray-600">Try adjusting your filters, or <a href="/products" className="text-accent-yellow hover:text-marine-blue font-semibold">clear the search term</a>.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}