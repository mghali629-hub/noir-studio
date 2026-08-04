'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function LookbookSeasonPage({ params }: { params: { season: string } }) {
  const photos = [
    { title: 'Monochrome Alpaca Coat in Volcanic Sands', src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80' },
    { title: 'Structured Double-Weave Trench in Glacial Ice', src: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80' },
    { title: 'Cashmere Heavy Rib Turtleneck in Reykjavik', src: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=800&q=80' },
  ];

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#f0ece3] font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1 space-y-10">
        <div>
          <Link href="/lookbook" className="text-xs text-[#c9aa71] font-bold hover:underline mb-4 block">← Back to Lookbooks</Link>
          <div className="flex items-center gap-3">
            <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-semibold bg-[#c9aa71]/10 px-3 py-1 rounded-full border border-[#c9aa71]/30">
              CAMPAIGN DISPATCH
            </span>
            <span className="text-xs text-gray-400">Location: Reykjavik, Iceland · Creative Direction: Studio Milan</span>
          </div>
          <h1 className="text-4xl font-light mt-3 mb-2">Autumn / Winter 2026 — Monochrome Shadows</h1>
          <p className="text-gray-400 text-xs">Shot on location in volcanic basalt fields and ice caves near Vik.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((p, i) => (
            <div key={i} className="bg-[#141414] border border-white/5 rounded-3xl overflow-hidden group hover:border-[#c9aa71]/40 transition-colors">
              <div className="h-[380px] bg-cover bg-center" style={{ backgroundImage: `url('${p.src}')` }} />
              <div className="p-4">
                <h3 className="text-xs font-light text-gray-300">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link href="/shop/new-arrivals" className="inline-block border border-[#c9aa71] text-[#c9aa71] hover:bg-[#c9aa71] hover:text-black font-bold text-xs px-8 py-3 rounded-xl transition-colors uppercase tracking-wider">
            Shop Autumn / Winter 2026 Pieces →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
