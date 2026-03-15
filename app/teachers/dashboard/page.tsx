'use client';

import RoleProtection from '@/components/RoleProtection';
import { useAuth } from '@/app/context/AuthContext';
import Link from 'next/link';
import AttendanceChart from '@/components/teacher/AttendanceChart';
import ClassAttendanceTable from '@/components/teacher/ClassAttendanceTable';
import { HiClipboardList, HiUserGroup, HiBell, HiChartBar, HiPlus, HiArrowRight } from 'react-icons/hi';

export default function TeacherPage() {
  const { user, logout } = useAuth();

  return (
    <RoleProtection allowedRoles={['TEACHER', 'ADMIN']}>
      <div className="space-y-8">
        {/* ✅ GREETING & QUICK ACTIONS */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 p-8 text-white shadow-2xl shadow-indigo-200">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Good day, {user?.name} 👋
              </h2>
              <p className="mt-2 text-indigo-100 text-lg font-medium opacity-90">
                You have <span className="text-white font-bold underline decoration-wavy decoration-indigo-400">34 pending submissions</span> to review today.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Link 
                href="/teachers/attendance"
                className="flex items-center gap-2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-5 py-3 rounded-2xl font-bold transition-all border border-white/10"
              >
                <HiUserGroup className="text-xl" />
                Take Attendance
              </Link>
              <Link 
                href="/teachers/assignments/create"
                className="flex items-center gap-2 bg-white text-indigo-600 hover:bg-indigo-50 px-5 py-3 rounded-2xl font-bold transition-all shadow-lg"
              >
                <HiPlus className="text-xl" />
                New Assignment
              </Link>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-48 h-48 bg-indigo-400/20 rounded-full blur-2xl"></div>
        </div>

        {/* ✅ TOP STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Total Assignments" 
            value="12" 
            icon={<HiClipboardList />} 
            color="indigo" 
            link="/teachers/assignments"
          />
          <StatCard 
            title="Notifications" 
            value="05" 
            icon={<HiBell />} 
            color="rose" 
            link="/teachers/notifications"
          />
          <StatCard 
            title="Avg. Attendance" 
            value="87%" 
            icon={<HiChartBar />} 
            color="emerald" 
            link="/teachers/attendance"
          />
          <StatCard 
            title="Active Classes" 
            value="04" 
            icon={<HiUserGroup />} 
            color="amber" 
            link="/teachers/attendance"
          />
        </div>

        {/* ✅ ATTENDANCE ANALYTICS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
          {/* Chart */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Attendance Analytics</h3>
                <p className="text-sm text-gray-500 mt-1">Year-wise performance overview</p>
              </div>
              <div className="flex gap-2">
                <select className="bg-slate-50 border-none rounded-xl text-sm font-semibold text-gray-600 px-4 py-2 outline-none cursor-pointer hover:bg-slate-100 transition-colors">
                  <option>Current Year</option>
                  <option>Previous Year</option>
                </select>
              </div>
            </div>
            <div className="h-[350px] relative">
              <AttendanceChart />
            </div>
          </div>

          {/* Table (Recent Classes) */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Recent Classes</h3>
              <Link href="/teachers/attendance" className="text-indigo-600 text-sm font-bold hover:underline">View All</Link>
            </div>
            <ClassAttendanceTable />
          </div>
        </div>
      </div>
    </RoleProtection>
  );
}

function StatCard({ title, value, icon, color, link }: { title: string, value: string, icon: React.ReactNode, color: string, link: string }) {
  const colorClasses: Record<string, string> = {
    indigo: "bg-indigo-50 text-indigo-600 shadow-indigo-100",
    rose: "bg-rose-50 text-rose-600 shadow-rose-100",
    emerald: "bg-emerald-50 text-emerald-600 shadow-emerald-100",
    amber: "bg-amber-50 text-amber-600 shadow-amber-100"
  };

  return (
    <Link href={link} className="group bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-indigo-50 hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-2xl ${colorClasses[color]} text-2xl group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <HiArrowRight className="text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
      </div>
      <div>
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">{title}</h3>
        <p className="text-3xl font-black text-slate-900 mt-1">{value}</p>
      </div>
    </Link>
  );
}
