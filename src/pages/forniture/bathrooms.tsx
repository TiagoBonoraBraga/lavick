import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import FornitureSection from "@/components/molecules/fornitureSection";
import Card from "@/components/molecules/Card";
import ImageGallery from "@/components/molecules/ImageGallery";

const imagesBathroom = [
    "/banheiro1.jpg",    
    "/banheiro2.jpg",     
];

export default function Bathrooms() {
    return (
        <>
            <main>
                <SecondHeader src="/quarto.jpg" title="Banheiro" />
                <FornitureSection
                    h1="Banheiros Sob Medida: O Luxo da Personalização, Cada Detalhe Pensado para Você."
                    p="Transformando Ambientes, Elevando o Conforto e a Elegância." />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
                    <Card
                        src="/quarto.jpg"
                        alt="foto Banheiro"
                        h2="Banheiro"
                        p="Criando Espaços de Relaxamento Personalizados."
                    />
                    <Card
                        src="/quarto.jpg"
                        alt="foto Banheiro"
                        h2="Banheiro"
                        p=" Criando Espaços de Relaxamento Personalizados.Personalização e Funcionalidade em Cada Detalhe."
                    />
                    <Card
                        src="/quarto.jpg"
                        alt="foto Banheiro"
                        h2="Banheiro"
                        p="Onde Seu Estilo Encontra a Perfeição."
                    />
                </div>

                <ImageGallery  images={imagesBathroom}/>
            </main>
        </>
    )
}