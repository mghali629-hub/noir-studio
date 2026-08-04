'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#f0ece3] font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-semibold bg-[#c9aa71]/10 px-4 py-1.5 rounded-full border border-[#c9aa71]/30">
            OUR PHILOSOPHY
          </span>
          <h1 className="text-5xl font-light mt-4 mb-3">Monochrome Luxury & Timeless Craft</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            Noir Studio was established in Milan in 2020 to redefine luxury fashion through brutalist silhouettes, organic textiles, and zero-waste tailoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { stat: '100%', label: 'Traceable Organic Fibers' },
            { stat: '0%', label: 'Chemical Dyes Used' },
            { stat: '3', label: 'Global Flagships (Paris, Milan, London)' },
            { stat: '100%', label: 'Hand-Finished in Italy' },
          ].map((s, i) => (
            <div key={i} className="bg-[#141414] border border-white/5 rounded-2xl p-5 text-center">
              <div className="text-3xl font-light text-[#c9aa71]">{s.stat}</div>
              <div className="text-xs text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: '100% Traceable Fabrics', desc: 'Sourced directly from GOTS-certified organic farms in Mongolia, Peru, and Scotland.' },
            { title: 'Zero-Waste Cutting', desc: 'Architectural patternmaking techniques designed to leave zero fabric waste during garment production.' },
            { title: 'Artisanal Production', desc: 'Handcrafted in limited batches by third-generation master tailors in our Milan and Paris ateliers.' },
          ].map((m, i) => (
            <div key={i} className="bg-[#141414] border border-white/5 rounded-3xl p-8 space-y-3">
              <h3 className="text-xl font-light text-white">{m.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#141414] border border-[#c9aa71]/30 rounded-3xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-light text-white">Experience Noir Studio Collection</h2>
          <p className="text-gray-400 text-xs max-w-md mx-auto">Explore our latest Autumn / Winter 2026 releases or schedule a private fitting.</p>
          <Link href="/shop" className="inline-block bg-[#c9aa71] text-black font-bold text-xs px-8 py-3 rounded-xl hover:bg-[#b89860] transition-colors uppercase tracking-wider">
            Explore Collection
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
