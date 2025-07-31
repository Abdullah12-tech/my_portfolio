import React, { useState, useEffect, useRef } from 'react';

const Experience = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const experiences = [
    {
      company: "ATC Africa",
      role: "Senior Frontend Developer",
      period: "May 2025 - Present",
      delay: 0.1
    },
    {
      company: "Personal Project",
      role: "Founder",
      period: "June 2025 - Present",
      delay: 0.2
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto mb-10 md:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
            Experience
          </h2>
          <div className="w-16 md:w-24 h-1 bg-amber-500 mx-auto mb-6 md:mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line - hidden on small screens, visible on md and up */}
          <div className="hidden md:block absolute md:left-8 top-0 bottom-0 md:w-1 bg-gray-700"></div>

          {/* Experience items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={`experience-${index}`}
                className="flex items-start relative"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  transitionDelay: `${exp.delay}s`
                }}
              >
                {/* Timeline dot - hidden on small screens, visible on md and up */}
                <div className="hidden md:block absolute md:left-8 transform -translate-x-1/2 mt-2">
                  <div className="md:w-6 md:h-6 bg-gray-900 md:border-4 border-teal-500 rounded-full"></div>
                </div>

                {/* Content box - adjusted margins for small screens */}
                <div className="ml-0 md:ml-16 bg-gray-800 rounded-lg p-4 sm:p-5 md:p-6 w-full transition-all duration-300 hover:shadow-lg border border-gray-700 hover:border-teal-500 cursor-pointer group">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">{exp.company}</h3>
                  <div className="text-base sm:text-lg text-teal-500 mb-2 md:mb-4 group-hover:text-teal-400 transition-colors duration-300">{exp.role}</div>
                  <div className="text-sm md:text-base text-gray-400 leading-relaxed">{exp.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;