import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-[#0a0f1c] bg-opacity-90 backdrop-blur-sm border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#hero" className="text-xl font-bold tracking-wide">Portfolio Luiz.Dev</a>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-cyan-400 transition-colors">Sobre</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projetos</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contato</a>
        </div>
      </div>
    </nav>
  );
}