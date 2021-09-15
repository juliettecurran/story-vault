import React from "react";
import { Link } from "react-router-dom";
import "./head.css";

const Navbar = () => {
	return (
		<nav className='Navbar__navbar'>
			<Link to='/' className='Navbar__navLink'>
				Home
			</Link>

			<Link to='/all' className='Navbar__navLink'>
				Characters
			</Link>

			<Link to='/new' className='Navbar__navLink'>
				New Character
			</Link>
		</nav>
	);
};

export default Navbar;
