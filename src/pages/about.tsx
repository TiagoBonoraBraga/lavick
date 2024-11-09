import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import AboutSection from "@/components/molecules/AboutSection";
import SEO from "@/components/molecules/Seo";


export default function About() {
    return (
        <>
            <SEO
                title="Lavick Marcenaria - Sobre"
                description="Lavick Marcenaria - comércio de móveis planejados, pisos laminados, persianas, cortinas e papel de parede."
                keywords="moveis planejados, desing de interiores, cozinhas planejadas, dormitórios planejados, escritório planejado"
                image="/logo/logoPreto.png" // URL da sua imagem de Open Graph
                url="https://lavickmarcenaria.com.br" // URL da página
                author="Lavick Marcenaria" // Nome do autor do conteúdo
                locale="pt_BR" // Localização e idioma do conteúdo
            />

            <main className="bg-backgroundDiv">
                <SecondHeader src="/lavickFachadOpaca.jpg" title="Conheça Nossa História" />
                <AboutSection />
            </main>
        </>
    )
}