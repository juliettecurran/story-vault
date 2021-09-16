import React from "react";
import NavButton from "../../Head/NavButton";
import { useHistory } from "react-router-dom";

const ToggleFormType = () => {
	let history = useHistory();
	const activePath = history.location.pathname;
	return (
		<div>
			<NavButton to='/new/character' active={activePath}>
				Character
			</NavButton>
			<NavButton to='/new/location' active={activePath}>
				Location
			</NavButton>
		</div>
	);
};

export default ToggleFormType;
