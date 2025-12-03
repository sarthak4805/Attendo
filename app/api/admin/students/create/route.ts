// app/api/admin/students/create/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword, getCurrentUser } from '@/lib/auth';
import { generatePasswordFromUsername } from '@/lib/password';

export async function POST(request: NextRequest) {
  try {
    // Check if user is admin
    const currentUser = await getCurrentUser();
    
    if (!currentUser || currentUser.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Unauthorized. Admin access required.' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const {
      username,
      fullName,
      email,
      department,
      year,
      rollNo,
      activeBacklogs,
      phone,
      parentPhone,
      teacherId,
    } = body;

    // Validate input
    if (
      !username ||
      !fullName ||
      !email ||
      !department ||
      !year ||
      !rollNo ||
      !phone ||
      !parentPhone
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this username already exists' },
        { status: 400 }
      );
    }

    // Check if roll number already exists
    const existingRollNo = await prisma.student.findUnique({
      where: { rollNo },
    });

    if (existingRollNo) {
      return NextResponse.json(
        { error: 'Student with this roll number already exists' },
        { status: 400 }
      );
    }

    // Verify teacher exists if teacherId provided
    if (teacherId) {
      const teacherExists = await prisma.teacher.findUnique({
        where: { id: teacherId },
      });

      if (!teacherExists) {
        return NextResponse.json(
          { error: 'Teacher not found' },
          { status: 404 }
        );
      }
    }

    // Generate secure password
    const plainPassword = generatePasswordFromUsername(username);
    const hashedPassword = await hashPassword(plainPassword);

    // Create user and student in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create user
      const user = await tx.user.create({
        data: {
          username,
          email,
          passwordHash: hashedPassword,
          name: fullName,
          role: 'STUDENT',
          mustChangePassword: true,
        },
      });

      // Create student profile
      const student = await tx.student.create({
        data: {
          userId: user.id,
          fullName,
          email,
          department,
          year: parseInt(year),
          rollNo,
          activeBacklogs: activeBacklogs ? parseInt(activeBacklogs) : 0,
          phone,
          parentPhone,
          teacherId: teacherId || null,
        },
      });

      return { user, student };
    });

    return NextResponse.json({
      success: true,
      message: 'Student created successfully',
      student: {
        id: result.student.id,
        username: result.user.username,
        email: result.student.email,
        fullName: result.student.fullName,
        department: result.student.department,
        year: result.student.year,
        rollNo: result.student.rollNo,
        phone: result.student.phone,
        parentPhone: result.student.parentPhone,
      },
      temporaryPassword: plainPassword, // Send this to student via email/SMS
    });
  } catch (error) {
    console.error('Create student error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}