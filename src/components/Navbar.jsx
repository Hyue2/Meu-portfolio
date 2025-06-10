import { useEffect, useState } from "react";

export default function Navbar() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const newOpacity = Math.max(1 - y / 300, 0.2);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300 ease-in-out backdrop-blur-md"
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,${opacity}) 0%, rgba(10,15,28,${opacity}) 100%)`,
        boxShadow: opacity < 0.99 ? "0 8px 20px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 py-5 flex items-center justify-between">
        <a href="#" className="text-white text-xl font-extrabold tracking-wide">
          Luiz.Dev
        </a>
        <ul className="flex space-x-4 text-white text-sm font-medium">
          <li><a href="#about" className="hover:text-cyan-400 transition-colors">Sobre</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projetos</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}
