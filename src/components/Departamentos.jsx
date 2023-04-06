import Administracion from "../assets/departamentos/Administracion.png";
import BusquedaYRescate from "../assets/departamentos/BusquedayRescate.png";
import Ciencia from "../assets/departamentos/Ciencia.png";
import Fuego from "../assets/departamentos/Fuego.png";
import SoporteVital from "../assets/departamentos/SoporteVital.png";

const Departamentos = () => {
  return (
    <div name="especialidades">
      <div className="px-[300px] p-20">
        <div className="text-5xl p-10 font-light mb-20 text-[#0E385B]">
          | Especialidades
        </div>
        {/*Card 1 */}
        <div className="rounded-xl flex border-4 border-[#0E385B]  items-center justify-center">
          <img src={BusquedaYRescate} className="w-1/5 h-1/5" />
          <div className="p-4 my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facere
            quidem perferendis earum voluptatibus maiores magnam corrupti
            voluptates, minus nam, hic dicta similique ullam, illo distinctio
            suscipit? Eligendi, maxime saepe!
          </div>
        </div>

        {/*Card  2 */}
        <div className="rounded-xl flex mt-8 border-4 border-[#0E385B] items-center justify-center">
          <img src={Administracion} className="w-1/5 h-1/5" />
          <div className="p-4 my-6 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facere
            quidem perferendis earum voluptatibus maiores magnam corrupti
            voluptates, minus nam, hic dicta similique ullam, illo distinctio
            suscipit? Eligendi, maxime saepe!
          </div>
        </div>

        {/*Card 3 */}
        <div className="rounded-xl flex mt-8 border-4 border-[#0E385B] items-center justify-center">
          <img src={Ciencia} className="w-1/5 h-1/5" />
          <div className="p-4 my-6 w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facere
            quidem perferendis earum voluptatibus maiores magnam corrupti
            voluptates, minus nam, hic dicta similique ullam, illo distinctio
            suscipit? Eligendi, maxime saepe!
          </div>
        </div>

        {/*Card 4 */}
        <div className="rounded-xl flex mt-8 border-4 border-[#0E385B] items-center justify-center">
          <img src={SoporteVital} className="w-1/5 h-1/5" />
          <div className="p-4 my-6 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facere
            quidem perferendis earum voluptatibus maiores magnam corrupti
            voluptates, minus nam, hic dicta similique ullam, illo distinctio
            suscipit? Eligendi, maxime saepe!
          </div>
        </div>

        {/*Card 5 */}
        <div className=" rounded-xl flex mt-8 border-4 border-[#0E385B] items-center justify-center">
          <img src={Fuego} className="w-1/5 h-1/5" />
          <div className="p-4 my-6 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facere
            quidem perferendis earum voluptatibus maiores magnam corrupti
            voluptates, minus nam, hic dicta similique ullam, illo distinctio
            suscipit? Eligendi, maxime saepe!
          </div>
        </div>
      </div>
    </div>
  );
};
export default Departamentos;
