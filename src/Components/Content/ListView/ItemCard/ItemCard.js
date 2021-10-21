import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import "./itemCard.css";
import Modal from "../../SingleItemView/Modal";
import { useState } from "react";
import ItemCardModalDetails from "../../SingleItemView/ItemCardModalDetails";
const ItemCard = ({ character, location, cardType, handleEdit, handleDelete }) => {
    const [openModal, setOpenModal] = useState(false);
    const {
        Id,
        title,
        name,
        itemImage,
    } = character;

    console.log('char', character)
    console.log('location', location)
    return (
        <article key={Id} className="itemCard">
            <h5
                className="itemCard__displayName"
                onClick={() => {
                    setOpenModal(true);
                }}
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
                    onClick={() => {
                        setOpenModal(true);
                    }}
                ></img>
            </div>

            <div className="itemCard__btnGroup">
                {/*  <Link to={`/${cardType}/${Id}`}> */}
                <button
                    onClick={() => {
                        setOpenModal(true);
                    }}
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
                <Modal name={name} closeModal={setOpenModal}>
                    <ItemCardModalDetails
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        character={character}
                        location={location}
                    />
                </Modal>
            )}
        </article>
    );
};

export default observer(ItemCard);
