'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const items = [
  { id: 5, name: 'Double-Breasted Alpaca Coat', price: '€1,850', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80', desc: 'Heavyweight organic Peruvian alpaca coat with hand-carved horn buttons.' },
  { id: 6, name: 'Tailored Wool Trench Coat', price: '€1,450', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=600&q=80', desc: 'Minimalist double-weave wool trench with storm flap and removable belt.' },
];

export default function OuterwearPage() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#f0ece3] font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1 space-y-10">
        <div>
          <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-semibold bg-[#c9aa71]/10 px-4 py-1.5 rounded-full border border-[#c9aa71]/30">
            ARCHITECTURAL TAILORING
          </span>
          <h1 className="text-4xl font-light mt-3 mb-2">Architectural Outerwear</h1>
          <p className="text-gray-400 text-xs">Double-breasted alpaca coats and structured virgin wool trenches.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map(item => (
            <div key={item.id} className="bg-[#141414] border border-white/5 rounded-3xl overflow-hidden hover:border-[#c9aa71]/40 transition-colors">
              <div className="h-72 bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-light text-white">{item.name}</h3>
                  <span className="text-[#c9aa71] font-bold text-sm">{item.price}</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                <div className="pt-2">
                  <Link href={`/shop/${item.id}`} className="inline-block w-full text-center bg-[#c9aa71] text-black font-bold text-xs py-2.5 rounded-xl uppercase tracking-wider">
                    View Piece Specs
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
