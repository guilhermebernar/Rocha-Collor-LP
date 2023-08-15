import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import CampainVideo from '@/components/CampainVideo';
import ImageSlider from '@/components/ImageSlider';
import ContactButton from '@/components/ContactButton';
import GoogleTagManager from '@/components/GoogleTagManeger';
import Script from 'next/script';

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadAssets = async () => {
      const loadAssets = async () => {
        // List of images
        const images = [
          'img1.jpg',
          'img2.jpg',
          'img3.jpg',
          'img4.jpg',
          'img5.jpg',
          'img6.jpg',
          'img7.jpg'
        ];
        setImages(images);

      };
  
      loadAssets();
    };

    loadAssets();
  }, []);

  return (
    <main className={styles.container}>
      <Head>
        <Script
          strategy="afterInteractive"
          >
          <GoogleTagManager />
        </Script>
        <link rel="icon" href="https://guilhermebernar.github.io/Rocha-Collor-LP/assets/logos/logo-nobg.svg" />
        <title>Rocha Collor | Pintura, Massas e Qualidade</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="https://guilhermebernar.github.io/Rocha-Collor-LP/assets/logos/logo-nobg.png"
            alt="Logo"
            width={200}
            height={150}
          />
        </div>
      </header>

      <h2 className={styles.title}>
        Somos solução para pintura e revestimento
      </h2>

      <CampainVideo />

      <p className={styles.description}>
        Na <span className={styles.highlight}>Rocha Collor</span>, com sede em{" "}
        <span className={styles.location}>Rio Bonito, Rio de Janeiro</span>,
        oferecemos soluções de pintura profissional para combater umidade e
        rachaduras. Nossos produtos de{" "}
        <span className={styles.highlight}>alta qualidade</span> repelem a água
        da chuva, protegem contra o calor e estão disponíveis em uma variedade
        de texturas e revestimentos.
      </p>
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
        para se juntar à nossa equipe, sendo empresário, logista ou empreededor
        individual.
      </p>
      <p className={styles.cta}>
        <a
          href="https://wa.me/5521999520783?text=Ol%C3%A1%2C+vim+para+saber+sobre+as+condi%C3%A7%C3%B5es+para+me+tornar+um+revendedor."
          className={styles.ctaLink}
        >
          Clique e saiba mais sobre revenda!
        </a>
      </p>

      <ImageSlider images={images} />

      <ContactButton />
    </main>
  );
}