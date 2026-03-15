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
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left side */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <h1 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                  Attendo
                </h1>
              </div>

              <div className="hidden md:flex items-center space-x-6">
                <Link
                  href="/teachers/dashboard"
                  className="text-sm font-semibold text-gray-900 border-b-2 border-indigo-600 pb-1"
                >
                  Dashboard
                </Link>
                <Link
                  href="/teachers/assignments"
                  className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors"
                >
                  Assignments
                </Link>
                <Link
                  href="/teachers/attendance"
                  className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors"
                >
                  Attendance
                </Link>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-sm font-bold text-gray-900 leading-none">
                  {user?.name}
                </span>
                <span className="text-xs text-gray-500 mt-1">
                  Faculty Member
                </span>
              </div>

              <button
                onClick={logout}
                className="bg-white border border-red-200 text-red-600 hover:bg-red-50 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
