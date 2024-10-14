import React from "react";
import SecondHeader from "@/components/molecules/SecondHeader";
import ServiceTitle from "@/components/molecules/ServicesTitle";
import ServiceCard from "@/components/molecules/ServiceCard";
import { faPaintRoller, faLayerGroup, faTools, faCog } from '@fortawesome/free-solid-svg-icons';
import ImageGallery from "@/components/molecules/ImageGallery";

const imagesWallpaper= [
    "/papel.jpg",
    "/papel2.jpg",
    "/papel3.jpg",
    "/papel4.jpg",
    "/papel5.jpg",
    "/papel6.jpg",
    "/papel7.jpg",
    "/papelDeParede.jpg",
    "/papel1.jpg",
];

export default function Wallpaper() {
    return (
        <>
            <SecondHeader src="/quarto.jpg" title="Papel de Parede" />
            <main>
                <div className="bg-white p-8 sm:p-10 md:p-16 lg:p-20 m-4 sm:m-6 md:m-8 lg:m-10 rounded-lg shadow-xl border grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-start">
                        <ServiceTitle h2="Lavick Papéis de Parede" h1="Venha conhecer no Showroom!" p="A venda de papel de parede tem se tornado uma escolha cada vez mais popular para quem busca renovar a decoração de ambientes de forma prática e sofisticada."/>
                        <ServiceCard  icon={faCog} h3="Variedade de Estilos e Padrões" p="O papel de parede oferece uma infinidade de opções de cores, texturas e desenhos, permitindo personalizar qualquer espaço de acordo com o gosto pessoal e a temática desejada." />
                        <ServiceCard  icon={faLayerGroup} h3="Ocultação de Imperfeições" p="O papel de parede é uma excelente solução para disfarçar imperfeições nas paredes, como rachaduras, buracos ou irregularidades, proporcionando um acabamento impecável." />
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <ServiceCard  icon={faTools} h3="Durabilidade e Resistência" p="Feito com materiais de alta qualidade, o papel de parede é resistente a desgastes, riscos e manchas, garantindo uma longa vida útil quando bem cuidado." />
                        <ServiceCard  icon={faPaintRoller} h3="Fácil Aplicação e Remoção" p="Comparado à pintura, a aplicação do papel de parede é rápida e limpa. Além disso, muitos papéis de parede modernos são projetados para serem removidos facilmente, sem danificar a superfície da parede." />
                    </div>
                </div>
                <ImageGallery images={imagesWallpaper} />
            </main>
           
        </>
    )
}