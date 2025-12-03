// app/api/teacher/assignments/create/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';
import { uploadToCloudinary } from '@/lib/cloudinary';

export async function POST(request: NextRequest) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser || (currentUser.role !== 'TEACHER' && currentUser.role !== 'ADMIN')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // Get teacher profile
    const teacher = await prisma.teacher.findUnique({
      where: { userId: currentUser.id },
    });

    if (!teacher) {
      return NextResponse.json({ error: 'Teacher profile not found' }, { status: 404 });
    }

    const formData = await request.formData();
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const className = formData.get('className') as string;
    const dueDate = formData.get('dueDate') as string;
    const file = formData.get('file') as File | null;

    if (!title || !description || !className || !dueDate) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    let fileUrl = null;
    let filePublicId = null;

    // Upload file to Cloudinary if provided
    if (file) {
      const uploadResult = await uploadToCloudinary(file, 'assignments');
      fileUrl = uploadResult.url;
      filePublicId = uploadResult.publicId;
    }

    // Create assignment
    const assignment = await prisma.assignment.create({
      data: {
        title,
        description,
        className,
        dueDate: new Date(dueDate),
        fileUrl,
        filePublicId,
      teacherId: teacher.id,
      },
    });

    return NextResponse.json({
      success: true,
      assignment,
    });
  } catch (error) {
  console.error("FULL ERROR:", error);
  return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
}

}