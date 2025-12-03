"use client";

import Link from "next/link";

type StudentLayoutProps = {
  children: React.ReactNode;
};

export default function StudentLayout({ children }: StudentLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <nav className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center space-x-6">
            <Link
              href="/students/assignments"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              Assignments
            </Link>

            {/* Future student links:
                Attendance | Notes | Notifications | Profile */}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 p-6 bg-gray-50">
        {children}
      </main>
    </div>
  );
}
