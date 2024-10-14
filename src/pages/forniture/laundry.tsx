import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import FornitureSection from "@/components/molecules/fornitureSection";
import Card from "@/components/molecules/Card";
import ImageGallery from "@/components/molecules/ImageGallery";

const imagesLaundry = [
    "/lavanderia1.jpg",
    "/lavanderia2.jpg",
    "/lavanderia3.jpg",
    "/lavanderia8.jpg",        
    "/lavanderia4.jpg",        
    "/lavanderia5.jpg",
    "/lavanderia6.jpg",
    "/lavanderia7.jpg",
];


export default function Laundry() {
    return (
        <>
            <main>
                <SecondHeader src="/quarto.jpg" title="Lavanderia" />
                <FornitureSection
                    h1="Proporciona um ambiente esteticamente agradável e funcional para as atividades domésticas."
                    p="Projetada para atender às necessidades específicas de cada família, oferece não apenas espaço otimizado para máquinas de lavar e secar, mas também prateleiras, armários e bancadas customizadas para armazenamento de produtos de limpeza e dobragem de roupas." />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">                  
                    <Card
                        src="/quarto.jpg"
                        alt="foto Lavanderia"
                        h2="Lavanderia"
                        p="Eficiência e Organização ao Seu Alcance."
                    />                   
                    <Card
                        src="/quarto.jpg"
                        alt="foto Lavanderia Sob Medida"
                        h2="Lavanderia Sob Medida"
                        p="Transformando Rotina em Conforto e Estilo."
                    />                 
                    <Card
                        src="/quarto.jpg"
                        alt="foto Lavanderia"
                        h2="Lavanderia"
                        p="Praticidade e Elegância para o Seu Dia a Dia."
                    />
                </div>
                <ImageGallery  images={imagesLaundry}/>
            </main>
        </>
    )
}