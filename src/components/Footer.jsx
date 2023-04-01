import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import YunkaLogo from "../assets/YunkaLogo.png";

const Footer = () => {
  return (
    <div>

      {/* 1era Seccion */}
      <div className="bg-[#0E385B] w-full h-[80px] items-center text-white flex justify-center">
        <div className="flex items-center pr-20">
          <div className="pr-2 text-[30px]">
            <FiMail />
          </div>
          <div className="text-[20px]">informaciones@yunkaatoq.org</div>
        </div>
        <div className="flex items-center">
          <div className="pr-2 text-[30px]">
            <BsTelephone />
          </div>
          <div className="text-[20px]">+591 62643328</div>
        </div>
      </div>

      {/* 2da Seccion */}
      <div className="bg-[#0E385B] w-full h-[280px] border-t-4 text-white">
        <ul className="flex justify-center text-[#CACACA] mt-5">
          <li>Nosotros</li>
          <li>Donaciones</li>
          <li>Capacitaciones</li>
          <li>Incorpórate</li>
        </ul>
        <div className="text-center text-[#CACACA] mt-10">
          Yunka Atoq - Bomberos Voluntarios
        </div>
        <div className="text-center text-[#CACACA] mt-1">
          Cochabamba, Bolivia
        </div>
        <div className="flex justify-center">
          <img className="w-[120px]" src={YunkaLogo} />
        </div>
        <div className="flex h-14 bg-[#0E385B] ">
          <div className="bg-[#C28507] flex-1 rounded-tr-full"></div>
          <div className="bg-[#0E385B] flex-1 flex justify-center mt-4 text-zinc-300">Creado por Grupo Sarasa ®</div>
          <div className="bg-[#C28507] flex-1 rounded-tl-full"></div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
