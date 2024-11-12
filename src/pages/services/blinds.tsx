import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import ServiceTitle from "@/components/molecules/ServicesTitle";
import ServiceCard from "@/components/molecules/ServiceCard";
import { faSun , faLayerGroup, faTools, faCog, faHeadset } from '@fortawesome/free-solid-svg-icons';
import ImageGallery from "@/components/organisms/ImageGallery";
import SEO from "@/components/molecules/Seo";

const imagesBlids = [
    "/blinds/percianas.jpeg",
    "/blinds/persiana3.jpg",      
    "/blinds/perciana4.jpg",
    "/blinds/persiana2.jpg",
];

export default function Blinds() {
    return (
        <>
        <SEO
                title="Lavick Marcenaria - Persianas e Cortinas"
                description="Lavick Marcenaria - comércio de móveis planejados, pisos laminados, persianas, cortinas e papel de parede."
                keywords="moveis planejados, desing de interiores, cozinhas planejadas, dormitórios planejados, escritório planejado"
                image="/logo/logoPreto.png" // URL da sua imagem de Open Graph
                url="https://lavickmarcenaria.com.br" // URL da página
                author="Lavick Marcenaria" // Nome do autor do conteúdo
                locale="pt_BR" // Localização e idioma do conteúdo
            />
            <SecondHeader src="/percianas.jpeg" title="Persiana" />
            <main>
            <div className="bg-white p-8 sm:p-10 md:p-16 lg:p-20 m-4 sm:m-6 md:m-8 lg:m-10 rounded-lg shadow-xl border grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col justify-start">
                    <ServiceTitle h2="Lavick Persianas" h1="Venha conhecer no Showroom!" p="As persianas são uma excelente opção para cobrir janelas, oferecendo uma combinação de funcionalidade, estilo e praticidade. Elas estão disponíveis em diversos materiais, estilos e mecanismos, tornando-se uma escolha versátil para qualquer ambiente."/>
                    <ServiceCard  icon={faSun } h3="Controle de Luz" p="As persianas permitem um controle preciso da quantidade de luz que entra no ambiente. Com ajustes simples, é possível criar desde uma leve penumbra até um bloqueio quase total da luz solar." />
                    <ServiceCard  icon={faTools} h3="Fácil Instalação:" p="simples e rápida, com opções de montagem interna (dentro do caixilho da janela) ou externa (na parede acima da janela), adaptando-se às necessidades do ambiente." />
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <ServiceCard  icon={faLayerGroup} h3="Variedade de Estilos e Materiais" p="Disponíveis em uma ampla gama de materiais, incluindo madeira, alumínio, PVC e tecido, as persianas podem ser encontradas em diversos estilos, como horizontais, verticais, romanas e rolôs,." />
                    <ServiceCard  icon={faCog} h3="Eficiência Energética" p="Podem ajudar a melhorar a eficiência energética de um ambiente, bloqueando o calor excessivo no verão e ajudando a manter o calor durante o inverno, resultando em economia de energia." />
                    <ServiceCard icon={faHeadset} h3="Atendimento Pesonalizado" p="Cada projeto é tratado com atenção única, adaptando-se às suas necessidades e preferências." />
                </div>
            </div>
                <ImageGallery  images={imagesBlids}/>

            </main>
           
        </>
    )
}