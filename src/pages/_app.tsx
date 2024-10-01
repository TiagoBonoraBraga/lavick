import Layout from "@/components/templates/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Importa o CSS base
config.autoAddCss = false; // Impede a adição automática do CSS


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  )
  
}
