// app/api/student/assignments/[id]/submit/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';
import { uploadToCloudinary } from '@/lib/cloudinary';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const currentUser = await getCurrentUser();
    const { id } = await params;

    if (!currentUser || (currentUser.role !== 'STUDENT' && currentUser.role !== 'ADMIN')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const student = await prisma.student.findUnique({
      where: { userId: currentUser.id },
    });

    if (!student) {
      return NextResponse.json({ error: 'Student profile not found' }, { status: 404 });
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const note = formData.get('note') as string | null;

    if (!file) {
      return NextResponse.json({ error: 'File is required' }, { status: 400 });
    }

    // Check if already submitted
    const existingSubmission = await prisma.submission.findUnique({
      where: {
        assignmentId_studentId: {
          assignmentId: id,
          studentId: student.id,
        },
      },
    });

    if (existingSubmission) {
      return NextResponse.json(
        { error: 'Assignment already submitted' },
        { status: 400 }
      );
    }

    // Upload file to Cloudinary
    const uploadResult = await uploadToCloudinary(file, 'submissions');

    // Create submission
    const submission = await prisma.submission.create({
      data: {
        assignmentId: id,
        studentId: student.id,
        fileUrl: uploadResult.url,
        filePublicId: uploadResult.publicId,
        note: note || null,
        status: 'SUBMITTED',
      },
    });

    return NextResponse.json({
      success: true,
      submission,
    });
  } catch (error) {
    console.error('Submit assignment error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}