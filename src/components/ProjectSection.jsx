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
      category: "personal",
      description: "Developed a professional and responsive website for ATC Africa, showcasing their telecom infrastructure services with clean UI and optimized performance",
      tags: ["Nextjs", "Tailwind", "Html/css"],
      image: ATCAfrica,
      livelink: "",
      githubLink: "",
    },
    {
      id: 2,
      title: "Computer Based Test",
      category: "personal",
      description: "A simple computer-based test system where users can start a test, answer multiple-choice questions, complete the test, and instantly view their results. Ideal for basic exam simulations.",
      tags: ["Html/Css", "Javascript", "Bootstrap"],
      image: CBT,
      livelink: "",
      githubLink: "",
    },
    {
      id: 3,
      title: "Ludo Board",
      category: "personal",
      description: "A static frontend layout of the popular Ludo game created using only HTML and CSS. Demonstrates design creativity and visual layout skills without interactivity.",
      tags: ["Html", "Css"],
      image: Ludo,
      livelink: "",
      githubLink: "",
    },
    {
      id: 4,
      title: "Document Generator AI",
      category: "client",
      description: "Designed and implemented a sleek frontend for Mindsync_Ai to present their AI-based solutions. Focused on clear branding, structured content, and modern design aesthetics",
      tags: ["React","Vite", "TypeScript"],
      image: Mindsync,
      livelink: "",
      githubLink: "",
    },
    {
      id: 5,
      title: "Rechard Card Generator",
      category: "personal",
      description: "Generates virtual recharge card pins for testing/demo purposes. Includes features like random pin creation and a simple display format mimicking real card designs.",
      tags: ["Html/Css", "Bootstrap", "Javascript"],
      image: Recharge,
      livelink: "",
      githubLink: "",
    },
    {
      id: 6,
      title: "SignIn-SignUp System",
      category: "client",
      description: "Frontend UI for user authentication. Includes separate sign-in and sign-up forms with field validations using JavaScript, designed for easy integration into larger apps.",
      tags: ["Html/Css", "Javascript"],
      image: SignSignUp,
      livelink: "",
      githubLink: "",
    },
    {
      id: 7,
      title: "Upwork Clone",
      category: "client",
      description: "A frontend clone of the Upwork website’s homepage crafted with semantic HTML and CSS. Highlights attention to detail and design replication skills.",
      tags: ["Html", "Css"],
      image: Upwork,
      livelink: "",
      githubLink: "",
    },
    {
      id: 8,
      title: "Trackify - An Expense Tracker Website",
      category: "personal",
      description: "A full-featured web app for tracking income, expenses, and financial goals. Includes real-time updates, category-based analysis, monthly summaries, and Firebase integration for data storage.",
      tags: ["Html/Css","Javascript", "Tailwind", "Firebase"],
      image: Trackify,
      livelink: "",
      githubLink: "",
    },
    {
      id: 9,
      title: "Guessing Game",
      category: "client",
      description: "A basic but fun JavaScript-powered game that challenges users to guess a randomly generated number within a limited number of tries.",
      tags: ["Html/Css", "Javascript"],
      image: GuessingGame,
      livelink: "",
      githubLink: "",
    },
    {
      id: 10,
      title: "Recipy - A recipy sharing app",
      category: "client",
      description: "Built a user-friendly recipe platform that allows users to browse, share, and view cooking instructions. Designed for food enthusiasts with an emphasis on clean visuals and usability.",
      tags: ["Html/Css","Javascript", "Tailwind", "Firebase"],
      image: Recipy,
      livelink: "",
      githubLink: "",
    },
    {
      id: 11,
      title: "Student Management System",
      category: "client",
      description: "A lightweight application for adding, deleting, and searching student records. Focused on core CRUD functionality with a clean and user-friendly interface.",
      tags: ["Html/Css","Bootstrap", "Javascript"],
      image: StudentManagement,
      livelink: "",
      githubLink: "",
    },
    // More projects...
  ];

  useGSAP(() => {
    // Card hover effect
    gsap.utils.toArray(".project-card").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card.querySelector(".project-image"), {
          scale: 1.05,
          duration: 0.3,
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card.querySelector(".project-image"), {
          scale: 1,
          duration: 0.3,
        });
      });
    });
  }, [filter]);

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-800 dark:text-white">
          My Projects
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {["all", "personal", "client"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full capitalize ${
                filter === category
                  ? "bg-teal-500 text-white"
                  : "bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative h-96 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-30 object-contain transition-transform duration-500"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div> */}
              </div>
              <div className="absolute bg-[#0d9488] min-h-64 bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-800/80 text-slate-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
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