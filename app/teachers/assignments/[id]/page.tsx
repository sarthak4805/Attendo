'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function AssignmentDetailsPage() {
  const params = useParams();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gradingSubmission, setGradingSubmission] = useState<string | null>(null);
  const [gradeData, setGradeData] = useState({ marks: '', remarks: '' });

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await fetch(`/api/teacher/assignments/${params.id}/submissions`);
      const data = await response.json();
      setSubmissions(data.submissions || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGrade = async (submissionId: string) => {
    try {
      const response = await fetch(`/api/teacher/submissions/${submissionId}/grade`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(gradeData),
      });

      if (response.ok) {
        setGradingSubmission(null);
        setGradeData({ marks: '', remarks: '' });
        fetchSubmissions();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Assignment Submissions</h1>

          {loading ? (
            <p>Loading...</p>
          ) : submissions.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-gray-500">No submissions yet</p>
            </div>
          ) : (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Student
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Roll No
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Submitted At
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Marks
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {submissions.map((sub: { id: string, student: { fullName: string, rollNo: string }, submittedAt: string | Date, status: string, marks: number | null, fileUrl: string }) => (
                    <tr key={sub.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {sub.student.fullName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {sub.student.rollNo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(sub.submittedAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            sub.status === 'GRADED'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {sub.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {sub.marks !== null ? sub.marks : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                        <a
                          href={sub.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Download
                        </a>
                        {gradingSubmission === sub.id ? (
                          <div className="mt-2 space-y-2">
                            <input
                              type="number"
                              placeholder="Marks"
                              value={gradeData.marks}
                              onChange={(e) =>
                                setGradeData({ ...gradeData, marks: e.target.value })
                              }
                              className="block w-full border border-gray-300 rounded-md px-2 py-1"
                            />
                            <textarea
                              placeholder="Remarks"
                              value={gradeData.remarks}
                              onChange={(e) =>
                                setGradeData({ ...gradeData, remarks: e.target.value })
                              }
                              className="block w-full border border-gray-300 rounded-md px-2 py-1"
                              rows={2}
                            />
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleGrade(sub.id)}
                                className="px-3 py-1 bg-green-600 text-white rounded-md text-xs"
                              >
                                Submit
                              </button>
                              <button
                                onClick={() => setGradingSubmission(null)}
                                className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md text-xs"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          <button
                            onClick={() => setGradingSubmission(sub.id)}
                            className="text-green-600 hover:text-green-900"
                          >
                            Grade
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}