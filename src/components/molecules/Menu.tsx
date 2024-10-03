import React from "react";
import Link from 'next/link';

export default function Menu() {
    return (
        <>
            <nav className="flex flex-row justify-center align-middle gap-4">
      <ul>
        <li className="flex items-center p-4 text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-black hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[2px] before:w-full before:bg-hover before:origin-bottom-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
          <Link href="/">Home</Link>
        </li>
      </ul>
      <ul>
        <li className="flex items-center p-4 text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-black hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[2px] before:w-full before:bg-hover before:origin-bottom-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
          <Link href="/about">Sobre</Link>
        </li>
      </ul>
      <ul>
        <li className="flex items-center p-4 text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-black hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[2px] before:w-full before:bg-hover before:origin-bottom-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
          <Link href="/moveis">Móveis sob Medida</Link>
        </li>
      </ul>
      <ul>
        <li className="flex items-center p-4 text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-black hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[2px] before:w-full before:bg-hover before:origin-bottom-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
          <Link href="/servicos">Serviços</Link>
        </li>
      </ul>
      <ul>
        <li className="flex items-center p-4 text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-black hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[2px] before:w-full before:bg-hover before:origin-bottom-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
      <ul>
        <li className="flex items-center p-4 text-primary no-underline gap-2 relative font-sans text-base font-normal leading-[21.79px] text-left transition-colors ease-in-out duration-300 hover:text-black hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-[-1px] before:h-[2px] before:w-full before:bg-hover before:origin-bottom-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
          <Link href="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
        </>
    )
}