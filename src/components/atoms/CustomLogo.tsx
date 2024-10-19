import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo/logoPreto.png";

export default function CustomLogo() {
    return (
        <>
        <div>
            <Image src={Logo} width={200} height={40} alt={"logo"}  />
        </div>
        </>
    )
}