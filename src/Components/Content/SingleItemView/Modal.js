import React, { useEffect } from "react";
import reactDom from "react-dom";

import "./modal.css";

const Modal = ({ closeModal, name, children }) => {
    return reactDom.createPortal(
        <div className="modal__background" onClick={() => closeModal(false)}>
            <div className="modal__container">
                <div className="modal__header">
                    <button
                        className="modal__closeModalBtn"
                        onClick={() => closeModal(false)}
                    >
                        X
                    </button>
                    <h2 className="modal__title">{name}</h2>
                </div>
                {children}
            </div>
        </div>,
        document.getElementById("portal")
    );
};

export default Modal;
