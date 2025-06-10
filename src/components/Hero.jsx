export default function Hero({ onShowProjects }) {
  return (
    <section id="hero" className="py-20 flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Oi, eu sou Luiz</h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
        Desenvolvedor focado em criar interfaces modernas, funcionais e com alta performance. Apaixonado por responsividade e boas práticas.
      </p>
      <button
        onClick={onShowProjects}
        className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        Ver Projetos
      </button>
    </section>
  );
}