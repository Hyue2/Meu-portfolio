import { Mail, Github, Linkedin, Instagram } from 'lucide-react';
import CardContainer from '../components/CardContainer';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto">
        <CardContainer>
          <h2 className="text-3xl font-bold mb-6 text-center">Contatos</h2>

          <div className="flex flex-col items-center space-y-6 text-gray-300 text-lg">
            {/* Email com ícone e texto */}
            <a
              href="mailto:lufee342@gmail.com"
              className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
            >
              <Mail />
              <span>lufee342@gmail.com</span>
            </a>

            {/* Ícones sociais */}
            <div className="flex space-x-6 text-2xl">
              <a
                href="https://github.com/Hyue2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                <Linkedin />
              </a>
              <a
                href="https://instagram.com/mee.luiz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </CardContainer>
      </div>
    </section>
  );
}