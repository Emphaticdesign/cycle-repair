import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';


const Testimonials = () => {
    const [testimonialData, setTestimonialData] = useState([])

    useEffect(() => {
        fetch('https://fierce-bayou-55696.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setTestimonialData(data))
    }, [])
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>Client Review</h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;