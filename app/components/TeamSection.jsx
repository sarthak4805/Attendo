// TeamSection.jsx
import React from 'react';
// Note: Assuming you have access to these specific image paths/URLs
// and that 'sarthakImg.jpeg' represents the central human figure.

const TeamSection = () => {
  return (
    
  <section id='about' className="font-['Cormorant_Garamond'] min-h-screen -mt-10 bg-white py-10 px-4 sm:px-6 min-w-full lg:px-8 flex flex-col items-center justify-center">

      
      {/* Headline */}
      <h2 className="text-5xl font-['Cormorant_Garamond'] font-extrabold text-center mb-4 leading-tight">
        Meet Our{' '}
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
          Team
        </span>
      </h2>

      {/* Sub-headline / Description */}
      <p className="text-xl text-gray-700 text-center max-w-2xl mb-12 font-['Georgia']">
        The passionate individual behind Attendo, dedicated to improving education
      </p>

      {/* Team Images Row Container: 
        1. Enforce single line (no flex-wrap).
        2. Use items-end to align all primary elements to the bottom edge.
        3. Use a large max-width to ensure they fit horizontally.
      */}
      <div className="flex items-end justify-center gap-4 md:gap-8 max-w-7xl mx-auto">
        
        {/* 1. Leftmost Kitten Image (Tallest in its group, aligned with the bottom of the main image) */}
        <div className="relative w-40 h-64 mb-3 md:w-52 md:h-80 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <img
            src="/images/sarthakImg.jpeg" 
            alt="Team Member Pet 1"
            className="w-full h-full object-cover" 
          />
          
  {/* Bottom Strip */}
 
          
  {/* Bottom Strip */}
  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white py-2 px-3 text-center">
    <p className="font-semibold text-sm">Rajiv Nakhwa</p>
    <p className="text-xs opacity-80">Member</p>
  </div>
        </div>

        {/* 2. Main Team Member Image (The largest central image) */}
         <div className="relative w-40 h-64 mb-3 md:w-52 md:h-80 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src="/images/sarthakImg.jpeg" 
              alt="Team Member Pet 2"
              className="w-full h-full object-cover" 
            />
            
  {/* Bottom Strip */}
  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white py-2 px-3 text-center">
    <p className="font-semibold text-sm">Sarthak Shirke</p>
    <p className="text-xs opacity-80">Founder & Developer</p>
  </div>
          </div>

        {/* 3. Right Kitten Images GROUP (We use a container here to manage the two images) */}
        {/* This container aligns to the bottom of the row (due to items-end on the parent) */}
        <div className="flex items-end justify-center gap-4">
          
          {/* Top Right Kitten Image (This is the taller one in the pair) */}
          <div className="relative w-40 h-64 mb-3 md:w-52 md:h-80 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src="/images/sarthakImg.jpeg" 
              alt="Team Member Pet 2"
              className="w-full h-full object-cover" 
            />
            
  {/* Bottom Strip */}
  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white py-2 px-3 text-center">
    <p className="font-semibold text-sm">Prathemesh Dahiwade</p>
    <p className="text-xs opacity-80">Member</p>
  </div>
          </div>

          {/* Bottom Right Kitten Image (The smaller one) */}
          {/* We rely on the parent container's items-end to align its bottom edge with the image next to it. */}
           <div className="relative w-40 h-64 mb-3 md:w-52 md:h-80 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src="/images/sarthakImg.jpeg" 
              alt="Team Member Pet 2"
              className="w-full h-full object-cover" 
            />
            
  {/* Bottom Strip */}
  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white py-2 px-3 text-center">
    <p className="font-semibold text-sm">Prathemesh Dahiwade</p>
    <p className="text-xs opacity-80">Member</p>
  </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamSection;