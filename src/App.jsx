import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#0a0f1c] text-white min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="about" className="py-24">
          <About />
        </section>

        <section id="projects" className="py-24">
          <Projects />
        </section>

        <section id="contact" className="py-24">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
