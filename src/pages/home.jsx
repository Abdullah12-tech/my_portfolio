import Contact from "../components/contact";
import Experience from "../components/experience";
import Hero from "../components/Hero";
import Skills from "../components/skills";
import Testimonials from "../components/testimonial";
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