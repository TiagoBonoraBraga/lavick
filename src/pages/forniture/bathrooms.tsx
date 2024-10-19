import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import FornitureHeader from "@/components/molecules/fornitureHeader";
// import FornitureCard from "@/components/molecules/FornitureCard";
import ImageGallery from "@/components/organisms/ImageGallery";

const imagesBathroom = [
    "/banheiro1.jpg",    
    "/banheiro2.jpg",     
];

export default function Bathrooms() {
    return (
        <>
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