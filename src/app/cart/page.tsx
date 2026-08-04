'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import { ShoppingBag, Trash2, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const [items, setItems] = useState([
    { id: 1, name: 'Double-Breasted Wool Trench', price: 2450, qty: 1, size: 'L', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop' },
    { id: 2, name: 'Heavyweight Cashmere Mockneck', price: 1200, qty: 1, size: 'M', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop' },
  ]);

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i))
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-white selection:text-black flex flex-col justify-between">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-12">
        <div className="text-center font-mono space-y-2">
          <h1 className="text-4xl font-extrabold uppercase tracking-widest text-white">Your Atelier Cart</h1>
          <p className="text-zinc-400 text-xs tracking-widest uppercase">Maison Selected Garments ({items.length})</p>
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-mono">
            <div className="md:col-span-2 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="p-6 rounded-3xl bg-zinc-950 border border-zinc-900 flex gap-6 items-center">
                  <img src={item.image} alt={item.name} className="w-24 h-24 rounded-2xl object-cover" />
                  <div className="flex-1 space-y-2 font-sans">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-white font-mono uppercase">{item.name}</h3>
                      <button onClick={() => removeItem(item.id)} className="text-zinc-500 hover:text-white">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-xs text-zinc-400 font-mono block">Size: {item.size}</span>
                    <div className="flex justify-between items-center pt-2 font-mono">
                      <div className="flex items-center gap-3 bg-zinc-900 px-3 py-1 rounded-xl border border-zinc-800">
                        <button onClick={() => updateQty(item.id, -1)} className="text-xs text-zinc-400 font-bold">-</button>
                        <span className="text-xs text-white font-bold">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="text-xs text-zinc-400 font-bold">+</button>
                      </div>
                      <span className="text-lg font-bold text-white">${(item.price * item.qty).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-900 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-xl font-bold uppercase text-white">Order Summary</h3>
                <div className="space-y-2 text-xs text-zinc-400 border-t border-zinc-900 pt-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-white font-bold">${total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Express Worldwide Shipping</span>
                    <span className="text-white font-bold">Complimentary</span>
                  </div>
                </div>
                <div className="flex justify-between items-baseline pt-4 border-t border-zinc-900 text-lg font-bold text-white">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>

              <Link href="/checkout" className="w-full py-4 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest text-center block">
                Proceed to Checkout (${total.toLocaleString()})
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 font-mono space-y-4">
            <p className="text-zinc-500 text-sm uppercase">Your atelier cart is currently empty.</p>
            <Link href="/shop" className="inline-block px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest">
              Explore Collection
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
