import ArbolVida from "../assets/ArbolVida.png";
import FuegoBlanco from "../assets/FuegoBlanco.png";
import Tierra from "../assets/Tierra.png";
import Gota from "../assets/Gota.png";
import Aire from "../assets/Aire.png";

const ArbolDeLaVida = () => {
  return (
    <div className="bg-gradient-to-b from-[#0E385B] pb-4 border-white">
      <div className="h-full text-white  mx-[300px]">
        <div className="text-4xl p-10 font-light">
          | Los elementos del árbol de la vida
        </div>
        <div className="text-center text-2xl mb-10">
          Todas estas fuerzas esenciales en nuestro planeta son las que permiten
          dar vida al árbol.
        </div>

        <img src={ArbolVida} alt="" className="mx-auto block" />

        <div className="flex mb-10 mt-8">

        {/*  Crad */}
          <div className="flex-1 border-2 rounded-lg mr-2 h-[300px] hover:bg-black/40 transition-colors ease-in-out duration-500">
            <div className="text-center p-2 text-2xl">FUEGO</div>
            <img src={FuegoBlanco} alt="" className="mx-auto block p-2"/>
            <div className="text-center p-2">
              La luz solar es la que permite que el árbol pueda nacer y crecer
            </div>
          </div>
        {/*  Crad */}
          <div className="flex-1 border-2 rounded-lg mr-2 p-2 h-[300px] hover:bg-black/40 transition-colors ease-in-out duration-500">
            <div className="text-center text-2xl">AGUA</div>
            <img src={Gota} alt="" className="mx-auto block p-2" />
            <div className="text-center p-2">
              La luz solar es la que permite que el árbol pueda nacer y crecer
            </div>
          </div>
        {/*  Crad */}
          <div className="flex-1 border-2 rounded-lg mr-2 h-[300px] hover:bg-black/40 transition-colors ease-in-out duration-500">
            <div className="text-center p-2 text-2xl">TIERRA</div>
            <img src={Tierra} alt="" className="mx-auto block p-2"/>
            <div className="text-center p-2">
              La luz solar es la que permite que el árbol pueda nacer y crecer
            </div>
          </div>
        {/*  Crad */}
          <div className="flex-1 border-2 rounded-lg mr-2 p-2 h-[300px] hover:bg-black/40 transition-colors ease-in-out duration-500">
            <div className="text-center p-2 text-2xl">AIRE</div>
            <img src={Aire} alt="" className="mx-auto block p-2"/>
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
