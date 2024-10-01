import React from "react";
import Header from "../organisms/Header";

interface ChildrenProps {
    children: React.ReactNode;
}

export default function Layout({children}: ChildrenProps) {
    return (
        <>
        <Header />
        <main className="flex justify-center items-start flex-col max-w-[1280px] mx-auto min-h-screen">
            {children}
        </main>        
        </>
    )
}