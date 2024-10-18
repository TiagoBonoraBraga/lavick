import React, { useState } from "react";
import CustomLogo from "../atoms/CustomLogo";
import Menu from "../molecules/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="w-full max-w-[1280px] h-[72px] flex justify-between items-center bg-backgroundDiv fixed top-0 left-1/2 transform -translate-x-1/2 z-[1100] shadow-md px-4">
                <div>
                    <CustomLogo />
                </div>              
                <div className="hidden lg:flex">
                    <Menu />
                </div>               
                <div className="lg:hidden">
                    <button onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </header>         
            {isMenuOpen && (
                <div className="lg:hidden xs:flex xs:flex-col fixed top-[72px] left-0 right-0 bg-backgroundDiv z-50 shadow-md">
                    <Menu />
                </div>
            )}

        </>
    )
}