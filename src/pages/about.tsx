import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import AboutSection from "@/components/molecules/AboutSection";


export default function About() {
    return (
        <>
        <main className="bg-backgroundDiv">
            <SecondHeader src="/lavickFachadOpaca.jpg" title="Conheça Nossa História" />
            <AboutSection />
        </main>
        </>
    )
}