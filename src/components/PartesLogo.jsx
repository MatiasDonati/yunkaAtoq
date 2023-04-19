import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import sombrero from "../assets/parteLogos/atom/Sombrero.png"
import engranajes from "../assets/parteLogos/atom/Engranajes.png"
import cruzAmarilla from "../assets/parteLogos/atom/CruzAmarilla.png"
import corazon from "../assets/parteLogos/atom/Corazon.png"
import cruzBlanca from "../assets/parteLogos/atom/CruzBlanca.png"
import hachas from "../assets/parteLogos/atom/Hachas.png"

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};

const PartesLogo = () => {
  return (
    <>
      
        <Slider {...settings} className='bg-fondo2 p-5'>
          <div>
            <img src={sombrero} alt="1" />
          </div>
          <div>
            <img src={engranajes} alt="2" />
          </div>
          <div>
            <img src={cruzAmarilla} alt="3" />
          </div>
          <div>
            <img src={corazon} alt="4" />
          </div>
          <div>
            <img src={cruzBlanca} alt="5" />
          </div>
          <div>
            <img src={hachas} alt="6" />
          </div>
        </Slider>
      
    </>
  );
};
export default PartesLogo;
