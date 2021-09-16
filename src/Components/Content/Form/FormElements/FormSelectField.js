import React from "react";
import characterSelectOptions from "../../../../characterOptionsData";
import Label from "./Label.js";

const FormSelectField = ({ name, value, onChange, label, options }) => {
	const typeOptions = characterSelectOptions[options];
	return (
		<>
			<Label name={name} label={label} />
			<select name={name} value={value} onChange={onChange}>
				{typeOptions.map((item, index) => (
					<option key={index} value={item}>
						{item}
					</option>
				))}
			</select>
		</>
	);
};

export default FormSelectField;
