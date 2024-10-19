import React from "react";
import Image from "next/image";
import Quarto from "../../../public/quarto.jpg";

export default function BudgetSection() {
    return (
        <>
            <section className="max-w-[1280px] mx-auto mt-64 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-200 border-y-2 border-slate-300 shadow">
                {/* Coluna 1: Texto e botões */}
                <div className="text-center md:text-left p-6">
                    <h1 className="text-2xl font-bold mb-4 lex justify-center">Lavick Marcenaria - Peça já seu orçamento </h1>
                    <h2 className="text-3xl font-bold mb-4"></h2>
                    <h2 className="text-4xl font-extrabold mb-4">Rápido e Fácil</h2>
                    <p className="text-gray-700 mb-6">
                        Primeiramente solicitar um orçamento rápido e fácil é simples: entre em contato conosco, forneça os detalhes do seu projeto e receba uma estimativa personalizada em pouco tempo. Estamos prontos para ajudar você a transformar suas ideias em realidade com eficiência e transparência.
                    </p>

                    {/* Botões */}
                    <div className="flex flex-col sm:flex-col justify-center md:justify-start gap-4">
                        <button className="flex flex-col justify-start bg-white  text-black font-bold border py-8 px-6 rounded-lg">
                           <p className="text-2xl">Escolha seu ambiente</p> 
                            <p className="text-gray-700 mb-6 font-thin">
                                Na Lavick você encontra uma variedade de opções para sua escolha.
                            </p>
                        </button>
                        <button className="flex flex-col justify-start bg-orange-500 hover:bg-orange-600 text-lg text-white font-bold py-8 px-6 rounded">
                            Realize seu orçamento sem compromisso (41) 99878-1245
                        </button>
                        <button className="flex flex-col justify-start bg-white  text-black font-bold border py-8 px-6 rounded-lg">
                        <p className="text-2xl">Desenvolva seu Projeto</p> 
                            <p className="text-gray-700 mb-6 font-thin">
                            Estamos pronto para te ajudar com nossa equipe especializada
                            </p>
                        </button>
                    </div>

                    
                </div>

                {/* Coluna 2: Imagem */}
                <div className="flex flex-col gap-4 justify-center p-4 md:justify-end">
                    <Image
                        src={Quarto}
                        alt="Quarto com móveis planejados"
                        width={600}
                        height={200}
                        className="rounded-lg"
                    />
                    <Image
                        src={Quarto}
                        alt="Quarto com móveis planejados"
                        width={600}
                        height={200}
                        className="rounded-lg"
                    />
                </div>
            </section>

        </>
    )
};
