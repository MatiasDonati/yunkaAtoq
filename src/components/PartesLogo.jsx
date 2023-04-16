import Sombrero from "../assets/parteLogos/Sombrero.png";
import Engra from "../assets/parteLogos/Engrana.png";
import Insig from "../assets/parteLogos/Insig.png";
import Cora from "../assets/parteLogos/Cora.png";
import Cruz from "../assets/parteLogos/Cruz.png";
import Fuego from "../assets/parteLogos/Fuego.png";
import Martillos from "../assets/parteLogos/Martillos.png";

const PartesLogo = () => {
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

  return (
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
  );
};
export default PartesLogo;
