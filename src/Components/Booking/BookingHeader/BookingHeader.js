import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './BookingHeader.css';

const BookingHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://fierce-bayou-55696.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])
    return (
        <div className="d-flex booking-header-container">
            <Link className="link-item" to="/book/:price">Book</Link>
            <Link className="link-item" to="/review">Review</Link>
            <Link className="link-item" to="/yourOrder">Your Order</Link>
            {isAdmin &&
                <div>
                    <Link className="link-item" to="/admin">Add Admin</Link>
                    <Link className="link-item" to="/serviceManager">Service Manager</Link>
                    <Link className="link-item" to="/addService">Add Service</Link>
                    <Link className="link-item" to="/allOrderService">All Order Service</Link>
                </div>
            }
        </div>
    );
};

export default BookingHeader;