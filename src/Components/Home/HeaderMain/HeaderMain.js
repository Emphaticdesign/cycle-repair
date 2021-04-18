import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderMian.css';

const HeaderMain = () => {
    return (
        <div className="header-main-container">
            <div className="header-text-container">
                <h1>Professional Bicycle Repair</h1>
                <h1>& Custom Services</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, natus?</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <Link to="/services"><button className="btn btn-primary">Book Services</button></Link>
            </div>
        </div>
    );
};

export default HeaderMain;