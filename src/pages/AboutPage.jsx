import AboutHero from "../components/AboutInfo";
import Experience from "../components/Experience";
import FunFact from "../components/FunFact";
import Skills from "../components/Skills";

const AboutPage = () => {
  const traits = [
    { name: "Creative", level: 90 },
    { name: "Problem Solver", level: 95 },
    { name: "Team Player", level: 85 },
    { name: "Detail-Oriented", level: 88 },
  ];

  return (
    <div>
      <AboutHero/>
      <Skills/>
      <Experience/>
      <FunFact/>
    </div>
  );
};

export default AboutPage;