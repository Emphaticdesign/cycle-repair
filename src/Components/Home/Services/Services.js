import React, { useEffect, useState } from 'react';
import { faTools, faHandHoldingWater, faRing, faFistRaised, faThermometer, faBicycle } from '@fortawesome/free-solid-svg-icons'
import ServicesCard from '../ServicesCard/ServicesCard';
import './Service.css';


const Services = () => {
    const [ServiceData, setServiceData] = useState([])

    useEffect(() => {
        fetch('https://fierce-bayou-55696.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => setServiceData(data))
    }, [])
    return (
        <section className="mt-5 text-center text-white service-container">
            <h1>Our Services</h1>
            <p>We Are Provide This Type Or Service Right Now</p>
            <div className="d-flex justify-content-center mt-3">
                <div className="w-75 row">
                    {
                        ServiceData.map(info => <ServicesCard id={info.title} info={info}></ServicesCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;