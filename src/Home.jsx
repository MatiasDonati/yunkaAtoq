import Bomberos from "./assets/bomberos.jpg";

const Home = () => {
  return (
    <div className="pt-[150px]">
      <div className="w-full h-[550px]">
        {/* Para darle un sombreado negro degrade */}
        {/* <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div> */}
        <img className="w-full h-full object-cover" src={Bomberos} />
      </div>

      <div className="text-3xl text-center p-10 italic font-light">
        "Para que otros puedan vivir"
      </div>
      <div className="px-[300px]">
        <div className="py-3">
          YUNKA ATOQ es una fundación de protección medioambiental que cuenta
          con un brazo operativo de primera respuesta ante emergencias y
          desastres naturales.
        </div>
        <div className="py-3">
          Nació en el año 2023, con el fin de abastecer las emergencias
          (incendios forestales, rescates, atenciones médicas) y el objetivo de
          capacitar a jóvenes voluntarios que de manera desinteresada y
          altruista, arriesguen sus vidas para salvaguardar así, las de otros
          seres vivos.
        </div>
        <div className="py-3">
          Bajo el lema "Para que otros puedan vivir”, servimos al pueblo
          Boliviano del cual nacimos, devolviéndole a nuestra tierra un poco de
          todo lo que nos brindó.
        </div>
      </div>
    </div>
  );
};
export default Home;
