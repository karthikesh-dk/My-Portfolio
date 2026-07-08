import "./App.css";

import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Story from "./components/Story";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Story />
      <Contact />
      <Footer />
    </>
  );
}

export default App;