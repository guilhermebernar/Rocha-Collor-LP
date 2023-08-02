import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css/bundle';
import styles from '@/styles/ImageSlider.module.css';

export default function ImageSlider({ images }) {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className={styles.slider}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className={styles.imgcontainer}>
                        <Image src={`/assets/img/${image}`} alt={`Slide ${index}`} width={500} height={300} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
