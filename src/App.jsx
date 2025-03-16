import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import About from './sections/about';
import Projects from "./sections/project";
import Footer from "./sections/footer";
import Experience from "./sections/experience";

const App = () => {
    return (
        <Router>  {/* ✅ Wrap the entire app inside Router */}
            <main className="max-w-7xl mx-auto">
                <Navbar />
                <section id="home">
                <Hero />
                </section>
                
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <section id="about"><About /></section>
                <br />
                <br />
                <section id="projects">
                <Projects />
                </section> 
                <br />
                <section id="experience">
                <Experience />
                </section>
                <br />
                <br />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Footer/>
                <br />
                <br />
            </main>
        </Router>
    );
};

export default App;
