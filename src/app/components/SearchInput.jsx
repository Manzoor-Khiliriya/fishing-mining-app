"use client";
import { useRouter } from "next/navigation";
import { useState, Suspense } from "react";

function SearchInputInner() {
  const router = useRouter();
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/products?q=${encodeURIComponent(term)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search product name..."
        className="px-4 py-2 rounded-lg bg-white text-black w-full"
      />
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
