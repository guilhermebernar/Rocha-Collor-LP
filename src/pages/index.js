import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import VideoSlider from '@/components/VideoSlider'
// import ImageSlider from '@/components/ImageSlider'
import ContactButton from '@/components/ContactButton'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rocha Collor - Soluções de Pintura e Oportunidades</title>
      </Head>

      <h1>Rocha Collor - Sua solução para pintura e revestimento em Rio Bonito</h1>

      {/* <VideoSlider /> */}

      <p>Na Rocha Collor, oferecemos soluções de pintura profissional para combater umidade e rachaduras. Nossos produtos de alta qualidade repelem a água da chuva, protegem contra o calor e estão disponíveis em uma variedade de texturas e revestimentos. Além disso, temos uma promoção especial: na compra de 10 barricas de 21 kg, você ganha 1 seladora de 16L. Estamos também em busca de um representante de vendas experiente para se juntar à nossa equipe. Clique para saber mais!</p>

      {/* <ImageSlider /> */}

      <ContactButton />
    </div>
  )
}
