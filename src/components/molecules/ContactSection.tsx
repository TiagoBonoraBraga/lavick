import React from "react";

export default function ContactSection() {
    return (
        <>
            <div className="container mx-auto pt-[100px]  ">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 bg-backgroundDiv  rounded-lg shadow-md p-20 mb-10 ">
                    <div>
                        <h1 className="text-lg font-bold text-black mb-2">Faça seu Orçamento</h1>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fale Conosco</h2>                       

                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-bold mb-2">Seu nome:</label>
                                <input type="text" className="w-full px-3 py-2 border rounded-lg" required />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-bold mb-2">Seu e-mail:</label>
                                <input type="email" className="w-full px-3 py-2 border rounded-lg" required />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-bold mb-2">Sua mensagem:</label>
                                <textarea className="w-full px-3 py-2 border rounded-lg" rows={4} required></textarea>
                            </div>

                            <button type="submit" className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">Enviar</button>
                        </form>
                    </div>
                    <div>
                        <div className="py-4">
                            <p className="font-bold">Visite nosso Showroom e fique por dentro das novidades</p>
                            <p><strong>Atendimento seg a sexta -</strong> 9:00 às 18:00 horas</p>
                            <p><strong>Sábado -</strong> 9:00 às 13:00 horas</p>
                        </div>
                        <div className="flex flex-col items-start mb-4">
                            <span className="text-lg font-bold text-black mb-2">Email</span>
                            <p>lavickdec@gmail.com</p>
                        </div>

                        <div className="flex flex-col items-start mb-4">
                            <span className="text-lg font-bold text-black mb-2">Fone</span>
                            <p>(41) 99878-1245</p>
                        </div>

                        <div className="flex flex-col items-start">
                            <span className="text-lg font-bold text-black mb-2">Endereço</span>
                            <p>Av. Getúlio Vargas, 1795 Rebouças - Curitiba - Pr</p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}