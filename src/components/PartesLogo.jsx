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
    <div className="bg-[#023763] h-[400px] border-b-4 border-white text-white flex items-center px-20">

      {parteLogos.map((el, indice) => (
        <div
          key={indice}
          className="px-10 h-[300px] border-2 rounded-lg flex-1 mr-2"
        >
          <div>
            <img src={el.logo} alt="" className="mt-6 " />
          </div>
          <div>
            <div className="text-[10px]">{el.texto}</div>
          </div>
        </div>
      ))}

      {/* Card */}
      {/* <div className="px-10 h-[300px] border-2 rounded-lg flex-1">
        <div>
          <img src={Sombrero} alt="" className="mt-6 " />
        </div>
        <div>
          <div className="text-[12px]">
            Testigo de la historia de cada Bombero. Muchos cascos salvan la vida
            de su dueño resistiendo el impacto de alguna viga, entonces el
            afecto por este elemento es inconmensurable.
          </div>
        </div>
      </div> */}

      {/* Card */}
      {/* <div className="px-10 h-[300px] border-2 rounded-lg flex-1">
        <div>
          <img src={Engra} alt="" className="mt-6" />
        </div>
        <div>
          <div className="text-[12px]">
            Representan los procedimientos que unimos para construir todo un
            sistema, en una constante búsqueda de superación para salvar vidas.
          </div>
        </div>
      </div> */}

      {/* Card */}
      {/* <div className="px-10 h-[300px] border-2 rounded-lg flex-1">
        <div>
          <img src={Insig} alt="" className="mt-6" />
        </div>
        <div>
          <div className="text-[12px]">
            Sus ocho puntos representan la buena voluntad del servicio de fuego
            para hacer sacrificios y poder proteger a otros, en símbolo de
            heroísmo y servicio para salvar a otros.
          </div>
        </div>
      </div> */}
      {/* Card */}
      {/* <div className="px-10 h-[300px] border-2 rounded-lg flex-1">
        <div>
          <img src={Cora} alt="" className="mt-6" />
        </div>
        <div>
          <div className="text-[12px]">
            El corazón rojo simboliza la entrega y el amor sin condiciones que
            todos ofrecemos día a día, al poner nuestro servicio en pos de las
            comunidades.
          </div>
        </div>
      </div> */}
      {/* Card */}
      {/* <div className="px-10 h-[300px] border-2 rounded-lg flex-1">
        <div>
          <img src={Cruz} alt="" className="mt-6" />
        </div>
        <div>
          <div className="text-[12px]">
            Símbolo de Neutralidad y paz, Así mismo, la cruz blanca, sirve como
            un símbolo de protección para evitar que el mal de entidades
            sobrenaturales entre a las casas.
          </div>
        </div>
      </div> */}
      {/* Card */}
      {/* <div className="px-10 h-[300px] border-2 rounded-lg flex-1">
        <div>
          <img src={Fuego} alt="" className="mt-6" />
        </div>
        <div>
          <div className="text-[12px]">
            Alude a los riesgos que superaremos y oportunidades para un nuevo
            comienzo. Es el camino que debemos recorrer para reconocernos.
          </div>
        </div>
      </div> */}
      {/* Card */}
      {/* <div className="px-10 h-[300px] border-2 rounded-lg flex-1">
        <div>
          <img src={Martillos} alt="" className="mt-6" />
        </div>
        <div>
          <div className="text-[12px]">
            Las hachas cruzadas representan los elementos básicos en la lucha
            contra el fuego, además de ser una iconografía universal para
            representar a los bomberos.
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default PartesLogo;
