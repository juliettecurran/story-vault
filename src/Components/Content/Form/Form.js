import React from "react";
import "./form.css";

const Form = ({ handleSubmit, children }) => {
	return (
		<form className='form' onSubmit={handleSubmit}>
			{children}
		</form>
	);
};

export default Form;
