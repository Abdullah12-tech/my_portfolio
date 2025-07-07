import { useRef, useState } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

import Trackify from "../assets/projects/trackify.png";
import ATCAfrica from "../assets/projects/atc_Africa.png";
import GuessingGame from "../assets/projects/guessing.png";
import CBT from "../assets/projects/cbt.png";
import Ludo from "../assets/projects/ludo.jpg";
import Recharge from "../assets/projects/recharge_card.png";
import Recipy from "../assets/projects/recipy.png";
import Upwork from "../assets/projects/upwork_clone.png";
import Mindsync from "../assets/projects/mindsync_ai.png";
import SignSignUp from "../assets/projects/signin_signup.png";
import StudentManagement from "../assets/projects/studentManagement.png";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const projectsRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "A meetup Website",
      category: "client",
      description: "Developed a professional and responsive website for ATC Africa, showcasing their telecom infrastructure services with clean UI and optimized performance",
      tags: ["Nextjs", "Tailwind", "Html/css"],
      image: ATCAfrica,
      livelink: "https://ibadan.atcafrica.com/",
      githubLink: "https://github.com/amazingtechcom/ibadantechmeet",
    },
    {
      id: 2,
      title: "Computer Based Test",
      category: "personal",
      description: "A simple computer-based test system where users can start a test, answer multiple-choice questions, complete the test, and instantly view their results. Ideal for basic exam simulations.",
      tags: ["Html/Css", "Javascript", "Bootstrap"],
      image: CBT,
      livelink: "https://abdullah12-tech.github.io/Computer-Based-Test/",
      githubLink: "https://github.com/Abdullah12-tech/Computer-Based-Test",
    },
    {
      id: 3,
      title: "Ludo Board",
      category: "personal",
      description: "A static frontend layout of the popular Ludo game created using only HTML and CSS. Demonstrates design creativity and visual layout skills without interactivity.",
      tags: ["Html", "Css"],
      image: Ludo,
      livelink: "https://abdullah12-tech.github.io/ludo_board/",
      githubLink: "https://github.com/Abdullah12-tech/ludo_board",
    },
    {
      id: 4,
      title: "Rechard Card Generator",
      category: "personal",
      description: "Generates virtual recharge card pins for testing/demo purposes. Includes features like random pin creation and a simple display format mimicking real card designs.",
      tags: ["Html/Css", "Bootstrap", "Javascript"],
      image: Recharge,
      livelink: "https://abdullah12-tech.github.io/Recharge-card-generator/",
      githubLink: "https://github.com/Abdullah12-tech/Recharge-card-generator",
    },
    {
      id: 5,
      title: "SignIn-SignUp System",
      category: "personal",
      description: "Frontend UI for user authentication. Includes separate sign-in and sign-up forms with field validations using JavaScript, designed for easy integration into larger apps.",
      tags: ["Html/Css", "Javascript"],
      image: SignSignUp,
      livelink: "https://abdullah12-tech.github.io/Signin-Signup-System",
      githubLink: "https://github.com/Abdullah12-tech/Signin-Signup-System",
    },
    {
      id: 6,
      title: "Upwork Clone",
      category: "personal",
      description: "A frontend clone of the Upwork website’s homepage crafted with semantic HTML and CSS. Highlights attention to detail and design replication skills.",
      tags: ["Html", "Css"],
      image: Upwork,
      livelink: "https://abdullah12-tech.github.io/Abdullahtheplug-website",
      githubLink: "https://github.com/Abdullah12-tech/Abdullahtheplug-website",
    },
    {
      id: 7,
      title: "Trackify - An Expense Tracker Website",
      category: "personal",
      description: "A full-featured web app for tracking income, expenses, and financial goals. Includes real-time updates, category-based analysis, monthly summaries, and Firebase integration for data storage.",
      tags: ["Html/Css","Javascript", "Tailwind", "Firebase"],
      image: Trackify,
      livelink: "https://trackify-drab.vercel.app/",
      githubLink: "https://github.com/Abdullah12-tech/Trackify",
    },
    {
      id: 8,
      title: "Guessing Game",
      category: "personal",
      description: "A basic but fun JavaScript-powered game that challenges users to guess a randomly generated number within a limited number of tries.",
      tags: ["Html/Css", "Javascript"],
      image: GuessingGame,
      livelink: "https://abdullah12-tech.github.io/guessing_game/",
      githubLink: "https://github.com/Abdullah12-tech/guessing_game",
    },
    {
      id: 9,
      title: "Recipy- recipy sharing",
      category: "client",
      description: "Built a user-friendly recipe platform that allows users to browse, share, and view cooking instructions. Designed for food enthusiasts with an emphasis on clean visuals and usability.",
      tags: ["Html/Css","Javascript", "Tailwind", "Firebase"],
      image: Recipy,
      livelink: "https://abdullah12-tech.github.io/Recipy",
      githubLink: "https://github.com/Abdullah12-tech/Recipy",
    },
    {
      id: 10,
      title: "Student Management System",
      category: "personal",
      description: "A lightweight application for adding, deleting, and searching student records. Focused on core CRUD functionality with a clean and user-friendly interface.",
      tags: ["Html/Css","Bootstrap", "Javascript"],
      image: StudentManagement,
      livelink: "https://abdullah12-tech.github.io/student_management/",
      githubLink: "https://github.com/Abdullah12-tech/student_management",
    },
  ];

  useGSAP(() => {
    gsap.utils.toArray(".project-card").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card.querySelector(".project-image"), {
          scale: 1.1,
          rotate: 1,
          duration: 0.4,
          ease: "power3.out",
        });
        gsap.to(card.querySelector(".project-overlay"), {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card.querySelector(".project-image"), {
          scale: 1,
          rotate: 0,
          duration: 0.4,
          ease: "power3.out",
        });
        gsap.to(card.querySelector(".project-overlay"), {
          y: 40,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        });
      });
    });
  }, [filter]);

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-teal-600 dark:text-teal-400 mb-16">
          Featured Projects
        </h1>

        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {["all", "personal", "client"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2.5 rounded-full capitalize font-semibold text-sm transition-all duration-300 border-2 ${
                filter === category
                  ? "bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-500/40"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600 hover:bg-teal-100 dark:hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card relative rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-slate-800 transition-transform duration-500 hover:scale-[1.03] group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image w-full h-56 object-cover transition-transform duration-500 ease-in-out"
              />
              <div className="project-overlay absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-900/90 to-slate-900/40 backdrop-blur-sm translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-sm text-slate-200 mb-3 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/20 text-xs text-white px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.livelink} target="_blank" rel="noopener noreferrer">
                    <button className="px-4 py-1.5 bg-teal-500 hover:bg-teal-600 text-white rounded-full text-sm font-semibold shadow-md">
                      Live
                    </button>
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <button className="px-4 py-1.5 bg-white text-slate-800 dark:bg-slate-700 dark:text-white rounded-full text-sm font-semibold shadow-md">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
