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
  slidesToScroll: 2
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
          <img src={corazon}alt="4" />
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


/* 
const parteLogos = [
    {
      logo:  Sombrero ,
      texto:
        "Testigo de la historia de cada Bombero. Muchos cascos salvan la vida de su dueño resistiendo el impacto de alguna viga, entonces el afecto por este elemento es inconmensurable.",
    },
    {
      logo:  Engra ,
      texto:
        "Representan los procedimientos que unimos para construir todo un sistema, en una constante búsqueda de superación para salvar vidas",
    },
    {
      logo: Insig,
      texto:
        "Sus ocho puntos representan la buena voluntad del servicio de fuego para hacer sacrificios y poder proteger a otros, en símbolo de heroísmo y servicio para salvar a otros.",
    },
    {
      logo: Cora ,
      texto:
        "El corazón rojo simboliza la entrega y el amor sin condiciones que todos ofrecemos día a día, al poner nuestro servicio en pos de las comunidades.",
    },
    {
      logo: Cruz,
      texto:
        "Símbolo de Neutralidad y paz, Así mismo, la cruz blanca, sirve como un símbolo de protección para evitar que el mal de entidades sobrenaturales entre a las casas.",
    },
    {
      logo: Fuego ,
      texto:
        "Alude a los riesgos que superaremos y oportunidades para un nuevo comienzo. Es el camino que debemos recorrer para reconocernos.",
    },
    {
      logo: Martillos ,
      texto:
        "Las hachas cruzadas representan los elementos básicos en la lucha contra el fuego, además de ser una iconografía universal para representar a los bomberos.",
    },
  ];


dentro del return 


<div name="partesLogo" className="bg-[#023763] h-[400px] text-white flex items-center px-20">

      {parteLogos.map((el, indice) => (
        <div key={indice} className="flex-1 px-10 h-3/4 border-2 rounded-lg mr-2">

            <img src={el.logo} alt="" className="mx-auto block p-2" />

          <div>
            <div className="text-[10px]">{el.texto}</div>
          </div>
        </div>
      ))}
    </div>




*/