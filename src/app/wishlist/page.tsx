'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

export default function WishlistPage() {
  const wishlist = [
    { id: 3, name: 'Obsidian Cashmere Overcoat', price: 2450, category: 'Outerwear', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&q=80' },
    { id: 5, name: 'Noir Studio Signature Turtleneck', price: 890, category: 'Knitwear', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80' },
    { id: 4, name: 'Slate Merino Knit Cardigan', price: 720, category: 'Knitwear', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80' },
  ];

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#f0ece3] font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1">
        <div className="mb-10">
          <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-semibold">Saved Items</span>
          <h1 className="text-4xl font-light mt-2 mb-2 tracking-wide">Your Wishlist</h1>
          <p className="text-gray-500">{wishlist.length} pieces saved</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="group bg-[#141414] border border-white/5 rounded-2xl overflow-hidden hover:border-[#c9aa71]/40 transition-all duration-300">
              <div className="relative overflow-hidden h-64">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${item.image}')` }} />
                <button className="absolute top-3 right-3 text-red-500 text-xl bg-black/40 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors">♥</button>
              </div>
              <div className="p-5">
                <span className="text-xs text-[#c9aa71] font-semibold tracking-wider uppercase">{item.category}</span>
                <h3 className="text-base font-medium mt-1 mb-3 text-[#f0ece3]">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#c9aa71] font-bold text-lg">€{item.price.toLocaleString()}</span>
                  <button className="bg-[#c9aa71] text-black text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#b89860] transition-colors">ADD TO CART</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {wishlist.length === 0 && (
          <div className="text-center py-24 text-gray-500">
            <div className="text-5xl mb-4">♡</div>
            <p className="text-xl font-light">Your wishlist is empty</p>
            <a href="/shop" className="mt-4 inline-block text-[#c9aa71] underline text-sm">Browse the Collection</a>
          </div>
        )}

        <div className="mt-10 text-center">
          <a href="/shop" className="inline-block border border-[#c9aa71] text-[#c9aa71] px-8 py-3 rounded-xl text-sm font-semibold hover:bg-[#c9aa71] hover:text-black transition-colors tracking-widest uppercase">Continue Shopping</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
