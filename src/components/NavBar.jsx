import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import YunkaLogo from "../assets/YunkaLogo.png";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="fixed w-full items-center z-10">
      {/* Navbar 1era Secciom */}
      <div className="bg-[#0E385B] w-full h-[70px] flex justify-between items-center text-3xl font-bold">
        <div className="pl-10 flex-1">
          <Link to="home" smooth={true} duration={500}>
            <div className="text-white cursor-pointer">YUNKA ATOQ</div>
          </Link>
          {/* <div className="text-zinc-300	text-sm font-light italic pl-1">
            <div>Bomberos Volunarios</div>
            <div>Cochabamba, Bolivia</div>
          </div> */}
        </div>

        <div className=" flex flex-1 justify-center">
          <Link to="home" smooth={true} duration={500}>
            <img
              src={YunkaLogo}
              className={`w-[180px] pt-40 transition-all duration-400 ease-in-out hover:w-[200px] cursor-pointer`}
            />
          </Link>
        </div>

        <div className="flex-1 text-white pr-10">
          <ul className="flex justify-end">
            <li>
              <BsTelephone className="hover:text-[40px] transition-all duration-400 ease-in-out" />
            </li>
            <li>
              <BsWhatsapp className="hover:text-[40px] transition-all duration-400 ease-in-out" />
            </li>
            <li>
              <AiOutlineFacebook className="hover:text-[40px] transition-all duration-400 ease-in-out" />
            </li>
            <li>
              <AiOutlineLinkedin className="hover:text-[40px] transition-all duration-400 ease-in-out" />
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar 2da Seccion */}
      {/* Primera opcion */}
      <div className="flex w-full flex-row bg-[#0E385B] h-[50px] items-center border-y-4 text-white text-lg">
        <div className="flex-1 px-20">
          <ul className="flex justify-between">
            <li className="flex-1 text-center hover:text-[20px] transition-all duration-400 ease-in-out">
              Nosotros
            </li>
            <li className="flex-1 text-center hover:text-[20px] transition-all duration-400 ease-in-out">
              Donaciones
            </li>
          </ul>
        </div>

        <div className="flex-1 px-20">
          <ul className="flex justify-between">
            <li className="flex-1 text-center hover:text-[20px] transition-all duration-400 ease-in-ou">
              Capacitaciones
            </li>
            <Link
              className="flex-1 text-center hover:text-[20px] transition-all duration-400 ease-in-out"
              to="form"
              smooth={true}
              duration={500}
            >
              <li>Incorpórate</li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Menu flotante */}
      <div className="hidden lg:flex fixed flex-col bottom-[10%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-r-full duration-500  text-[#204D70] bg-zinc-300 rounded-tr-[100px]">
            <a
              className="flex justify-between items-center w-full texxt-gray-300"
              href="/"
            >
              LLámanos
              <BsTelephone size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-r-full duration-500  text-[#204D70] bg-zinc-300">
            <a
              className="flex justify-between items-center w-full texxt-gray-300"
              href="/"
            >
              Escríbenos
              <BsWhatsapp size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-r-full duration-500  text-[#204D70] bg-zinc-300 ">
            <a
              className="flex justify-between items-center w-full texxt-gray-300"
              href="/"
            >
              Conócenos
              <AiOutlineFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-r-full duration-500  text-[#204D70] bg-zinc-300 rounded-br-[100px]">
            <a
              className="flex justify-between items-center w-full texxt-gray-300"
              href="/"
            >
              Interactua
              <AiOutlineLinkedin size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
