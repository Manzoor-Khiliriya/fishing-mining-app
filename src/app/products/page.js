import { marineProducts } from '@/app/lib/products';
import ProductListFilter from '../components/ProductListFilter'; // Assumed path

export const metadata = {
  title: 'Full Catalog - NAV-PRO',
};

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      
      {/* Catalog Header */}
      <div className="text-center mb-12 pt-8">
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Explore our full range of marine and navigation equipment.
        </p>
        <div className="w-24 h-1 bg-accent-yellow mx-auto mt-6 rounded-full"></div>
      </div>
      
      {/* Interactive Catalog Controls and Product Grid */}
      {/* ProductListFilter handles all the UI logic for filtering/sorting */}
      <ProductListFilter products={marineProducts} />

    </div>
  );
}