import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import img from '../../../images/logo.jpg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <div className="logo-handle">
                <div className="image-handle">
                    <img src={img} alt="" />
                </div>
                <div className="logo-text-handle">
                    <h1>Cycle</h1>
                    <h1>Repair</h1>
                </div>
            </div>

            <div className="navbar-style ms-auto">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link mr-5">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/yourOrder" className="nav-link mr-5">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link mr-5">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/testimonials" className="nav-link mr-5">Reviews</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link mr-5">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;