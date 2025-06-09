export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Olá, eu sou o Hyue 👋</h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-6">
        Desenvolvedor Frontend focado em performance, design limpo e experiência para jogos e projetos web.
      </p>
      <a href="#projects" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition">
        Ver Projetos
      </a>
    </section>
  )
}