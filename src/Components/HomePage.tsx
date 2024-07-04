import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Header from "./Header"
import Mail from "./Mail";
import Projects from "./Projects";
import Skills from "./Skills";
import Social from "./Social";

const HomePage = () => {
    return <div className="min-h-[100vh]  items-center overflow-hidden justify-center">
        <Header />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Mail />
        <Social />
    </div>
};
export default HomePage;