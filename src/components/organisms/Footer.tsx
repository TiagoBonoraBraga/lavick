import React from "react";
import Image from 'next/image';
import Logo from "../../../public/logoPreto.png";

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col sm:flex-row justify-between">
                        <div className="flex items-center mb-4 sm:mb-0">
                            <Image src={Logo} alt="Logo Lavick" width={100} />
                                <p className="ml-4 text-lg font-bold">LAVICK</p>
                        </div>

                        <div className="flex flex-col sm:flex-row">
                            <div className="mr-4 sm:mr-8">
                                <h3 className="text-lg font-bold mb-2">Suporte</h3>
                                <p>(41) 99878-1245</p>
                            </div>

                            <div className="mr-4 sm:mr-8">
                                <h3 className="text-lg font-bold mb-2">Lavick</h3>
                                <ul>
                                    <li><a href="#" className="hover:text-gray-300">Sobre</a></li>
                                    <li><a href="#" className="hover:text-gray-300">Móveis sob Medida</a></li>
                                    <li><a href="#" className="hover:text-gray-300">Papel de Parede</a></li>
                                    <li><a href="#" className="hover:text-gray-300">Piso Laminado e Vinílico</a></li>
                                    <li><a href="#" className="hover:text-gray-300">Persianas e Cortinas</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-2">Endereço</h3>
                                <p>Av. Getúlio Vargas, 1795 - Rebouças</p>
                                <p>atendimento@lavickmarcenaria.cia.tv</p>
                                <p>(41) 99878-1245</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <p>&copy; 2024 Tiago Dev</p>
                    </div>
                </div>
            </footer>
        </>
    )
}