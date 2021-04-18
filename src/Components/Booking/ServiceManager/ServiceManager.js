import React from 'react';
import AllService from '../AllService/AllService';
import BookingHeader from '../BookingHeader/BookingHeader';

const ServiceManager = () => {
    return (
        <div>
            <BookingHeader></BookingHeader>
            <br/>
            <h3 style={{textAlign:'center'}}>Service Manager</h3>
            <br />
            <br />
            <AllService></AllService>
        </div>
    );
};

export default ServiceManager;