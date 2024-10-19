import Image from "next/image";
import { useState } from "react";

interface ImageProps {
    img: string;
    i: number;
}

interface ImageGalleryProps {
    images: string[]; // Array de imagens passado como prop
}

export default function ImageGallery({ images }: ImageGalleryProps) {
    const [data, setData] = useState<ImageProps>({ img: '', i: 0 });

    // Função para abrir a foto
    const viewImage = (img: string, i: number) => {
        setData({ img, i });
        console.log("Imagem aberta:", img, i);
    };

    // Função das funcionalidades dos botões
    const ImgAction = (action?: string) => {
        const i = data.i;
        if (action === 'next-image' && i < images.length - 1) {
            setData({ img: images[i + 1], i: i + 1 });
        }
        if (action === 'previous-image' && i > 0) {
            setData({ img: images[i - 1], i: i - 1 });
        }
        if (!action) {
            setData({ img: '', i: 0 });
        }
    };

    return (
        <>
            {data.img && (
                <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-80 z-[9999] flex justify-center items-center  mx-auto">
                    <button
                        onClick={() => ImgAction()}
                        className="absolute top-5 right-10 text-white text-3xl"
                    >
                        X
                    </button>
                    <button
                        onClick={() => ImgAction('previous-image')}
                        className="font-semibold bg-white rounded-md p-4 mr-5 absolute left-80 top-[80%] transform -translate-y-1/2"
                    >
                        Back
                    </button>
                    <Image
                        src={data.img}
                        alt="Imagem"
                        width={600}
                        height={500}
                        className="mx-auto block rounded-lg"
                    />
                    <button
                        onClick={() => ImgAction('next-image')}
                        className="font-semibold bg-white rounded-md p-4 ml-5 absolute right-80 top-[80%] transform -translate-y-1/2"
                    >
                        Next
                    </button>
                </div>
            )}


            <div className="flex flex-wrap justify-center items-center p-2 w-full">
                {images.map((image, i) => (
                    <Image
                        key={i}
                        src={image}
                        className="w-[40%] ss:w-[100%] block m-1 cursor-pointer rounded-2xl"
                        alt={`Imagem ${i}`}
                        width={300}
                        height={300}
                        onClick={() => viewImage(image, i)}
                    />
                ))}
            </div>
        </>
    );
}
