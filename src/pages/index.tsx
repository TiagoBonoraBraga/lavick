import React from "react";
import MainSlide from "@/components/organisms/MainSlide";
import HeroCardsSection from "@/components/organisms/HeroCardsSection";
import TextSection from "@/components/organisms/TextSection";
import BudgetSection from "@/components/organisms/BudgetSection";
import InfoCardsSection from "@/components/organisms/InfoCardsSection";
import ProductsCardsSection from "@/components/organisms/ProductsCardsSection";
import SEO from "@/components/molecules/Seo";

export default function Home() {
  return (
   <>
   <SEO
        title="Lavick Marcenaria"
        description="Lavick Marcenaria - comércio de móveis planejados, pisos laminados, persianas, cortinas e papel de parede."
        keywords="moveis planejados, desing de interiores, cozinhas planejadas, dormitórios planejados, escritório planejado"
        image="/logo/logoPreto.png" // URL da sua imagem de Open Graph
        url="https://lavickmarcenaria.com.br" // URL da página
        author="Lavick Marcenaria" // Nome do autor do conteúdo
        locale="pt_BR" // Localização e idioma do conteúdo
    />
    
   <main className="bg-backgroundDiv">
    <MainSlide />  
    <HeroCardsSection/>
    <TextSection />
    <InfoCardsSection />
    <BudgetSection />
    <ProductsCardsSection />
   </main>
   </>
  );
}
