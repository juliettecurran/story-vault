import React from "react";
import selectOptions from "../../../../Utils/optionsData";

import Label from "./Label.js";

const FormSelectField = ({ name, value, onChange, label, options }) => {
	const typeOptions = selectOptions[options];
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

/* Make reusable */
export default FormSelectField;
