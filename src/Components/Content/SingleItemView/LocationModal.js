import React from 'react'
import ItemCardModalOuter from "../SingleItemView/ItemCardModalOuter";
import ItemCardModalRow from "../SingleItemView/ItemCardModalRow";


const LocationModal = ({ handleDelete, handleEdit, location }) => {
    return (
        <ItemCardModalOuter
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            itemImage={location.itemImage}
            id={location.Id}>

            <ItemCardModalRow label="Name">
                {location.name}
            </ItemCardModalRow>

            <ItemCardModalRow label="Demonym">
                {location.demonym}
            </ItemCardModalRow>

            <ItemCardModalRow label="Size">
                {location.size}
            </ItemCardModalRow>

            <ItemCardModalRow label="Ruler">
                {location.ruler}
            </ItemCardModalRow>

            <ItemCardModalRow label="Population">
                {location.population}
            </ItemCardModalRow>

            <ItemCardModalRow label="Geography">
                {location.geography}
            </ItemCardModalRow>

            <ItemCardModalRow label="Cultural Trait">
                {location.culturalTrait}
            </ItemCardModalRow>

            <ItemCardModalRow label="Dominant Religion">
                {location.dominantReligion}
            </ItemCardModalRow>

            <ItemCardModalRow label="Language">
                {location.language}
            </ItemCardModalRow>

            <ItemCardModalRow label="Symbol">
                {location.symbol}
            </ItemCardModalRow>

            {location.citizens.map(citizen => (
                <ItemCardModalRow label="Citizens">
                    {citizen.name}
                </ItemCardModalRow>
            )
            )}


        </ItemCardModalOuter>
    )
}

export default LocationModal
