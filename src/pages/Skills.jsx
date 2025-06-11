import {
  FileCode,
  PaintBucket,
  Zap,
  BadgeHelp,
  Settings,
  Github,
  Laugh,
} from "lucide-react";

export default function Skills() {
  const skills = [
    {
      name: "KitKat",
      icon: Laugh,
      link: "https://production.assets.clips.twitchcdn.net/v2/media/KitschyFairPoxRuleFive-BH4KizM8DYsmdZh-/e734a074-d940-4bab-b7a9-da483354190b/video-1080.mp4?sig=06b33d7f3bc1fb029fe9e629cc188fedf45f352f&token=%7B%22authorization%22%3A%7B%22forbidden%22%3Afalse%2C%22reason%22%3A%22%22%7D%2C%22clip_uri%22%3A%22%22%2C%22clip_slug%22%3A%22KitschyFairPoxRuleFive-BH4KizM8DYsmdZh-%22%2C%22device_id%22%3A%22PPLsnET81SaTAVqn3j88vCU0KLyxSMhs%22%2C%22expires%22%3A1749553162%2C%22user_id%22%3A%22176899238%22%2C%22version%22%3A3%7D",
    },
    {
      name: "HTML",
      icon: FileCode,
      link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    },
    {
      name: "CSS",
      icon: PaintBucket,
      link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      icon: Zap,
      link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    },
    {
      name: "React",
      icon: BadgeHelp,
      link: "https://react.dev",
    },
    {
      name: "Tailwind",
      icon: Settings,
      link: "https://tailwindcss.com",
    },
    {
      name: "Git",
      icon: Github,
      link: "https://git-scm.com",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center bg-black/40 border border-white/10 rounded-xl p-8">
        <h2 className="py-5 text-3xl font-bold mb-10 text-white">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-7 gap-5">
          {skills.map(({ name, icon: Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center text-white/90 transition-colors"
            >
              <Icon size={40} className="mb-2" />
              <span className="font-semibold text-sm">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}