import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import zorro from "../assets/logo.png"
const NavBar = () => {
  return (
    <div
    className=
    "fixed w-full h-[100px] items-center"
    >

    {/* Navbar 1era Secciom */}
      <div className="bg-[#0E385B] w-full h-[100px] flex justify-between items-center text-3xl font-bold">
        <div className=" pl-10">
          <div className="text-white">YUNKA ATOQ</div>
          <div className="text-zinc-300	text-sm font-light italic pl-1">
            <div>Bomberos Volunarios</div>
            <div>Cochabamba, Bolivia</div>
          </div>
        </div>
        <div className="text-white">
          <ul className="flex pr-10">
            <li>
              <BsWhatsapp />
            </li>
            <li>
              <BsInstagram />
            </li>
            <li>
              <AiOutlineFacebook />
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar 2da Seccion */}

      <div className='bg-[#0E385B] w-full h-[50px] items-center border-y-4'>
        <ul className='flex justify-between text-white text-lg px-10 pt-2'>
          <li>Nosotros</li>
          <li>Donaciones</li>
          <li>
            <img className="h-[160px] " src={zorro} alt="zorro" />
          </li>
          <li>Capacitaciones</li>
          <li>Incorpórate</li>
        </ul>
      </div>

    </div>
  );
};
export default NavBar;