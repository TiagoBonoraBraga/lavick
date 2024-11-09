
import Link from 'next/link';
import Image from "next/image";
import { posts } from '../api/posts.mocks';
import SEO from '@/components/molecules/Seo';

export default function Blog() {
  return (
    <>
    <SEO
      title="Lavick Marcenaria - Blog"
      description="Lavick Marcenaria - comércio de móveis planejados, pisos laminados, persianas, cortinas e papel de parede."
      keywords="moveis planejados, desing de interiores, cozinhas planejadas, dormitórios planejados, escritório planejado"
      image="/logo/logoPreto.png" // URL da sua imagem de Open Graph
      url="https://lavickmarcenaria.com.br" // URL da página
      author="Lavick Marcenaria" // Nome do autor do conteúdo
      locale="pt_BR" // Localização e idioma do conteúdo
    />
    <main className="container mx-auto px-4 py-8 bg-backgroundDiv">
        <h1 className="text-xl font-bold my-16  pt-6 text-center">Fique por dentro de todas as novidades e descubra as últimas tendências em marcenaria, revestimentos e decoração. </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="border rounded-lg p-4 shadow hover:shadow-2xl bg-white">
              <Image src={post.image} alt="" width={400} height={100} className='rounded-lg mb-6' />
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4 text-justify">{post.excerpt}</p>
              <Link href={`/posts/${post.slug}`} className="text-blue-500 hover:underline">
                <h3>Ler mais</h3>
              </Link>
            </div>
          ))}
        </div>
      </main></>
  );
}
