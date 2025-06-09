import Card from './Card';

export default function Skills() {
  const skills = ['React', 'Tailwind CSS', 'JavaScript', 'Git', 'HTML', 'CSS', 'python'];

  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center text-lg text-gray-300">
            {skills.map(skill => (
              <div key={skill} className="hover:text-cyan-400 transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}