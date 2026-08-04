'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Header, Footer } from '@/components/Header';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export default function NoirStudioHomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [customer, setCustomer] = useState('');
  const [email, setEmail] = useState('');
  const [ordered, setOrdered] = useState(false);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setProducts(data.products);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customer, email, total: 2450 }),
      });
      const data = await res.json();
      if (data.success) setOrdered(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-white selection:text-black flex flex-col justify-between">
      <Header />

      <main className="flex-1 space-y-20">
        {/* Editorial Hero */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1800&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.3em] text-zinc-400 block">
              Maison Collection — AW26 Campaign
            </span>
            <h1 className="text-5xl sm:text-7xl font-extrabold uppercase tracking-tight text-white font-mono leading-none">
              Monochrome Silhouette Architecture
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
              Eliminating superficial ornament to accentuate raw selvedge craftsmanship and high-altitude Mongolian cashmere.
            </p>

            <div className="pt-6 font-mono flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/shop"
                className="px-8 py-4 rounded-xl bg-zinc-100 text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all text-center"
              >
                Inspect Collection
              </Link>
              <Link
                href="/lookbook"
                className="px-8 py-4 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-bold text-xs uppercase tracking-widest hover:bg-zinc-900 transition-all text-center"
              >
                View Runway Editorial
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center font-mono">
            <span className="text-xs text-zinc-500 uppercase tracking-widest block mb-1">Hand-Crafted Limited Runs</span>
            <h2 className="text-3xl font-extrabold uppercase text-white font-sans">Autumn / Winter Edition Garments</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((item) => (
              <div key={item.id} className="p-6 rounded-3xl bg-zinc-950 border border-zinc-900 space-y-4 flex flex-col justify-between">
                <div>
                  <img src={item.image} alt={item.name} className="h-72 w-full object-cover rounded-2xl mb-4" />
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block tracking-widest mb-1">{item.category}</span>
                  <h3 className="text-lg font-bold text-white uppercase font-mono">{item.name}</h3>
                  <p className="text-zinc-400 text-xs mt-2 line-clamp-2">{item.description}</p>
                </div>
                <div className="pt-4 border-t border-zinc-900 flex justify-between items-center font-mono">
                  <span className="text-white font-bold text-base">${item.price.toLocaleString()}</span>
                  <Link href={`/shop/${item.id}`} className="px-4 py-2 rounded-xl bg-zinc-100 text-black text-xs font-bold uppercase">
                    Inspect
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* API Order Form */}
        <section className="max-w-3xl mx-auto px-4 font-mono">
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs text-zinc-500 uppercase tracking-widest block">Atelier Order Desk</span>
              <h2 className="text-2xl font-extrabold uppercase text-white font-sans">Simulate Express VIP Order</h2>
            </div>

            {!ordered ? (
              <form onSubmit={handleCheckout} className="space-y-4">
                <div>
                  <label className="text-xs text-zinc-400 block mb-1">Customer Full Name</label>
                  <input
                    type="text"
                    required
                    value={customer}
                    onChange={(e) => setCustomer(e.target.value)}
                    placeholder="Vance Noir"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-zinc-400 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vance@noirstudio.com"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-white text-black font-bold text-xs uppercase tracking-widest"
                >
                  Simulate API Order & Save in DB ($2,450)
                </button>
              </form>
            ) : (
              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-700 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-white mx-auto" />
                <h3 className="text-xl font-bold uppercase text-white">Order Processed & Saved in Database</h3>
                <p className="text-zinc-400 text-xs">Thank you, {customer}. DHL tracking sent to {email}.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
