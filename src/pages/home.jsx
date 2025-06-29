
import Contact from "../components/contact"
import Experience from "../components/experience";
import Hero from "../components/HeroSection";
import Skills from "../components/skills";
import Testimonials from "../components/Testimonial";
import WhatICanDo from "../components/WhatICando";

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