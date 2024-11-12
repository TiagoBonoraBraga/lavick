import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export default function MainSlide() {

    const slides = [
        { url: "/homeSlide.jpg" },
        { url: "/lavanderiaSlide.jpg" },
        { url: "/quartoSlide.jpg" },
        { url: "/cozinhas/cozinhaVerde2.jpeg" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide();  // Troca de slide a cada 5 segundos
        }, 5000);

        // Limpa o temporizador quando o componente desmontar ou quando currentIndex mudar
        return () => clearTimeout(timer);
    }, [currentIndex]);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="max-w-[1500px] w-full m-auto relative group rounded">
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className="w-full h-[50vh] xs:h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[800px] rounded-xl bg-center bg-contain bg-no-repeat duration-500 object-cover"
            ></div>

            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={50} />
            </div>

            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={50} />
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center ">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>


    );
}
