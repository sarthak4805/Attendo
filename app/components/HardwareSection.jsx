import Image from "next/image";
import { FaFingerprint, FaWifi, FaMobileAlt } from "react-icons/fa";

export default function HardwareSection() {
  return (
    <section className="py-24 bg-slate-50 font-['Inter',sans-serif] relative overflow-hidden border-t border-slate-200">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Image Showcase */}
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl rounded-full transform scale-90"></div>
          
          <div className="relative rounded-3xl p-3 bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 transform hover:-translate-y-2 transition-all duration-500">
            <div className="rounded-2xl overflow-hidden relative aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10"></div>
              <Image
                src="/images/hardware_attendance_system.png"
                alt="Students and Teachers using Hardware Attendance System"
                fill
                className="object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/50 flex items-center gap-3 animate-bounce">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <FaFingerprint />
                </div>
                <span className="font-semibold text-slate-800 text-sm">Attendance Captured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-1/2 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-medium text-sm mb-6 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            Seamless Hardware Integration
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
            Real-Time Tracking in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Physical Classroom</span>
          </h2>
          
          <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
            Our powerful hardware attendance devices bridge the gap between physical classrooms and digital records. Students simply tap their ID cards or scan fingerprints at the door, instantly updating the teacher's dashboard.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-xl flex-shrink-0">
                <FaFingerprint />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-1">Instant Biometric Scan</h4>
                <p className="text-slate-500 font-light text-sm">Eliminate proxy attendance completely with ultra-fast, secure biometric verification.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 text-xl flex-shrink-0">
                <FaWifi />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-1">Wireless Cloud Sync</h4>
                <p className="text-slate-500 font-light text-sm">Hardware sensors instantly sync with the Attendo cloud over Wi-Fi, updating records in real-time.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-100 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 text-xl flex-shrink-0">
                <FaMobileAlt />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-1">Teacher Dashboard Alert</h4>
                <p className="text-slate-500 font-light text-sm">Teachers see live updates on their app as students walk through the classroom doors.</p>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
