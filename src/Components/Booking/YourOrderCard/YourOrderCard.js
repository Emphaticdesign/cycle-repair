import React from 'react';

const YourOrderCard = (props) => {
    const {name, title} = props.yourOrder;
    return (
        <div>
            <div style={{border: '1px solid black', width:'1000px', margin: '0 0 10px 180px', padding: '10px', borderRadius:'10px', backgroundColor:'lightcyan'}}>
                <h3>booking service name: <span style={{color: 'tomato'}}>{title}</span></h3>
                <br/>
                <h3>name: <span style={{color: 'tomato'}}>{name}</span></h3>

            </div>
        </div>
    );
};

export default YourOrderCard;