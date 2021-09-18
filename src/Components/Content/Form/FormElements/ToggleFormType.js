import React from "react";
import NavButton from "../../../Head/Navbar/NavButton";
import { useHistory } from "react-router-dom";
import "./toggleFormType.css";

const ToggleFormType = () => {
	let history = useHistory();
	const activePath = history.location.pathname;
	return (
		<div className='formToggle'>
			<NavButton to='/new/character' active={activePath}>
				New Character
			</NavButton>
			<NavButton to='/new/location' active={activePath}>
				New Location
			</NavButton>
		</div>
	);
};

export default ToggleFormType;
