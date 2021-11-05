import React, { useState } from "react";
import { observer } from "mobx-react";
import Modal from "../../SingleItemView/Modal";
import "./itemCard.css";

const ItemCard = ({ data, handleEdit, handleDelete, cardType, children }) => {
    const [openModal, setOpenModal] = useState(false);
    const {
        Id,
        title,
        name,
        itemImage,
    } = data;

    const handleModalOpen = () => {
        setOpenModal(true)
    }

    const handleModalClose = () => {
        setOpenModal(false)
    }
    console.log('char', data)
    return (
        <article key={Id} className="itemCard">
            <h5
                className="itemCard__displayName"
                onClick={handleModalOpen}
                value={name}
            >
                {title} {name}
            </h5>
            <div className="itemCard__imageContainer">
                {/* TODO: if empty str replace with placeholder*/}
                <img
                    src={`${itemImage}`}
                    className="itemCard__itemImage"
                    alt=" "
                    onClick={handleModalOpen}
                ></img>
            </div>

            <div className="itemCard__btnGroup">
                {/*  <Link to={`/${cardType}/${Id}`}> */}
                <button
                    onClick={handleModalOpen}
                    type="button"
                    className="itemCard__viewModalBtn"
                >
                    View
                </button>

                <button
                    onClick={() => handleEdit(Id)}
                    type="edit"
                    className="itemCard__editCardBtn"
                >
                    Edit
                </button>
                <button
                    onClick={() => handleDelete(Id)}
                    type="delete"
                    className="itemCard__deleteCardBtn"
                >
                    Delete
                </button>
            </div>
            {openModal && (
                <Modal name={data.name} closeModal={handleModalClose}>
                    {children}
                </Modal>
            )}
        </article>
    );
};

export default observer(ItemCard);
