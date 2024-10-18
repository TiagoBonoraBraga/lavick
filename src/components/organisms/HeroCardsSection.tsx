import React from "react";
import HeroCard1 from "../molecules/HeroCard1";
import HeroCard2 from "../molecules/HeroCard2";
import { faWrench, faHandshake, faTag } from '@fortawesome/free-solid-svg-icons';

export default function HeroCardsSection() {
    return (
        <>
            <section className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 lg:grid-cols-4 gap-6 tracking-wide">                
                <HeroCard1  h2="Lavick Marcenaria desde 1989, oferecendo conforto e qualidade em móveis e decorações" h3="Confira nossos Serviços" />
                <HeroCard2 icon={faWrench} h3="Lavick Marcenaria Qualidade" p=" Fabricado com materiais de alta qualidade e um rigoroso controle de produção" button="Saiba Mais" />
                <HeroCard2 icon={faHandshake} h3="Lavick Marcenaria Compromisso" p=" Nosso compromisso é oferecer móveis que aliam design, conforto e durabilidade em cada detalhe." button="Saiba Mais" />
                <HeroCard2 icon={faTag} h3="Lavick Marcenaria Preço e Atendiemnto" p="Oferecemos os melhores preços do mercado sem comprometer a qualidade." button="Saiba Mais" />                
            </section>
        </>
    )
}