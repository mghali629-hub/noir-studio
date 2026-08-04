'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/Header';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export default function ShopCatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setProducts(data.products);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAFAFA] font-serif flex flex-col justify-between">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1 space-y-12">
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-light uppercase tracking-widest">Autumn / Winter Collection</h1>
          <p className="font-sans text-neutral-400 text-xs tracking-widest uppercase">Monochrome Luxury Tailoring</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((item) => (
            <div key={item.id} className="group space-y-4">
              <div className="relative h-[450px] overflow-hidden bg-neutral-900 border border-neutral-800">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex justify-between items-baseline pt-2">
                <div>
                  <span className="font-sans text-neutral-500 text-[10px] uppercase tracking-widest block">{item.category}</span>
                  <h3 className="text-2xl font-light text-white">{item.name}</h3>
                </div>
                <span className="font-sans text-xl font-bold text-white">${item.price}</span>
              </div>
              <Link href={`/shop/${item.id}`} className="font-sans block w-full py-3.5 bg-white text-black font-bold text-xs uppercase tracking-widest text-center">
                Inspect Garment
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
