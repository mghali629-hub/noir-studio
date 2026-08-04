'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const lookbooks = [
  { season: 'Autumn / Winter 2026', title: 'Monochrome Shadows', desc: 'Sculptural outerwear and heavy cashmere knits photographed in Reykjavik.', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80', slug: 'autumn-winter-2026' },
  { season: 'Spring / Summer 2026', title: 'Architectural Silk', desc: 'Lightweight fluid tailoring shot against brutalist concrete structures in Kyoto.', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80', slug: 'spring-summer-2026' },
];

export default function LookbookPage() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#f0ece3] font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-semibold bg-[#c9aa71]/10 px-4 py-1.5 rounded-full border border-[#c9aa71]/30">
            EDITORIAL GALLERY
          </span>
          <h1 className="text-5xl font-light mt-4 mb-3">Seasonal Lookbooks</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">Explore editorial campaign photography captured in architectural landscapes around the world.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lookbooks.map((lb, i) => (
            <div key={i} className="bg-[#141414] border border-white/5 rounded-3xl overflow-hidden hover:border-[#c9aa71]/40 transition-colors">
              <div className="h-80 bg-cover bg-center" style={{ backgroundImage: `url('${lb.image}')` }} />
              <div className="p-6">
                <span className="text-xs text-[#c9aa71] uppercase font-bold tracking-widest block mb-1">{lb.season}</span>
                <h3 className="text-2xl font-light text-white mb-2">{lb.title}</h3>
                <p className="text-gray-400 text-xs mb-6 leading-relaxed">{lb.desc}</p>
                <Link href={`/lookbook/${lb.slug}`} className="inline-block w-full text-center border border-[#c9aa71] text-[#c9aa71] hover:bg-[#c9aa71] hover:text-black py-3 rounded-xl text-xs uppercase tracking-widest font-bold transition-colors">
                  Explore Campaign Dispatch →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
