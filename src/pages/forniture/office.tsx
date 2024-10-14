import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import FornitureSection from "@/components/molecules/fornitureSection";
import Card from "@/components/molecules/Card";
import ImageGallery from "@/components/molecules/ImageGallery";

const imagesOffice = [
    "/escritorio1.jpg",
    "/escritorio2.jpg",
    "/escritorio3.jpg",
    "/escritorio4.jpg",
    "/escritorio5.jpg",
    "/escritorio6.jpg",
    "/escritorio7.jpg",  
    
];

export default function Office() {
    return (
        <>
            <main>
                <SecondHeader src="/quarto.jpg" title="Escritório" />
                <FornitureSection
                    h1="Equipado com móveis ergonômicos, prateleiras organizadoras e iluminação adequada, um escritório eficiente promove a produtividade e o bem-estar."
                    p="Lavick Dormitórios , cada centímetro do ambiente é aproveitado de forma inteligente, criando áreas de armazenamento práticas e integradas ao design.Um escritório bem projetado é muito mais do que um espaço de trabalho; é um ambiente que combina funcionalidade com conforto e estilo." />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">                  
                    <Card
                        src="/quarto.jpg"
                        alt="foto Escritórios"
                        h2="Escritórios"
                        p="Onde Produtividade e Conforto Se Encontram."
                    />                   
                    <Card
                        src="/quarto.jpg"
                        alt="foto Escritórios"
                        h2="Escritórios"
                        p=" Ambiente dedicado ao aprendizado e à concentração."
                    />                 
                    <Card
                        src="/quarto.jpg"
                        alt="foto Personalização"
                        h2="Personalização"
                        p="Personalização que Transforma o Conforto."
                    />
                </div>
                <ImageGallery  images={imagesOffice}/>
            </main>
        </>
    )
}