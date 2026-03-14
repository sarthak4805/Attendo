"use client";

import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(username, password);
      // ✅ redirect handled inside AuthContext
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white font-['Inter',sans-serif]">
      {/* Left Canvas - Branding & Image */}
      <div className="hidden lg:flex w-1/2 relative bg-slate-900 overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ai_dashboard.png"
            alt="Dashboard Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          {/* Decorative glowing orbs */}
          <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 w-full max-w-lg">
          <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-16 gap-2">
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              A
            </div>
            <span className="text-4xl font-semibold tracking-tight text-white">
              Attendo
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
            Manage your classroom <br /> with intelligent tracking.
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed font-light">
            Join thousands of educators and students using Attendo to streamline attendance, assignments, and campus communication.
          </p>
          
          <div className="mt-16 flex items-center gap-4 text-sm text-slate-500">
            <div className="relative w-32 h-12">
              <Image 
                src="/images/teacher_avatars.png" 
                alt="Trusted Teachers"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-slate-400">Trusted by 10,000+ top educators</p>
          </div>
        </div>
      </div>

      {/* Right Canvas - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-16 lg:p-24 relative overflow-hidden bg-slate-50">
        {/* Mobile decorative blobs */}
        <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-100 rounded-full blur-[100px] lg:hidden"></div>
        
        <div className="w-full max-w-md relative z-10 bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
          
          {/* Mobile Back to Home */}
          <Link href="/" className="lg:hidden inline-flex items-center text-slate-400 hover:text-indigo-600 transition-colors mb-8 gap-2 text-sm">
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Welcome back
            </h2>
            <p className="text-slate-500 font-light">
              Please enter your details to sign in.
            </p>
          </div>

          {error && (
            <div className="mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-r-md text-sm font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-slate-700">Password</label>
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3.5 rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.98]"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm text-slate-500">
            Don't have an account? <span className="text-indigo-600 font-medium cursor-pointer hover:underline">Contact your admin</span>
          </div>
        </div>
      </div>
    </div>
  );
}
