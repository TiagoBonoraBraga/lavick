
import { useRouter } from 'next/router';
import { posts } from '../../api/posts.mocks';

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <div className="prose prose-lg">
        <h2>{post.subTitle}</h2>
        <p>{post.content1}</p>
        <h3>{post.subTitle2}</h3>
        <p>{post.content2}</p>
        <h3>{post.subTitle3}</h3>
        <p>{post.conclusion}</p>
      </div>
    </div>
  );
}
