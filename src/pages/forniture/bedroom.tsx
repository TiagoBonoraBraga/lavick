import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import FornitureSection from "@/components/molecules/fornitureHeader";
import FornitureCard from "@/components/molecules/FornitureCard";
import ImageGallery from "@/components/organisms/ImageGallery";
import SEO from "@/components/molecules/Seo";

const imagesBedroom = [
    "/dormitorio/Dormitorio1.jpg",    
    "/dormitorio/dormitorio2.jpg",
    "/dormitorio/dormitorio3.jpg",
    "/dormitorio/nichosMenina.jpeg",      
    "/dormitorio/quartoMenina.jpeg",     
];

export default function Bedroom() {
    return (
        <>
        <SEO
                title="Lavick Marcenaria - Dormitórios"
                description="Lavick Marcenaria - comércio de móveis planejados, pisos laminados, persianas, cortinas e papel de parede."
                keywords="moveis planejados, desing de interiores, cozinhas planejadas, dormitórios planejados, escritório planejado"
                image="/logo/logoPreto.png" // URL da sua imagem de Open Graph
                url="https://lavickmarcenaria.com.br" // URL da página
                author="Lavick Marcenaria" // Nome do autor do conteúdo
                locale="pt_BR" // Localização e idioma do conteúdo
            />
            <main className="bg-backgroundDiv">
                <SecondHeader src="/dormitorio1.jpg" title="Dormitórios" />
                <FornitureSection
                    h1="Dormitórios Sob Medida: Seu Refúgio, Seu Estilo."
                    p="Lavick Dormitórios , cada centímetro do ambiente é aproveitado de forma inteligente, criando áreas de armazenamento práticas e integradas ao design." />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6 p-6">                  
                    <FornitureCard
                        src="/dormitorio5.png"
                        alt="foto Conforto"
                        h2="Conforto"
                        p="Onde o Descanso se Encontra com a Elegância."
                    />                   
                    <FornitureCard
                        src="/dormitorio6.jpg"
                        alt="foto Elegância"
                        h2="Elegância"
                        p="Seu Espaço de Tranquilidade e Bem-Estar."
                    />                 
                    <FornitureCard
                        src="/dormitorio7.jpg"
                        alt="foto Personalização"
                        h2="Personalização"
                        p="Personalização que Transforma o Conforto."
                    />
                </div>
                <ImageGallery  images={imagesBedroom}/>
            </main>
        </>
    )
}