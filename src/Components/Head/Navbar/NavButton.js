import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navButton.css";
import classnames from "classnames";

const NavButton = ({ to, children, formToggleStyle }) => {
	let location = useLocation();
	const activePath = location.pathname;

	const navStyles = classnames(
		"navButton",
		formToggleStyle && "navButton__formToggleStyle",
		to === activePath && "navButton__active"
	);

	return (
		<Link to={to} className={navStyles}>
			{children}
		</Link>
	);
};

export default NavButton;
