import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import FornitureSection from "@/components/molecules/fornitureSection";
import FornitureCard from "@/components/molecules/FornitureCard";
import ImageGallery from "@/components/molecules/ImageGallery";

const imagesDiningRoom = [
    "/saladejantar1.jpg",
    "/saladejantar2.jpg",
    "/saladejantar3.jpg",
    "/saladejantar4.jpg",    
];

export default function DiningRoom() {
    return (
        <>
            <main className="bg-backgroundDiv">
                <SecondHeader src="/quarto.jpg" title="Sala de Jantar" />
                <FornitureSection
                    h1="Dormitórios Sob Medida: Seu Refúgio, Seu Estilo.Transformando a sala de jantar em um ponto focal da casa, ideal para momentos de convívio e celebração."
                    p="Lavick Dormitórios , cada centímetro do ambiente é aproveitado de forma inteligente, criando áreas de armazenamento práticas e integradas ao design.Um ambiente aconchegante, sofisticado e agradável é o que a LAVICK planeja para sua sala de jantar. Defina sua ideia e venha realizar sua visão. Estamos prontos para executar com todo carinho seu sonho." />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6 p-6">                  
                    <FornitureCard
                        src="/quarto.jpg"
                        alt="foto Sala de Jantar"
                        h2="Sala de Jantar"
                        p="O Charme da Personalização em Cada Refeição."
                    />                   
                    <FornitureCard
                        src="/quarto.jpg"
                        alt="foto Sala de Jantar"
                        h2="Elegância"
                        p="Seu Espaço de Tranquilidade e Bem-Estar."
                    />                 
                    <FornitureCard
                        src="/quarto.jpg"
                        alt="foto Sala de Jantar"
                        h2="Personalização"
                        p="Personalização que Transforma o Conforto."
                    />
                </div>
                <ImageGallery  images={imagesDiningRoom}/>
            </main>
        </>
    )
}