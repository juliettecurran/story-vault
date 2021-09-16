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
	max,
}) => {
	return (
		<>
			<Label name={name} label={label} />
			<input
				className='formTextInput'
				type={type} //'text'
				name={name} //'occupation'
				value={value} //character.occupation
				placeholder={placeholder} //e.g 'Pirate'
				onChange={onChange} //handleChange
				min={min}
				max={max}
			></input>
		</>
	);
};

export default FormTextInput;
