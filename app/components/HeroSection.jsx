"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  const [hovered, setHovered] = useState(null);
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(false);
            setTimeout(() => setIsVisible(true), 50);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  const goToLogin = () => router.push('/login');

  return (
    <div className="min-h-screen flex flex-col font-['Inter',sans-serif] bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float-in {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .gradient-text {
          background: linear-gradient(90deg, #60a5fa, #818cf8, #a78bfa, #60a5fa);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 4s ease infinite;
          font-weight: 800;
          display: inline-block;
        }
        .headline-wrapper.animate { animation: float-in 1s ease-out forwards; }
        .glow-effect {
          text-shadow: 0 0 20px rgba(96, 165, 250, 0.4), 0 0 40px rgba(129, 140, 248, 0.2);
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        @keyframes fade-slide-in {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .fade-text { opacity: 0; display: inline-block; font-weight: 700; }
        .fade-text.animate { animation: fade-slide-in 0.8s ease-out forwards; }
        .fade-text.animate:nth-child(1) { animation-delay: 0.1s; }
        .fade-text.animate:nth-child(2) { animation-delay: 0.2s; }
        .fade-text.animate:nth-child(3) { animation-delay: 0.3s; }
        .fade-text.animate:nth-child(4) { animation-delay: 0.4s; }
      `}</style>

      {/* --- Navigation Bar --- */}
      <header className="flex bg-slate-900/80 backdrop-blur-md justify-between items-center p-6 lg:px-20 text-lg fixed top-0 left-0 w-full z-50 border-b border-white/5">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-indigo-500/50 transition-all">
            A
          </div>
          <span className="text-3xl font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors">
            Attendo
          </span>
        </div>

        <nav className="hidden sm:flex space-x-8 text-slate-300 font-medium">
          <button onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">Features</button>
          <button onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">Benefits</button>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">Contact</button>
        </nav>

        <button onClick={goToLogin} className="bg-white/10 text-white font-medium py-2.5 px-6 rounded-lg hover:bg-white/20 transition-all border border-white/20 backdrop-blur hover:scale-105 active:scale-95 shadow-lg">
          Sign In
        </button>
      </header>

      {/* --- Main Content --- */}
      <main className="flex flex-col items-center justify-center flex-grow px-8 lg:px-24 py-32 z-10 max-w-5xl mx-auto w-full text-center">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm mb-8 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Next-Gen Attendance AI
        </div>

        <h1 
          ref={titleRef}
          className={`text-5xl md:text-7xl font-extrabold mb-6 leading-[1.15] tracking-tight text-slate-100 ${isVisible ? 'headline-wrapper animate' : 'opacity-0'}`}
        >
          <span className={`fade-text mx-1 ${isVisible ? 'animate' : ''}`}>Streamline</span>
          <span className={`fade-text mx-1 ${isVisible ? 'animate' : ''}`}>Your</span>
          <span className={`fade-text mx-1 ${isVisible ? 'animate' : ''}`}>Class</span>
          <br />
          <span className={`fade-text mx-1 ${isVisible ? 'animate' : ''}`}>With</span>
          <span className={`gradient-text glow-effect mx-2 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-500`}>
            AI Attendo
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          The all-in-one solution for modern colleges. Effortlessly manage attendance, track assignments, and foster a more engaged learning environment with intelligent analytics.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={goToLogin}
            className="py-4 px-8 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 hover:shadow-indigo-600/50 hover:scale-105 transition-all duration-300"
          >
            Start as a Teacher
          </button>
          <button
            onClick={goToLogin}
            className="py-4 px-8 text-lg font-semibold rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white transition-all duration-300 shadow-lg"
          >
            Login as a Student
          </button>
        </div>
        
        <div className="mt-16 flex flex-col items-center gap-4 text-sm text-slate-500">
          <div className="relative w-32 h-12">
            <Image 
              src="/images/teacher_avatars.png" 
              alt="Trusted Teachers"
              fill
              className="object-contain"
            />
          </div>
          <p>Trusted by <strong className="text-slate-300 font-semibold">10,000+</strong> educators</p>
        </div>
      </main>
    </div>
  );
}