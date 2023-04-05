import ArbolVida from "../assets/ArbolVida.png";
import FuegoBlanco from "../assets/FuegoBlanco.png";
import Tierra from "../assets/Tierra.png";
import Gota from "../assets/Gota.png";
import Aire from "../assets/Aire.png";

const ArbolDeLaVida = () => {
  return (
    <div className="bg-[#0E385B] border-b-4 border-white">
      <div className="h-full text-white  mx-[300px]">
        <div className="text-4xl p-10 font-light">
          | Los elementos del árbol de la vida
        </div>
        <div className="text-center text-2xl mb-10">
          Todas estas fuerzas esenciales en nuestro planeta son las que permiten
          dar vida al árbol.
        </div>

        <img src={ArbolVida} alt="" className="mx-auto block" />

        <div className="flex mx-[300px] mb-10">

        {/*  Crad */}
          <div className="flex-1 h-[300px] border-2 rounded-lg mr-2">
            <div className="text-center">FUEGO</div>
            <img src={FuegoBlanco} alt="" className="mx-auto block"/>
            <div className="text-center">
              La luz solar es la que permite que el árbol pueda nacer y crecer
            </div>
          </div>
        {/*  Crad */}
          <div className="flex-1 h-[300px] border-2 rounded-lg mr-2">
            <div className="text-center">AGUA</div>
            <img src={Gota} alt="" className="mx-auto block" />
            <div className="text-center">
              La luz solar es la que permite que el árbol pueda nacer y crecer
            </div>
          </div>
        {/*  Crad */}
          <div className="flex-1 h-[300px] border-2 rounded-lg mr-2">
            <div className="text-center">TIERRA</div>
            <img src={Tierra} alt="" className="mx-auto block"/>
            <div>
              La luz solar es la que permite que el árbol pueda nacer y crecer
            </div>
          </div>
        {/*  Crad */}
          <div className="flex-1 h-[300px] border-2 rounded-lg mr-2">
            <div className="text-center">AIRE</div>
            <img src={Aire} alt="" className="mx-auto block"/>
            <div>
              La luz solar es la que permite que el árbol pueda nacer y crecer
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default ArbolDeLaVida;
