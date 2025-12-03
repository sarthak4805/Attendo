import React from 'react';
// 1. IMPORT YOUR IMAGES HERE (Replace these paths with your actual logo/image paths)

import { FaEnvelope, FaPhone, FaWhatsapp, FaFacebookF, FaLinkedin, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-white mt-[-70px] text-gray-800 py-16 px-4 sm:px-6 lg:px-8 font-['Cormorant_Garamond']">
      
      {/* Our Foundation Section */}
      <section id='contact' className=" max-w-7xl mx-auto mb-20">
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-center mb-4 leading-tight">
          Our{' '}
          <span
            className="inline-block"
            style={{
              backgroundImage: 'linear-gradient(to right, #4F46E5, #3B82F6)', // Blue gradient
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent', 
            }}
          >
            Foundation
          </span>
        </h2>

        {/* Sub-headline */}
        <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto mb-12">
          We are committed to building a platform that is simple, reliable and forster collaboration
        </p>

        {/* Mission, Vision, Values Cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mt-12">
          
          {/* Mission Card */}
          <div className="bg-white p-0 rounded-lg shadow-lg text-center flex flex-col items-center border border-gray-100 overflow-hidden">

      {/* TOP IMAGE (half area) */}
      <div className="w-full h-48">
        <img 
          src="/images/mission.jpg"
          alt="Assignment" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* BOTTOM TEXT AREA */}
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
         Our Mission
        </h3>
        <p className="text-gray-600 leading-relaxed">
         To streamline attendence and assignment tracking , freeing up valuable time for educators and students
        </p>
      </div>
    </div>


          {/* Vision Card */}
           <div className="bg-white p-0 rounded-lg shadow-lg text-center flex flex-col items-center border border-gray-100 overflow-hidden">

      {/* TOP IMAGE (half area) */}
      <div className="w-full h-48">
        <img 
          src="/images/vision.jpg"
          alt="Assignment" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* BOTTOM TEXT AREA */}
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Our Vision
        </h3>
        <p className="text-gray-600 leading-relaxed">
        To foster a more connected and efficient 
learning enviroment through innovative technology
        </p>
      </div>
    </div>

          {/* Values Card */}
        <div className="bg-white p-0 rounded-lg shadow-lg text-center flex flex-col items-center border border-gray-100 overflow-hidden">

      {/* TOP IMAGE (half area) */}
      <div className="w-full h-48">
        <img 
          src="/images/values.jpg"
          alt="Assignment" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* BOTTOM TEXT AREA */}
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Our Values
        </h3>
        <p className="text-gray-600 leading-relaxed">
       Simplesity, Reliability and Coolabration
are the core principles that guide every dicision we made.
        </p>
      </div>
    </div>

        </div>
      </section>

      {/* Get in Touch Section (Remains unchanged) */}
      <section className="max-w-7xl mt-[-30] mx-auto pt-16">
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-center mb-4 leading-tight">
          Get in{' '}
          <span
            className="inline-block"
            style={{
              backgroundImage: 'linear-gradient(to right, #4F46E5, #3B82F6)', // Blue gradient
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent', // Fallback
            }}
          >
            Touch
          </span>
        </h2>

        {/* Sub-headline */}
        <p className="text-xl text-gray-700 text-center mx-auto mb-12">
          We are here to help
        </p>

        {/* Contact Cards */}
    {/* Contact Cards */}
<div className="flex flex-col md:flex-row justify-center items-start gap-20 mt-12">

  {/* Ways to reach us Card */}
  <div className="bg-white p-8 rounded-lg shadow-md flex-1 min-w-[300px] max-w-[420px] h-full">
    <h3 className="text-2xl font-bold mb-6">Ways to reach us</h3>

    <div className="flex items-center mb-4">
      <FaEnvelope className="text-2xl text-blue-600 mr-4" />
      <p className="text-lg">sarthakshirkee@gmail.com</p>
    </div>

    <div className="flex items-center">
      <FaPhone className="text-2xl text-blue-600 mr-4" />
      <p className="text-lg">9152457198</p>
    </div>
  </div>

  {/* Connect us Card */}
  <div className="bg-white p-8 rounded-lg shadow-md flex-1 min-w-[300px] max-w-[420px] h-full">
    <h3 className="text-2xl font-bold mb-6">Connect us</h3>

    {/* ICONS ROW */}
    <div className="flex justify-start gap-8">

      {/* WhatsApp */}
      <a 
        href="https://wa.me/9152457198"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition duration-300"
      >
        <FaWhatsapp className="text-4xl" />
      </a>

      {/* LinkedIn */}
      <a 
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition duration-300"
      >
       <FaLinkedin className="text-4xl" />
      </a>

      {/* Instagram */}
      <a 
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition duration-300"
      >
       <FaInstagram className="text-4xl" />
      </a>

    </div>
  </div>
</div>

      </section>
    </footer>
  );
};

export default Footer;