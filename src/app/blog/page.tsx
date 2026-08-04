'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const posts = [
  { slug: 'crafting-organic-cashmere-2026', title: 'From Mongolian Steppes to Milan: The Journey of Raw Cashmere', date: 'July 20, 2026', author: 'Elena Vance', category: 'CRAFT', excerpt: 'How ethical combing, zero-bleach processing, and Italian spinning preserve the natural softness of organic cashmere.' },
  { slug: 'sustainable-dyeing-innovations', title: 'Zero-Chemical Botanical Dyeing Techniques in Paris', date: 'June 28, 2026', author: 'Jean-Pierre Laurent', category: 'SUSTAINABILITY', excerpt: 'Extracting pigment from oak bark, indigo, and walnut shells to achieve deep monochrome hues naturally.' },
];

export default function NoirBlogPage() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#f0ece3] font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-10">
        <div className="text-center">
          <span className="text-xs tracking-widest text-[#c9aa71] uppercase font-semibold bg-[#c9aa71]/10 px-4 py-1.5 rounded-full border border-[#c9aa71]/30">
            ATELIER JOURNAL
          </span>
          <h1 className="text-5xl font-light mt-4 mb-3">Stories & Craftsmanship</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Explorations into rare organic textiles, sustainable botanical dyeing, and architectural patternmaking.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((p) => (
            <div key={p.slug} className="bg-[#141414] border border-white/5 rounded-3xl p-8 space-y-3 hover:border-[#c9aa71]/40 transition-colors">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#c9aa71] bg-[#c9aa71]/10 px-3 py-1 rounded-full uppercase">{p.category}</span>
                <span className="text-xs text-gray-500">{p.date} · By {p.author}</span>
              </div>
              <h2 className="text-2xl font-light text-white">{p.title}</h2>
              <p className="text-gray-400 text-xs leading-relaxed">{p.excerpt}</p>
              <div className="pt-2">
                <Link href={`/blog/${p.slug}`} className="inline-block text-[#c9aa71] font-bold text-xs hover:underline uppercase tracking-wider">
                  Read Atelier Journal →
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
