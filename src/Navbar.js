import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">

            <Link to="/" >HOME</Link>
            <Link to="/" >TV</Link>
            <Link to="/" >MOVIES</Link>
            <Link to="/" >ACTION</Link>
            <Link to="/" >COMEDY</Link>
            <Link to="/" >ROMANCE</Link>
            <Link to="/" >DRAMA</Link>
            <Link to="/" >HORROR</Link>
        </div>
    )
}

export default Navbar
