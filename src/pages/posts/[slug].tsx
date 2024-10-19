
import { useRouter } from 'next/router';
import Image from "next/image";
import { posts } from '../../api/posts.mocks';
import Link from 'next/link';

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;

  if (!router.isFallback && !slug) {
    return <p>Carregando...</p>;
  }

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <p>Postagem não encontrada.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-50 tracking-wide">
      <h1 className="text-4xl font-bold mb-6 mt-20 text-center">{post.title}</h1>
      <div>
        <div className='flex justify-center items-center'>
          <Image src={post.imagePost} alt="" width={600} height={100} className='rounded-lg mb-6 ' />
        </div>
        <h2 className='text-xl font-bold mb-2'>{post.subTitle}</h2>
        {post.items.map((item, index) => (
          <div key={index}>
            <h3 className='text-lg font-bold '>{item.title}</h3>
            <p className='mb-4 '>{item.content}</p>
          </div>
        ))}
        <h3 className='text-xl font-bold mb-2'>{post.subTitle2}</h3>
        {post.items2.map((item, index) => (
          <div key={index}>
            <h3 className='text-lg font-bold'>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
        <h3 className='text-xl font-bold my-2'>{post.subTitle3}</h3>
        <p>{post.conclusion}</p>
      </div>
      <button className='py-6 font-bold text-xl cursor-pointer'>
        <Link href={"/blog"}>
          <span>Voltar</span>
        </Link>
      </button>
    </div>
  );
}
