import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import GitHubCTA from "./components/GitHubCTA";
import FiverrCTA from "./components/FiverrCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <WhyWorkWithMe />
        <GitHubCTA />
        <FiverrCTA />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
