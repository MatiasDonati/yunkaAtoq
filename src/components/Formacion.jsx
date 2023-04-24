import Auxilios from "../assets/PrimerosAuxilios.png";
import Brigadas from "../assets/Brigadas.png";
import Evacuacion from "../assets/Evacuacion.png";
import Incendio from "../assets/Incendio.png";

const Formacion = () => {
  const formacion = [
    {
      logo: Auxilios,
      titulo: "Primeros Auxilios",
    },
    {
      logo: Brigadas,
      titulo: "Formación de Brigadas",
    },
    {
      logo: Evacuacion,
      titulo: "Evacuación",
    },
    {
      logo: Incendio,
      titulo: "Lucha Contra Incendios",
    },
  ];

  return (
    <div className="bg-[#023763] h-[400px] text-white flex items-center px-20 mb-20">
      {formacion.map((el, indice) => (
        <div key={indice} className="flex-1 border-2 rounded-lg mr-2 mx-10 bg-[#052B4A]">
          <img src={el.logo} alt="" className="mx-auto block p-2 mb-20 mt-10" />
          <div id="hola" className="bg-[#C28507] border-t-2 rounded h-14 flex justify-center items-center text-xl font-bold">{el.titulo}</div>
        </div>
      ))}
    </div>
  );
};
export default Formacion;
