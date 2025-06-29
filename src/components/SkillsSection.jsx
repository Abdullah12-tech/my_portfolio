import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Skills = () => {
  const skills = [
    { name: 'React', level: 95, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
    { name: 'Node.js', level: 88, color: 'bg-green-500' },
    { name: 'Tailwind CSS', level: 93, color: 'bg-teal-400' },
    { name: 'GSAP', level: 80, color: 'bg-green-600' },
    { name: 'UI/UX Design', level: 85, color: 'bg-purple-500' },
    { name: 'GraphQL', level: 75, color: 'bg-pink-600' },
  ];

  const gridRef = useRef(null);
  const skillBarsRef = useRef([]);

  useEffect(() => {
    // Wait for the component to be fully mounted
    if (!gridRef.current) return;

    // Create a GSAP context for all animations
    const ctx = gsap.context(() => {
      // Animation for the entire grid container
      gsap.from(gridRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      // Animation for each skill card
      const cards = gsap.utils.toArray('.skill-card');
      cards.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          delay: index * 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        });

        // Hover animation
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -5,
            scale: 1.03,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
            duration: 0.3
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: 'none',
            duration: 0.3
          });
        });
      });

      // Animation for skill bars
      const bars = gsap.utils.toArray('.skill-bar-progress');
      bars.forEach(bar => {
        gsap.from(bar, {
          scaleX: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        });
      });
    }, gridRef); // Scope the selector to the gridRef

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section id="skills" className="py-20 px-8 md:px-16 lg:px-24 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 text-center">
          My Skills
        </h2>
        <p className="text-slate-600 mb-12 text-center max-w-2xl mx-auto">
          I've worked with a variety of technologies in the web development world.
        </p>
        
        <div 
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="skill-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-default will-change-transform"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-slate-800">{skill.name}</h3>
                <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div 
                  ref={el => skillBarsRef.current[index] = el}
                  className={`skill-bar-progress h-2 rounded-full ${skill.color} transform origin-left`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-right mt-1 text-sm text-slate-500">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;