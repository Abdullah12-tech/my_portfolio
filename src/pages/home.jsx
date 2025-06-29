
import Contact from "../components/contact"
import Hero from "../components/HeroSection";
import Skills from "../components/skills";
import Experience from "../components/Experience"
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