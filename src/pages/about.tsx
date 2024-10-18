import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import AboutSection1 from "@/components/molecules/AboutSection1";


export default function About() {
    return (
        <>
        <main className="bg-backgroundDiv">
            <SecondHeader src="/lavickFachadOpaca.jpg" title="Conheça Nossa História" />
            <AboutSection1 />
        </main>
        </>
    )
}