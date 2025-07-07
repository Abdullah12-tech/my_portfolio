import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProfilePhoto from "../assets/profile/myprofile.gif";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const professions = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Frontend Engineer",
    "Backend Developer",
    "Tech Solutions Expert"
  ];

  // ✅ Create shapes only once
  const [shapes] = useState(() =>
    Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      bg: i % 2 === 0 ? "bg-teal-500/20" : "bg-purple-500/20",
      size: Math.random() * 100 + 50,
      top: Math.random() * 100,
      left: Math.random() * 100,
    }))
  );

  // ⌨️ Typing effect
  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % professions.length;
      const fullText = professions[current];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  // 🚀 GSAP animations
  useGSAP(() => {
    gsap.to(".floating-shape", {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.from(textRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 1,
      ease: "back.out(1.7)",
    });

    const image = imageRef.current;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      gsap.to(image, {
        rotationY: x,
        rotationX: y,
        duration: 0.5,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        rotationY: 0,
        rotationX: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      });
    };

    image.addEventListener("mousemove", handleMouseMove);
    image.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      image.removeEventListener("mousemove", handleMouseMove);
      image.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-x-hidden min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-24">
        {/* Text Area */}
        <div className="z-10 md:w-1/2">
          <div ref={textRef}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-4">
              <span className="inline-block">Hey, I'm</span>
              <span className="text-teal-500 dark:text-teal-400 block mt-2">Sheriff Abdullahi</span>
            </h1>
          </div>

          {/* Typing Effect */}
          <h2 className="text-2xl font-semibold md:text-2xl text-slate-600 dark:text-slate-300 mt-6 mb-8">
            {displayText}<span className="animate-pulse">|</span>
          </h2>

          <div className="flex gap-4">
            <a href="https://github.com/Abdullah12-tech" target='_blank'><button className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-teal-500/20">
              View My Work
            </button></a>
            <a href="" target='_blank'><button className="px-6 py-3 border border-slate-400 hover:border-teal-500 text-slate-700 dark:text-slate-300 rounded-full font-medium transition-all transform hover:scale-105">
              Download CV
            </button></a>
          </div>
        </div>

        {/* Image */}
        <div
          ref={imageRef}
          className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-transform duration-500 ease-out"
        >
          <div className="absolute inset-0 bg-teal-500/20 rounded-full opacity-30 blur-xl animate-pulse"></div>
          <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-teal-500 dark:border-teal-400">
            <img
              src={ProfilePhoto}
              alt="3D Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Floating Background Shapes */}
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`floating-shape absolute ${shape.bg} rounded-full`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            top: `${shape.top}%`,
            left: `${shape.left}%`,
            filter: "blur(40px)",
            zIndex: 0,
          }}
        />
      ))}
    </section>
  );
};

export default Hero;
