import React from "react";
import { Link } from "react-router-dom";
import "./navButton.css";
import classnames from "classnames";

const NavButton = ({ to, children, active, formToggleStyle }) => {
	const navStyles = classnames(
		"navButton",
		formToggleStyle && "navButton__formToggleStyle",
		to === active && "navButton__active"
	);
	console.log(to, active);
	return (
		<Link to={to} className={navStyles}>
			{children}
		</Link>
	);
};

export default NavButton;
