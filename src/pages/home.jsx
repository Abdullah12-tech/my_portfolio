import Contact from "../components/contact"
import Experience from "../components/ExperienceSection";
import Hero from "../components/HeroSection";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonial";
import WhatICanDo from "../components/whatICando";


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