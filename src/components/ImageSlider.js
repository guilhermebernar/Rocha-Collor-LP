import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider({ images }) {
  // Settings for the slider
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <Image src={`/assets/img/${image}`} alt={`Slide ${index}`} width={500} height={300} />
        </div>
      ))}
    </Slider>
  );
}

