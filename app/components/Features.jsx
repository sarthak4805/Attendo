 
          import Image from 'next/image';

const Features = () => {
  return (
    // Note: The animate-float class is not standard Tailwind; you'd need to define it 
    // in your global CSS or tailwind.config.js for the floating effect to work.
    <section  id='features' className=" py-10 md:py-16 bg-white font-['Cormorant_Garamond']">

      
      {/* --- Main Title --- */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          One Platform ,
          <span className="text-[#1e40af]">Total Control</span>
        </h2>
      </div>

      {/* --- Feature Cards Grid --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-8 mb-20">
        
        {/* Smart Attendance Card */}
       <div className="bg-white p-0 rounded-lg shadow-lg text-center flex flex-col items-center border border-gray-100 overflow-hidden">

      {/* TOP IMAGE (half area) */}
      <div className="w-full h-48">
        <img 
          src="/images/Assignment.jpg"
          alt="Assignment" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* BOTTOM TEXT AREA */}
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Assignment Tracking
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Manage submission, track deadlines and provide feedback all in one
          place; never lose an assignment again.
        </p>
      </div>
    </div>

        {/* Assignment Tracking Card */}
        <div className="bg-white p-0 rounded-lg shadow-lg text-center flex flex-col items-center border border-gray-100 overflow-hidden">

      {/* TOP IMAGE (half area) */}
      <div className="w-full h-48">
        <img 
         src="/images/smartAttendence.jpg"
          alt="Assignment" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* BOTTOM TEXT AREA */}
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Smart Attendance
        </h3>
        <p className="text-gray-600 leading-relaxed">
        Make and view attandance instantily, generate automated reports and get real time insight into student presence
        </p>
      </div>
    </div>

        {/* Notification Card */}
        <div className="bg-white p-0 rounded-lg shadow-lg text-center flex flex-col items-center border border-gray-100 overflow-hidden">

      {/* TOP IMAGE (half area) */}
      <div className="w-full h-48">
        <img 
          src="/images/notification.jpg"
          alt="Assignment" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* BOTTOM TEXT AREA */}
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Notification
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Make and view attandance instantily, generate automated reports and get real time insight into student presence
        </p>
      </div>
    </div>
    </div>
      {/* --- Smart AI Lumo Title --- */}
      <div className="max-w-6xl mx-auto text-center px-4 lg:px-8 mb-0">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Smart AI Lumo
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Our Attendence Monitoring System make it easy for colleges to manage
          and check attendence. With an integrated AI chatbot
        </p>
      </div>

      {/* --- Robot and Questions Section --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 lg:px-8">
        
        <div className="text-left">
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8 leading-snug">
            Teachers and Students can simply ask questions like :
          </h3>
          <div className="space-y-4 pr-10">
            
            {/* Question 1 Button */}
            <button className="flex justify-between items-center w-full text-white py-4 px-6 rounded-l-lg rounded-r-lg shadow-md transition duration-200 text-lg"
                    style={{ 
                        background: 'linear-gradient(to right, #2563eb, #1e40af)' 
                    }}>
              What&apos;s my attendence today ?
              {/* Filled-in right arrow icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 ml-4" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M3 3.5v17l18-8.5-18-8.5zm2 3.868L17.518 12 5 16.632V7.368z"/>
              </svg>
            </button>
            
            {/* Question 2 Button */}
            <button className="flex justify-between items-center w-full text-white py-4 px-6 rounded-l-lg rounded-r-lg shadow-md transition duration-200 text-lg"
                    style={{ 
                        background: 'linear-gradient(to right, #2563eb, #1e40af)' 
                    }}>
              Who is absend today ?
              {/* Filled-in right arrow icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 ml-4" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M3 3.5v17l18-8.5-18-8.5zm2 3.868L17.518 12 5 16.632V7.368z"/>
              </svg>
            </button>
            
            {/* Question 3 Button */}
            <button className="flex justify-between items-center w-full text-white py-4 px-6 rounded-l-lg rounded-r-lg shadow-md transition duration-200 text-lg"
                    style={{ 
                        background: 'linear-gradient(to right, #2563eb, #1e40af)' 
                    }}>
              Show this month&apos;s attendence .
              {/* Filled-in right arrow icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 ml-4" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M3 3.5v17l18-8.5-18-8.5zm2 3.868L17.518 12 5 16.632V7.368z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* --- Robot Image (CORRECTED to use next/image) --- */}
        <div className="flex justify-center items-center mt-10 md:mt-0">
          <img
            src="/images/Robot.jpg" // Assuming your robot image is named robot.png in public/images
            alt="Smart AI Lumo Robot Chatbot"
            width={450} // Adjust based on the actual size you want
            height={450} // Adjust based on the actual size you want
            priority 
            className='animate-float'// Consider if this is above the fold or not
          />
        </div>
      </div>
    </section>
  );
};

export default Features;