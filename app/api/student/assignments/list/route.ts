// app/api/student/assignments/list/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser || (currentUser.role !== 'STUDENT' && currentUser.role !== 'ADMIN')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const student = await prisma.student.findUnique({
      where: { userId: currentUser.id },
    });

    if (!student) {
      return NextResponse.json({ error: 'Student profile not found' }, { status: 404 });
    }

    // Get assignments for student's class
    const assignments = await prisma.assignment.findMany({
      where: {
        className: `Year ${student.year}`,
      },
      include: {
        teacher: {
          select: {
            fullName: true,
          },
        },
        submissions: {
          where: {
            studentId: student.id,
          },
        },
      },
      orderBy: { dueDate: 'asc' },
    });

    return NextResponse.json({
      success: true,
      assignments: assignments.map((a) => ({
        ...a,
        submission: a.submissions[0] || null,
      })),
    });
  } catch (error) {
    console.error('List student assignments error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}