import Card from './Card';
import CardContainer from './CardContainer';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <CardContainer>
          <h2 className="text-3xl font-bold mb-4 text-center">Sobre Mim</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Olá! Meu nome é Luiz e estou trilhando meu caminho como desenvolvedor, focado em criar interfaces modernas, funcionais e com ótima performance.
            Sou apaixonado por responsividade, boas práticas e tudo que envolve oferecer uma experiência fluida e agradável. Curioso por natureza, autodidata e sempre em busca de aprender mais.
          </p>
        </CardContainer>
      </div>
    </section>
  );
}
