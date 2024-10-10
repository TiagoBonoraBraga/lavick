import React from "react";
import Card from "./Card";



interface FornitureSectionProps {
    h1: string;   
    p: string;   
}

export default function FornitureSection({ h1, p, }: FornitureSectionProps) {
    return (
        <>
            <section className="py-16 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 m-10">{h1}</h1>
                    <p className="text-gray-600 mb-28">
                        {p}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1  */}
                       <Card 
                            src="/quarto.jpg"
                            alt="foto Conforto"
                            h2="Conforto"
                            p="Onde o Descanso se Encontra com a Elegância."
                       />

                        {/* Card 2  */}
                        <Card 
                            src="/quarto.jpg"
                            alt="foto Elegância"
                            h2="Elegância"
                            p="Seu Espaço de Tranquilidade e Bem-Estar."
                       />

                        {/* Card 3  */}
                        <Card 
                            src="/quarto.jpg"
                            alt="foto Personalização"
                            h2="Personalização"
                            p="Personalização que Transforma o Conforto."
                       />
                    </div>

                </div>
            </section>

        </>
    )
}