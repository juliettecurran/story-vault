import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import "./head.css";
import NavButton from "./NavButton";

const Navbar = () => {
	let params = useParams();
	let history = useHistory();
	const activePath = history.location.pathname;
	console.log(history.location.pathname);
	return (
		<nav className='Navbar__navbar'>
			<NavButton to='/' active={activePath}>
				Home
			</NavButton>
			<NavButton to='/all' active={activePath}>
				All
			</NavButton>
			<NavButton to='/new/character' active={activePath}>
				New
			</NavButton>
		</nav>
	);
};

export default Navbar;
