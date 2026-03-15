'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaUserGraduate, FaPlus, FaSearch } from 'react-icons/fa';

interface Student {
  id: string;
  fullName: string;
  email: string;
  rollNo: string;
  year: number | string;
  department: string;
  activeBacklogs: number;
  teacher?: { name: string };
}

export default function AdminStudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('/api/admin/students/list');
      const data = await response.json();
      setStudents(data.students || []);
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false);
    }
  };

  const filtered = students.filter(
    (s) =>
      s.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      s.rollNo?.toLowerCase().includes(search.toLowerCase()) ||
      s.department?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600"><FaUserGraduate /></span>
            Students
          </h1>
          <p className="text-slate-500 text-sm mt-1 font-light">Manage all registered students in the system.</p>
        </div>
        <Link
          href="/admin/students/add"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-blue-600/20 transition-all"
        >
          <FaPlus /> Add Student
        </Link>
      </div>

      {/* Search */}
      <div className="relative mb-6 max-w-sm">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search by name, roll no, dept..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm"
        />
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-20 text-slate-400">
            <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mr-3"></div>
            Loading students...
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400">No students found.</div>
        ) : (
          <table className="min-w-full divide-y divide-slate-100">
            <thead className="bg-slate-50">
              <tr>
                {['Name', 'Email', 'Roll No', 'Year', 'Department', 'Backlogs', 'Teacher'].map((h) => (
                  <th key={h} className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-bold flex-shrink-0">
                        {student.fullName?.charAt(0)}
                      </div>
                      <span className="text-sm font-semibold text-slate-800">{student.fullName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{student.email || '—'}</td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-mono bg-slate-100 text-slate-700 px-2 py-1 rounded-lg">{student.rollNo}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">Year {student.year}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{student.department}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${student.activeBacklogs > 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                      {student.activeBacklogs > 0 ? `${student.activeBacklogs} Backlogs` : 'Clear'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{student.teacher?.name || <span className="text-slate-400 italic text-xs">Not Assigned</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
