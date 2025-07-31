import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaJs,
} from 'react-icons/fa';
import {
    SiTypescript, SiExpress, SiMongodb, SiFirebase, SiTailwindcss,
    SiNextdotjs, SiRedux, SiSocketdotio, SiJest, SiVite,
} from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const skillCategories = [
    {
        name: 'Frontend',
        skills: [
            { name: 'React.js', icon: <FaReact size={28} />, color: '#61DAFB' },
            { name: 'JavaScript', icon: <FaJs size={28} />, color: '#F7DF1E' },
            { name: 'Next.js', icon: <SiNextdotjs size={28} />, color: '#1572B6' },
            { name: 'Redux', icon: <SiRedux size={28} />, color: '#764ABC' },
        ],
    },
    {
        name: 'UI & Styling',
        skills: [
            { name: 'HTML5', icon: <FaHtml5 size={28} />, color: '#E34F26' },
            { name: 'CSS3', icon: <FaCss3Alt size={28} />, color: '#1572B6' },
            { name: 'TailwindCSS', icon: <SiTailwindcss size={28} />, color: '#38B2AC' },
            { name: 'Bootstrap', icon: <FaBootstrap size={28} />, color: '#7952B3' },
        ],
    },
    {
        name: 'Backend & Infrastructure',
        skills: [
            { name: 'Node.js', icon: <FaNodeJs size={28} />, color: '#339933' },
            { name: 'Express', icon: <SiExpress size={28} />, color: '#C21325' },
            { name: 'MongoDB', icon: <SiMongodb size={28} />, color: '#47A248' },
            { name: 'Firebase', icon: <SiFirebase size={28} />, color: '#FFCA28' },
        ],
    },
    {
        name: 'Tools & Utilities',
        skills: [
            { name: 'Context API', icon: <AiOutlineApi size={28} />, color: '#61DAFB' },
            { name: 'Vite', icon: <SiVite size={28} />, color: '#aa9209ff' },
        ],
    },
];

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.utils.toArray('.skill-category').forEach((cat, i) => {
                gsap.from(cat, {
                    opacity: 0,
                    y: 30,
                    duration: 0.6,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: cat,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                    },
                });
            });

            gsap.utils.toArray('.skill-card').forEach((card, i) => {
                gsap.from(card, {
                    opacity: 0,
                    y: 20,
                    delay: i * 0.05,
                    duration: 0.5,
                    ease: 'back.out(1.4)',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 95%',
                        toggleActions: 'play none none none',
                    },
                });

                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        y: -4,
                        scale: 1.04,
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                        duration: 0.3,
                    });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        y: 0,
                        scale: 1,
                        boxShadow: 'none',
                        duration: 0.3,
                    });
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="py-20 px-6 md:px-10 lg:px-20 bg-gray-200"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-800 text-center mb-6">
                    My Skills
                </h2>
                <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                    I’ve built real-world apps using the tools below, and I’m always learning.
                </p>

                <div className="space-y-14">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="text-xl font-semibold text-slate-700 mb-6 flex items-center">
                                <span className="w-6 h-1 bg-slate-700 mr-3 rounded-full"></span>
                                {category.name}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {category.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="skill-card group bg-white p-4 rounded-lg border border-slate-200 hover:border-teal-500 shadow-sm hover:shadow-md text-center transition-all cursor-default flex flex-col items-center justify-center"
                                    >
                                        <div
                                            className="mb-3 text-3xl transition-transform duration-300 group-hover:scale-110"
                                            style={{ color: skill.color }}
                                        >
                                            {skill.icon}
                                        </div>
                                        <h4 className="text-sm font-medium text-slate-700">{skill.name}</h4>
                                    </div>


                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
