import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingHeader from '../BookingHeader/BookingHeader';
import YourOrderCard from '../YourOrderCard/YourOrderCard';

const YourOrder = () => {
    const [yourOrderData, setYourOrderData] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://fierce-bayou-55696.herokuapp.com/getOrderService?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setYourOrderData(data))
    }, [])
    return (
        <div>
            <BookingHeader></BookingHeader>
            <br/>
            <div>
                <h3 className="text-center">Your Order</h3>
                <br/>
                <br/>
            </div>
            <div>
                {
                    yourOrderData.map(yourOrder => <YourOrderCard yourOrder={yourOrder} id={yourOrder._id}></YourOrderCard>)
                }
            </div>
        </div>
    );
};

export default YourOrder;