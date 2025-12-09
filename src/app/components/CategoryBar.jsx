"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { marineCategories } from "@/app/lib/products";

export default function CategoryBar() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  const q = searchParams.get("q"); // preserve search

  return (
    <div className="bg-marine-blue opacity-95 border-b border-marine-blue/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex gap-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {marineCategories.map((cat) => {
          const isActive = cat.name === currentCategory;
          const query = q ? `&q=${encodeURIComponent(q)}` : "";

          return (
            <Link
              key={cat.id}
              href={`/products?category=${encodeURIComponent(cat.name)}${query}`}
              className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? "bg-accent-yellow marine-blue border border-accent-yellow"
                  : "bg-white marine-blue border border-marine-blue/20 hover:bg-yellow-400"
              }`}
            >
              {cat.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
