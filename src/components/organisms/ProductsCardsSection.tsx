import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
  button: string;
  link: string;
}

const cardsData: ProductCardProps[] = [
  {
    title: 'Dormitórios',
    image: '/quartoMenino.jpeg',
    description: 'Dormitórios de casal e solteiro são projetados para oferecer conforto e estilo, atendendo às necessidades individuais de cada pessoa. Para casais, os móveis são pensados para otimizar o espaço e proporcionar um ambiente aconchegante e funcional. Já os dormitórios de solteiro focam em praticidade e personalização, criando um espaço para viver seus sonhos',
    button: 'Saiba Mais',
    link: "/forniture/bedroom"
  },
  {
    title: 'Closets',
    image: '/closet.jpeg',
    description: 'Um closet é um espaço dedicado à organização e armazenamento de roupas, calçados e acessórios, proporcionando praticidade e elegância ao dia a dia. Projetado para otimizar o uso do espaço, um closet bem planejado oferece fácil acesso a todos os itens, mantendo tudo sempre em ordem e ao alcance das mãos. Visite nosso showroom e conheça nossas opções',
    button: 'Saiba Mais',
    link: "/forniture/closet"
  },
  {
    title: 'Cozinhas',
    image: '/cozinhalaranja.jpg',
    description: 'Cozinhas planejadas são o coração da casa, projetadas para unir funcionalidade e estética. Com móveis sob medida, cada centímetro é aproveitado, proporcionando um ambiente organizado e eficiente. Materiais de alta qualidade garantem durabilidade e facilidade na manutenção. O design ergonômico assegura conforto durante o uso diário. Confira nossas opções',
    button: 'Saiba Mais',
    link: "/forniture/kitchen"
  },
  {
    title: 'Persianas e Cortinas',
    image: '/percianas.jpeg',
    description: 'A venda de persianas e cortinas oferece soluções práticas e elegantes para controle de luz e privacidade em qualquer ambiente. Com uma variedade de estilos, materiais e cores, é possível encontrar opções que complementam a decoração e atendem às necessidades específicas dos espaços. Produtos de qualidade garantem durabilidade e fácil manutenção, proporcionando um toque final de sofisticação e funcionalidade.',
    button: 'Saiba Mais',
    link: "/services/blinds"
  },
  {
    title: 'Pisos Laminados e Vinilicos',
    image: '/piso.jpg',
    description: 'Pisos laminados e vinílicos são opções populares pela sua durabilidade e fácil manutenção. Eles oferecem uma vasta gama de estilos e texturas, imitando materiais naturais como madeira e pedra. Ambos são resistentes a desgastes e ideais para áreas de alto tráfego. Sua instalação prática e rápida torna a renovação dos ambientes simples e eficiente.Cozinhas planejadas são o coração da casa, projetadas para unir funcionalidade e estética...',
    button: 'Saiba Mais',
    link: "/services/floors"
  },
  {
    title: 'Papel de Parede',
    image: '/papel4.jpg',
    description: 'O papel de parede é uma solução versátil e impactante para decorar ambientes, oferecendo uma ampla gama de estilos que vão do clássico ao contemporâneo. Além de agregar personalidade ao espaço, é fácil de aplicar e pode ser uma alternativa econômica para renovar paredes sem grandes reformas. Com opções que imitam texturas naturais e estampas exclusivas, o papel de parede permite criar atmosferas única.',
    button: 'Saiba Mais',
    link: "/services/wallpaper"
  },
];

export default function ProductsCardsSection() {
  return (
    <section className="container mx-auto px-4 py-16 bg-slate-100 mt-20 ">
      <h1 className="text-4xl font-bold text-center mb-8">Tudo para sua casa</h1>
      <p className="text-lg text-gray-700 text-center mb-16">
        Precisando de móveis, persianas e cortinas, piso laminado e vinílico ou papel de parede? Na Lavick Marcenaria tem!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 ml-4 text-center">
            <Image
              src={card.image}
              alt={card.title}
              className="rounded-lg mb-4 text-center mx-auto"
              width={300}
              height={200}
            />
            <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
            <p>{card.description}</p>
            <Link href={card.link} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4">
              {card.button}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};


