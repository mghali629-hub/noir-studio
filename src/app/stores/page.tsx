'use client';

import React from 'react';
import { Header, Footer } from '@/components/Header';

const stores = [
  { city: 'Paris Flagship', address: '24 Place Vendôme, 75001 Paris, France', phone: '+33 1 42 68 55 00', hours: 'Mon–Sat: 10:00 – 19:30', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80' },
  { city: 'Milan Boutique', address: 'Via Montenapoleone 8, 20121 Milano, Italy', phone: '+39 02 7600 1245', hours: 'Mon–Sat: 10:00 – 19:00', image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80' },
  { city: 'London Mayfair', address: '42 New Bond Street, London W1S 2RX, UK', phone: '+44 20 7493 8888', hours: 'Mon–Sat: 10:00 – 18:30', image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80' },
];

export default function StoresPage() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#f0ece3] font-sans flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-semibold">Global Ateliers</span>
          <h1 className="text-5xl font-light mt-3 mb-4 tracking-wide">Boutique Locations</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Experience private styling appointments and bespoke tailoring in our flagship locations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stores.map((store, i) => (
            <div key={i} className="bg-[#141414] border border-white/5 rounded-3xl overflow-hidden hover:border-[#c9aa71]/40 transition-all duration-300">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${store.image}')` }} />
              <div className="p-6">
                <span className="text-xs text-[#c9aa71] font-semibold tracking-widest uppercase">FLAGSHIP</span>
                <h3 className="text-2xl font-light text-white mt-1 mb-3">{store.city}</h3>
                <div className="space-y-2 text-xs text-gray-400">
                  <p>📍 {store.address}</p>
                  <p>📞 {store.phone}</p>
                  <p>🕒 {store.hours}</p>
                </div>
                <button className="mt-6 w-full border border-[#c9aa71] text-[#c9aa71] py-3 rounded-xl text-xs font-semibold hover:bg-[#c9aa71] hover:text-black transition-colors uppercase tracking-widest">
                  BOOK PRIVATE APPOINTMENT
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
