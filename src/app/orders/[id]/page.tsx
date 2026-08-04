'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#f0ece3] font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1 space-y-8">
        <div>
          <Link href="/orders" className="text-xs text-[#c9aa71] font-bold hover:underline mb-4 block">← Back to Order History</Link>
        </div>

        <div className="bg-[#141414] border border-white/5 rounded-3xl p-8 space-y-6">
          <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <div>
              <span className="text-xs text-[#c9aa71] uppercase font-semibold">SHIPMENT TRACKING</span>
              <h1 className="text-2xl font-light text-white mt-1">Order #1042 — Double-Breasted Alpaca Coat</h1>
            </div>
            <span className="bg-[#c9aa71]/10 text-[#c9aa71] text-xs font-bold px-3 py-1 rounded-full border border-[#c9aa71]/30">DELIVERED</span>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-white text-sm">Package Courier Timeline</h3>
            {[
              { status: 'Delivered to Recipient Signature', time: 'July 28, 14:20', done: true },
              { status: 'Out for Express Delivery — DHL Paris Hub', time: 'July 28, 08:30', done: true },
              { status: 'Cleared Customs at Charles de Gaulle Airport', time: 'July 27, 19:15', done: true },
              { status: 'Dispatched from Milan Atelier', time: 'July 26, 11:00', done: true },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3 text-xs">
                <span className={`w-3.5 h-3.5 rounded-full shrink-0 ${step.done ? 'bg-[#c9aa71]' : 'bg-gray-700'}`} />
                <span className="text-white font-medium">{step.status}</span>
                <span className="text-gray-500 ml-auto">{step.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
