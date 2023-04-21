import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import sombrero from "../assets/parteLogos/atom/Sombrero.png";
import engranajes from "../assets/parteLogos/atom/Engranajes.png";
import cruzAmarilla from "../assets/parteLogos/atom/CruzAmarilla.png";
import corazon from "../assets/parteLogos/atom/Corazon.png";
import cruzBlanca from "../assets/parteLogos/atom/CruzBlanca.png";
import hachas from "../assets/parteLogos/atom/Hachas.png";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const PartesLogo = () => {
  const slides = [
    {
      id: 1,
      image: sombrero,
      alt: "1"
    },
    {
      id: 2,
      image: engranajes,
      alt: "2"
    },
    {
      id: 3,
      image: cruzAmarilla,
      alt: "3"
    },
    {
      id: 4,
      image: corazon,
      alt: "4"
    },
    {
      id: 5,
      image: cruzBlanca,
      alt: "5"
    },
    {
      id: 6,
      image: hachas,
      alt: "6"
    },
  ];

  const swiperParams = {
    slidesPerView: 4,
    spaceBetween: -100,
    navigation: true,
    loop: false,
    autoplay: { delay: 2000 },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
    initialSlide: 0,
  };


  return (
    <Swiper {...swiperParams} className='bg-fondo2 p-10 '>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img src={slide.image} alt={slide.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PartesLogo;
