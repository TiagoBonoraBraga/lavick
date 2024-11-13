import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Whatsapp from "../atoms/whatsapp";

interface ChildrenProps {
    children: React.ReactNode;
}

export default function Layout({children}: ChildrenProps) {
    return (
        <>
        <Header />
        <main className="flex  flex-col max-w-[1280px] mx-auto min-h-screen">
            {children}
        <Whatsapp />   
        </main>
        <Footer />     
        </>
    )
}