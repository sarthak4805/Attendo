"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  const [hovered, setHovered] = useState(null);
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 🔥 Scroll animation logic - triggers animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(false); // Reset first
            setTimeout(() => setIsVisible(true), 50); // Then trigger
          } else {
            setIsVisible(false); // Hide when out of view
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
    <div className="min-h-screen flex flex-col font-['Cormorant_Garamond']">
      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float-in {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .gradient-text {
          background: linear-gradient(
            90deg,
            #4F46E5,
            #3B82F6,
            #8B5CF6,
            #4F46E5
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 4s ease infinite;
          font-weight: 800;
          display: inline-block;
        }

        .headline-wrapper {
          animation: float-in 1s ease-out;
        }

        .headline-wrapper.animate {
          animation: float-in 1s ease-out;
        }

        .word-spacing {
          display: inline-block;
          margin: 0 0.1em;
        }

        .glow-effect {
          text-shadow: 0 0 20px rgba(79, 70, 229, 0.3),
                       0 0 40px rgba(59, 130, 246, 0.2);
        }

        @keyframes fade-slide-in {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .fade-text {
          color: #1e293b;
          display: inline-block;
          font-weight: 700;
        }

        .fade-text.animate {
          animation: fade-slide-in 0.8s ease-out forwards;
        }

        .fade-text.animate:nth-child(1) { animation-delay: 0.1s; }
        .fade-text.animate:nth-child(2) { animation-delay: 0.2s; }
        .fade-text.animate:nth-child(3) { animation-delay: 0.3s; }
        .fade-text.animate:nth-child(4) { animation-delay: 0.4s; }
      `}</style>

      {/* --- Navigation Bar --- */}
      <header className="flex bg-[#F9FAFB] justify-between items-center p-6 lg:px-20 text-lg fixed top-0 left-0 w-full z-50">
        <div className="text-4xl font-semibold text-[#1e3a8a] cursor-pointer">
          Attendo
        </div>

        <nav className="hidden sm:flex space-x-8 text-gray-700">
          <button
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            className="text-2xl hover:text-[#1e3a8a] transition"
          >
            Features
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-2xl hover:text-[#1e3a8a] transition"
          >
            Contact
          </button>
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="text-2xl hover:text-[#1e3a8a] transition"
          >
            About Us
          </button>
        </nav>

        <button className="bg-[#1e40af] text-white py-2 px-6 rounded-md hover:bg-[#1d4ed8] transition shadow-md text-base">
          Get Started
        </button>
      </header>

      {/* --- Main Content --- */}
      <main className="flex flex-col lg:flex-row items-center justify-between flex-grow px-14 py-20">

        {/* LEFT SIDE TEXT */}
        <div className="lg:w-1/2 text-left pl-6">

          {/* 🔥 Enhanced Animated Title */}
          <h2 
            ref={titleRef}
            className={`text-5xl font-['Cormorant_Garamond'] font-extrabold text-center mb-4 leading-tight ${isVisible ? 'headline-wrapper animate' : ''}`}
          >
            <span className={`fade-text word-spacing ${isVisible ? 'animate' : ''}`} style={{ opacity: isVisible ? 1 : 0 }}>Streamline</span>
            <span className={`fade-text word-spacing ${isVisible ? 'animate' : ''}`} style={{ opacity: isVisible ? 1 : 0 }}>Your</span>
            <span className={`fade-text word-spacing ${isVisible ? 'animate' : ''}`} style={{ opacity: isVisible ? 1 : 0 }}>Class</span>
            <span className={`fade-text word-spacing ${isVisible ? 'animate' : ''}`} style={{ opacity: isVisible ? 1 : 0 }}>With</span>
            {' '}
            <span className="gradient-text glow-effect" style={{ fontSize: '3.5rem', opacity: isVisible ? 1 : 0, transition: 'opacity 0.8s ease-out 0.5s' }}>
              AI Attendo
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl">
            All in one solution for modern colleges. Effortlessly manage
            attendance, track assignments, and foster a more engaged learning
            environment.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">

            {/* Teacher Button */}
            <div className="flex gap-6">
      {/* Teacher Button */}
      <button
        onClick={goToLogin}
        onMouseEnter={() => setHovered('teacher')}
        onMouseLeave={() => setHovered(null)}
        className={`
          py-3 px-10 text-lg rounded-lg shadow-xl transition duration-700
          ${
            hovered === 'teacher'
              ? 'bg-[#1e40af] text-white'
              : hovered === 'student'
              ? 'bg-gray-100 text-[#1e40af] border border-gray-200'
              : 'bg-[#1e40af] text-white'
          }
        `}
      >
        Start as a Teacher
      </button>

      {/* Student Button */}
      <button
        onClick={goToLogin}
        onMouseEnter={() => setHovered('student')}
        onMouseLeave={() => setHovered(null)}
        className={`
          py-3 px-10 text-lg rounded-lg border transition duration-200
          ${
            hovered === 'student'
              ? 'bg-[#1e40af] text-white border-[#1e40af]'
              : hovered === 'teacher'
              ? 'bg-gray-100 text-[#1e40af] border-gray-200'
              : 'bg-gray-100 text-[#1e40af] border-gray-200'
          }
        `}
      >
        Login as a Student
      </button>
    </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
          <img
            src="/images/heroImg.png"
            alt="Hero"
            className="h-[520px] w-auto animate-float"
          />
        </div>
      </main>
    </div>
  );
}