import React from "react";
import "./characterForm.css";
import FormSelectField from "../FormElements/FormSelectField";
import FormTextInput from "../FormElements/FormTextInput";
import Form from "../Form.js";
import SubmitBtn from "../FormElements/SubmitBtn";

const CharacterForm = ({ character, handleChange, handleSubmit }) => {
    return (
        <Form handleSubmit={handleSubmit} className='form'>
            <h3>Create a new character</h3>
            <hr className='CharacterForm__titleDivider'></hr>
            <FormTextInput
                label='Title'
                type='text'
                name='title'
                value={character.title}
                placeholder='Lord'
                onChange={handleChange}
            />
            <FormTextInput
                label='Name'
                type='text'
                name='name'
                value={character.name}
                placeholder='James Marshall'
                onChange={handleChange}
            />
            <FormTextInput
                label='Age'
                type='number'
                name='age'
                value={character.age}
                placeholder='20'
                onChange={handleChange}
                min={1}
                max={100}
            />
            <FormSelectField
                name='characterType'
                label='Character Type'
                type='select'
                value={character.characterType}
                onChange={handleChange}
                options='characterType'
            />
            <FormTextInput
                label='Occupation'
                type='text'
                name='occupation'
                value={character.occupation}
                placeholder='Pirate'
                onChange={handleChange}
            />
            <FormSelectField
                name='location'
                label='Location'
                type='select'
                value={character.location}
                onChange={handleChange}
                options='characterLocation'
            />
            <FormSelectField
                name='eyeColour'
                label='Eye Colour'
                type='select'
                value={character.eyeColour}
                onChange={handleChange}
                options='characterEyeColour'
            />
            <FormSelectField
                name='hairColour'
                label='Hair Colour'
                type='select'
                value={character.hairColour}
                onChange={handleChange}
                options='characterHairColour'
            />
            <FormTextInput
                label='Main Trait'
                type='text'
                name='mainTrait'
                value={character.mainTrait}
                placeholder='Intelligent'
                onChange={handleChange}
            />
            <FormTextInput
                label='Special Ability'
                type='text'
                name='specialAbility'
                value={character.specialAbility}
                placeholder='None'
                onChange={handleChange}
            />
            <FormTextInput
                label='Image URL'
                type='text'
                name='itemImage'
                value={character.itemImage}
                placeholder='https://via.placeholder.com/250x250'
                onChange={handleChange}
            />
            <SubmitBtn />
        </Form>
    );
};

export default CharacterForm;
