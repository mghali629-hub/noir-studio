const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Noir Studio DB...');

  await prisma.product.deleteMany();
  await prisma.lookbook.deleteMany();
  await prisma.storeLocation.deleteMany();

  const products = [
    { name: 'Double-Breasted Wool Trench', category: 'Outerwear', price: 2450.00, image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop', description: 'Heavyweight double-face wool trench coat with raw hand-stitched edges and horn buttons.' },
    { name: 'Heavyweight Cashmere Mockneck', category: 'Knitwear', price: 1200.00, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop', description: '100% Mongolian high-altitude cashmere sweater with relaxed drop-shoulder cut.' },
    { name: 'Full-Grain Calfskin Tote Bag', category: 'Leather Goods', price: 1850.00, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop', description: 'Handmade Italian calfskin leather tote with unlined interior and silver hardware.' }
  ];

  for (const p of products) {
    await prisma.product.create({ data: p });
  }

  await prisma.lookbook.createMany({
    data: [
      { season: 'autumn-winter-2026', title: 'Monochrome Isolation', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop', description: 'Shot on location in Icelandic volcanic beaches highlighting heavyweight wool silhouettes.' }
    ]
  });

  await prisma.storeLocation.createMany({
    data: [
      { city: 'Paris Flagship Atelier', address: '14 Rue du Faubourg Saint-Honoré', hours: 'Mon - Sat: 10:00 - 19:30' },
      { city: 'Tokyo Ginza Boutique', address: '6-10-1 Ginza, Chuo-ku, Tokyo', hours: 'Mon - Sun: 11:00 - 20:00' }
    ]
  });

  console.log('Noir Studio DB seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
