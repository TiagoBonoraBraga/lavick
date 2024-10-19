import React, { useState } from "react";
import Link from 'next/link';


type AccordionState = {
  furniture: boolean;
  services: boolean;
};

export default function Menu() {

  const [, setIsOpen] = useState<AccordionState>({ furniture: false, services: false }); // Controle do acordeão

  // Função para alternar o estado aberto/fechado
  const toggleAccordion = (section: keyof AccordionState) => {
    setIsOpen(prevState => ({
        ...prevState,
        [section]: !prevState[section],
    }));
};
    return (
        <>
            <nav className="flex md:flex-row flex-col justify-center align-middle gap-4">
                <ul>
                    <li className="flex items-center p-4 text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-orange-500 hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[2px] before:w-full before:bg-orange-500 before:origin-bottom-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                        <Link href="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li className="flex items-center p-4 text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-orange-500 hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[2px] before:w-full before:bg-orange-500 before:origin-bottom-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                        <Link href="/about">Sobre</Link>
                    </li>
                </ul>

                <ul className="relative group"> {/* Grupo para hover */}
                    <li onClick={() => toggleAccordion('furniture')} className="flex items-center p-4 text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-orange-500 hover:font-bold cursor-pointer">
                        Móveis sob Medida
                        {/* <span className="ml-2 w-4">▼</span> Seta simples */}
                    </li>

                    {/* Submenu que aparece no hover */}
                    <ul className="absolute left-0  hidden w-48 bg-white shadow-lg rounded-lg group-hover:block">
                        <li className="p-3 border-b border-gray-200 hover:bg-gray-100 hover:text-orange-500">
                            <Link href="/forniture/bedroom">Dormitório</Link>
                        </li>
                        <li className="p-3 border-b border-gray-200 hover:bg-gray-100 hover:text-orange-500">
                            <Link href="/forniture/kitchen">Cozinha</Link>
                        </li>
                        <li className="p-3 border-b border-gray-200 hover:bg-gray-100 hover:text-orange-500">
                            <Link href="/forniture/bathrooms">Banho</Link>
                        </li>
                        <li className="p-3 border-b border-gray-200 hover:bg-gray-100 hover:text-orange-500">
                            <Link href="/forniture/closet">Closet</Link>
                        </li>
                        <li className="p-3 border-b border-gray-200 hover:bg-gray-100 hover:text-orange-500">
                            <Link href="/forniture/laundry">Lavanderia</Link>
                        </li>
                        <li className="p-3 border-b border-gray-200 hover:bg-gray-100 hover:text-orange-500">
                            <Link href="/forniture/home-theater">Home Theater</Link>
                        </li>
                        <li className="p-3 border-b border-gray-200 hover:bg-gray-100 hover:text-orange-500">
                            <Link href="/forniture/office">Escritório</Link>
                        </li>
                        <li className="p-3 hover:bg-gray-100 hover:text-orange-500">
                            <Link href="/forniture/dining-room">Sala de Jantar</Link>
                        </li>
                    </ul>
                </ul>

                <ul className="relative group">
                    <li onClick={() => toggleAccordion('services')} className="flex items-center p-4 text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-orange-500 hover:font-bold cursor-pointer">
                        Serviços                        
                    </li>
                    <ul className="absolute left-0  hidden w-48 bg-white shadow-lg rounded-lg group-hover:block">
                        <li className="p-3 border-b border-gray-200 hover:bg-gray-100 hover:text-orange-500">
                            <Link href="/services/floors">Pisos</Link>
                        </li>
                        <li className="p-3 border-b border-gray-200 hover:bg-gray-100 hover:text-orange-500">
                            <Link href="/services/blinds">Persianas e Cortinas</Link>
                        </li>
                        <li className="p-3 border-b border-gray-200 hover:bg-gray-100 hover:text-orange-500">
                            <Link href="/services/wallpaper">Papel de Parede</Link>
                        </li>
                    </ul>
                </ul>
                <ul>
                    <li className="flex items-center p-4 text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-orange-500 hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[2px] before:w-full before:bg-orange-500 before:origin-bottom-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
                <ul>
                    <li className="flex items-center p-4 text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-orange-500 hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[2px] before:w-full before:bg-orange-500 before:origin-bottom-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                        <Link href="/contact">Contato</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
