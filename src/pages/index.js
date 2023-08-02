import fs from 'fs'
import Head from 'next/head'
import path from 'path'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import CampainVideo from '@/components/CampainVideo'
import ImageSlider from '@/components/ImageSlider'
import ContactButton from '@/components/ContactButton'


export default function Home({ images }) {
  return (
    <main className={styles.container}>
      <Head>
        <link rel="icon" href="/assets/logos/logo-nobg.svg" />
        <title>Rocha Collor | Pintura, Massas e Qualidade</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/assets/logos/logo-nobg.png"
            alt="Logo"
            width={200}
            height={150}
          />
        </div>
      </header>

      <h2 className={styles.title}>Somos solução para pintura e revestimento</h2>

      <CampainVideo />

      <p className={styles.description}>
        Na <span className={styles.highlight}>Rocha Collor</span>, com sede em{" "}
        <span className={styles.location}>Rio Bonito, Rio de Janeiro</span>,
        oferecemos soluções de pintura profissional para combater umidade e
        rachaduras. Nossos produtos de{" "}
        <span className={styles.highlight}>alta qualidade</span> repelem a água
        da chuva, protegem contra o calor e estão disponíveis em uma variedade
        de texturas e revestimentos.
        <p className={styles.promotion}>
          Além disso, temos uma{" "}
          <span className={styles.highlight}>promoção especial</span>: na compra
          de 10 barricas de 21 kg, você ganha 1 seladora de 16L.
        </p>
        <p className={styles.description}>
          Estamos também em busca de um{" "}
          <span className={styles.jobOpening}>
            representante de vendas experiente
          </span>{" "}
          para se juntar à nossa equipe, sendo empresário, logista ou
          empreededor individual.
        </p>
        <p className={styles.cta}>
          <a
            href="https://wa.me/5521986368650?text=Ol%C3%A1%2C+vim+para+saber+sobre+as+condi%C3%A7%C3%B5es+para+me+tornar+um+revendedor."
            className={styles.ctaLink}
          >
            Clique e saiba mais sobre revenda!
          </a>
        </p>
      </p>

      <ImageSlider images={images} />

      <ContactButton />
    </main>
  );
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
