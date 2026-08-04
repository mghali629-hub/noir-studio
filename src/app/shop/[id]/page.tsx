import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const products = await prisma.product.findMany({ select: { id: true } });
  return products.map((p) => ({ id: String(p.id) }));
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({ where: { id: Number(params.id) } });
  if (!product) notFound();

  const related = await prisma.product.findMany({
    where: { category: product.category, NOT: { id: product.id } },
    take: 4,
  });

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const materials = product.category === 'Knitwear'
    ? ['100% Cashmere', 'Hand-finished edges', 'Cold wash recommended', 'Dry flat to maintain shape']
    : ['Premium Merino Wool', 'Fully lined interior', 'Hand-stitched details', 'Professional dry clean only'];

  return (
    <main style={{ background: '#0e0e0e', minHeight: '100vh', color: '#f0ece3', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 5% 60px' }}>
        {/* Breadcrumb */}
        <nav style={{ marginBottom: '40px', display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px', color: '#666' }}>
          <Link href="/shop" style={{ color: '#666', textDecoration: 'none' }}>Shop</Link>
          <span>›</span>
          <Link href={`/shop/${product.category.toLowerCase()}`} style={{ color: '#666', textDecoration: 'none' }}>{product.category}</Link>
          <span>›</span>
          <span style={{ color: '#f0ece3' }}>{product.name}</span>
        </nav>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          {/* Left: Images */}
          <div>
            <div style={{ aspectRatio: '3/4', background: `url('https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&q=80') center/cover`, borderRadius: '4px', marginBottom: '12px' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
              {['photo-1581091226825-a6a2a5aee158', 'photo-1594938298603-c8148c4b4357', 'photo-1620799140408-edc6dcb6d633'].map((id) => (
                <div key={id} style={{ aspectRatio: '1', background: `url('https://images.unsplash.com/${id}?w=400&q=80') center/cover`, borderRadius: '4px' }} />
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div>
            <div style={{ marginBottom: '12px' }}>
              <span style={{ background: 'rgba(201,170,113,0.15)', color: '#c9aa71', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '600', letterSpacing: '2px' }}>{product.category.toUpperCase()}</span>
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: '300', letterSpacing: '-0.5px', marginBottom: '8px', lineHeight: '1.2' }}>{product.name}</h1>
            <p style={{ fontSize: '1.8rem', fontWeight: '600', color: '#c9aa71', marginBottom: '24px' }}>€{product.price.toFixed(2)}</p>
            <p style={{ color: '#999', lineHeight: '1.8', marginBottom: '32px', fontSize: '0.95rem' }}>{product.description}</p>

            {/* Size Selector */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '2px', color: '#ccc' }}>SELECT SIZE</span>
                <Link href="/size-guide" style={{ color: '#c9aa71', textDecoration: 'none', fontSize: '12px' }}>Size Guide</Link>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                {sizes.map((size) => (
                  <button key={size} style={{ width: '48px', height: '48px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#f0ece3', borderRadius: '4px', cursor: 'pointer', fontSize: '13px', fontWeight: '500', transition: 'all 0.2s' }}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
              <button style={{ background: '#f0ece3', color: '#0e0e0e', border: 'none', borderRadius: '4px', padding: '18px', fontWeight: '700', fontSize: '14px', cursor: 'pointer', letterSpacing: '2px' }}>
                ADD TO CART
              </button>
              <button style={{ background: 'transparent', color: '#f0ece3', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '4px', padding: '16px', fontSize: '14px', cursor: 'pointer', letterSpacing: '1px' }}>
                ADD TO WISHLIST ♡
              </button>
            </div>

            {/* Material */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '28px' }}>
              <h3 style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '2px', marginBottom: '14px', color: '#ccc' }}>MATERIAL & CARE</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {materials.map((m) => (
                  <li key={m} style={{ color: '#888', fontSize: '13px', display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#c9aa71' }}>—</span> {m}
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping */}
            <div style={{ marginTop: '24px', background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['🚚 Free shipping on orders over €200', '↩️ 30-day returns', '✓ Authenticity guaranteed'].map((info) => (
                <div key={info} style={{ color: '#888', fontSize: '13px' }}>{info}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section style={{ marginTop: '80px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '60px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '300', letterSpacing: '2px', marginBottom: '32px', textTransform: 'uppercase' }}>You May Also Like</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {related.map((p) => (
                <Link key={p.id} href={`/shop/${p.id}`} style={{ textDecoration: 'none', color: '#f0ece3' }}>
                  <div style={{ aspectRatio: '3/4', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '12px' }} />
                  <p style={{ margin: '0 0 4px', fontSize: '14px' }}>{p.name}</p>
                  <p style={{ margin: 0, color: '#c9aa71', fontWeight: '600' }}>€{p.price.toFixed(2)}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
