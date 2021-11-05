import React from 'react'
import ItemCardModalOuter from "../SingleItemView/ItemCardModalOuter";
import ItemCardModalRow from "../SingleItemView/ItemCardModalRow";


const CharacterModal = ({ handleDelete, handleEdit, character }) => {
    return (
        <ItemCardModalOuter
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            itemImage={character.itemImage}
            id={character.Id}>

            <ItemCardModalRow label="Title">
                {character.title}
            </ItemCardModalRow>

            <ItemCardModalRow label="Name">
                {character.name}
            </ItemCardModalRow>

            <ItemCardModalRow label="Age">
                {character.age}
            </ItemCardModalRow>

            <ItemCardModalRow label="Role">
                {character.characterType}
            </ItemCardModalRow>

            <ItemCardModalRow label="Occupation">
                {character.occupation}
            </ItemCardModalRow>

            <ItemCardModalRow label="Eye Colour">
                {character.eyeColour}
            </ItemCardModalRow>

            <ItemCardModalRow label="Hair Colour">
                {character.hairColour}
            </ItemCardModalRow>

            <ItemCardModalRow label="Location">
                {character.location}
            </ItemCardModalRow>

            <ItemCardModalRow label="Main Trait">
                {character.mainTrait}
            </ItemCardModalRow>

            <ItemCardModalRow label="Special Ability">
                {character.specialAbility}
            </ItemCardModalRow>

        </ItemCardModalOuter>
    )
}

export default CharacterModal
