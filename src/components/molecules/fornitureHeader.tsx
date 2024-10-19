import React from "react";

interface FornitureHeaderProps {
    h1: string;   
    p: string;   
}

export default function FornitureHeader({ h1, p, }: FornitureHeaderProps) {
    return (
        <>
            <section className="py-16 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 mx-auto mb-6 ">{h1}</h1>
                    <p className="text-gray-600 mb-18 text-lg">
                        {p}
                    </p>
                </div>
            </section>

        </>
    )
}