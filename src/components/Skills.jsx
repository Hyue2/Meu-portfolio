export default function Skills() {
  const skills = [
    {
      name: "KitKat",
      link: "https://production.assets.clips.twitchcdn.net/v2/media/KitschyFairPoxRuleFive-BH4KizM8DYsmdZh-/e734a074-d940-4bab-b7a9-da483354190b/video-1080.mp4?sig=06b33d7f3bc1fb029fe9e629cc188fedf45f352f&token=%7B%22authorization%22%3A%7B%22forbidden%22%3Afalse%2C%22reason%22%3A%22%22%7D%2C%22clip_uri%22%3A%22%22%2C%22clip_slug%22%3A%22KitschyFairPoxRuleFive-BH4KizM8DYsmdZh-%22%2C%22device_id%22%3A%22PPLsnET81SaTAVqn3j88vCU0KLyxSMhs%22%2C%22expires%22%3A1749553162%2C%22user_id%22%3A%22176899238%22%2C%22version%22%3A3%7D"
    },
    {
      name: "HTML",
      link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML"
    },
    
    {
      name: "CSS",
      link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS"
    },
    {
      name: "JavaScript",
      link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
    },
    {
      name: "React",
      link: "https://react.dev/"
    },
    {
      name: "Tailwind",
      link: "https://tailwindcss.com/"
    },
    {
      name: "Git",
      link: "https://github.com/Hyue2"
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto text-center bg-black/40 border border-white/10 rounded-xl p-6">
        <h2 className="text-3xl font-bold mb-8 text-white">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 justify-center">
          {skills.map((skill, index) => (
            <a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium rounded-md px-4 py-3 transition-colors duration-200 text-center"
                >
                {skill.name}
                </a>
          ))}
        </div>
      </div>
    </section>
  );
}