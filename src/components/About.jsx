import CardContainer from './CardContainer';

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <CardContainer>
          <h2 className="text-3xl font-bold mb-10 text-center">Sobre Mim</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Sou um dev Front-End com foco em performance, design moderno e experiência do usuário refinada. Meu diferencial está na obsessão por responsividade, acessibilidade e código limpo — características que garantem interfaces elegantes e funcionais em qualquer dispositivo. Com mentalidade autodidata, aprendo rápido, soluciono problemas com autonomia e busco sempre superar expectativas técnicas e visuais. Tenho domínio sólido de tecnologias atuais e uma constante sede por evolução. Mais que programar, entrego experiência e resultado.
          </p>
        </CardContainer>
      </div>
    </section>
  );
}
