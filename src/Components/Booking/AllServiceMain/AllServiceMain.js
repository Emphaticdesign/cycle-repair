import React from 'react';
import './AllServiceMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const AllServiceMain = ({ info }) => {
    const deleteService = id => {
        fetch(`/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted success')
        })
    }
    return (
            <div className="d-flex allServices">
                <h3 className="allService-main">{info.title}</h3>
                <h4 className="allService-main">${info.price}</h4>
                <button onClick={() => deleteService(info._id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>
    );
};

export default AllServiceMain;