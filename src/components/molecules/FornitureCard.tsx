import React from "react";
import Image from "next/image";


interface CardProps {
    src: string;
    h2: string;
    p: string;
    alt: string;
}
export default function Card({ src, h2, p, alt }: CardProps) {
    return (
        <>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-hidden">
                    <Image
                        src={src}
                        alt={alt}
                        className="w-full h-56 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                        width={200}
                        height={300}
                    />
                </div>
                <div className="p-6">
                    <h2 className="text-lg font-semibold text-gray-800">{h2}</h2>
                    <p className="text-gray-600 mt-2">
                        {p}
                    </p>
                </div>
            </div>

        </>
    )
}