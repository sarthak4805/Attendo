// app/api/teacher/submissions/[id]/grade/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const currentUser = await getCurrentUser();
    const { id } = await params;

    if (!currentUser || (currentUser.role !== 'TEACHER' && currentUser.role !== 'ADMIN')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const body = await request.json();
    const { marks, remarks } = body;

    if (marks === undefined || marks === null) {
      return NextResponse.json({ error: 'Marks are required' }, { status: 400 });
    }

    const submission = await prisma.submission.update({
      where: { id },
      data: {
        marks: parseInt(marks),
        remarks: remarks || null,
        status: 'GRADED',
        gradedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      submission,
    });
  } catch (error) {
    console.error('Grade submission error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}