import React from "react";
import { Link } from "react-router-dom";
import "./navButton.css";
import classnames from "classnames";

const NavButton = ({ to, children, active }) => {
	const navStyles = classnames(
		"navButton",
		to === active && "navButton__active"
	);

	return (
		<Link to={to} className={navStyles}>
			{children}
		</Link>
	);
};

export default NavButton;
