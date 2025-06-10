import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
export default function App() {
  const [showprojects, setShowProjects] = useState(false);
  return (
    <>
      <Navbar />
      <Hero onShowProjects={() => setShowProjects(true)} />
      { showprojects && <Projects />} 
      <About />
      <Skills />
      <Contact />
    </>
  );
}