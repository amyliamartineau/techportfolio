import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import ResumeButton from "../components/ResumeButton";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
    <NavBar />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Certifications />
    <ResumeButton />
    <Contact />
    </>
  );
}
