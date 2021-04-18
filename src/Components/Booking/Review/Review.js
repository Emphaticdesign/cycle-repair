import React from 'react';
import { useForm } from 'react-hook-form';
import BookingHeader from '../BookingHeader/BookingHeader';

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            review: data.review
        }
        fetch('https://fierce-bayou-55696.herokuapp.com/addReview',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                alert('your review place successfully')
            }
        })

    };
    

    return (
        <div>
            <BookingHeader></BookingHeader>
            <h3>Review Page</h3>
            <br/>
            <br/>
            <div className="text-align-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h4>Your Name</h4>
                    <input name="name" placeholder="Your Name" required ref={register} />
                    <br />
                    <br />
                    <h4>Your Review</h4>
                    <input name="review" required placeholder="Type Your Review"  ref={register} />
                    <br />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Review;