import Image from "next/image";
import Background from "../../../public/montagemClosetOffice.png";
import Comercial from "../../../public/office/escritorio6.jpg";
import Residencial from "../../../public/closet/closet1.jpg";
import Link from "next/link";


export default function InfoCardsSection() {
  return (
    <section className="max-w-[1280px] mx-auto h-auto relative overflow-visible  md:pt-0 ">
      {/* Imagem de fundo, visível apenas em telas md e superiores */}
      <div className="hidden md:block w-[1280px] relative">
        <Image
          src={Background}
          alt="Lavick Marcenaria"
          width={1280}
          height={500}
        />
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-slate-400  min-h-auto opacity-50"></div>
        <div className="flex flex-col items-center absolute top-[10%] left-1/2 transform -translate-x-1/2 text-white text-center bg-slate-500/40 p-6 md:p-10 rounded-lg w-full max-w-[900px] min-h-[auto] md:h-[400px]">
          <h1 className="text-4xl font-extrabold text-whiter leading-tight">
            Lavick <span className="uppercase text-orange-500">Marcenaria</span>
          </h1>
          <span className="text-4xl font-extrabold text-whiter mb-6 leading-tight"> Do Residencial ao Escritório.</span>
          <p className="text-base md:text-lg text-justify">
            Tudo para sua casa, Móveis sob Medida, Persianas, Papel de parede e Piso Laminado. Venha conhecer nosso showroom. Primordialmente a Lavick Marcenaria é uma empresa especializada na criação de móveis residenciais e para escritórios, oferecendo soluções sob medida que aliam funcionalidade e design sofisticado. Antes de mais nada temos um compromisso com a qualidade e a satisfação dos clientes, a Lavick Marcenaria utiliza materiais de alta durabilidade e técnicas de fabricação avançadas para entregar produtos que transformam ambientes e atendem às necessidades específicas de cada projeto. Seja para a sua casa ou local de trabalho, a Lavick Marcenaria está pronta para criar móveis que refletem estilo e praticidade.
          </p>
        </div>
        <div className="absolute bottom-[-150px] left-40   md:mt-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 md:space-x-6 mt-16">
          {/* Primeiro card */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-[350px] md:w-[400px] lg:w-[450px] mx-auto">
            <Image
              src={Comercial}
              alt="Imagem Card 1"
              width={500}
              height={200}
            />
            <h2 className="text-xl font-bold mt-4">Lavick Marcenaria Comercial</h2>
            <p className="text-gray-600 mt-2">
              Móveis para escritório são projetados para oferecer conforto e eficiência, criando um ambiente de trabalho funcional e organizado. Eles combinam design ergonômico e praticidade, essenciais para melhorar a produtividade e bem-estar dos colaboradores.
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded hover:bg-orange-600">
              <Link href="https://api.whatsapp.com/send?phone=5541998781245&text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento. " target="_blank" rel="noopener noreferrer">
                Saiba mais
              </Link>
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
            <h2 className="text-xl font-bold mt-4">Lavick Marcenaria Residencial</h2>
            <p className="text-gray-600 mt-2">
              Móveis residenciais são essenciais para compor e personalizar os ambientes de uma casa, unindo conforto, funcionalidade e estética. Eles refletem o estilo e as necessidades dos moradores, transformando cada espaço em um lugar único e acolhedor.
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded hover:bg-orange-600">
              <Link href="https://api.whatsapp.com/send?phone=5541998781245&text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento. " target="_blank" rel="noopener noreferrer">
                Saiba mais
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Cards sobrepostos na parte inferior */}

    </section>


  );
};
