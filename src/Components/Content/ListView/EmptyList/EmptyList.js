import React from "react";
import NavButton from "../../../Head/Navbar/NavButton";
import "./emptyList.css";

const EmptyList = ({ listType }) => {
	const buttonTitle = listType.charAt(0).toUpperCase() + listType.slice(1);

	return (
		<div class='container'>
			<p className='emptyList__emptyListAlert'>
				Your {listType} list is currently empty
			</p>

			<NavButton formToggleStyle to={`/new/${listType}`}>
				New {buttonTitle}
			</NavButton>
		</div>
	);
};

export default EmptyList;
