import React from "react";
import { useHistory } from "react-router-dom";
import "./navbar.css";
import NavButton from "./NavButton";

const Navbar = () => {
	let history = useHistory();
	const activePath = history.location.pathname;
	return (
		<nav className='Navbar__navbar'>
			<NavButton to='/' active={activePath}>
				Home
			</NavButton>
			<NavButton to='/all' active={activePath}>
				All
			</NavButton>
			<NavButton to='/new/character' active={activePath}>
				Create
			</NavButton>
		</nav>
	);
};

export default Navbar;
