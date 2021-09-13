import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
            
                <nav className='navbar'>
                 <Link to="/"  className='navLink'>
                    Home
                  </Link>

                  <Link to="/all"  className='navLink'>
                    Characters
                  </Link>
        
                  <Link to="/new"  className='navLink'>
                    New Character
                  </Link>

                  </nav>
          );
        };

export default Navbar
