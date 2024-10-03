import React from "react";
import Image from "next/image";
import Background from "../../../public/lavickFachadOpaca.jpg";

export default function AboutHeader() {
    return (
        <>
            <section className="max-w-[1280px] mx-auto relative overflow-hidden ">
                {/* Imagem de fundo com metade da altura */}
                <div className="relative h-[50vh] ">
                    <Image
                        src={Background}
                        alt="Lavick Marcenaria"                       
                    />
                    {/* Overlay escuro sobre a imagem */}
                    <div className="absolute inset-0 md:bg-slate-900 opacity-50"></div>
                </div>

                {/* Texto centralizado acima da imagem */}
                <div className="absolute top-[30%] left-1/2 font-black transform -translate-x-1/2 text-white text-center p-6 md:p-10 rounded-lg w-full max-w-[900px]">
                    <h1 className="text-4xl md:text-2xl lg:text-4xl mb-2 ">
                    Conheça Nossa História.
                    </h1>
                    
                </div>
            </section>

        </>
    )
}