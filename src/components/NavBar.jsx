import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import YunkaLogo from "../assets/YunkaLogo.png";
import { animateScroll as scroll } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalDonaciones from "./ModalDonaciones";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [nosotros, setNosotros] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 150 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const irAlFormulario = () => {
    location === "/nosotros" ? setNosotros(true) : setNosotros(false);
  };

  return (
    <div className="fixed w-full items-center z-10">
      {/* Navbar 1era Secciom */}
      <div
        id="top"
        className="bg-[#0E385B] w-full h-[70px] flex justify-between items-center text-3xl font-bold"
      >
        <div className="pl-10 flex-1">
          <Link to="home" smooth="true" duration={500}>
            <div
              className="text-white cursor-pointer"
              // onClick={handleNavClick}
            >
              <Link
                to={"/"}
                onClick={() => scroll.scrollToTop({ duration: 500 })}
              >
                YUNKA ATOQ
              </Link>
            </div>
          </Link>
        </div>

        <div className=" flex flex-1 justify-center ">
          <Link to="/" smooth="true" duration={500} className=''>
            <img
              src={YunkaLogo}
              className={`${
                isScrolled
                  ? "w-[100px] pt-[40px] transition-all duration-400 ease-in-out hover:w-[110px] hover:pt-[50px]"
                  : "w-[180px] pt-40 transition-all duration-400 ease-in-out hover:w-[200px]"
              } cursor-pointer`}
              onClick={() => scroll.scrollToTop({ duration: 500 })}
            />
          </Link>
        </div>

        <div className="flex-1 text-white pr-10 hidden sm:block">
          <ul className="flex justify-end">
            <li className="h-10 w-16">
              <a target="_blank" href="tel:+5492617234395">
                <BsTelephone className="hover:text-[40px] transition-all duration-400 ease-in-out" />
              </a>
            </li>
            <li className="h-10 w-16">
              <a
                target="_blank"
                href="https://wa.me/5492617234395?text=Hola,%20me%20podrían%20dar%20más%20información%20sobre%20la%20incorporación?"
              >
                <BsWhatsapp className="hover:text-[40px] transition-all duration-400 ease-in-out" />
              </a>
            </li>
            <li className="h-10 w-16">
              <a target="_blank" href="https://www.facebook.com/yunkabo">
                <AiOutlineFacebook className="hover:text-[40px] transition-all duration-400 ease-in-out" />
              </a>
            </li>
            <li className="h-10 w-16">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/carlosazcarraga/"
              >
                <AiOutlineLinkedin className="hover:text-[40px] transition-all duration-400 ease-in-out" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar 2da Seccion */}
      {/* Primera opcion */}
      <div className="flex w-full flex-row bg-[#0E385B] h-[50px] items-center border-y-4 text-white text-lg">
        <div className="flex-1 px-20 ">
          <ul className="flex justify-between">
            <Link
              to="/nosotros"
              className="flex-1 text-center hover:text-[20px] transition-all duration-400 ease-in-out"
              onClick={() => scroll.scrollToTop({ duration: 500 })}
            >
              Nosotros
            </Link>
            <li className="flex-1 text-center hover:text-[20px] transition-all duration-400 ease-in-out">
              <ModalDonaciones />
            </li>
          </ul>
        </div>

        <div className="flex-1 px-20">
          <ul className="flex justify-between">
            <li className="flex-1 text-center hover:text-[20px] transition-all duration-400 ease-in-ou">
              Capacitaciones
            </li>
            {location !== "/nosotros" ? (
              <Link
                className="flex-1 text-center hover:text-[20px] transition-all duration-400 ease-in-out"
                to="form"
                smooth="true"
                duration={500}
                onClick={irAlFormulario}
              >
                <li>Incorpórate</li>
              </Link>
            ) : (
              <Link
                className="flex-1 text-center hover:text-[20px] transition-all duration-400 ease-in-out"
                to={"/"}
              >
                <li>Incorpórate</li>
              </Link>
            )}
          </ul>
        </div>
      </div>

      {/* Menu flotante */}
      <div className="hidden lg:flex fixed flex-col bottom-[10%] right-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] hover:rounded-l-full duration-500  text-[#204D70] bg-zinc-300 rounded-tl-[100px]">
            <a
              className="flex justify-between items-center w-full"
              href="tel:5492617234395"
            >
              <BsTelephone size={30} />
              LLámanos
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] hover:rounded-l-full duration-500  text-[#204D70] bg-zinc-300">
            <a
              target="_blank"
              className="flex justify-between items-center w-full"
              href="https://wa.me/5492617234395?text=Hola, me podrían dar más información sobre la incorporación?"
            >
              <BsWhatsapp size={30} />
              Mensaje
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] hover:rounded-l-full duration-500  text-[#204D70] bg-zinc-300 ">
            <a
              className="flex justify-between items-center w-full"
              target="_blank"
              href="https://www.facebook.com/yunkabo"
            >
              <AiOutlineFacebook size={30} />
              Conócenos
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] hover:rounded-l-full duration-500  text-[#204D70] bg-zinc-300 rounded-bl-[100px]">
            <a
              className="flex justify-between items-center w-full"
              target="_blank"
              href="https://www.linkedin.com/in/carlosazcarraga/"
            >
              <AiOutlineLinkedin size={30} />
              Interactua
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
