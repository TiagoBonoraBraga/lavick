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
                            <p className="font-bold text-lg">Visite nosso Showroom e fique por dentro das novidades</p>
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
                        <div className="mt-6">
                            <h2 className="text-xl font-bold text-black mb-4">Nossa Localização</h2>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.000125034327!2d-49.28360999999999!3d-25.430781299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d50d4b6f3a29a5%3A0x5b21518e456dc65b!2sAv.%20Get%C3%BAlio%20Vargas%2C%201795%20-%20Rebou%C3%A7as%2C%20Curitiba%20-%20PR%2C%2080250-001!5e0!3m2!1spt-BR!2sbr!4v1635474545450!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="200"
                                style={{ border: "0" }}                          
                                loading="lazy"
                                title="Localização Lavick Marcenaria"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}