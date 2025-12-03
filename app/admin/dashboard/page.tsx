// app/admin/page.tsx

'use client';

import RoleProtection from '@/components/RoleProtection';
import { useAuth } from '@/app/context/AuthContext';

export default function AdminPage() {
  const { user, logout } = useAuth();

  return (
    <RoleProtection allowedRoles={['ADMIN']}>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
              </div>
              <div className="flex items-center">
                <span className="text-gray-700 mr-4">Admin: {user?.name}</span>
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
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Admin Dashboard
              </h2>
              <p className="text-gray-600">
                This page is only accessible to users with ADMIN role.
              </p>
            </div>
          </div>
        </main>
      </div>
    </RoleProtection>
  );
}