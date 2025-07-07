import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Experience = () => {
  const experiences = [
    {
      role: "Senior Frontend Developer",
      company: "ATC Africa",
      period: "2025 - Present",
      description: "Leading the frontend team to build responsive and accessible web applications.",
      highlights: [
        "Implemented micro-frontend architecture",
        "Improved performance by 40%",
        "Mentored junior developers"
      ]
    },
    {
      role: "Frontend Developer",
      company: "Nehonix Mindsync",
      period: "",
      description: "Developed and maintained multiple client-facing applications.",
      highlights: [
        "Built a design system from scratch",
        "Reduced bundle size by 30%",
        "Introduced automated testing"
      ]
    },
    {
      role: "Junior Web Developer",
      company: "StartUp Ventures",
      period: "2016 - 2018",
      description: "Built and maintained company website and internal tools.",
      highlights: [
        "Implemented CI/CD pipeline",
        "Redesigned company website",
        "Improved SEO rankings"
      ]
    }
  ];

  useEffect(() => {
    // Create a context for all animations
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.timeline-item');
      
      items.forEach((item, i) => {
        const direction = i % 2 === 0 ? 50 : -50;
        
        gsap.from(item.querySelector('.timeline-content'), {
          opacity: 0,
          x: direction,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false // Set to true for debugging
          }
        });

        gsap.from(item.querySelector('.timeline-dot'), {
          scale: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      });
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section id="experience" className="py-20 px-8 md:px-16 lg:px-24 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">
          Work Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 w-1 h-full bg-slate-200 transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`timeline-item mb-16 w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className="relative w-full md:w-5/12">
                {/* Dot with pulse animation */}
                <div className="timeline-dot absolute top-6 left-1/2 w-5 h-5 rounded-full bg-teal-500 transform -translate-x-1/2 z-10 shadow-md"></div>
                
                {/* Content card */}
                <div className="timeline-content bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{exp.role}</h3>
                  <div className="flex items-center text-slate-600 mb-3">
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span className="text-slate-500">{exp.period}</span>
                  </div>
                  <p className="text-slate-600 mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2.5">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-slate-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;