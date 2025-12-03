// app/dashboard/page.tsx

'use client';

import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const getRoleBasedContent = () => {
    switch (user.role) {
      case 'ADMIN':
        return (
          <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
            <h3 className="text-lg font-medium text-purple-800">Admin Panel</h3>
            <p className="text-purple-700">You have full access to manage users, courses, and system settings.</p>
          </div>
        );
      case 'TEACHER':
        return (
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h3 className="text-lg font-medium text-blue-800">Teacher Dashboard</h3>
            <p className="text-blue-700">Manage your courses, assignments, and student progress.</p>
          </div>
        );
      case 'STUDENT':
        return (
          <div className="bg-green-50 border-l-4 border-green-400 p-4">
            <h3 className="text-lg font-medium text-green-800">Student Dashboard</h3>
            <p className="text-green-700">View your courses, assignments, and grades.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">Welcome, {user.name}</span>
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to your {user.role.toLowerCase()} dashboard
            </h2>
            <div className="mb-4">
              <p className="text-gray-600">
                <strong>Email:</strong> {user.username}
              </p>
              <p className="text-gray-600">
                <strong>Role:</strong> {user.role}
              </p>
            </div>
            {getRoleBasedContent()}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Stats</h3>
              <p className="text-3xl font-bold text-indigo-600">0</p>
              <p className="text-gray-600">Total Items</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Active</h3>
              <p className="text-3xl font-bold text-green-600">0</p>
              <p className="text-gray-600">In Progress</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Completed</h3>
              <p className="text-3xl font-bold text-blue-600">0</p>
              <p className="text-gray-600">Finished</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}