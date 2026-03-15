'use client';

import { useAuth } from '../context/AuthContext';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { FaHome, FaUserGraduate, FaChalkboardTeacher, FaSignOutAlt, FaShieldAlt } from 'react-icons/fa';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  if (!user || user.role !== 'ADMIN') {
    router.push('/login');
    return null;
  }

  const navLinks = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: FaHome },
    { href: '/admin/teachers', label: 'Teachers', icon: FaChalkboardTeacher },
    { href: '/admin/students', label: 'Students', icon: FaUserGraduate },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex font-['Inter',sans-serif]">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed top-0 left-0 h-full z-30 shadow-2xl">
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-white/10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-xl shadow-lg">A</div>
          <div>
            <p className="text-lg font-bold tracking-tight">Attendo</p>
            <p className="text-xs text-slate-400 font-light">Admin Console</p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navLinks.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className={`text-base ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-white'}`} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* User + Logout */}
        <div className="px-4 py-6 border-t border-white/10">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-semibold text-white truncate max-w-[120px]">{user.name}</p>
              <p className="text-xs text-slate-400 flex items-center gap-1"><FaShieldAlt className="text-blue-400" /> Admin</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:bg-red-600/20 hover:text-red-400 transition-all duration-200"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 flex-1 min-h-screen">
        {children}
      </main>
    </div>
  );
}