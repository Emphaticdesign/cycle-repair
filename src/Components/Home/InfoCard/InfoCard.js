import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = ({ info }) => {
    return (
        <div className="col-md-4 text-white container">
            <div className="infoCard-bgColor justify-content-center">
                <div>
                    <FontAwesomeIcon className="infoCard-icon" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h4>{info.title}</h4>
                    <p>{info.description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;