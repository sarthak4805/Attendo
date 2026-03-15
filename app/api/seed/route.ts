import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function GET() {
    try {
        const hash = await bcrypt.hash('password123', 10);

        await (prisma as any).user.upsert({
            where: { username: 'admin1' },
            update: {},
            create: {
                username: 'admin1',
                name: 'Admin One',
                role: 'ADMIN',
                passwordHash: hash,
                isActive: true,
                mustChangePassword: false,
            },
        });

        return NextResponse.json({ success: true, message: 'Admin user created! username: admin1, password: password123' });
    } catch (error) {
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}
