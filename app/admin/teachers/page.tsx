'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaChalkboardTeacher, FaPlus, FaSearch } from 'react-icons/fa';

interface Teacher {
  id: string;
  fullName: string;
  email: string;
  department: string;
  phone: string;
  studentCount: number;
}

export default function AdminTeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await fetch('/api/admin/teachers/list');
      const data = await response.json();
      setTeachers(data.teachers || []);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    } finally {
      setLoading(false);
    }
  };

  const filtered = teachers.filter(
    (t) =>
      t.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      t.department?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600"><FaChalkboardTeacher /></span>
            Teachers
          </h1>
          <p className="text-slate-500 text-sm mt-1 font-light">Manage all registered teachers in the system.</p>
        </div>
        <Link
          href="/admin/teachers/add"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-indigo-600/20 transition-all"
        >
          <FaPlus /> Add Teacher
        </Link>
      </div>

      {/* Search */}
      <div className="relative mb-6 max-w-sm">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search by name or department..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-400 bg-white shadow-sm"
        />
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-20 text-slate-400">
            <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mr-3"></div>
            Loading teachers...
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400">No teachers found.</div>
        ) : (
          <table className="min-w-full divide-y divide-slate-100">
            <thead className="bg-slate-50">
              <tr>
                {['Name', 'Email', 'Department', 'Phone', 'Students'].map((h) => (
                  <th key={h} className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filtered.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-sm font-bold flex-shrink-0">
                        {teacher.fullName?.charAt(0)}
                      </div>
                      <span className="text-sm font-semibold text-slate-800">{teacher.fullName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{teacher.email || '—'}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{teacher.department}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{teacher.phone}</td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-semibold bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full">
                      {teacher.studentCount ?? 0} Students
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}