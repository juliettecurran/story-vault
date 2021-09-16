import React from "react";
import "./label.css";

const Label = ({ name, label }) => {
	return (
		<label className='label' htmlFor={name}>
			{label}
		</label>
	);
};

export default Label;
