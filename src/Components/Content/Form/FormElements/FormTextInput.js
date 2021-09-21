import React from "react";
import "./formTextInput.css";
import Label from "./Label";

const FormTextInput = ({
	name,
	type,
	placeholder,
	value,
	onChange,
	label,
	min,
	max
}) => {
	return (
		<div className='FormTextInput__container'>
			<Label name={name} label={label} className='FormTextInput__label' />
			<input
				className='FormTextInput__input'
				type={type} //'text'
				name={name} //'occupation'
				value={value} //character.occupation
				placeholder={placeholder} //e.g 'Pirate'
				onChange={onChange} //handleChange
				min={min}
				max={max}
			></input>
		</div>
	);
};

export default FormTextInput;
