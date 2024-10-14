import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import FornitureSection from "@/components/molecules/fornitureSection";
import Card from "@/components/molecules/Card";
import ImageGallery from "@/components/molecules/ImageGallery";

const imagesCloset = [
    "/closet.jpeg",
    "/closet3.jpg",
    "/closet1.jpg",
    "/closet2.jpg",    
    
    "/closet5.jpg",
        
];


export default function Closet() {
    return (
        <>
            <main>
                <SecondHeader src="/quarto.jpg" title="Closet" />
                <FornitureSection
                    h1="Closets Sob Medida: Organização e Estilo Feitos para Você."
                    p="Transformando Ambientes, Elevando o Conforto e a Elegância." />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
                    <Card
                        src="/quarto.jpg"
                        alt="foto Closets"
                        h2="Closets"
                        p="Closet sob medida não apenas facilita a organização diária, mas também proporciona um toque de luxo e praticidade."
                    />
                    <Card
                        src="/quarto.jpg"
                        alt="foto Closets Sob Medida"
                        h2="Closets Sob Medida"
                        p="Personalização e Praticidade em Cada Detalhe."
                    />
                    <Card
                        src="/quarto.jpg"
                        alt="foto Closets"
                        h2="Closets"
                        p="Onde Seu Estilo Encontra a Perfeição."
                    />
                </div>
                <ImageGallery  images={imagesCloset}/>
            </main>
        </>
    )
}