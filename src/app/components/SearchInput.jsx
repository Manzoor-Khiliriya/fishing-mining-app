"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Suspense } from "react";

function SearchInputInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentSearch = searchParams.get("q") || "";
  const currentCategory = searchParams.get("category") || "";
  const [term, setTerm] = useState(currentSearch);

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (currentCategory) params.set("category", currentCategory);
    if (term) params.set("q", term);
    router.push(`/products?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search marine equipment..."
        className="px-4 py-2 rounded-lg text-black w-full"
      />
      <button
        type="submit"
        className="bg-accent-yellow text-marine-blue px-4 py-2 rounded-lg font-semibold"
      >
        Search
      </button>
    </form>
  );
}

export default function SearchInput() {
  return (
    <Suspense fallback={null}>
      <SearchInputInner />
    </Suspense>
  );
}
