import React from "react";
import "./itemCardModalDetails.css";

const ItemCardModalDetails = ({ character, handleEdit, handleDelete }) => {
    return (
        <div>
            <div className="modal__body">
                <div className="singleCharacter__container">
                    <img
                        className="singleCharacter__itemImage"
                        src={`${character.itemImage}`}
                        alt=""
                    ></img>

                    <table className="singleCharacter__table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td className="singleCharacter__label">Title</td>
                                <td className="singleCharacter__value">{character.title}</td>
                            </tr>
                            <tr>
                                <td className="singleCharacter__label">Name</td>
                                <td className="singleCharacter__value">{character.name}</td>
                            </tr>
                            <tr>
                                <td className="singleCharacter__label">Role</td>
                                <td className="singleCharacter__value">
                                    {character.characterType}
                                </td>
                            </tr>
                            <tr>
                                <td className="singleCharacter__label">Age</td>
                                <td className="singleCharacter__value">{character.age}</td>
                            </tr>
                            <tr>
                                <td className="singleCharacter__label">Job</td>
                                <td className="singleCharacter__value">
                                    {character.occupation}
                                </td>
                            </tr>
                            <tr>
                                <td className="singleCharacter__label">Eye Colour</td>
                                <td className="singleCharacter__value">
                                    {character.eyeColour}
                                </td>
                            </tr>
                            <tr>
                                <td className="singleCharacter__label">Hair Colour</td>
                                <td className="singleCharacter__value">
                                    {character.hairColour}
                                </td>
                            </tr>
                            <tr>
                                <td className="singleCharacter__label">Location</td>
                                <td className="singleCharacter__value">{character.location}</td>
                            </tr>
                            <tr>
                                <td className="singleCharacter__label">Main Trait</td>
                                <td className="singleCharacter__value">
                                    {character.mainTrait}
                                </td>
                            </tr>
                            <tr>
                                <td className="singleCharacter__label">Special Ability</td>
                                <td className="singleCharacter__value">
                                    {character.specialAbility}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="modal__footer">
                <button className='itemCardModalDetails__editCardBtn' onClick={() => handleEdit(character.Id)}>Edit</button>

                <button className='itemCardModalDetails__deleteCardBtn' onClick={() => handleDelete(character.Id)}>Delete</button>
            </div>
        </div>
    );
};

export default ItemCardModalDetails;
