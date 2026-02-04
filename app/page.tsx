"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const products = [
    { id: 1, title: "Wireless Headphones", price: 129.99, category: "electronics" },
    { id: 2, title: "Cotton T-Shirt", price: 24.99, category: "clothing" },
    { id: 3, title: "Bluetooth Speaker", price: 89.99, category: "electronics" },
    { id: 4, title: "Denim Jeans", price: 59.99, category: "clothing" },
  ];

  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Product Filter</h1>

      {/* Filter Dropdown */}
      <div className="flex items-center gap-4 mb-10">
        <p className="font-medium">Filter by:</p>

        <Select onValueChange={(value) => setFilter(value)}>
          <SelectTrigger className="w-64">
            <SelectValue placeholder="All Products" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Products</SelectItem>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="clothing">Clothing</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}
