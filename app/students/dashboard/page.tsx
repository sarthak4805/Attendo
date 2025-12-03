'use client';

import RoleProtection from '@/components/RoleProtection';
import { useAuth } from '@/app/context/AuthContext';
import Link from 'next/link';
import StudentAttendanceChart from '@/components/student/StudentAttendanceChart';

export default function StudentPage() {
  const { user, logout } = useAuth();

  return (
    <RoleProtection allowedRoles={['STUDENT']}>
      <div className="min-h-screen bg-gray-100">

        {/* ✅ NAVBAR */}
        <nav className="bg-white border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-indigo-600">
              Student Portal
            </h1>

            <div className="flex items-center gap-6">
              <Link
                href="/students/assignments"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Assignments
              </Link>
              <Link
                href="/student/attendance"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Attendance
              </Link>
              <Link
                href="/student/notifications"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
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
        </nav>

        {/* ✅ MAIN CONTENT */}
        <main className="max-w-7xl mx-auto px-6 py-8">

          {/* ✅ GREETING */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome back, {user?.name} 👋
            </h2>
            <p className="text-gray-600 mt-1">
              Here’s a quick overview of your academic progress.
            </p>
          </div>

          {/* ✅ TOP STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

            {/* New Assignments */}
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-sm text-gray-500">New Assignments</h3>
              <p className="text-3xl font-bold text-indigo-600 mt-2">3</p>
              <Link
                href="/students/assignments"
                className="text-sm text-indigo-600 mt-3 inline-block hover:underline"
              >
                View Assignments →
              </Link>
            </div>

            {/* Total Submissions */}
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-sm text-gray-500">Total Submissions</h3>
              <p className="text-3xl font-bold text-green-600 mt-2">18</p>
              <Link
                href="/students/submissions"
                className="text-sm text-green-600 mt-3 inline-block hover:underline"
              >
                View Submissions →
              </Link>
            </div>

            {/* Notifications */}
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-sm text-gray-500">New Notifications</h3>
              <p className="text-3xl font-bold text-yellow-500 mt-2">2</p>
              <Link
                href="/student/notifications"
                className="text-sm text-yellow-600 mt-3 inline-block hover:underline"
              >
                View Alerts →
              </Link>
            </div>

            {/* Attendance */}
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-sm text-gray-500">Attendance %</h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">87%</p>
              <Link
                href="/student/attendance"
                className="text-sm text-blue-600 mt-3 inline-block hover:underline"
              >
                View Details →
              </Link>
            </div>
          </div>

          {/* ✅ ATTENDANCE CHART */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Your Attendance Overview
            </h3>

            <StudentAttendanceChart />
          </div>

        </main>
      </div>
    </RoleProtection>
  );
}
