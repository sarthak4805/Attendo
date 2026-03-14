'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function StudentAssignmentsPage() {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await fetch('/api/student/assignments/list');
      const data = await response.json();
      setAssignments(data.assignments || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (submission: { status: string; marks?: number; remarks?: string } | null | undefined, dueDate: string) => {
    if (!submission) {
      return new Date(dueDate) < new Date()
        ? 'bg-red-100 text-red-800'
        : 'bg-gray-100 text-gray-800';
    }
    if (submission.status === 'GRADED') return 'bg-green-100 text-green-800';
    return 'bg-yellow-100 text-yellow-800';
  };

  const getStatusText = (submission: { status: string; marks?: number; remarks?: string } | null | undefined, dueDate: string) => {
    if (!submission) {
      return new Date(dueDate) < new Date() ? 'Overdue' : 'Not Submitted';
    }
    if (submission.status === 'GRADED') return `Graded (${submission.marks})`;
    return 'Submitted';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">My Assignments</h1>

          {loading ? (
            <p>Loading...</p>
          ) : assignments.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-gray-500">No assignments available</p>
            </div>
          ) : (
            <div className="space-y-4">
              {assignments.map((assignment: { id: string, title: string, description: string, dueDate: string, fileUrl?: string, teacher: { fullName: string }, submission?: { status: string, marks?: number, remarks?: string } }) => (
                <div key={assignment.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {assignment.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {assignment.description}
                      </p>
                      <div className="mt-3 flex items-center space-x-4 text-sm text-gray-500">
                        <span>Teacher: {assignment.teacher.fullName}</span>
                        <span>•</span>
                        <span>
                          Due: {new Date(assignment.dueDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex flex-col items-end space-y-2">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                          assignment.submission,
                          assignment.dueDate
                        )}`}
                      >
                        {getStatusText(assignment.submission, assignment.dueDate)}
                      </span>
                      {assignment.fileUrl && (
                        <a
                          href={assignment.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-900 text-sm"
                        >
                          Download File
                        </a>
                      )}
                      {!assignment.submission && new Date(assignment.dueDate) > new Date() && (
                        <Link
                          href={`/students/assignments/${assignment.id}/submit`}
                          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-sm"
                        >
                          Submit
                        </Link>
                      )}
                      {assignment.submission?.remarks && (
                        <div className="mt-2 text-sm">
                          <p className="font-medium text-gray-700">Remarks:</p>
                          <p className="text-gray-600">{assignment.submission.remarks}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}