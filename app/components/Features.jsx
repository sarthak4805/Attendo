import Image from 'next/image';
import { FaBookOpen, FaUserCheck, FaBell, FaChevronRight } from 'react-icons/fa';

const Features = () => {
  return (
    <section id='features' className="py-24 bg-white font-['Inter',sans-serif] relative overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-50 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>

      {/* --- Main Title --- */}
      <div className="text-center mb-20 px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
          One Platform, <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Total Control</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
          Everything you need to manage your institution smartly and effortlessly.
        </p>
      </div>

      {/* --- Feature Cards Grid --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 lg:px-8 mb-32 relative z-10">
        
        {/* Assignment Tracking Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col items-center border border-slate-100 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group">
          <div className="w-full h-56 relative overflow-hidden bg-slate-100">
            <Image 
              src="/images/Assignment.jpg"
              alt="Assignment Tracking" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-4 left-6 bg-white/20 backdrop-blur-md p-3 rounded-xl border border-white/30 text-white">
              <FaBookOpen className="text-2xl" />
            </div>
          </div>
          <div className="p-8 text-left w-full">
            <h3 className="text-2xl font-bold mb-3 text-slate-800 tracking-tight">Assignment Tracking</h3>
            <p className="text-slate-600 leading-relaxed font-light">
              Manage submissions, track deadlines and provide feedback all in one place. Never lose an assignment again.
            </p>
          </div>
        </div>

        {/* Smart Attendance Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col items-center border border-slate-100 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group">
          <div className="w-full h-56 relative overflow-hidden bg-slate-100">
            <Image 
             src="/images/smartAttendence.jpg"
              alt="Smart Attendance" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-4 left-6 bg-white/20 backdrop-blur-md p-3 rounded-xl border border-white/30 text-white">
              <FaUserCheck className="text-2xl" />
            </div>
          </div>
          <div className="p-8 text-left w-full">
            <h3 className="text-2xl font-bold mb-3 text-slate-800 tracking-tight">Smart Attendance</h3>
            <p className="text-slate-600 leading-relaxed font-light">
              Mark and view attendance instantly, generate automated reports and get real-time insights into student presence.
            </p>
          </div>
        </div>

        {/* Notification Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col items-center border border-slate-100 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group">
          <div className="w-full h-56 relative overflow-hidden bg-slate-100">
            {/* Added a fallback generated premium picture to one of the cards to address 'add more pictures' request */}
            <Image 
              src="/images/smart_students.png"
              alt="Campus Notifications" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-4 left-6 bg-white/20 backdrop-blur-md p-3 rounded-xl border border-white/30 text-white">
              <FaBell className="text-2xl" />
            </div>
          </div>
          <div className="p-8 text-left w-full">
            <h3 className="text-2xl font-bold mb-3 text-slate-800 tracking-tight">Instant Alerts</h3>
            <p className="text-slate-600 leading-relaxed font-light">
              Broadcast critical information instantly to students and parents with reliable push and email notifications.
            </p>
          </div>
        </div>

      </div>

      {/* --- Smart AI Lumo Title --- */}
      <div className="max-w-4xl mx-auto text-center px-6 lg:px-8 mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Smart AI Lumo</span>
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed font-light">
          Our intelligent chatbot makes it incredibly easy for colleges to manage and check attendance via natural conversation.
        </p>
      </div>

      {/* --- Robot and Questions Section --- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6 lg:px-8 relative z-10 bg-slate-50 py-16 rounded-3xl border border-slate-200/60 shadow-inner">
        
        <div className="text-left order-2 lg:order-1">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 leading-snug tracking-tight">
            Just ask Lumo a question:
          </h3>
          <div className="space-y-4">
            
            {/* Question 1 Button */}
            <button className="group flex justify-between items-center w-full bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-700 hover:text-indigo-700 py-5 px-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-lg font-medium text-left">
              <span>"What's my attendance today?"</span>
              <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-indigo-100 flex items-center justify-center transition-colors">
                <FaChevronRight className="text-slate-400 group-hover:text-indigo-600 text-sm" />
              </div>
            </button>
            
            {/* Question 2 Button */}
            <button className="group flex justify-between items-center w-full bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-700 hover:text-indigo-700 py-5 px-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-lg font-medium text-left">
              <span>"Who is absent from 10A today?"</span>
              <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-indigo-100 flex items-center justify-center transition-colors">
                <FaChevronRight className="text-slate-400 group-hover:text-indigo-600 text-sm" />
              </div>
            </button>
            
            {/* Question 3 Button */}
            <button className="group flex justify-between items-center w-full bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-700 hover:text-indigo-700 py-5 px-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-lg font-medium text-left">
              <span>"Show me this month's attendance report."</span>
              <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-indigo-100 flex items-center justify-center transition-colors">
                <FaChevronRight className="text-slate-400 group-hover:text-indigo-600 text-sm" />
              </div>
            </button>
          </div>
        </div>

        {/* --- Robot Image --- */}
        <div className="flex justify-center items-center order-1 lg:order-2 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full transform scale-75"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-white/50 bg-white p-2 animate-[float-slow_6s_ease-in-out_infinite]">
            <Image
              src="/images/Robot.jpg"
              alt="Smart AI Lumo Robot Chatbot"
              width={500}
              height={500}
              priority 
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;