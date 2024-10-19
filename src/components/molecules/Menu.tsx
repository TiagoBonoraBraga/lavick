import React, { useState } from "react";
import { useRouter } from 'next/router';


interface AccordionState {
    furniture: boolean;
    services: boolean;
};

interface MenuProps {
    closeMenu: () => void;  // Função para fechar o menu
};

export default function Menu({ closeMenu }: MenuProps) {

    const [isOpen, setIsOpen] = useState<AccordionState>({ furniture: false, services: false }); // Controle do acordeão
    const router = useRouter();

    // Função para alternar o estado aberto/fechado
    const toggleAccordion = (section: keyof AccordionState) => {
        setIsOpen(prevState => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    const closeAccordionAndNavigate = (section: keyof AccordionState, path: string) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [section]: false,
        }));
        // Navega para a nova rota após fechar o acordeão
        router.push(path);
    };

    return (
        <>
            <nav className="flex md:flex-row flex-col justify-center align-middle gap-4 tracking-wide">
                <ul>
                    <li className="flex items-center p-4 cursor-pointer text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-orange-500 hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[2px] before:w-full before:bg-orange-500 before:origin-bottom-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                        <span onClick={() => { closeAccordionAndNavigate('furniture', '/'); closeMenu(); }}>Home</span>
                    </li>

                </ul>
                <ul>
                    <li className="flex items-center p-4 cursor-pointer text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-orange-500 hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[2px] before:w-full before:bg-orange-500 before:origin-bottom-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                        <span onClick={() => {closeAccordionAndNavigate('furniture', '/about'); closeMenu(); }}>Sobre</span>
                    </li>
                </ul>

                <ul className="relative group">
                    <li onClick={() => toggleAccordion('furniture')} className="flex items-center p-4 cursor-pointer text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-orange-500 hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[2px] before:w-full before:bg-orange-500 before:origin-bottom-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                        Móveis sob Medida
                    </li>

                    {isOpen.furniture && (
                        <ul className="absolute left-0 w-48 bg-white shadow-lg rounded-lg z-50">
                            <li onClick={() => {closeAccordionAndNavigate('furniture', '/forniture/bedroom'); closeMenu();}} className="p-3 cursor-pointer border-b border-gray-200 bg-white hover:bg-gray-100 hover:text-orange-500">
                                Dormitório
                            </li>
                            <li onClick={() => {closeAccordionAndNavigate('furniture', '/forniture/kitchen'); closeMenu();}} className="p-3 cursor-pointer border-b border-gray-200 bg-white hover:bg-gray-100 hover:text-orange-500">
                                Cozinha
                            </li>
                            <li onClick={() => {closeAccordionAndNavigate('furniture', '/forniture/bathrooms'); closeMenu();}} className="p-3 cursor-pointer border-b border-gray-200 bg-white hover:bg-gray-100 hover:text-orange-500">
                                Banho
                            </li>
                            <li onClick={() => {closeAccordionAndNavigate('furniture', '/forniture/closet'); closeMenu();}} className="p-3 cursor-pointer border-b border-gray-200 bg-white hover:bg-gray-100 hover:text-orange-500">
                                Closet
                            </li>
                            <li onClick={() => {closeAccordionAndNavigate('furniture', '/forniture/laundry'); closeMenu();}} className="p-3 cursor-pointer border-b border-gray-200 bg-white hover:bg-gray-100 hover:text-orange-500">
                                Lavanderia
                            </li>
                            <li onClick={() => {closeAccordionAndNavigate('furniture', '/forniture/home-theater'); closeMenu();}} className="p-3 cursor-pointer border-b border-gray-200 bg-white hover:bg-gray-100 hover:text-orange-500">
                                Home Theater
                            </li>
                            <li onClick={() => {closeAccordionAndNavigate('furniture', '/forniture/office'); closeMenu();}} className="p-3 cursor-pointer border-b border-gray-200 bg-white hover:bg-gray-100 hover:text-orange-500">
                                Escritório
                            </li>
                            <li onClick={() => {closeAccordionAndNavigate('furniture', '/forniture/dining-room'); closeMenu();}} className="p-3 cursor-pointer border-b border-gray-200 bg-white hover:bg-gray-100 hover:text-orange-500">
                                Sala de Jantar
                            </li>
                            {/* Continue para os outros itens */}
                        </ul>
                    )}
                </ul>

                <ul className="relative group">
                    <li onClick={() => toggleAccordion('services')} className="flex items-center p-4 text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-orange-500 hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[2px] before:w-full before:bg-orange-500 before:origin-bottom-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100 cursor-pointer">
                        Serviços
                    </li>

                    {isOpen.services && (
                        <ul className="absolute left-0 w-48 bg-white shadow-lg rounded-lg z-50">
                            <li onClick={() => {closeAccordionAndNavigate('services', '/services/floors'); closeMenu();}} className="p-3 cursor-pointer border-b bg-white border-gray-200 hover:bg-gray-100 hover:text-orange-500">
                                Pisos
                            </li>
                            <li onClick={() => {closeAccordionAndNavigate('services', '/services/blinds'); closeMenu();}} className="p-3 cursor-pointer border-b bg-white border-gray-200 hover:bg-gray-100 hover:text-orange-500">
                                Persianas e Cortinas
                            </li>
                            <li onClick={() => {closeAccordionAndNavigate('services', '/services/wallpaper'); closeMenu();}} className="p-3 cursor-pointer border-b bg-white border-gray-200 hover:bg-gray-100 hover:text-orange-500">
                                Papel de Parede
                            </li>
                        </ul>
                    )}
                </ul>

                <ul>
                    <li className="flex items-center p-4 cursor-pointer text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-orange-500 hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[2px] before:w-full before:bg-orange-500 before:origin-bottom-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                        <span onClick={() => { closeAccordionAndNavigate('furniture', '/blog'); closeMenu(); }}>Blog</span>
                    </li>

                </ul>
                <ul>
                    <li className="flex items-center p-4 cursor-pointer text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-orange-500 hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[2px] before:w-full before:bg-orange-500 before:origin-bottom-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                        <span onClick={() => {closeAccordionAndNavigate('furniture', '/contact'); closeMenu(); }}>Contato</span>
                    </li>
                </ul>
            </nav>


        </>
    );
}
