import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100/50 transform hover:-translate-y-1">
      <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-500 font-semibold text-lg border-b border-gray-200">
        [Product Image of {product.name}]
      </div>
      
      <div className="p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-marine-blue/70 mb-1 block">
          {product.category}
        </span>
        <h3 className="text-2xl font-bold marine-dark mb-3 leading-snug">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-6 line-clamp-3">{product.description}</p>
        
        <Link 
          href={`/products/${product.id}`}
          className="inline-flex items-center justify-center w-full bg-marine-blue text-gray-100 font-bold py-3 rounded-lg shadow-md hover:bg-yellow-500 transition-colors duration-200"
        >
          Explore Details →
        </Link>
      </div>
    </div>
  );
}