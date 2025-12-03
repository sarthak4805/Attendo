"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useAuth } from "@/app/context/AuthContext";

export default function TeacherLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left side */}
            <div className="flex items-center space-x-6">
              <h1 className="text-xl font-bold text-gray-800">
                Teacher Portal
              </h1>

              <Link
                href="/teachers/assignments"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Assignments
              </Link>
              
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700">
                {user?.name}
              </span>

              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 bg-gray-100 p-6">
        {children}
      </main>
    </div>
  );
}
