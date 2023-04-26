import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";


const ModalDonaciones = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    handleClick()
  };

  const cerrar = () => {
    setIsOpen(false)
    handleClick()
  }

  return (
    <>
      <button onClick={toggleModal}>Donaciones</button>
      {isOpen && (
        <div className="modal" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {nav && <FaTimes onClick={cerrar}/>}
            <div>
              <h1>Yunka Atoq te necesita</h1>
            </div>
            <div className="bg-fondo2">
              <p className="my-4">
                Estamos aceptando donaciones físicas para el cuartel de
                bomberos. Cualquier contribución que puedan realizar, ya sea en
                forma de equipos, herramientas, materiales, suministros u otros
                recursos, será muy apreciada.
              </p>
              <p className="my-4">
                {" "}
                Si desea hacer una donación, puede ponerse en contacto con
                nosotros a través de Whatsapp. Estaremos encantados de coordinar
                una entrega o recogida que sea conveniente para usted.
              </p>
            </div>
            <button className="btn hover:bg-[#D49105] hover:text-black rounded-full transition-all duration-500 ease-in-out">
              <BsWhatsapp size={30} />
              <a
                href="https://wa.me/5492617234395?text=Hola,%20me%20gustaria%20donar."
                target="_blank"
                rel="noopener noreferrer"
              >
                +591 70776212
              </a>
            </button>
          </div>

          <div className="modal-background"></div>
        </div>
      )}
    </>
  );
};

export default ModalDonaciones;
