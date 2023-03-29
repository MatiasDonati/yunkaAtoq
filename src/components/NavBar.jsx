import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import YunkaLogo from "../assets/YunkaLogo.png"
const NavBar = () => {
  return (
    <div className="fixed w-full h-[100px] items-center">
      {/* Navbar 1era Secciom */}
      <div className="bg-[#0E385B] w-full h-[100px] flex justify-between items-center text-3xl font-bold">
        <div className="pl-10 flex-1">
          <div className="text-white">YUNKA ATOQ</div>
          <div className="text-zinc-300	text-sm font-light italic pl-1">
            <div>Bomberos Volunarios</div>
            <div>Cochabamba, Bolivia</div>
          </div>
        </div>

        <div className=" flex flex-1 justify-center">
          <img
            src={YunkaLogo}
            className="w-[180px] pt-40 transition-all duration-400 ease-in-out hover:w-[220px]"
          />
        </div>

        <div className="flex-1 text-white pr-10">
          <ul className="flex justify-end">
            <li>
              <BsWhatsapp className="hover:text-[40px] transition-all duration-400 ease-in-out" />
            </li>
            {/* <li className="hover:text-[40px]">
              <BsInstagram />
            </li> */}
            <li>
              <AiOutlineFacebook className="hover:text-[40px] transition-all duration-400 ease-in-out" />
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar 2da Seccion */}
      {/* Primera opcion */}
      <div className="flex w-full flex-row bg-[#0E385B] h-[50px] items-center border-y-4 text-white text-lg">
        <div className="flex-1 px-20">
          <ul className="flex justify-between">
            <li className="flex-1 text-center hover:text-[20px] transition-all duration-400 ease-in-out">Nosotros</li>
            <li className="flex-1 text-center hover:text-[20px] transition-all duration-400 ease-in-out">Especialidades</li>
            <li className="flex-1 text-center hover:text-[20px] transition-all duration-400 ease-in-out">Donaciones</li>
          </ul>
        </div>

        <div className="flex-1 px-20">
          <ul className="flex justify-between">
            <li className="flex-1 text-center hover:text-[20px] transition-all duration-400 ease-in-out">Capacitaciones</li>
            <li className="flex-1 text-center hover:text-[20px] transition-all duration-400 ease-in-out">Incorpórate</li>
            <li className="flex-1 text-center hover:text-[20px] transition-all duration-400 ease-in-out">Contacto</li>
          </ul>
        </div>
      </div>

      {/* Segunda opcion */}
      {/* <div className="bg-[#0E385B] w-full h-[50px] items-center border-y-4">
        <ul className="flex justify-between text-white text-lg px-10 pt-2 ">
          <li>Nosotros</li>
          <li>Especialidades</li>
          <li>Donaciones</li>
          <li>Capacitaciones</li>
          <li>Incorpórate</li>
          <li>Contacto</li>
        </ul>
      </div> */}
    </div>
  );
};
export default NavBar;
