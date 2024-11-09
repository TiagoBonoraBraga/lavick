import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import FornitureSection from "@/components/molecules/fornitureHeader";
import FornitureCard from "@/components/molecules/FornitureCard";
import ImageGallery from "@/components/organisms/ImageGallery";
import SEO from "@/components/molecules/Seo";

const imagesLaundry = [
    "/lavanderia1.jpg",
    "/lavanderia2.jpg",    
    "/lavanderia4.jpg",        
    "/lavanderia5.jpg",
    "/lavanderia8.jpg",        
    
    
];


export default function Laundry() {
    return (
        <>
        <SEO
                title="Lavick Marcenaria - Lavanderia"
                description="Lavick Marcenaria - comércio de móveis planejados, pisos laminados, persianas, cortinas e papel de parede."
                keywords="moveis planejados, desing de interiores, cozinhas planejadas, dormitórios planejados, escritório planejado"
                image="/logo/logoPreto.png" // URL da sua imagem de Open Graph
                url="https://lavickmarcenaria.com.br" // URL da página
                author="Lavick Marcenaria" // Nome do autor do conteúdo
                locale="pt_BR" // Localização e idioma do conteúdo
            />
            <main className="bg-backgroundDiv">
                <SecondHeader src="/lavanderia1.jpg" title="Lavanderia" />
                <FornitureSection
                    h1="Proporciona um ambiente esteticamente agradável e funcional para as atividades domésticas."
                    p="Projetada para atender às necessidades específicas de cada família, oferece não apenas espaço otimizado para máquinas de lavar e secar, mas também prateleiras, armários e bancadas customizadas para armazenamento de produtos de limpeza e dobragem de roupas." />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6 p-6">                  
                    <FornitureCard
                        src="/lavanderia2.jpg"
                        alt="foto Lavanderia"
                        h2="Lavanderia"
                        p="Eficiência e Organização ao Seu Alcance."
                    />                   
                    <FornitureCard
                        src="/lavanderia4.jpg"
                        alt="foto Lavanderia Sob Medida"
                        h2="Lavanderia Sob Medida"
                        p="Transformando Rotina em Conforto e Estilo."
                    />                 
                    <FornitureCard
                        src="/lavanderia5.jpg"
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