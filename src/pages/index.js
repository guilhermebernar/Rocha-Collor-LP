import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import CampainVideo from "@/components/CampainVideo";
import ImageSlider from "@/components/ImageSlider";
import ContactButton from "@/components/ContactButton";
import GoogleTagManager from "@/components/GoogleTagManeger";
import Script from "next/script";

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadAssets = async () => {
        const images = [
          "img1.jpg",
          "img2.jpg",
          "img3.jpg",
          "img4.jpg",
          "img5.jpg",
          "img6.jpg",
          "img7.jpg",
        ];
        setImages(images);
      };
    loadAssets();
  }, []);

  const minhaUrl = 'https://guilhermebernar.github.io/Rocha-Collor-LP';

  const handleContactButtonClick = () => {
    gtag_report_conversion(minhaUrl);
  }

  return (
    <main className={styles.container}>
      <Head>
        <link
          rel="icon"
          href="https://guilhermebernar.github.io/Rocha-Collor-LP/assets/logos/logo-nobg.svg"
        />
        <title>
          Rocha Collor | Pintura de Luxo e Revestimentos de Alta Qualidade
        </title>
        
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-713223450"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-713223450');
          `
        }}>
        </script>
        <script dangerouslySetInnerHTML={{
          __html: `
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-713223450/GjBaCLj1npkYEJrai9QC',
                  'event_callback': callback
              });
              return false;
            }
          `
        }}>
        </script>
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="https://guilhermebernar.github.io/Rocha-Collor-LP/assets/logos/logo-nobg.png"
            alt="Logo Rocha Collor - Pintura de Luxo"
            width={200}
            height={150}
          />
        </div>
      </header>

      <h2 className={styles.title}>
        Elevamos a Arte da Pintura ao Próximo Nível
      </h2>

      <CampainVideo />

      <p className={styles.description}>
        Localizada em{" "}
        <span className={styles.location}>
          Rio Bonito e com atuação em todo o estado do Rio de Janeiro
        </span>
        , a <span className={styles.highlight}>Rocha Collor</span> vai além da
        simples pintura: nós transformamos espaços. Especializados em{" "}
        <span className={styles.highlight}>
          pinturas de luxo e revestimentos de alta qualidade
        </span>
        , nossos produtos são a escolha ideal para ambientes residenciais e
        comerciais sofisticados. Oferecemos soluções anti-mofo, anti-umidade e
        anti-infiltração, garantindo a impermeabilidade e durabilidade que você
        busca. Além disso, trabalhamos com uma ampla gama de{" "}
        <span className={styles.highlight}>massas corridas personalizadas</span>{" "}
        e texturas variadas para atender às suas necessidades específicas.
      </p>

      <p className={styles.promotion}>
        Aproveite nossa{" "}
        <span className={styles.highlight}>oferta exclusiva</span>: na compra de
        10 barricas de tinta premium de 21 kg, receba uma seladora de 16L como
        cortesia.
      </p>
      <p className={styles.description}>
        Estamos em busca de{" "}
        <span className={styles.jobOpening}>
          representantes de vendas qualificados
        </span>{" "}
        para expandir nossa marca premium. Se você é um empresário, lojista ou
        empreendedor individual, essa é a sua oportunidade.
      </p>
      {/* <p className={styles.cta}>
        <a
          href="https://wa.me/5521999520783?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+como+me+tornar+um+revendedor+de+produtos+premium."
          className={styles.ctaLink}
        >
          Descubra Como Fazer Parte da Nossa Rede de Revendedores Premium!
        </a>
      </p> */}

      <ImageSlider images={images} />

      <ContactButton onClick={handleContactButtonClick}/>
    </main>
  );
}
