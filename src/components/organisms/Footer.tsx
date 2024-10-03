import React from "react";
import Image from 'next/image';
import Logo from "../../../public/logoBranco.png";
import Link from "next/link";

export default function Footer() {
    return (
        <>
             <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col xs:flex-row justify-between">
                    <div className="flex items-center mb-4 xs:mb-0">
                        <Image src={Logo} alt="Logo Lavick" width={300} />
                    </div>

                    <div className="flex flex-col xs:flex-row">                          
                        <div className="mr-4 xs:mr-8 mb-4 xs:mb-0">
                            <h3 className="text-lg font-bold mb-2 text-orange-500">Lavick</h3>
                            <ul>
                                <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
                                <li><a href="/about" className="hover:text-orange-500">Sobre</a></li>
                                <li><a href="/moveis" className="hover:text-orange-500">Móveis sob Medida</a></li>
                                <li><a href="/serviços" className="hover:text-orange-500">Serviços</a></li>
                                <li><a href="/blog" className="hover:text-orange-500">Blog</a></li>
                                <li><a href="/contato" className="hover:text-orange-500">Contato</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-2 text-orange-500">Endereço</h3>
                            <p>Av. Getúlio Vargas, 1795 - Rebouças</p>
                            <h4 className="text-lg font-bold mb-2 text-orange-500">Email</h4>
                            <p>lavickdec@gmail.com</p>
                            <h4 className="text-lg font-bold mb-2 text-orange-500">Fone</h4>
                            <p>(41) 99878-1245</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-10">
                    <p>&copy; 2024 Tiago Dev</p>
                </div>
            </div>
        </footer>
        </>
    )
}