'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';

const sizes = {
  tops: [
    { size: 'XS', chest: '34-36"', shoulder: '16"', length: '27"' },
    { size: 'S', chest: '36-38"', shoulder: '17"', length: '28"' },
    { size: 'M', chest: '38-40"', shoulder: '18"', length: '29"' },
    { size: 'L', chest: '40-42"', shoulder: '19"', length: '30"' },
    { size: 'XL', chest: '42-44"', shoulder: '20"', length: '31"' },
    { size: 'XXL', chest: '44-46"', shoulder: '21"', length: '32"' },
  ],
  outerwear: [
    { size: 'XS', chest: '36-38"', shoulder: '17"', length: '42"' },
    { size: 'S', chest: '38-40"', shoulder: '18"', length: '43"' },
    { size: 'M', chest: '40-42"', shoulder: '19"', length: '44"' },
    { size: 'L', chest: '42-44"', shoulder: '20"', length: '45"' },
    { size: 'XL', chest: '44-46"', shoulder: '21"', length: '46"' },
    { size: 'XXL', chest: '46-48"', shoulder: '22"', length: '47"' },
  ],
};

export default function SizeGuidePage() {
  const [activeCategory, setActiveCategory] = useState<'tops' | 'outerwear'>('tops');

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#f0ece3] font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-semibold">Fit Guide</span>
          <h1 className="text-4xl font-light mt-3 mb-3 tracking-wide">Size Guide</h1>
          <p className="text-gray-400">Noir Studio pieces are designed for a tailored, European fit. We recommend sizing up if between sizes.</p>
        </div>

        {/* How to Measure */}
        <div className="bg-[#141414] border border-white/5 rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-light mb-6 text-[#c9aa71]">How to Measure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '📏', name: 'Chest', desc: 'Measure around the fullest part of your chest, keeping the tape parallel to the ground.' },
              { icon: '↕️', name: 'Shoulder Width', desc: 'Measure from the outer edge of one shoulder to the other across the back.' },
              { icon: '📐', name: 'Length', desc: 'Measure from the center back of the neck down to the desired length.' },
            ].map((m, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-2xl">{m.icon}</span>
                <div><h3 className="font-semibold text-sm mb-1">{m.name}</h3><p className="text-gray-400 text-xs leading-relaxed">{m.desc}</p></div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Toggle */}
        <div className="flex gap-3 mb-6">
          {(['tops', 'outerwear'] as const).map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold uppercase tracking-widest transition-colors ${activeCategory === cat ? 'bg-[#c9aa71] text-black' : 'border border-white/10 text-gray-400 hover:border-[#c9aa71]/40'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Size Table */}
        <div className="bg-[#141414] border border-white/5 rounded-2xl overflow-hidden mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5">
                <th className="py-4 px-6 text-left text-[#c9aa71] font-semibold tracking-wider uppercase text-xs">Size</th>
                <th className="py-4 px-6 text-left text-[#c9aa71] font-semibold tracking-wider uppercase text-xs">Chest</th>
                <th className="py-4 px-6 text-left text-[#c9aa71] font-semibold tracking-wider uppercase text-xs">Shoulder</th>
                <th className="py-4 px-6 text-left text-[#c9aa71] font-semibold tracking-wider uppercase text-xs">Length</th>
              </tr>
            </thead>
            <tbody>
              {sizes[activeCategory].map((row, i) => (
                <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? '' : 'bg-white/2'} hover:bg-[#c9aa71]/5 transition-colors`}>
                  <td className="py-4 px-6 font-bold text-[#f0ece3]">{row.size}</td>
                  <td className="py-4 px-6 text-gray-400 font-mono text-xs">{row.chest}</td>
                  <td className="py-4 px-6 text-gray-400 font-mono text-xs">{row.shoulder}</td>
                  <td className="py-4 px-6 text-gray-400 font-mono text-xs">{row.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Care Notes */}
        <div className="bg-[#141414] border border-[#c9aa71]/20 rounded-2xl p-6">
          <h3 className="text-sm font-semibold text-[#c9aa71] mb-3 uppercase tracking-wider">Need Help?</h3>
          <p className="text-gray-400 text-sm mb-4">Our style advisors are available to help with fit questions and can arrange a virtual styling session.</p>
          <a href="/contact" className="text-[#c9aa71] text-sm font-semibold hover:underline">Contact a Style Advisor →</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
