'use client';

import RoleProtection from '@/components/RoleProtection';
import { HiBell, HiCalendar, HiInformationCircle, HiExclamationCircle, HiCheckCircle } from 'react-icons/hi';

const notifications = [
  {
    id: 1,
    title: 'New Assignment Submission',
    message: 'John Doe submitted "Math Quiz 1" for 2nd Year Section A.',
    time: '2 hours ago',
    type: 'assignment',
    status: 'unread',
  },
  {
    id: 2,
    title: 'Low Attendance Alert',
    message: 'Average attendance for 3rd Year Section B has dropped below 75%.',
    time: '5 hours ago',
    type: 'alert',
    status: 'unread',
  },
  {
    id: 3,
    title: 'Department Meeting',
    message: 'Scheduled for tomorrow at 10:00 AM in Conference Room B.',
    time: '1 day ago',
    type: 'event',
    status: 'read',
  },
  {
    id: 4,
    title: 'System Update',
    message: 'The Attendo portal will be down for maintenance on Sunday at 2 AM.',
    time: '2 days ago',
    type: 'info',
    status: 'read',
  },
];

export default function NotificationsPage() {
  return (
    <RoleProtection allowedRoles={['TEACHER', 'ADMIN']}>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Notifications</h1>
            <p className="text-slate-500 mt-1 font-medium">Stay updated with your latest academic alerts.</p>
          </div>
          <button className="text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
            Mark all as read
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="divide-y divide-slate-50">
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`p-6 flex items-start gap-4 hover:bg-slate-50 transition-colors cursor-pointer ${notification.status === 'unread' ? 'bg-indigo-50/30' : ''}`}
              >
                <div className={`p-3 rounded-2xl ${
                  notification.type === 'assignment' ? 'bg-indigo-100 text-indigo-600' :
                  notification.type === 'alert' ? 'bg-rose-100 text-rose-600' :
                  notification.type === 'event' ? 'bg-amber-100 text-amber-600' :
                  'bg-emerald-100 text-emerald-600'
                }`}>
                  {notification.type === 'assignment' && <HiBell className="text-xl" />}
                  {notification.type === 'alert' && <HiExclamationCircle className="text-xl" />}
                  {notification.type === 'event' && <HiCalendar className="text-xl" />}
                  {notification.type === 'info' && <HiInformationCircle className="text-xl" />}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className={`font-bold ${notification.status === 'unread' ? 'text-slate-900' : 'text-slate-600'}`}>
                      {notification.title}
                    </h3>
                    <span className="text-xs font-semibold text-slate-400">{notification.time}</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {notification.message}
                  </p>
                </div>

                {notification.status === 'unread' && (
                  <div className="w-2.0 h-2.5 bg-indigo-600 rounded-full mt-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </RoleProtection>
  );
}
