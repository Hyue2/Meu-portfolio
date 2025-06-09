import Card from './Card';
import { Mail, Github, Linkedin } from 'lucide-react';
import CardContainer from './CardContainer';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <CardContainer>
          <h2 className="text-3xl font-bold mb-6 text-center">Contato</h2>
          <div className="flex justify-center space-x-6 text-gray-300 text-2xl">
            <a href="mailto:lufee342@gmail.com" className="hover:text-cyan-400 transition-colors">
              <Mail />
            </a>
            <a href="https://github.com/Hyue2" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Github />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Linkedin />
            </a>
          </div>
        </CardContainer>
      </div>
    </section>
  );
}
