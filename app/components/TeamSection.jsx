// TeamSection.jsx
import React from 'react';
import { FaClock, FaChartLine, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';

/*
// Original Team Section (Commented out as requested)
const TeamSection = () => {
  return (
    <section id='about' className="font-['Cormorant_Garamond'] min-h-screen -mt-10 bg-white py-10 px-4 sm:px-6 min-w-full lg:px-8 flex flex-col items-center justify-center">
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
      <p className="text-xl text-gray-700 text-center max-w-2xl mb-12 font-['Georgia']">
        The passionate individual behind Attendo, dedicated to improving education
      </p>
      ...
    </section>
  );
};
*/

const NewProjectFeaturesSection = () => {
  const features = [
    {
      icon: <FaClock className="text-4xl text-indigo-500 mb-4" />,
      title: "Real-time Tracking",
      description: "Monitor attendance instantly. Say goodbye to manual roll calls and paperwork."
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-500 mb-4" />,
      title: "Analytics & Reports",
      description: "Generate comprehensive reports for students, classes, and overall institutional performance."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-indigo-500 mb-4" />,
      title: "Secure Data",
      description: "Built on robust architecture ensuring all student and faculty data remains private."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-blue-500 mb-4" />,
      title: "Accessible Anywhere",
      description: "Check attendance, submit assignments, and manage classes from any device."
    }
  ];

  return (
    <section id='benefits' className="font-['Cormorant_Garamond'] py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Why Choose{' '}
            <span
              className="inline-block"
              style={{
                backgroundImage: 'linear-gradient(to right, #4F46E5, #3B82F6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent', 
              }}
            >
              Attendo?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-['Georgia']">
            Empowering educational institutions with a seamless, digital attendance and assignment management platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="transform transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-sans">{feature.title}</h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProjectFeaturesSection;