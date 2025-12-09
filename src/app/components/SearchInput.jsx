"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchTerm.trim();

    if (!q) {
      router.push(category ? `/products?category=${encodeURIComponent(category)}` : "/products");
      return;
    }

    router.push(
      category
        ? `/products?category=${encodeURIComponent(category)}&q=${encodeURIComponent(q)}`
        : `/products?q=${encodeURIComponent(q)}`
    );

    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Search navigation, sonar, safety gear..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-4 pr-4 py-3 bg-white text-marine-blue border border-gray-300 rounded-full transition shadow-md"
      />
    </form>
  );
}
