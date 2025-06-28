import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Navbar from "./components/navbar"
import ProjectsPage from "./pages/project"
import AboutPage from "./pages/about"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const hoverElements = document.querySelectorAll("a, button, .hover-effect");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursorRef.current, {
          scale: 2,
          backgroundColor: "rgba(16, 185, 129, 0.5)",
          duration: 0.3,
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursorRef.current, {
          scale: 1,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          duration: 0.3,
        });
      });
    });

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-8 h-8 rounded-full pointer-events-none bg-white/20 backdrop-blur-sm z-50 mix-blend-difference hidden md:block"
    />
  );
};
const App = () => {
  return (
    <div className="w-screen">
      <BrowserRouter>
        <CustomCursor/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;