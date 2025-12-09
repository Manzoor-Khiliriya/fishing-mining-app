import Link from 'next/link';
import Image from 'next/image'; // Critical: Use Next.js optimized Image

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority={product.isBestSeller} // optional: load bestsellers faster
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gray-200 text-gray-500 font-medium">
            No Image
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isBestSeller && (
            <span className="px-3 py-1 text-xs font-bold text-white bg-yellow-500 rounded-full shadow-md">
              Best Seller
            </span>
          )}
          {product.isNew && (
            <span className="px-3 py-1 text-xs font-bold text-white bg-marine-blue rounded-full shadow-md">
              New
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-marine-blue/70 block mb-2">
          {product.category}
        </span>

        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
          {product.name}
        </h3>

        {/* Optional: Add brand logo or short desc later */}
        {/* <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.shortDesc}</p> */}

        <Link
          href={`/products/${product.id}`}
          className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-marine-blue px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-yellow-500 hover:shadow-lg"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}