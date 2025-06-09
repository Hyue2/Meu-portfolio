export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto text-center bg-black/40 border border-white/10 rounded-xl p-6">
        <h2 className="text-3xl font-bold mb-8">Projetos</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Projeto 1 */}
          <div className="flex flex-col justify-between bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-white">
            <div>
              <h3 className="text-xl font-semibold mb-2">Projeto 1</h3>
              <p className="text-gray-400">
                Atualmente estou em processo para finalização do meu projeto de bots.
              </p>
            </div>
            <div className="mt-4">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md">
                Ver mais
              </button>
            </div>
          </div>

          {/* Projeto 2 */}
          <div className="flex flex-col justify-between bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-white">
            <div>
              <h3 className="text-xl font-semibold mb-2">Projeto 2</h3>
              <p className="text-gray-400">
                Em processo de desenvolvimento de uma Workflow, com intuito de integrar diferentes
                aplicações e automatizar tarefas repetitivas, otimizando a eficiência operacional.
                Como a realização de vários pagamentos simultâneos.
              </p>
            </div>
            <div className="mt-4">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md">
                Ver mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
