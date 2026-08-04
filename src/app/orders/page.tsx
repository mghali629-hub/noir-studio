'use client';

import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

interface Order {
  id: number;
  customer: string;
  email: string;
  total: number;
  status: string;
  createdAt: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([
    { id: 1042, customer: 'Helena Vance', email: 'h.vance@example.com', total: 2450.00, status: 'DELIVERED', createdAt: '2026-07-28' },
    { id: 1043, customer: 'Alexander Wright', email: 'a.wright@example.com', total: 890.00, status: 'IN TRANSIT', createdAt: '2026-08-01' },
  ]);

  useEffect(() => {
    fetch('/api/orders')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setOrders(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#f0ece3] font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1">
        <div className="mb-10">
          <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-semibold">Customer Portal</span>
          <h1 className="text-4xl font-light mt-2 mb-2 tracking-wide">Order History</h1>
          <p className="text-gray-500">Track current shipments and review past Noir Studio purchases.</p>
        </div>

        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-medium text-white">Order #{order.id}</h3>
                  <span className="text-xs font-bold bg-[#c9aa71]/10 text-[#c9aa71] border border-[#c9aa71]/30 px-3 py-0.5 rounded-full">{order.status}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Customer: {order.customer} ({order.email}) · Placed on {order.createdAt}</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-[#c9aa71]">€{order.total.toFixed(2)}</div>
                <Link href={`/orders/${order.id}`} className="text-xs text-[#c9aa71] underline font-medium hover:text-white mt-1 block">
                  View Details →
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
