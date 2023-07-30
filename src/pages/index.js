import fs from 'fs';
import Head from 'next/head'
import path from 'path';
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import CampainVideo from '@/components/CampainVideo'
import ImageSlider from '@/components/ImageSlider'
import ContactButton from '@/components/ContactButton'

export default function Home({ images }) {
  return (
    <main className={styles.container}>

      <Head>
        <div className={styles.logo}>
          {/* <Image src="/next.svg" alt="Logo" width={150} height={150} /> */}
        </div>
        <title>
          Rocha Collor - Soluções de Pintura e Oportunidades
        </title>
      </Head>

      <h1 className={styles.title}>Rocha Collor - Sua solução para pintura e revestimento em Rio Bonito</h1>

      <CampainVideo />

      <p className={styles.description}>Na Rocha Collor, oferecemos soluções de pintura profissional para combater umidade e rachaduras. Nossos produtos de alta qualidade repelem a água da chuva, protegem contra o calor e estão disponíveis em uma variedade de texturas e revestimentos. Além disso, temos uma promoção especial: na compra de 10 barricas de 21 kg, você ganha 1 seladora de 16L. Estamos também em busca de um representante de vendas experiente para se juntar à nossa equipe. Clique para saber mais!</p>

      <ImageSlider images={images} />

      <ContactButton />
      
    </main>
  )
}
export async function getStaticProps() {
  const imagesDir = path.join(process.cwd(), 'public/assets/img');
  const images = fs.readdirSync(imagesDir);

  return {
    props: {
      images
    }
  };
}
