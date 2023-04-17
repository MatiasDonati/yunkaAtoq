import { BsWhatsapp } from "react-icons/bs";


const SerParte = () => {
  return (
    <div className="bg-gradient-to-t from-[white]">
    <div className="h-full mx-[200px]  ">
      <div className="text-5xl p-10 font-light text-white">| Te gustaría ser parte?</div>
      <div className="mx-[200px]">
      <div className="text-2xl mb-10 text-white">
        Conviértete en bombero voluntario y conoce la satisfacción de ayudar a
        quienes más lo necesitan. Tu coraje y tus aportes siempre serán
        bienvenidos.
      </div>
      <div className="text-[#0E385B] text-4xl pb-10">
        Requisitos y Documentación
      </div>
      <div className="ml-4 text-[#0E385B] text-2xl mb-5">Para incorporarte a nuestro equipo es necesario:</div>
      <ul className="list-disc text-[#0E385B] text-2xl" >
        <li>Documento Nacional de Identidad.</li>
        <li>Certificado de estudios y/o trabajo.</li>
        <li>Antecedentes penales o policiales.</li>
        <li>Aprobar las fases de entrevista.</li>
        <li>Exámenes médicos, psicológico y de aptitud física.</li>
      </ul>
      </div>
        <div className="flex flex-col items-center align-center pt-10 text-[#0E385B]">
            <div className="my-10  text text-2xl">Contactanos para recibir el formulario de inscripción</div>
            <div className="text-white px-10 bg-[#0E385B] mb-10 items-center align-center flex cursor-pointer hover:px-12 py-1 hover:bg-[#D49105] hover:text-black rounded-full transition-all duration-500 ease-in-out">
              <div className="pr-3"><BsWhatsapp /></div>
              <div>+591 62643328</div>
            </div>
        </div>
    </div>
    </div>
  );
};
export default SerParte;