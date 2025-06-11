import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './components/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
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