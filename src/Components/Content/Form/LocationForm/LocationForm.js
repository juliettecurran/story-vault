import React from "react";
import "./locationForm.css";
import FormSelectField from "../FormElements/FormSelectField";
import FormTextInput from "../FormElements/FormTextInput";
import Form from "../Form.js";

const LocationForm = ({ location, handleChange, handleSubmit }) => {
	return (
		<Form handleSubmit={handleSubmit}>
			<h3>Create a new location</h3>
			<hr></hr>
			<FormTextInput
				label='Name'
				type='text'
				name='name'
				value={location.name}
				placeholder='Lord'
				onChange={handleChange}
			/>

			<FormTextInput
				label='Demonym'
				type='text'
				name='demonym'
				value={location.demonym}
				placeholder='British'
				onChange={handleChange}
			/>

			<FormTextInput
				label='Size'
				type='text'
				name='size'
				value={location.size}
				placeholder='Large'
				onChange={handleChange}
			/>

			<FormTextInput
				label='Ruler'
				type='text'
				name='ruler'
				value={location.ruler}
				placeholder='Parliament'
				onChange={handleChange}
			/>
			<FormTextInput
				label='Population'
				type='text'
				name='population'
				value={location.population}
				placeholder='1000'
				onChange={handleChange}
			/>
			<FormTextInput
				label='Geography'
				type='text'
				name='geography'
				value={location.geography}
				placeholder='Desert'
				onChange={handleChange}
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
				placeholder='Atheism'
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

			<button type='submit' className='submitBtn'>
				Submit
			</button>
		</Form>
	);
};

export default LocationForm;
