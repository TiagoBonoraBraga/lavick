import Cards from "@/components/molecules/Cards";
// import ImageSection from "@/components/molecules/ImageSection";
import Section3 from "@/components/molecules/Section3";
import SectionCard from "@/components/molecules/SectionCard";
import TextSection from "@/components/molecules/TextSection";
import HeroCardsSection from "@/components/organisms/HeroCardsSection";
import MainSlide from "@/components/organisms/MainSlide";
import React from "react";


export default function Home() {
  return (
   <>
   <main className="bg-backgroundDiv">
    <MainSlide />  
    <HeroCardsSection/>
    <TextSection />
    <SectionCard />
    <Section3 />
    <Cards />
   </main>
   </>
  );
}
