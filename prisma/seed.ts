import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Noir Studio database...');

  await prisma.product.deleteMany();
  await prisma.collection.deleteMany();

  await prisma.collection.create({
    data: {
      name: 'Autumn/Winter 2026 — Reykjavik Edition',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80',
    },
  });

  await prisma.product.createMany({
    data: [
      {
        name: 'Monolithic Oversized Trench Coat',
        price: 1450.00,
        category: 'Outerwear',
        description: 'Sustainably sourced GOTS certified organic wool trench coat in obsidian black.',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80',
      },
      {
        name: 'Structured Recycled Cashmere Sweater',
        price: 680.00,
        category: 'Knitwear',
        description: '100% recycled cashmere knit sweater with architectural drop shoulders.',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
      },
    ],
  });

  console.log('Noir Studio database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
