import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import FornitureSection from "@/components/molecules/fornitureSection";



export default function Bedroom() {
    return (
        <>
        <main>
        <SecondHeader src="/quarto.jpg" title="Dormitórios" />    
        <FornitureSection 
            h1="Dormitórios Sob Medida: Seu Refúgio, Seu Estilo." 
            p="Lavick Dormitórios , cada centímetro do ambiente é aproveitado de forma inteligente, criando áreas de armazenamento práticas e integradas ao design." />
        </main>
        </>
    )
}