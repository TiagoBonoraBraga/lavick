import React from "react";
import Image from "next/image";
import Foto from "../../../public/quartoMenino.jpeg";

export default function AboutSection1() {
    return (
        <>
            <section className="max-w-[1280px] mx-auto my-4 flex flex-col gap-16  items-center">
                <div className="flex flex-col md:flex-row  justify-center items-center">
                    <div className="md:w-1/2 p-6 border border-slate-200 m-4 rounded-lg bg-white shadow-lg ">
                        <h2 className="text-lg font-bold text-black mb-2">SOBRE</h2>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Lavick Marcenaria e Decorações
                        </h1>
                        <p className="text-gray-700 mb-6 text-justify">
                            Sobre nós – Desde 1989, a Lavick Marcenaria tem sido uma figura proeminente no mercado, estabelecida na Av. Getúlio Vargas, 1795. Especializada em transformar ideias em realidade, destacamo-nos pelo conforto, qualidade e compromisso com a responsabilidade ambiental. Cada projeto que realizamos é uma expressão de dedicação e excelência sobre nossa empresa, criando ambientes que combinam funcionalidade e beleza para nossos clientes.
                        </p>
                    </div>
                    <div className="md:w-1/2 p-6 ">
                        <Image src={Foto} alt="Lavick Marcenaria" className="rounded-lg" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row  justify-center items-center">
                    
                    <div className="md:w-1/2 p-6 border border-slate-200 m-4 rounded-lg bg-white shadow-lg">                       
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Tudo para sua Casa.
                        </h1>
                        <p className="text-gray-700 mb-6 text-lg text-justify">
                            Na Lavick Marcenaria, oferecemos uma ampla variedade de móveis sob medida, persianas e cortinas elegantes, pisos laminados e vinílicos duráveis, além de uma seleção incrível de papel de parede para transformar seus ambientes com estilo e praticidade. Sobre nós – Combinamos conforto, qualidade e design para criar espaços que você vai amar.
                        </p>
                    </div>
                    <div className="md:w-1/2 p-6 ">
                        <Image src={Foto} alt="Lavick Marcenaria" className="rounded-lg" />
                    </div>
                </div>
            </section>

        </>
    )
}