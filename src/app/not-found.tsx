'use client';
import Link from 'next/link';
import { Header, Footer } from '@/components/Header';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col font-sans">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="text-5xl font-light text-zinc-500 mb-4 tracking-widest">404</div>
        <h1 className="text-2xl font-light uppercase tracking-widest text-white mb-3">Garment Not Found</h1>
        <p className="text-zinc-500 text-xs max-w-md mb-8 tracking-wide">
          The editorial piece, lookbook campaign, or store location you requested is not listed in the Noir Studio archive.
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-white hover:bg-zinc-200 text-black font-semibold text-xs uppercase tracking-widest transition-colors"
          >
            Return to Studio
          </Link>
          <Link
            href="/shop"
            className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold text-xs uppercase tracking-widest border border-zinc-800 transition-colors"
          >
            Explore Collection
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
