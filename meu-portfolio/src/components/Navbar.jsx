export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-950 bg-opacity-90 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-xl font-bold text-cyan-400">Meu Portfólio</span>
        <ul className="flex gap-6 text-sm">
          <li><a href="#about" className="hover:text-cyan-400">Sobre</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projetos</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contato</a></li>
        </ul>
      </div>
    </nav>
  )
}