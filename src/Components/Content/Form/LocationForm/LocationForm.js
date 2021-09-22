import React from "react";
import "./locationForm.css";
import FormTextInput from "../FormElements/FormTextInput";
import FormSelectField from "../FormElements/FormSelectField";
import { useCharacterStore } from "../../../../Provider/CharacterStoreProvider";
import Form from "../Form.js";
import SubmitBtn from "../FormElements/SubmitBtn";

const LocationForm = ({ location, handleChange, handleSubmit }) => {
	const { characterList, characterById } = useCharacterStore();

	const handleLocationChange = (id) => {
		const character = characterById(id);

		location.citizens.push(character);
	};

	return (
		<Form handleSubmit={handleSubmit}>
			<h3>Create a new location</h3>
			<hr className='LocationForm__titleDivider'></hr>

			<FormTextInput
				label='Name'
				type='text'
				name='name'
				value={location.name}
				placeholder='Seadell'
				onChange={handleChange}
			/>

			<FormTextInput
				label='Demonym'
				type='text'
				name='demonym'
				value={location.demonym}
				placeholder='Dellan'
				onChange={handleChange}
			/>

			<FormSelectField
				name='size'
				label='Size'
				type='select'
				value={location.size}
				onChange={handleChange}
				options='locationSize'
			/>

			<FormSelectField
				name='ruler'
				label='Ruler'
				type='select'
				value={location.ruler}
				onChange={handleChange}
				options='locationRuler'
			/>
			<FormTextInput
				label='Population'
				type='text'
				name='population'
				value={location.population}
				placeholder='1000'
				onChange={handleChange}
			/>
			<FormSelectField
				name='geography'
				label='Geography'
				type='select'
				value={location.geography}
				onChange={handleChange}
				options='locationGeography'
			/>
			<FormTextInput
				label='Cultural Trait'
				type='text'
				name='culturalTrait'
				value={location.culturalTrait}
				placeholder='Stoic'
				onChange={handleChange}
			/>
			<FormTextInput
				label='Dominant Religion'
				type='text'
				name='dominantReligion'
				value={location.dominantReligion}
				placeholder='Pantheism'
				onChange={handleChange}
			/>
			<FormTextInput
				label='Language'
				type='text'
				name='language'
				value={location.language}
				placeholder='English'
				onChange={handleChange}
			/>
			<FormTextInput
				label='Symbol'
				type='text'
				name='symbol'
				value={location.symbol}
				placeholder='5 pointed star'
				onChange={handleChange}
			/>

			{characterList.map((character, index) => {
				console.log(characterList, "characterList");
				console.log(location, "citizens");
				return (
					<div key={index}>
						{character.name}
						<input
							name={character.name}
							type='checkbox'
							//value
							onChange={() => handleLocationChange(character.Id)}
						/>
					</div>
				);
			})}
			<SubmitBtn />
		</Form>
	);
};

export default LocationForm;
