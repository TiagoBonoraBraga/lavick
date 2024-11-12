import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import FornitureSection from "@/components/molecules/fornitureHeader";
import FornitureCard from "@/components/molecules/FornitureCard";
import ImageGallery from "@/components/organisms/ImageGallery";
import SEO from "@/components/molecules/Seo";

const imagesOffice = [
    "/office/escritorio4.jpg",        
    "/office/escritorio3.jpg",
    "/office/escritorio2.jpg",
    "/office/escritorio1.jpg",
    "/office/escritorio6.jpg",
    
];

export default function Office() {
    return (
        <>
        <SEO
                title="Lavick Marcenaria - Escritório"
                description="Lavick Marcenaria - comércio de móveis planejados, pisos laminados, persianas, cortinas e papel de parede."
                keywords="moveis planejados, desing de interiores, cozinhas planejadas, dormitórios planejados, escritório planejado"
                image="/logo/logoPreto.png" // URL da sua imagem de Open Graph
                url="https://lavickmarcenaria.com.br" // URL da página
                author="Lavick Marcenaria" // Nome do autor do conteúdo
                locale="pt_BR" // Localização e idioma do conteúdo
            />
            <main className="bg-backgroundDiv">
                <SecondHeader src="/escritorio6.jpg" title="Escritório" />
                <FornitureSection
                    h1="Equipado com móveis ergonômicos, prateleiras organizadoras e iluminação adequada, um escritório eficiente promove a produtividade e o bem-estar."
                    p="Lavick Dormitórios , cada centímetro do ambiente é aproveitado de forma inteligente, criando áreas de armazenamento práticas e integradas ao design.Um escritório bem projetado é muito mais do que um espaço de trabalho; é um ambiente que combina funcionalidade com conforto e estilo." />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6 p-6 ">                  
                    <FornitureCard
                        src="/escritorio6.jpg"
                        alt="foto Escritórios"
                        h2="Escritórios"
                        p="Onde Produtividade e Conforto Se Encontram."
                    />                   
                    <FornitureCard
                        src="/escritorio2.jpg"
                        alt="foto Escritórios"
                        h2="Qualidade de Vida"
                        p=" Ambiente dedicado ao aprendizado e à concentração."
                    />                 
                    <FornitureCard
                        src="/escritorio3.jpg"
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