'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import { CheckCircle2 } from 'lucide-react';

export default function CheckoutPage() {
  const [customer, setCustomer] = useState('');
  const [email, setEmail] = useState('');
  const [ordered, setOrdered] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customer, email, total: 890 }),
      });
      const data = await res.json();
      if (data.success) setOrdered(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAFAFA] font-serif flex flex-col justify-between">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-16 flex-1 space-y-8">
        <h1 className="text-4xl font-light uppercase tracking-widest text-center">Express Checkout</h1>

        {!ordered ? (
          <form onSubmit={handleSubmit} className="font-sans p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-4">
            <div>
              <label className="text-xs text-neutral-400 block mb-1">Customer Full Name</label>
              <input type="text" required value={customer} onChange={(e) => setCustomer(e.target.value)} placeholder="Vance Noir" className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <div>
              <label className="text-xs text-neutral-400 block mb-1">Email Address</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="vance@noir.com" className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <button type="submit" className="w-full py-4 bg-white text-black font-bold text-xs uppercase tracking-widest">
              Simulate API Order ($890)
            </button>
          </form>
        ) : (
          <div className="font-sans p-8 rounded-3xl bg-neutral-950 border border-neutral-700 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-white mx-auto" />
            <h3 className="font-serif text-2xl font-bold uppercase">Order Processed & Saved in DB</h3>
            <p className="text-neutral-400 text-xs">Thank you, {customer}. Order dispatched to {email}.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
