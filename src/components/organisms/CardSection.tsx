import React from "react";

export default function CardSection() {
    return (
        <>
            <section className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* <!-- Card 1 - Orange Card --> */}
                <div className="bg-orange-500 text-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center transform transition-transform duration-300 hover:scale-105">
                    <div className="mb-4">
                        <i className="fas fa-home text-5xl"></i>
                    </div>
                    <h2 className="text-lg font-semibold text-center mb-4">
                        Lavick Marcenaria desde 1989, oferecendo conforto e qualidade em móveis e decorações
                    </h2>
                    <h3 className="text-2xl font-bold text-center">
                        Confira nossos Serviços
                    </h3>
                </div>

                {/* <!-- Card 2 --> */}
                <div className="bg-white text-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-center items-center transform transition-transform duration-300 hover:scale-105">
                    <div className="mb-4">
                        <i className="fas fa-handshake text-orange-500 text-5xl"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-4">
                        Marcenaria Lavick Qualidade
                    </h3>
                    <p className="text-center mb-6">
                        Fabricado com materiais de alta qualidade e um rigoroso controle de produção
                    </p>
                    <button className="px-4 py-2 border border-black rounded-md text-sm hover:bg-gray-100">
                        Saiba Mais
                    </button>
                </div>

                {/* <!-- Card 3 --> */}
                <div className="bg-white text-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-center items-center transform transition-transform duration-300 hover:scale-105">
                    <div className="mb-4">
                        <i className="fas fa-check text-orange-500 text-5xl"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-4">
                        Marcenaria Lavick Compromisso
                    </h3>
                    <p className="text-center mb-6">
                        Nosso compromisso é oferecer móveis que aliam design, conforto e durabilidade em cada detalhe.
                    </p>
                    <button className="px-4 py-2 border border-black rounded-md text-sm hover:bg-gray-100">
                        Saiba Mais
                    </button>
                </div>

                {/* <!-- Card 4 --> */}
                <div className="bg-white text-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-center items-center transform transition-transform duration-300 hover:scale-105">
                    <div className="mb-4">
                        <i className="fas fa-dollar-sign text-orange-500 text-5xl"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-4">
                        Marcenaria Lavick Preço
                    </h3>
                    <p className="text-center mb-6">
                        Oferecemos os melhores preços do mercado sem comprometer a qualidade.
                    </p>
                    <button className="px-4 py-2 border border-black rounded-md text-sm hover:bg-gray-100">
                        Saiba Mais
                    </button>
                </div>
            </section>


        </>
    )
}