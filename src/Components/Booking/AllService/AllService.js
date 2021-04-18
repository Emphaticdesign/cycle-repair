import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllServiceMain from '../AllServiceMain/AllServiceMain';

const AllService = () => {
    const [ServiceData, setServiceData] = useState([])

    useEffect(() => {
        fetch('https://fierce-bayou-55696.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])
    return (
        <div className="all-service-container">
            <div>
                <Link to="/addService"><button className="btn btn-primary">Add Service</button></Link>
            </div>
            <div>
                {
                    ServiceData.map(info => <AllServiceMain info={info}></AllServiceMain>)
                }
            </div>
        </div>
    );
};

export default AllService;