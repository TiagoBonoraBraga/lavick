import Cards from "@/components/molecules/Cards";
import ImageSection from "@/components/molecules/ImageSection";
import Section3 from "@/components/molecules/Section3";
import SectionCard from "@/components/molecules/SectionCard";
import TextSection from "@/components/molecules/TextSection";
import CardSection from "@/components/organisms/CardSection";
import React from "react";


export default function Home() {
  return (
   <>
   <ImageSection />
   <CardSection />
   <TextSection />
   <SectionCard />
   <Section3 />
   <Cards />
   </>
  );
}
