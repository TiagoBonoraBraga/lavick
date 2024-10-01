import React from "react";

export default function Menu() {
    return (
        <>
            <nav className="flex flex-row  justify-center align-middle gap-4">
                <ul>
                    <li className="flex items-center p-4 text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-black hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[2px] before:w-full before:bg-hover before:origin-bottom-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                        Home
                    </li>
                </ul>
                <ul>
                    <li className="flex items-center p-4 text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-black hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[2px] before:w-full before:bg-hover before:origin-bottom-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                        Sobre
                    </li>
                </ul>
                <ul>
                    <li className="flex items-center p-4 text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-black hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[2px] before:w-full before:bg-hover before:origin-bottom-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                        Projetos
                    </li>
                </ul>
                <ul>
                    <li className="flex items-center p-4 text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-black hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[2px] before:w-full before:bg-hover before:origin-bottom-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                        Contato
                    </li>
                </ul>
            </nav>
        </>
    )
}