import ContactSection from "@/components/molecules/ContactSection";
import SEO from "@/components/molecules/Seo";
import React from "react";

export default function Contact() {
    return (
        <>
        <SEO
                title="Lavick Marcenaria - Contato"
                description="Lavick Marcenaria - comércio de móveis planejados, pisos laminados, persianas, cortinas e papel de parede."
                keywords="moveis planejados, desing de interiores, cozinhas planejadas, dormitórios planejados, escritório planejado"
                image="/logo/logoPreto.png" // URL da sua imagem de Open Graph
                url="https://lavickmarcenaria.com.br" // URL da página
                author="Lavick Marcenaria" // Nome do autor do conteúdo
                locale="pt_BR" // Localização e idioma do conteúdo
            />
        <main>
            <ContactSection />
        </main>
        </>
    )
}