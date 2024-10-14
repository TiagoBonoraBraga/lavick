import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import FornitureSection from "@/components/molecules/fornitureSection";
import Card from "@/components/molecules/Card";
import ImageGallery from "@/components/molecules/ImageGallery";

const imagesBedroom = [
    "/Dormitorio1.jpg",    
    "/dormitorio2.jpg",
    "/dormitorio3.jpg",
    "/Dormitorio5.png",
    // "/Dormitório4.jpg",
    "/nichosMenina.jpeg",
    "/dormitorio6.jpg",
    "/dormitorio7.jpg",
    "/quartoMenina.jpeg",     
];

export default function Bedroom() {
    return (
        <>
            <main>
                <SecondHeader src="/quarto.jpg" title="Dormitórios" />
                <FornitureSection
                    h1="Dormitórios Sob Medida: Seu Refúgio, Seu Estilo."
                    p="Lavick Dormitórios , cada centímetro do ambiente é aproveitado de forma inteligente, criando áreas de armazenamento práticas e integradas ao design." />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">                  
                    <Card
                        src="/quarto.jpg"
                        alt="foto Conforto"
                        h2="Conforto"
                        p="Onde o Descanso se Encontra com a Elegância."
                    />                   
                    <Card
                        src="/quarto.jpg"
                        alt="foto Elegância"
                        h2="Elegância"
                        p="Seu Espaço de Tranquilidade e Bem-Estar."
                    />                 
                    <Card
                        src="/quarto.jpg"
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