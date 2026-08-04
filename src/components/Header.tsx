'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag } from 'lucide-react';

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Editorial' },
    { href: '/about', label: 'Maison Story' },
    { href: '/shop', label: 'All Garments' },
    { href: '/shop/outerwear', label: 'Outerwear' },
    { href: '/shop/knitwear', label: 'Knitwear' },
    { href: '/shop/accessories', label: 'Leather Goods' },
    { href: '/shop/new-arrivals', label: 'New Arrivals' },
    { href: '/lookbook', label: 'Lookbook' },
    { href: '/lookbook/autumn-winter-2026', label: 'AW26 Campaign' },
    { href: '/cart', label: 'Cart' },
    { href: '/wishlist', label: 'Wishlist' },
    { href: '/checkout', label: 'Checkout' },
    { href: '/orders', label: 'Order History' },
    { href: '/stores', label: 'Flagships' },
    { href: '/size-guide', label: 'Size Guide' },
    { href: '/sustainability', label: 'Ethical Wool' },
    { href: '/blog', label: 'Fashion Journal' },
    { href: '/faq', label: 'Care & Shipping' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-xl border-b border-zinc-800 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-black font-extrabold shadow-lg">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-black tracking-[0.25em] text-white block uppercase">NOIR STUDIO</span>
            <span className="text-[9px] tracking-[0.3em] text-zinc-400 font-sans font-semibold uppercase block -mt-1">Haute Couture</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-4 text-xs font-medium py-2">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={	ransition-colors whitespace-nowrap py-1 \}
            >
              {link.label}
            </Link>
          ))}
          {navLinks.length > 5 && (
            <div className="relative group py-1">
              <button className="flex items-center gap-1 text-slate-300 hover:text-white font-medium transition-colors cursor-pointer py-1">
                <span>More</span>
                <span className="text-[9px] opacity-70">▼</span>
              </button>
              <div className="absolute right-0 top-full mt-1 w-52 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl p-2 hidden group-hover:block group-focus-within:block z-50">
                <div className="grid grid-cols-1 gap-1 max-h-72 overflow-y-auto no-scrollbar">
                  {navLinks.slice(5).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-3 py-1.5 rounded-lg text-xs text-slate-300 hover:bg-slate-800 hover:text-white transition-colors block whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>

        <Link
          href="/cart"
          className="font-sans px-4 py-2 rounded-xl bg-zinc-100 text-black font-bold text-[11px] uppercase tracking-wider shadow-lg transition-all shrink-0"
        >
          Cart (1)
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12 text-zinc-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-base tracking-widest font-sans">
            <ShoppingBag className="w-5 h-5 text-white" /> NOIR STUDIO
          </div>
          <p className="text-zinc-500 text-xs leading-relaxed font-sans">
            Minimalist silhouette architecture, Japanese raw selvedge, and European cashmere.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider font-sans">Collections</h4>
          <ul className="space-y-2">
            <li><Link href="/shop/outerwear" className="hover:text-white">Tailored Trench Coats</Link></li>
            <li><Link href="/shop/knitwear" className="hover:text-white">Heavy Cashmere Sweaters</Link></li>
            <li><Link href="/shop/accessories" className="hover:text-white">Full-Grain Leather Bags</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider font-sans">Client Relations</h4>
          <ul className="space-y-2">
            <li><Link href="/orders" className="hover:text-white">Order Tracking</Link></li>
            <li><Link href="/stores" className="hover:text-white">Flagship Boutiques</Link></li>
            <li><Link href="/size-guide" className="hover:text-white">Tailoring & Measurements</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider font-sans">Private Styling Desk</h4>
          <p className="text-zinc-500 font-sans">Paris / Tokyo Concierge:</p>
          <p className="text-white font-bold mt-1 text-sm font-sans">concierge@noirstudio.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
        <div>© 2026 All rights reserved.</div>
        <div>
          <a
            href="https://devmaster.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white font-medium transition-colors cursor-pointer"
          >
            <span>Powered by</span>
            <span className="font-bold text-neutral-300 hover:underline">DevMaster</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
