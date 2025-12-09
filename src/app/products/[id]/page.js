import { marineProducts } from '@/app/lib/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Truck, ShieldCheck, LifeBuoy, Zap, ArrowRight } from 'lucide-react'; 
// Assuming ProductCard component is available in '../components/ProductCard'
import ProductCard from '@/app/components/ProductCard'; 

// --- Data Fetching and Preparation ---

// Helper function to get product by ID
async function getProduct(id) {
  const product = marineProducts.find(p => p.id === id);
  const features = [
    "Integrated GPS and GLONASS navigation system",
    "IPX7 waterproof rating for extreme environments",
    "High-resolution 10-inch sunlight-readable display",
    "NMEA 2000 and Ethernet network compatibility",
    "Military-grade shock and vibration resistance",
  ];

  return product ? { 
    ...product, 
    price: product.id * 100 + 50,
    features: features, 
    brand: product.brand || 'SEA CAST FISH Solutions', 
    modelNumber: `NVP-${product.id * 10}`, 
  } : undefined;
}

// Helper function to fetch related products
function getRelatedProducts(currentProductId, currentCategory) {
  // Filter out the current product, then filter by category
  const related = marineProducts
    .filter(p => p.id !== currentProductId && p.category === currentCategory)
    // Take the first 4 related items for display
    .slice(0, 4); 
  
  return related.map(p => ({ 
    ...p, 
    price: p.id * 100 + 50 // Ensure related products have prices too
  }));
}

// SEO Metadata (unchanged)
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id);
  const product = await getProduct(productId);

  if (!product) {
    return {
      title: "Product Not Found - SEA CAST FISH",
      description: "Requested marine product could not be located.",
    };
  }

  return {
    title: `${product.name} | Marine Gear Specs - SEA CAST FISH`,
    description: product.description,
  };
}

// --- Component ---

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id);
  const product = await getProduct(productId);

  if (!product) notFound();
  
  // Fetch related products for the new section
  const relatedProducts = getRelatedProducts(productId, product.category);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      {/* Product Details Section */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100/70">
        
        <div className="lg:flex lg:space-x-12 p-8 lg:p-12">
          
          {/* LEFT SIDE: Image/Media & Technical Details */}
          <div className="lg:w-1/2 flex flex-col space-y-8">
            
            {/* Main Product Image Area */}
            <div className="h-[450px] bg-marine-blue rounded-2xl flex items-center justify-center marine-blue text-2xl font-bold border-4 border-marine-blue/10 overflow-hidden shadow-inner">
              

[Image of {product.name} - High-Resolution Render]

            </div>

            {/* Technical Details / Specifications Table */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold marine-blue mb-4 flex items-center">
                <ShieldCheck className="w-6 h-6 mr-2 text-accent-green" /> 
                Technical Specifications
              </h3>
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 text-sm font-medium text-gray-700 w-1/3">Brand</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-semibold">{product.brand}</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 text-sm font-medium text-gray-700">Model No.</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-mono">{product.modelNumber}</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 text-sm font-medium text-gray-700">Category</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{product.category}</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 text-sm font-medium text-gray-700">Water Resistance</td>
                    <td className="px-4 py-3 text-sm text-gray-900">IPX7 Marine Certified</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

          {/* RIGHT SIDE: Product Details, Price, & CTA */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            
            {/* Header and Tags */}
            <div className="flex items-center space-x-3 mb-3">
              <p className="text-sm font-semibold uppercase tracking-widest accent-yellow block">
                {product.category}
              </p>
              {product.isBestSeller && (
                <span className="bg-accent-yellow marine-dark text-xs font-bold uppercase px-3 py-1 rounded-full shadow-sm">
                  ⭐ BEST SELLER
                </span>
              )}
              {product.isNew && (
                <span className="bg-accent-green text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow-sm">
                  ✨ NEW ARRIVAL
                </span>
              )}
            </div>

            <h1 className="text-6xl font-extrabold marine-blue mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Price and Availability */}
            <div className="flex items-end space-x-6 mb-8 pb-6 border-b-2 border-accent-yellow/20">
              <span className="text-5xl font-extrabold text-accent-green">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-lg font-semibold text-gray-700 bg-gray-100 px-4 py-1 rounded-full">
                <Zap className="inline h-4 w-4 mr-1 accent-green" /> IN STOCK
              </span>
            </div>

            {/* Product Overview */}
            <h2 className="text-2xl font-bold text-marine-dark mb-3">Overview</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Key Features List */}
            <h2 className="text-2xl font-bold marine-dark mb-4">Core Features</h2>
            <ul className="space-y-3 text-lg text-gray-700 mb-10">
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="accent-green text-2xl mr-3 font-extrabold">▶</span> {feature}
                </li>
              ))}
            </ul>

            {/* Call to Action Block */}
            <div className="bg-marine-blue p-6 rounded-xl border border-marine-blue/20">
              <p className="text-lg font-semibold text-marine-blue mb-4">Ready for a Custom Quote?</p>
              <Link
                href="/contact"
                className="w-full inline-block text-center bg-marine-blue text-white text-xl font-bold py-4 rounded-xl shadow-xl transition-all duration-300 hover:bg-marine-dark hover:shadow-2xl transform hover:scale-[1.005]"
              >
                Request a Quote / Contact Sales →
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="text-gray-600">
                <Truck className="h-8 w-8 mx-auto mb-1 marine-blue" />
                <p className="text-xs font-semibold">Worldwide Delivery</p>
              </div>
              <div className="text-gray-600">
                <LifeBuoy className="h-8 w-8 mx-auto mb-1 marine-blue" />
                <p className="text-xs font-semibold">24/7 Tech Support</p>
              </div>
              <div className="text-gray-600">
                <ShieldCheck className="h-8 w-8 mx-auto mb-1 marine-blue" />
                <p className="text-xs font-semibold">5-Year Warranty</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* ------------------- NEW: RELATED PRODUCTS SECTION ------------------- */}
      {relatedProducts.length > 0 && (
        <div className="mt-20">
          <div className="flex justify-between items-end mb-8 border-b border-gray-300 pb-3">
            <h2 className="text-4xl font-extrabold marine-blue">
              You Might Also Like 🔗
            </h2>
            <Link
              href={`/products?category=${product.category}`}
              className="text-lg font-semibold accent-yellow hover:text-marine-blue transition-colors duration-300 flex items-center"
            >
              View All {product.category} <ArrowRight className="h-5 w-5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
      {/* ------------------- END RELATED PRODUCTS SECTION ------------------- */}

    </div>
  );
}

// Static paths (unchanged)
export async function generateStaticParams() {
  return marineProducts.map(product => ({
    id: product.id.toString(),
  }));
}