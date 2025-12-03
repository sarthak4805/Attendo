// app/api/admin/teachers/create/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword } from '@/lib/auth';
import { generatePasswordFromUsername } from '@/lib/password';

import { getCurrentUser } from '@/lib/auth';

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
    const { username, email,fullName, department, phone } = body;

    // Validate input
    if (!username || !fullName || !department || !phone) {
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

    // Generate secure password
    const plainPassword = generatePasswordFromUsername(username);
    const hashedPassword = await hashPassword(plainPassword);

    // Create user and teacher in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create user
      const user = await tx.user.create({
        data: {
          username,
          email,
          passwordHash: hashedPassword,
          name: fullName,
          role: 'TEACHER',
          mustChangePassword: true,
        },
      });

      // Create teacher profile
      const teacher = await tx.teacher.create({
        data: {
          userId: user.id,
          email,
          fullName,
          department,
          phone,
        },
      });

      return { user, teacher };
    });

    return NextResponse.json({
      success: true,
      message: 'Teacher created successfully',
      teacher: {
        id: result.teacher.id,
        username: result.user.username,
        fullName: result.teacher.fullName,
        email: result.teacher.email,
        department: result.teacher.department,
        phone: result.teacher.phone,
      },
      temporaryPassword: plainPassword, // Send this to teacher via email/SMS
    });
  } catch (error) {
    console.error('Create teacher error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}