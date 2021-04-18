import React from 'react';

const Testimonial = (props) => {
    const {name, review} = props.testimonial;
    return (
        <div className="card shadow-sm">
            <div className="card-footer d-flex  align-items-center">
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{review}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;