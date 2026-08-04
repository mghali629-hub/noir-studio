import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://noirstudio.fashion'),
  title: {
    default: 'Noir Studio | Minimalist Luxury & Sustainable Fashion House',
    template: '%s | Noir Studio Paris',
  },
  description: 'Contemporary Paris luxury house. Sustainable 100% GOTS certified organic cashmere, structured outerwear, zero-waste tailoring, and seasonal editorial lookbooks.',
  keywords: ['Luxury Fashion', 'Sustainable Apparel', 'GOTS Cashmere', 'Paris Atelier', 'Architectural Outerwear', 'Lookbook'],
  openGraph: {
    title: 'Noir Studio | Sustainable Minimalist Luxury',
    description: 'High-end sustainable outerwear and tailoring crafted in Paris, Milan, and London ateliers.',
    url: 'https://noirstudio.fashion',
    siteName: 'Maison Noir Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noir Studio Sustainable Luxury',
    description: 'Minimalist luxury apparel and GOTS organic cashmere.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0a0a0a] text-zinc-100 antialiased selection:bg-white selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
}
