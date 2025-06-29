import Contact from "../components/contact"
import Experience from "../components/ExperienceSection";
import Hero from "../components/HeroSection";
import Skills from "../components/SkillsSection";
import Testimonials from "../components/Testimonial";
import WhatICanDo from "../components/WhatICan";


const Home = ()=>{
    return (
        <div className="">
            <Hero/>
            <Skills/>
            <WhatICanDo/>
            <Experience/>
            <Testimonials/>
            <Contact/>
        </div>
    )
}
export default Home;