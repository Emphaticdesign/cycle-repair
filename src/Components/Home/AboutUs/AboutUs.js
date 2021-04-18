import React from 'react';
import aboutImg from '../../../images/about.jpg';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="mt-5">
            <h1 className="about-garage">About Our Garage</h1>
            <div className="d-flex justify-content-center mt-3">
                <div className="aboutUs-container w-75 row">
                    <div className="col-md-6">
                        <h5> incididunt ut labore et dolore magna aliqua.</h5>
                        <small>Elit duis tristique sollicitudin nibh sit amet. Integer feugiat
                        <br /> scelerisque varius morbi enim nunc faucibus. Eget duis at tellus at
                        <br /> urna condimentum. Cursus euismod quis viverra nibh cras
                        <br /> pulvinar. Quam nulla porttitor massa id neque. Amet mattis.
                    
                    </small>
                    </div>
                    <div className="about-img col-md-6">
                        <img src={aboutImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;