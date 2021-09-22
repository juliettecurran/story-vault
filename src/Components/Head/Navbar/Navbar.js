import React from "react";
import "./navbar.css";
import NavButton from "./NavButton";

const Navbar = () => {
	return (
		<nav className='Navbar__navbar'>
			<NavButton to='/'>Home</NavButton>
			<NavButton to='/all'>All</NavButton>
			<NavButton to='/new/character'>Create</NavButton>
		</nav>
	);
};

export default Navbar;
