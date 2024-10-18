import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import ServiceTitle from "@/components/molecules/ServicesTitle";
import ServiceCard from "@/components/molecules/ServiceCard";
import { faSun, faLayerGroup, faTools, faCog , faHeadset} from '@fortawesome/free-solid-svg-icons';
import ImageGallery from "@/components/molecules/ImageGallery";


const imagesFloors = [
    "/piso.jpg",
    "/Piso1.jpg",
    "/piso2.jpg",
    "/piso3.jpg",
    "/piso4.jpg",
    "/piso5.jpg",
    "/piso6.jpg",
    "/piso7.jpeg"
];

export default function Floors() {
    return (
        <>
            <SecondHeader src="/quarto.jpg" title="Piso Laminado e Vinílico" />
            <main>
                <div className="bg-white p-8 sm:p-10 md:p-16 lg:p-20 m-4 sm:m-6 md:m-8 lg:m-10 rounded-lg shadow-xl border grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-start">
                        <ServiceTitle h2="Lavick Pisos" h1="Venha conhecer no Showroom!" p="Os pisos laminados e vinílicos são opções populares para revestimento de ambientes residenciais e comerciais devido à combinação de estética, durabilidade e praticidade que oferecem." />
                        <ServiceCard icon={faSun} h3="Durabilidade" p="São resistentes a riscos, manchas e desbotamento, ideais para áreas de alto tráfego." />
                        <ServiceCard icon={faTools} h3="Manutenção Simples" p="Limpeza fácil com um pano úmido ou um aspirador, mantendo a aparência nova por mais tempo." />
                    </div>
                    <div className="grid grid-cols-1 gap-2 items-center ">
                        <ServiceCard icon={faLayerGroup} h3="Facilidade de Instalação" p="O sistema de encaixe (click) permite uma instalação rápida e limpa, sem a necessidade de cola." />
                        <ServiceCard icon={faCog} h3="Custo-Benefício" p="Geralmente mais acessíveis que pisos de madeira maciça, oferecendo uma excelente relação entre custo e qualidade." />
                        <ServiceCard icon={faHeadset} h3="Atendimento Pesonalizado" p="Cada projeto é tratado com atenção única, adaptando-se às suas necessidades e preferências." />
                    </div>
                </div>
                <ImageGallery images={imagesFloors} />

            </main>

        </>
    )
}