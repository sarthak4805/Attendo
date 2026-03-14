'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Assignment = {
  id: string;
  title: string;
  className: string;
  dueDate: string;
  submissionCount: number;
};

export default function TeacherAssignmentsPage() {
  const router = useRouter();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const res = await fetch('/api/teacher/assignments/list', {
          credentials: 'include',
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to load assignments');

        setAssignments(data.assignments);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchAssignments();
  }, []);

  if (loading) return <p>Loading assignments...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  
    return (
  <div>
    <div className="flex justify-between mb-6">
      <h1 className="text-2xl font-bold">Assignments</h1>

      <button
        onClick={() => router.push('/teachers/assignments/create')}
        className="bg-indigo-600 text-white px-4 py-2 rounded"
      >
        New Assignment
      </button>
    </div>

    {assignments.length === 0 ? (
      <p>No assignments created yet.</p>
    ) : (
      <div className="space-y-4">
        {assignments.map((a) => (
          <div
            key={a.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{a.title}</h2>
              <p className="text-sm text-gray-600">
                Class: {a.className}
              </p>
              <p className="text-sm text-gray-600">
                Due: {new Date(a.dueDate).toLocaleString()}
              </p>
              <p className="text-sm text-gray-700">
                Submissions: {a.submissionCount}
              </p>
            </div>

            <button
              onClick={() => router.push(`/teachers/assignments/${a.id}`)}
              className="text-indigo-600 hover:text-indigo-900 font-medium"
            >
              View Submissions →
            </button>
          </div>
        ))}
      </div>
    )}
  </div>
);

}
