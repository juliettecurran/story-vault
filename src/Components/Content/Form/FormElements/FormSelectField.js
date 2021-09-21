import React from "react";
import selectOptions from "../../../../Utils/optionsData";
import "./formSelectField.css";
import Label from "./Label.js";

const FormSelectField = ({ name, value, onChange, label, options }) => {
	const typeOptions = selectOptions[options];
	return (
		<div className='FormSelectField__container'>
			<Label name={name} label={label} className='FormSelectField__label' />
			<select
				name={name}
				value={value}
				onChange={onChange}
				className='FormSelectField__select'
			>
				{typeOptions.map((item, index) => (
					<option key={index} value={item}>
						{item}
					</option>
				))}
			</select>
		</div>
	);
};

export default FormSelectField;
