'use client';

import RoleProtection from '@/components/RoleProtection';
import { useAuth } from '@/app/context/AuthContext';
import Link from 'next/link';
import AttendanceChart from '@/components/teacher/AttendanceChart';
import ClassAttendanceTable from '@/components/teacher/ClassAttendanceTable';

export default function TeacherPage() {
  const { user, logout } = useAuth();

  return (
    <RoleProtection allowedRoles={['TEACHER', 'ADMIN']}>
      <div className="min-h-screen bg-gray-100">

        {/* ✅ NAVBAR */}
     {/*    <nav className="bg-white border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-indigo-600">
              Teacher Portal
            </h1>

            <div className="flex items-center gap-6">
              <Link href="/teacher/assignments" className="text-sm text-gray-600 hover:text-gray-900">
                Assignments
              </Link>
              <Link href="/teacher/attendance" className="text-sm text-gray-600 hover:text-gray-900">
                Attendance
              </Link>
              <Link href="/teacher/notifications" className="text-sm text-gray-600 hover:text-gray-900">
                Notifications
              </Link>

              <button
                onClick={logout}
                className="text-sm bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </nav>*/}

        {/* ✅ MAIN CONTENT */}
        <main className="max-w-7xl mx-auto px-6 py-8">

          {/* ✅ GREETING */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Good day, {user?.name} 👋
            </h2>
            <p className="text-gray-600 mt-1">
              Here’s an overview of your academic activity.
            </p>
          </div>

          {/* ✅ TOP STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

            {/* Assignments */}
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="text-sm text-gray-500">Total Assignments</h3>
              <p className="text-3xl font-bold text-indigo-600 mt-2">12</p>
              <Link href="/teachers/assignments/create" className="text-sm text-indigo-600 mt-3 inline-block">
                create Assignment →
              </Link>
            </div>

            {/* Submissions */}
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="text-sm text-gray-500">Pending Submissions</h3>
              <p className="text-3xl font-bold text-green-600 mt-2">34</p>
              <Link href="/teachers/assignments" className="text-sm text-green-600 mt-3 inline-block">
                Review Submissions →
              </Link>
            </div>

            {/* Notifications */}
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="text-sm text-gray-500">Notifications</h3>
              <p className="text-3xl font-bold text-yellow-500 mt-2">5</p>
              <Link href="/teacher/notifications" className="text-sm text-yellow-600 mt-3 inline-block">
                View Alerts →
              </Link>
            </div>

            {/* Attendance */}
            <div className="bg-white p-5 rounded-lg shadow">
              <h3 className="text-sm text-gray-500">Average Attendance</h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">87%</p>
              <Link href="/teacher/attendance" className="text-sm text-blue-600 mt-3 inline-block">
                View Attendance →
              </Link>
            </div>
          </div>

          {/* ✅ ATTENDANCE ANALYTICS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Chart */}
            <div className="bg-white p-6 rounded-lg shadow">
              <AttendanceChart />
            </div>

            {/* Table */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">
                Class-wise Attendance
              </h3>
              <ClassAttendanceTable />
            </div>

          </div>

        </main>
      </div>
    </RoleProtection>
  );
}
