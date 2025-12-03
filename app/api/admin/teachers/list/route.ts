// app/api/admin/teachers/list/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Check if user is admin
    const currentUser = await getCurrentUser();
    
    if (!currentUser || currentUser.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Unauthorized. Admin access required.' },
        { status: 403 }
      );
    }

    // Get all teachers with user info
    const teachers = await prisma.teacher.findMany({
      include: {
        user: {
          select: {
            id: true,
            username: true,
            name: true,
            createdAt: true,
          },
        },
        _count: {
          select: {
            students: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({
      success: true,
      teachers: teachers.map((teacher) => ({
        id: teacher.id,
        userId: teacher.userId,
        fullName: teacher.fullName,
        username: teacher.user.username,
        department: teacher.department,
        phone: teacher.phone,
        studentCount: teacher._count.students,
        createdAt: teacher.createdAt,
      })),
    });
  } catch (error) {
    console.error('List teachers error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}