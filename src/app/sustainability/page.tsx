'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#f0ece3] font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-semibold">Our Commitment</span>
          <h1 className="text-5xl font-light mt-3 mb-4 tracking-wide">Luxury Without <span className="text-[#c9aa71]">Compromise</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Noir Studio is committed to ethical fashion — from fiber to final stitch. Sustainability isn't a feature; it's our foundation.</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { stat: '100%', label: 'Natural fibers sourced' },
            { stat: '62%', label: 'Carbon footprint reduced since 2020' },
            { stat: '0', label: 'Single-use plastic packaging' },
            { stat: '3', label: 'B Corp certifications held' },
          ].map((m, i) => (
            <div key={i} className="bg-[#141414] border border-white/5 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-[#c9aa71] mb-2">{m.stat}</div>
              <div className="text-xs text-gray-400">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {[
            { icon: '🌿', title: 'Responsible Sourcing', desc: 'Every fiber is traceable. We partner exclusively with GOTS-certified mills in Italy, Scotland, and Japan — paying above fair-trade premiums to master craftspeople.' },
            { icon: '♻️', title: 'Circular Fashion', desc: 'Our Noir Renewal program accepts back worn Noir Studio pieces for upcycling, repair, or responsible recycling — offering credit toward future purchases.' },
            { icon: '🌊', title: 'Carbon Neutral by 2026', desc: 'We offset remaining emissions through verified Blue Carbon projects restoring coastal mangroves in Southeast Asia and investing in regenerative agriculture.' },
          ].map((p, i) => (
            <div key={i} className="bg-[#141414] border border-white/5 rounded-2xl p-7 hover:border-[#c9aa71]/30 transition-colors">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-lg font-semibold text-[#f0ece3] mb-3">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-[#141414] border border-white/5 rounded-3xl p-8">
          <h2 className="text-2xl font-light mb-8 text-center tracking-wide">Sustainability Milestones</h2>
          <div className="space-y-4">
            {[
              { year: '2019', event: 'Eliminated PVC and synthetic coatings from all collections' },
              { year: '2021', event: 'Switched to 100% renewable energy in our Paris and Milan ateliers' },
              { year: '2022', event: 'Achieved B Corp certification — first luxury knitwear house in France' },
              { year: '2023', event: 'Launched Noir Renewal circular program — 2,400+ garments diverted from landfill' },
              { year: '2024', event: 'Reduced water consumption by 38% through closed-loop dyeing systems' },
              { year: '2026', event: '🎯 Target: Full carbon neutrality across Scope 1, 2, and 3 emissions' },
            ].map((m, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="text-[#c9aa71] font-mono font-bold w-10 shrink-0">{m.year}</div>
                <div className="h-px flex-1 bg-[#c9aa71]/20 mt-3" />
                <div className="text-gray-400 text-sm flex-[3]">{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
