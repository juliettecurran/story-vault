import React from "react";
import { useParams } from "react-router-dom";
import { useCharacterStore } from "../../../../Provider/CharacterStoreProvider";
import "./singleCharacter.css";

const SingleCharacter = ({ closeModal }) => {
    const params = useParams();
    const id = params.character_id;
    const { characterById } = useCharacterStore();
    const mySingleCharacter = characterById(id);
    return (
        <div className="singleCharacter__container">
            <img
                className="singleCharacter__itemImage"
                src={`${mySingleCharacter.itemImage}`}
                alt=""
            ></img>
            {console.log("char", mySingleCharacter)}
            <table className="singleCharacter__table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td className="singleCharacter__label">Title</td>
                        <td className="singleCharacter__value">
                            {mySingleCharacter.title}
                        </td>
                    </tr>
                    <tr>
                        <td className="singleCharacter__label">Name</td>
                        <td className="singleCharacter__value">{mySingleCharacter.name}</td>
                    </tr>
                    <tr>
                        <td className="singleCharacter__label">Role</td>
                        <td className="singleCharacter__value">
                            {mySingleCharacter.characterType}
                        </td>
                    </tr>
                    <tr>
                        <td className="singleCharacter__label">Age</td>
                        <td className="singleCharacter__value">{mySingleCharacter.age}</td>
                    </tr>
                    <tr>
                        <td className="singleCharacter__label">Job</td>
                        <td className="singleCharacter__value">
                            {mySingleCharacter.occupation}
                        </td>
                    </tr>
                    <tr>
                        <td className="singleCharacter__label">Eye Colour</td>
                        <td className="singleCharacter__value">
                            {mySingleCharacter.eyeColour}
                        </td>
                    </tr>
                    <tr>
                        <td className="singleCharacter__label">Hair Colour</td>
                        <td className="singleCharacter__value">
                            {mySingleCharacter.hairColour}
                        </td>
                    </tr>
                    <tr>
                        <td className="singleCharacter__label">Location</td>
                        <td className="singleCharacter__value">
                            {mySingleCharacter.location}
                        </td>
                    </tr>
                    <tr>
                        <td className="singleCharacter__label">Main Trait</td>
                        <td className="singleCharacter__value">
                            {mySingleCharacter.mainTrait}
                        </td>
                    </tr>
                    <tr>
                        <td className="singleCharacter__label">Special Ability</td>
                        <td className="singleCharacter__value">
                            {mySingleCharacter.specialAbility}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SingleCharacter;
