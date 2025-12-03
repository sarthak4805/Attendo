import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('session')?.value;

  if (!token) return NextResponse.json({ error: 'No session' }, { status: 401 });

  const session = await prisma.session.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!session) return NextResponse.json({ error: 'Invalid session' }, { status: 401 });

  return NextResponse.json({ user: session.user });
}
