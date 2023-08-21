import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div id="navbar">
            <h3>Toudou</h3>
            <ul>
                <li><Link to="/" className="menu-link">Home</Link></li>
                <li><Link to="/all" className="menu-link">Tasks</Link></li>
            </ul>
        </div>

    );
};

export default Navbar;