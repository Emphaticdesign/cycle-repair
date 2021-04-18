import React from 'react';
import './AllOrderServiceCArd.css';

const AllOrderServiceCard = ({allOrderData}) => {
    return (
        <div className="d-flex allOderServiceCard">
            <h6 className="allOrderName">{allOrderData.name}</h6>
            <h6 className="allOrderEmail">{allOrderData.email}</h6>
            <h6 className="allOrderAddress">{allOrderData.address}</h6>
            <h6 className="allOrderPhone">{allOrderData.phone}</h6>
            <h6 className="allOrderTitle">{allOrderData.title}</h6>
        </div>
    );
};

export default AllOrderServiceCard;