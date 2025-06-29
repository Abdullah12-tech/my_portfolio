import { useRef, useState } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
const Projects = () => {
  const [filter, setFilter] = useState("all");
  const projectsRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "personal",
      description: "Developed a professional and responsive website for ATC Africa, showcasing their telecom infrastructure services with clean UI and optimized performance",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/src/assets/projects/atc_Africa.png",
    },
    {
      id: 2,
      title: "Interactive Dashboard",
      category: "personal",
      description: "A simple computer-based test system where users can start a test, answer multiple-choice questions, complete the test, and instantly view their results. Ideal for basic exam simulations.",
      tags: ["D3.js", "TypeScript"],
      image: "/src/assets/projects/cbt.png",
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      category: "personal",
      description: "A static frontend layout of the popular Ludo game created using only HTML and CSS. Demonstrates design creativity and visual layout skills without interactivity.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/src/assets/projects/ludo.jpg",
    },
    {
      id: 4,
      title: "Interactive Dashboard",
      category: "client",
      description: "Designed and implemented a sleek frontend for Mindsync_Ai to present their AI-based solutions. Focused on clear branding, structured content, and modern design aesthetics",
      tags: ["D3.js", "TypeScript"],
      image: "/src/assets/projects/mindsync_ai.png",
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      category: "personal",
      description: "Generates virtual recharge card pins for testing/demo purposes. Includes features like random pin creation and a simple display format mimicking real card designs.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/src/assets/projects/recharge_card.png",
    },
    {
      id: 6,
      title: "Interactive Dashboard",
      category: "client",
      description: "Frontend UI for user authentication. Includes separate sign-in and sign-up forms with field validations using JavaScript, designed for easy integration into larger apps.",
      tags: ["D3.js", "TypeScript"],
      image: "/src/assets/projects/signin_signup.png",
    },
    {
      id: 7,
      title: "Interactive Dashboard",
      category: "client",
      description: "A frontend clone of the Upwork website’s homepage crafted with semantic HTML and CSS. Highlights attention to detail and design replication skills.",
      tags: ["D3.js", "TypeScript"],
      image: "/src/assets/projects/upwork_clone.png",
    },
    {
      id: 8,
      title: "E-Commerce Platform",
      category: "personal",
      description: "A full-featured web app for tracking income, expenses, and financial goals. Includes real-time updates, category-based analysis, monthly summaries, and Firebase integration for data storage.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/src/assets/projects/trackify.png",
    },
    {
      id: 9,
      title: "Interactive Dashboard",
      category: "client",
      description: "A basic but fun JavaScript-powered game that challenges users to guess a randomly generated number within a limited number of tries.",
      tags: ["D3.js", "TypeScript"],
      image: "/src/assets/projects/guessing.png",
    },
    {
      id: 10,
      title: "Interactive Dashboard",
      category: "client",
      description: "Built a user-friendly recipe platform that allows users to browse, share, and view cooking instructions. Designed for food enthusiasts with an emphasis on clean visuals and usability.",
      tags: ["D3.js", "TypeScript"],
      image: "/src/assets/projects/recipy.png",
    },
    {
      id: 11,
      title: "Interactive Dashboard",
      category: "client",
      description: "A lightweight application for adding, deleting, and searching student records. Focused on core CRUD functionality with a clean and user-friendly interface.",
      tags: ["D3.js", "TypeScript"],
      image: "/src/assets/projects/studentManagement.png",
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