'use client';

import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface RoleProtectionProps {
  children: React.ReactNode;
  allowedRoles: ('STUDENT' | 'TEACHER' | 'ADMIN')[];
}

export default function RoleProtection({ children, allowedRoles }: RoleProtectionProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/login');
      } 
      else if (!allowedRoles.includes(user.role)) {

        // 🔥 FIXED — AUTO REDIRECT BY ROLE
        switch (user.role) {
          case 'STUDENT':
            router.push('/students');
            break;
          case 'TEACHER':
            router.push('/teachers');
            break;
          case 'ADMIN':
            router.push('/admin');
            break;
        }
      }
    }
  }, [user, loading, allowedRoles, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!user || !allowedRoles.includes(user.role)) {
    return null;
  }

  return <>{children}</>;
}
