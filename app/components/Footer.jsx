import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-slate-800 py-24 px-6 sm:px-8 lg:px-12 font-['Inter',sans-serif] border-t border-slate-200">
      
      {/* Our Foundation Section */}
      <section id='contact' className="max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Foundation
            </span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
            We are committed to building a platform that is simple, reliable, and fosters collaboration.
          </p>
        </div>

        {/* Mission, Vision, Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          
          {/* Mission Card */}
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col">
            <div className="w-full h-48 relative overflow-hidden bg-indigo-50 flex items-center justify-center">
               <img 
                 src="/images/mission.jpg"
                 alt="Our Mission" 
                 className="w-full h-full object-cover opacity-90"
               />
               <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply"></div>
            </div>
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-bold mb-4 text-slate-800 tracking-tight">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                To streamline attendance and assignment tracking, freeing up valuable time for educators and students.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col">
            <div className="w-full h-48 relative overflow-hidden bg-purple-50 flex items-center justify-center">
               <img 
                 src="/images/vision.jpg"
                 alt="Our Vision" 
                 className="w-full h-full object-cover opacity-90"
               />
               <div className="absolute inset-0 bg-purple-900/10 mix-blend-multiply"></div>
            </div>
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-bold mb-4 text-slate-800 tracking-tight">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                To foster a more connected and efficient learning environment through innovative technology.
              </p>
            </div>
          </div>

          {/* Values Card */}
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col">
            <div className="w-full h-48 relative overflow-hidden bg-blue-50 flex items-center justify-center">
               <img 
                 src="/images/values.jpg"
                 alt="Our Values" 
                 className="w-full h-full object-cover opacity-90"
               />
               <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            </div>
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-bold mb-4 text-slate-800 tracking-tight">Our Values</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Simplicity, Reliability and Collaboration are the core principles that guide every decision we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="max-w-5xl mx-auto mt-24 relative z-10">
        
        {/* Premium Contact Card */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-b from-slate-200 to-slate-100 shadow-2xl shadow-slate-200/50">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-[80px] pointer-events-none z-0"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full blur-[80px] pointer-events-none z-0"></div>
          
          <div className="bg-white rounded-[22px] p-10 md:p-16 relative z-10 overflow-hidden">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-slate-900">
                Let's stay connected
              </h2>
              <p className="text-lg text-slate-500 max-w-xl mx-auto font-light">
                Have questions or need support? We're here to help you revolutionize your educational workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Direct Contact */}
              <div className="flex flex-col gap-4">
                <a href="mailto:sarthakshirke331@gmail.com" className="group flex items-center p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mr-4 text-blue-600 group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 mb-1">Email Us</h4>
                    <p className="text-sm text-slate-600 group-hover:text-blue-600 transition-colors">sarthakshirke331@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+919152457198" className="group flex items-center p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mr-4 text-indigo-600 group-hover:scale-110 transition-transform">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 mb-1">Call Us</h4>
                    <p className="text-sm text-slate-600 group-hover:text-indigo-600 transition-colors">+91 91524 57198</p>
                  </div>
                </a>
              </div>

              {/* Social Connect */}
              <div className="flex items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay group-hover:opacity-100 opacity-50 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <h4 className="text-xl font-bold mb-6">Follow our journey</h4>
                  <div className="flex gap-4 justify-center">
                    <a href="https://wa.me/9152457198" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                      <FaWhatsapp className="text-xl" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(219,39,119,0.4)]">
                      <FaInstagram className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="mt-20 text-center text-slate-400 font-light text-sm max-w-7xl mx-auto border-t border-slate-200/60 pt-8">
        <p>&copy; {new Date().getFullYear()} Attendo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;