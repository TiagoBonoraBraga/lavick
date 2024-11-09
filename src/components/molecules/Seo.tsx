import Head from 'next/head';

interface SeoProps {
    title: string;
    description: string;
    keywords: string;
    image: string;
    url: string;
    author?: string;       // Opcional: nome do autor do conteúdo
    locale?: string;       // Opcional: idioma e localização (ex: "pt_BR")
}

export default function SEO({ title, description, keywords, image, url, author = "Lavick Marcenaria",  locale = "pt_BR"  }: SeoProps) {
  return (
    <Head>
      {/* Title */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Lavick Marcenaria" />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@seu_twitter" />  {/* Substitua pelo Twitter da empresa, se tiver */}
      <meta name="twitter:creator" content="@seu_twitter" />

      <meta http-equiv="content-language" content={locale} />
      <meta name="rating" content="general" />
      
      {/* Favicon */}
      <link rel="icon" href="/logo/logoPreto.png" />
    </Head>
  );
};


