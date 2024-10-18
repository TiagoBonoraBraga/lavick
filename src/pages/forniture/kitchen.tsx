import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import FornitureSection from "@/components/molecules/fornitureSection";
import FornitureCard from "@/components/molecules/FornitureCard";
import ImageGallery from "@/components/molecules/ImageGallery";

const imagesKitchen = [
    "/cozinhaVerde2.jpeg",
    "/cozinhaLaranja.jpeg",
    "/Cozinha 4.jpg",    
    "/Cozinha 5.jpg",
    "/cozinha1 (1).jpeg",
    "/cozinha2.jpeg",
        
];

export default function kitchen() {
    return (
        <>
            <main className="bg-backgroundDiv">
                <SecondHeader src="/quarto.jpg" title="Cozinhas" />
                <FornitureSection
                    h1="Nossas cozinhas são projetadas para atender às necessidades específicas de cada cliente."
                    p="Lavick Dormitórios , cada centímetro do ambiente é aproveitado de forma inteligente, criando áreas de armazenamento práticas e integradas ao design.As ferragens modernas, como gavetas com fechamento suave, portas com sistemas de abertura por toque e prateleiras deslizantes, proporcionam uma experiência de uso mais confortável e eficiente." />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6 p-6">
                    <FornitureCard
                        src="/quarto.jpg"
                        alt="foto Cozinhas Sob Medida"
                        h2="Cozinhas Sob Medida"
                        p="Design Harmonioso e Integrado."
                    />
                    <FornitureCard
                        src="/quarto.jpg"
                        alt="foto Modernidade"
                        h2="Modernidade"
                        p=" Personalização e Funcionalidade em Cada Detalhe."
                    />
                    <FornitureCard
                        src="/quarto.jpg"
                        alt="foto Lavick Cozinhas"
                        h2="Lavick Cozinhas"
                        p="Onde Seu Estilo Encontra a Perfeição."
                    />
                </div>
                <ImageGallery  images={imagesKitchen}/>
            </main>
        </>
    )
}