import React, { useEffect, useState } from 'react';
import AllOrderServiceCard from '../AllOrderServiceCard/AllOrderServiceCard';
import BookingHeader from '../BookingHeader/BookingHeader';
import './AllOrderService.css';

const AllOrderService = () => {
    const [allOrderServiceData, setAllOrderServiceData] = useState([])

    useEffect(() => {
        fetch('https://fierce-bayou-55696.herokuapp.com/allOrderService')
            .then(res => res.json())
            .then(data => setAllOrderServiceData(data))
    }, [])
    return (
        <div>
            <BookingHeader></BookingHeader>
            <br/>
            <br/>
            <h1 className="text-center">All Order Service</h1>
            <br/><br/>
            <div className="d-flex all-order-service">
                <h6 className="allOrderName">Name:</h6>
                <h6 className="allOrderEmail">Email:</h6>
                <h6 className="allOrderAddress">Address:</h6>
                <h6 className="allOrderPhone">Phone:</h6>
                <h6 className="allOrderTitle">Order Item Name:</h6>
            </div>
            {
                allOrderServiceData.map(allOrderData => <AllOrderServiceCard allOrderData={allOrderData}></AllOrderServiceCard>)
            }
        </div>
    );
};

export default AllOrderService;