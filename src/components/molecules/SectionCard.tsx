import Image from "next/image";
import Background from "../../../public/montagemClosetOffice.png";
import Comercial from "../../../public/escritorio6.jpg";
import Residencial from "../../../public/closet1.jpg";


export default function SectionCard() {
    return (
      <section className="max-w-[1280px] mx-auto relative overflow-visible pt-[72px] md:pt-0">
      {/* Imagem de fundo, visível apenas em telas md e superiores */}
      <div className="hidden md:block w-[1280px]">
        <Image
          src={Background}
          alt="Lavick Marcenaria"
          width={1280}
          
        />

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-slate-400 opacity-50"></div>

        {/* Texto centralizado */}
        <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 text-white text-center p-6 md:p-10 rounded-lg w-full max-w-[900px] h-auto md:h-[200px]">
          <h1 className="text-lg md:text-4xl lg:text-5xl mb-20 text-white">
            Lavick Marcenaria do Residencial ao Escritório.
          </h1>
          <p className="text-base md:text-lg text-justify">
            Tudo para sua casa, Móveis sob Medida, Persianas, Papel de parede e Piso Laminado. Venha conhecer nosso showroom. Primordialmente a Lavick Marcenaria é uma empresa especializada na criação de móveis residenciais e para escritórios, oferecendo soluções sob medida que aliam funcionalidade e design sofisticado. Antes de mais nada temos um compromisso com a qualidade e a satisfação dos clientes, a Lavick Marcenaria utiliza materiais de alta durabilidade e técnicas de fabricação avançadas para entregar produtos que transformam ambientes e atendem às necessidades específicas de cada projeto. Seja para a sua casa ou local de trabalho, a Lavick Marcenaria está pronta para criar móveis que refletem estilo e praticidade.
          </p>
        </div>
      </div>

      {/* Cards sobrepostos na parte inferior */}
      <div className="relative bottom-[200px] left-1/2 transform -translate-x-1/2 mt-32 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 md:space-x-6">
        {/* Primeiro card */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-[350px] md:w-[400px] lg:w-[450px] mx-auto">
          <Image
            src={Comercial}
            alt="Imagem Card 1"
           width={500}
           height={200}
          />
          <h2 className="text-xl font-bold mt-4">Marcenaria Lavick Comercial</h2>
          <p className="text-gray-600 mt-2">
            Móveis para escritório são projetados para oferecer conforto e eficiência, criando um ambiente de trabalho funcional e organizado. Eles combinam design ergonômico e praticidade, essenciais para melhorar a produtividade e bem-estar dos colaboradores.
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded hover:bg-orange-600">
            Saiba Mais
          </button>
        </div>

        {/* Segundo card */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-[350px] md:w-[400px] lg:w-[450px] mx-auto">
          <Image
            src={Residencial}
            alt="Imagem Card 2"
            width={500}
            height={200}
          />
          <h2 className="text-xl font-bold mt-4">Marcenaria Lavick Residencial</h2>
          <p className="text-gray-600 mt-2">
            Móveis residenciais são essenciais para compor e personalizar os ambientes de uma casa, unindo conforto, funcionalidade e estética. Eles refletem o estilo e as necessidades dos moradores, transformando cada espaço em um lugar único e acolhedor.
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded hover:bg-orange-600">
            Saiba Mais
          </button>
        </div>
      </div>
    </section>


    );
};
