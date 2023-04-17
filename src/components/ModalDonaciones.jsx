import React, { useState } from 'react';
import ReactModal from "react-modal";

const ModalDonaciones = () => {
    const [isModalOpen, setModalIsOpen] = useState(false);

    return (
        <>
            {/* Modal */}
            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className="modal"
                overlayClassName="modal-overlay"
            >
                <div className="modal-content">
                    <h2>Este es el contenido del modal</h2>
                    <p>Puedes agregar aquí lo que quieras mostrar en el modal</p>
                </div>
            </ReactModal>
        </>
    )
}

export default ModalDonaciones;
