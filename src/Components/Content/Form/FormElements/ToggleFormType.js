import React from "react";
import { useHistory } from "react-router-dom";
import NavButton from "../../../Head/Navbar/NavButton";
import "./toggleFormType.css";

const ToggleFormType = () => {
	let history = useHistory();
	const activePath = history.location.pathname;
	return (
		<div className='formToggle'>
			<NavButton
				formToggleStyle
				to='/new/character'
				active={activePath}
				className='ToggleFormType_toggleBtn'
			>
				New Character
			</NavButton>
			<NavButton
				formToggleStyle
				to='/new/location'
				active={activePath}
				className='ToggleFormType_toggleBtn'
			>
				New Location
			</NavButton>
		</div>
	);
};

export default ToggleFormType;
