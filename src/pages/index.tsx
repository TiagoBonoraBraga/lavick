import React from "react";
import MainSlide from "@/components/organisms/MainSlide";
import HeroCardsSection from "@/components/organisms/HeroCardsSection";
import TextSection from "@/components/organisms/TextSection";
import Section3 from "@/components/organisms/Section3";
import InfoCardsSections from "@/components/organisms/InfoCardsSections";
import Cards from "@/components/molecules/Cards";

export default function Home() {
  return (
   <>
   <main className="bg-backgroundDiv">
    <MainSlide />  
    <HeroCardsSection/>
    <TextSection />
    <InfoCardsSections />
    <Section3 />
    <Cards />
   </main>
   </>
  );
}
