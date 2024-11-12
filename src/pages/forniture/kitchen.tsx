import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import FornitureSection from "@/components/molecules/fornitureHeader";
import FornitureCard from "@/components/molecules/FornitureCard";
import ImageGallery from "@/components/organisms/ImageGallery";
import SEO from "@/components/molecules/Seo";

const imagesKitchen = [
    "/cozinhas/cozinhaVerde2.jpeg",
    "/cozinhas/cozinhaLaranja.jpg",
    "/cozinhas/cozinhaVerde.jpeg",
    "/cozinhas/Cozinha 4.jpg",    
    "/cozinhas/Cozinha 5.jpg",
    "/cozinhas/cozinha2.jpeg",
        
];

export default function kitchen() {
    return (
        <>
        <SEO
                title="Lavick Marcenaria - Cozinhas"
                description="Lavick Marcenaria - comércio de móveis planejados, pisos laminados, persianas, cortinas e papel de parede."
                keywords="moveis planejados, desing de interiores, cozinhas planejadas, dormitórios planejados, escritório planejado"
                image="/logo/logoPreto.png" // URL da sua imagem de Open Graph
                url="https://lavickmarcenaria.com.br" // URL da página
                author="Lavick Marcenaria" // Nome do autor do conteúdo
                locale="pt_BR" // Localização e idioma do conteúdo
            />
            <main className="bg-backgroundDiv">
                <SecondHeader src="/cozinhaLaranja.jpg" title="Cozinhas" />
                <FornitureSection
                    h1="Nossas cozinhas são projetadas para atender às necessidades específicas de cada cliente."
                    p="Lavick Dormitórios , cada centímetro do ambiente é aproveitado de forma inteligente, criando áreas de armazenamento práticas e integradas ao design.As ferragens modernas, como gavetas com fechamento suave, portas com sistemas de abertura por toque e prateleiras deslizantes, proporcionam uma experiência de uso mais confortável e eficiente." />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6 p-6">
                    <FornitureCard
                        src="/cozinhaLaranja.jpg"
                        alt="foto Cozinhas Sob Medida"
                        h2="Cozinhas Sob Medida"
                        p="Design Harmonioso e Integrado."
                    />
                    <FornitureCard
                        src="/cozinhaVerde.jpeg"
                        alt="foto Modernidade"
                        h2="Modernidade"
                        p=" Personalização e Funcionalidade em Cada Detalhe."
                    />
                    <FornitureCard
                        src="/Cozinha2.jpeg"
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