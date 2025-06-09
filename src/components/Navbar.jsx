import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShow(currentScrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-150 ease-in-out
        bg-gradient-to-b from-black to-cyan-950/10 backdrop-blur-md
        shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]
        ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-8xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="#" className="text-white text-2xl font-extrabold tracking-wide">
          Meu Portfólio
        </a>
        <ul className="flex space-x-7 text-white text-lg font-medium">
          <li>
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              Sobre
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
