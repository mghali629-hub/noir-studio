'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const faqs = [
  { q: 'What is Noir Studio return and exchange policy?', a: 'Complimentary worldwide returns are accepted within 30 days of delivery. Items must be unworn with original security tags attached.' },
  { q: 'Where are Noir Studio garments manufactured?', a: 'All pieces are cut, sewn, and finished by master artisans in our Milan and Paris ateliers using GOTS-certified organic fabrics.' },
  { q: 'Do you offer bespoke Made-to-Measure tailoring?', a: 'Yes, private fittings can be scheduled at any of our flagship boutiques in Paris, Milan, or London Mayfair.' },
  { q: 'How do I care for raw cashmere and silk pieces?', a: 'We recommend professional eco-dry cleaning or gentle hand-washing in cold water with pH-neutral silk/wool detergent.' },
  { q: 'What shipping options are available?', a: 'We offer express climate-neutral DHL Express shipping worldwide (1-3 business days) with signature upon delivery.' },
];

export default function NoirFaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#f0ece3] font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1 space-y-10">
        <div className="text-center">
          <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-semibold bg-[#c9aa71]/10 px-4 py-1.5 rounded-full border border-[#c9aa71]/30">
            CLIENT SERVICES
          </span>
          <h1 className="text-4xl font-light mt-4 mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-400 text-xs">Everything you need to know about returns, made-to-measure tailoring, and express delivery.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-[#141414] border border-white/5 rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-6 font-bold text-white flex justify-between items-center text-sm">
                <span>{f.q}</span>
                <span className="text-[#c9aa71] font-mono text-xl ml-4 shrink-0">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-gray-400 text-xs leading-relaxed border-t border-white/5 pt-4">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#141414] border border-white/5 rounded-2xl p-6 text-center space-y-2">
          <h3 className="font-bold text-white text-base">Require Private Fitting Assistance?</h3>
          <p className="text-gray-400 text-xs">Our atelier advisors are available 24/7.</p>
          <Link href="/contact" className="inline-block text-[#c9aa71] font-bold text-xs hover:underline uppercase tracking-wider">
            Book Fitting Appointment →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
