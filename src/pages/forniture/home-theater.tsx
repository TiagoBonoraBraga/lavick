import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import FornitureSection from "@/components/molecules/fornitureHeader";
// import FornitureCard from "@/components/molecules/FornitureCard";
import ImageGallery from "@/components/organisms/ImageGallery";
import SEO from "@/components/molecules/Seo";
import FornitureCard from "@/components/molecules/FornitureCard";

const imagesHomeTheater = [
    "/homeTheater/home1.jpg",       
    "/homeTheater/home2.jpg",
    "/homeTheater/home.jpeg",  
    "/homeTheater/home9.jpeg",
    "/homeTheater/cristaleira.jpeg",
    "/homeTheater/homeNovo.jpeg",
    
];

export default function HomeTheater() {
    return (
        <>
        <SEO
                title="Lavick Marcenaria - Home-Theater"
                description="Lavick Marcenaria - comércio de móveis planejados, pisos laminados, persianas, cortinas e papel de parede."
                keywords="moveis planejados, desing de interiores, cozinhas planejadas, dormitórios planejados, escritório planejado"
                image="/logo/logoPreto.png" // URL da sua imagem de Open Graph
                url="https://lavickmarcenaria.com.br" // URL da página
                author="Lavick Marcenaria" // Nome do autor do conteúdo
                locale="pt_BR" // Localização e idioma do conteúdo
            />
            <main className="bg-backgroundDiv">
                <SecondHeader src="/home1.jpg" title="Home Theater" />
                <FornitureSection
                    h1="Home Theater para acomodar confortavelmente familiares e amigos, este espaço se torna o centro das atividades de lazer."
                    p="Família ou amigos reunidos para assistir um grande filme. Pipoca, refrigerante, bons momentos. Tudo isso a LAVICK quer que você curta com o melhor Home para sua casa. Projetos modernos e sofisticados para impressionar a todos." />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6 p-6">                  
                    <FornitureCard
                        src="/homeTheater/home.jpeg"
                        alt="foto Home Theater"
                        h2="Home Theater"
                        p="A Emoção do Cinema, no Conforto do Seu Lar."
                    />                   
                    <FornitureCard
                        src="/homeTheater/home9.jpeg"
                        alt="foto Home Theater"
                        h2="Home Theater"
                        p="Transformando Sua Casa em um Cinema Exclusivo."
                    />                 
                    <FornitureCard
                        src= "/homeTheater/home1.jpg"
                        alt="foto Home Theater"
                        h2="Home Theater"
                        p="Praticidade e Elegância para o Seu Dia a Dia."
                    />
                </div>
                <ImageGallery  images={imagesHomeTheater}/>
            </main>
        </>
    )
}