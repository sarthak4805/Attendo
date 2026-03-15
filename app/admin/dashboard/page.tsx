// app/admin/dashboard/page.tsx
'use client';

import RoleProtection from '@/components/RoleProtection';
import { useAuth } from '@/app/context/AuthContext';
import Link from 'next/link';
import { FaUserGraduate, FaChalkboardTeacher, FaCalendarCheck, FaPlus } from 'react-icons/fa';

const stats = [
  {
    label: 'Total Students',
    value: '—',
    icon: FaUserGraduate,
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    href: '/admin/students',
  },
  {
    label: 'Total Teachers',
    value: '—',
    icon: FaChalkboardTeacher,
    color: 'from-indigo-500 to-indigo-600',
    bg: 'bg-indigo-50',
    text: 'text-indigo-600',
    href: '/admin/teachers',
  },
  {
    label: 'Attendance Tracked',
    value: 'Live',
    icon: FaCalendarCheck,
    color: 'from-green-500 to-emerald-600',
    bg: 'bg-green-50',
    text: 'text-green-600',
    href: '#',
  },
];

export default function AdminPage() {
  const { user } = useAuth();

  return (
    <RoleProtection allowedRoles={['ADMIN']}>
      <div className="p-8">
        
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm text-slate-500 font-medium mb-1">Welcome back 👋</p>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{user?.name}</h1>
          <p className="text-slate-500 mt-1 font-light">Here&apos;s a quick overview of the Attendo system.</p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {stats.map((stat) => (
            <Link href={stat.href} key={stat.label} className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center`}>
                  <stat.icon className={`text-xl ${stat.text}`} />
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${stat.bg} ${stat.text}`}>View all →</span>
              </div>
              <p className="text-3xl font-extrabold text-slate-800 mb-1">{stat.value}</p>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-bold text-slate-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/admin/students/add"
              className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-blue-200 hover:bg-blue-50 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <FaPlus />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Add New Student</p>
                <p className="text-xs text-slate-500 font-light">Register a student to the system</p>
              </div>
            </Link>
            <Link
              href="/admin/teachers/add"
              className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-indigo-200 hover:bg-indigo-50 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <FaPlus />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Add New Teacher</p>
                <p className="text-xs text-slate-500 font-light">Register a teacher to the system</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </RoleProtection>
  );
}