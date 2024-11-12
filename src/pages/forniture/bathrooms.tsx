import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import FornitureHeader from "@/components/molecules/fornitureHeader";
// import FornitureCard from "@/components/molecules/FornitureCard";
import ImageGallery from "@/components/organisms/ImageGallery";
import SEO from "@/components/molecules/Seo";

const imagesBathroom = [
    "/bathroom/banheiro1.jpg",    
    "/bathroom/banheiro2.jpg",     
];

export default function Bathrooms() {
    return (
        <>
        <SEO
                title="Lavick Marcenaria - Banheiros"
                description="Lavick Marcenaria - comércio de móveis planejados, pisos laminados, persianas, cortinas e papel de parede."
                keywords="moveis planejados, desing de interiores, cozinhas planejadas, dormitórios planejados, escritório planejado"
                image="/logo/logoPreto.png" // URL da sua imagem de Open Graph
                url="https://lavickmarcenaria.com.br" // URL da página
                author="Lavick Marcenaria" // Nome do autor do conteúdo
                locale="pt_BR" // Localização e idioma do conteúdo
            />
            <main className="bg-backgroundDiv">
                <SecondHeader src="/banheiro1.jpg" title="Banheiro" />
                <FornitureHeader
                    h1="Banheiros Sob Medida: O Luxo da Personalização, Cada Detalhe Pensado para Você."
                    p="Transformando Ambientes, Elevando o Conforto e a Elegância." />
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6 p-6">
                    <FornitureCard
                        src="/quarto.jpg"
                        alt="foto Banheiro"
                        h2="Banheiro"
                        p="Criando Espaços de Relaxamento Personalizados."
                    />
                    <FornitureCard
                        src="/quarto.jpg"
                        alt="foto Banheiro"
                        h2="Banheiro"
                        p=" Criando Espaços de Relaxamento Personalizados.Personalização e Funcionalidade em Cada Detalhe."
                    />
                    <FornitureCard
                        src="/quarto.jpg"
                        alt="foto Banheiro"
                        h2="Banheiro"
                        p="Onde Seu Estilo Encontra a Perfeição."
                    />
                </div> */}

                <ImageGallery  images={imagesBathroom}/>
            </main>
        </>
    )
}