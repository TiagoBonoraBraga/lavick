import Image from "next/image";
import Background from "../../../public/cozinhaVerde2.jpeg";

export default function ImageSection() {
    return (
        <section className="max-w-[1280px] mx-auto relative overflow-hidden pt-[72px] md:pt-0">
            <Image
                src={Background}
                alt="Lavick Marcenaria"
                className="w-full h-auto"
            />
            <div className="hidden md:block absolute top-[30%] left-1/2 transform -translate-x-1/2 text-white text-center bg-black bg-opacity-70 p-6 md:p-10 rounded-lg w-full max-w-[900px] h-auto md:h-[200px]">
                <h1 className="text-4xl md:text-6xl lg:text-8xl mb-2 text-orange-500">
                    Lavick Marcenaria
                </h1>
                <p className="text-base md:text-lg ">
                    Tudo para sua casa, Móveis sob Medida, Persianas, Papel de parede e Piso Laminado. Venha conhecer nosso showroom.
                </p>
            </div>
        </section>

    );
};

