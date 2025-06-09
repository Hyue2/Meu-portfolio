export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto text-center bg-black/40 border-white/10 rounded-xl p-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Projetos</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="max-w-4xl mx-auto text-center bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Projeto 1</h3>
            <p className="text-gray-400">Atualmente estou em processo para finalização do meu projeto de bots.</p>
          </div>
          <div className="max-w-4xl mx-auto text-center bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Projeto 2</h3>
            <p className="text-gray-400">Em processo de desenvolvimento de uma Workflow, com intuito de  integrar diferentes aplicações e automatizar tarefas repetitivas, otimizando a eficiência operacional. Como a realização de varios pagamentos simultaneos.</p>
          </div>
        </div>
      </div>
    </section>
  )
}