import { useState } from "react";
import Swal from "sweetalert2";

const Form = () => {
  const [alerta, setAlerta] = useState(false);

  const sweetAlert = () => {
    setAlerta(!alerta);
  };

  const refreshPage = () => {
    setTimeout(() => {
      window.location.reload(); // refresca la aplicación para que se borre el form (medio pelo)
    }, 1000);
  };

  return (
    <div className="h-[500px] mb-8 " name="form">
      {/* <button
        onClick={sweetAlert}
        className="text-white  mt-5 px-10 bg-[#0E385B] hover:px-20 hover:bg-[#D49105] hover:text-black rounded-full transition-all duration-500 ease-in-out"
      >
        hola
      </button>
      {alerta &&
        Swal.fire({
          position: "center",
          icon: "success",
          title:
            "Muchas gracias por contactarnos!\nEn breve nos pondremos en contacto.",
          showConfirmButton: false,
          timer: 1000,
        })} */}

      <form
        method="POST"
        action="https://getform.io/f/34da6974-c381-4202-aeee-4bf9e217e250"
        className=""
      >
        <h1 className="text-3xl text-center p-20 italic font-light">
          ¿Tenés alguna duda? ¿Querés saber más sobre nosotros o sumarte a
          nuestro equipo?
        </h1>
        <div className="flex flex-col">
          <input
            className=" bg-fondo1 mx-[100px] bg-fondo1 p-2 border-b-[3px] border-black hover:bg-slate-100 outline-none rounded-t-lg"
            type="text"
            placeholder="Nombre y Apellido"
            name="name"
          />
          <input
            className="mx-[100px] bg-fondo1 p-2 border-b-[3px] border-black hover:bg-slate-100 outline-none"
            type="text"
            placeholder="Ciudad"
            name="city"
          />
          <input
            className="mx-[100px] bg-fondo1 p-2 border-b-[3px] border-black hover:bg-slate-100 outline-none"
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            className="mx-[100px] bg-fondo1 p-2 border-b-[3px] border-black hover:bg-slate-100 outline-none"
            type="number"
            placeholder="Celular"
            name="phone"
          />

          {/* Para evitar Spams */}
          <input name="_gotcha" type="hidden" className="none!important" />
          {/*  */}

          <textarea
            className="mx-[100px] bg-fondo1 p-2 border-b-[3px] border-black hover:bg-slate-100 outline-none rounded-lg"
            name="message"
            rows="3"
            placeholder="Mensaje"
          ></textarea>
          <div className="flex justify-center items-center">
            <button
              onClick={refreshPage}
              className="text-white mt-5 px-10 bg-[#0E385B] hover:px-20 hover:bg-[#D49105] hover:text-black rounded-full transition-all duration-500 ease-in-out "
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
