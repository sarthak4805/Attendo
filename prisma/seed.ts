import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('✅ Seed started');

  const password = 'password123';
  const hash = await bcrypt.hash(password, 10);

  await prisma.user.upsert({
    where: { username: 'student1' },
    update: {},
    create: {
      username: 'student1',
      name: 'Student One',
      role: 'STUDENT',
      passwordHash: hash,
      isActive: true,
    },
  });

  await prisma.user.upsert({
    where: { username: 'teacher1' },
    update: {},
    create: {
      username: 'teacher1',
      name: 'Teacher One',
      role: 'TEACHER',
      passwordHash: hash,
      isActive: true,
    },
  });

  await prisma.user.upsert({
    where: { username: 'admin1' },
    update: {},
    create: {
      username: 'admin1',
      name: 'Admin One',
      role: 'ADMIN',
      passwordHash: hash,
      isActive: true,
    },
  });

  console.log('✅ Seed completed');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
