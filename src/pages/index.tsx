import React from "react";
import MainSlide from "@/components/organisms/MainSlide";
import HeroCardsSection from "@/components/organisms/HeroCardsSection";
import TextSection from "@/components/organisms/TextSection";
import BudgetSection from "@/components/organisms/BudgetSection";
import InfoCardsSection from "@/components/organisms/InfoCardsSection";
import ProductsCardsSection from "@/components/organisms/ProductsCardsSection";

export default function Home() {
  return (
   <>
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
