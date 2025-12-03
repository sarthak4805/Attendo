// app/api/admin/students/list/route.ts

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

    // Get all students with user and teacher info
    const students = await prisma.student.findMany({
      include: {
        user: {
          select: {
            id: true,
            username: true,
            name: true,
            createdAt: true,
          },
        },
        teacher: {
          select: {
            id: true,
            fullName: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({
      success: true,
      students: students.map((student) => ({
        id: student.id,
        userId: student.userId,
        fullName: student.fullName,
        username: student.user.username,
        department: student.department,
        year: student.year,
        rollNo: student.rollNo,
        activeBacklogs: student.activeBacklogs,
        phone: student.phone,
        parentPhone: student.parentPhone,
        teacher: student.teacher
          ? {
              id: student.teacher.id,
              name: student.teacher.fullName,
            }
          : null,
        createdAt: student.createdAt,
      })),
    });
  } catch (error) {
    console.error('List students error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}