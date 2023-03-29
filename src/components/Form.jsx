const Form = () => {
  return (
    <div className="h-[500px] mb-8 " name='form'>
      {/* <div className="text-center pt-[200px]">Formulario</div> */}
      <form action="POST" className="">
        <h1 className="text-3xl text-center p-20 italic font-light">
          ¿Tenés alguna duda? ¿Querés saber más sobre nosotros o sumarte a
          nuestro equipo?
        </h1>
        <div className="flex flex-col ">
          <input
            className="mx-[300px] p-2 border-b-[3px] border-black hover:bg-slate-100 outline-none"
            type="text"
            placeholder="Nombre y Apellido"
            name="name"
          />
          <input
            className="mx-[300px] p-2 border-b-[3px] border-black hover:bg-slate-100 outline-none"
            type="text"
            placeholder="Ciudad"
            name="city"
          />
          <input
            className="mx-[300px] p-2 border-b-[3px] border-black hover:bg-slate-100 outline-none"
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            className="mx-[300px] p-2 border-b-[3px] border-black hover:bg-slate-100 outline-none"
            type="number"
            placeholder="Celular"
            name="email"
          />
          <textarea
            className="mx-[300px] p-2 border-b-[3px] border-black hover:bg-slate-100 outline-none"
            name="message"
            rows="3"
            placeholder="Mensaje"
          ></textarea>
          <button className="text-white text-center mt-8 mx-[600px] bg-[#0E385B] hover:mx-[550px] hover:bg-[#D49105] hover:text-black rounded-full transition-all duration-500 ease-in-out ">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
