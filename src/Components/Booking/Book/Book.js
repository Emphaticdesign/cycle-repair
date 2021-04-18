import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import BookingHeader from '../BookingHeader/BookingHeader';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './Book.css';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}


const Book = () => {
    const { title } = useParams();
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
        const orderService = {
            name: data.name,
            email: data.email,
            address: data.address,
            phone: data.phone,
            title: data.title
        }

        fetch('https://fierce-bayou-55696.herokuapp.com/addOrderService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderService)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your order place successfully')
                }
            })

    };

    console.log(watch("example"));


    return (
        <div className="text-center row">
            <BookingHeader></BookingHeader>
            <br />
            <div className="col-md-6">
                <h3><small>lets book our</small> <span style={{ color: 'tomato' }}>{title}</span> <small>service</small></h3>
                <br />
                <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                    {errors.name && <span className="error">Name is required</span>}

                    <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
                    {errors.email && <span className="error">Email is required</span>}

                    <input name="address" ref={register({ required: true })} placeholder="Your Address" />
                    {errors.address && <span className="error">Address is required</span>}

                    <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
                    {errors.phone && <span className="error">Phone Number is required</span>}

                    <input name="title" defaultValue={title} ref={register({ required: true })} placeholder="Your Phone Number" />
                    {errors.phone && <span className="error">Phone Number is required</span>}

                    <input type="submit" />
                </form>
            </div>
            <div className="col-md-6">
                <h2>Payment Please</h2>
                <ProcessPayment></ProcessPayment>
            </div>
        </div>
    );
};

export default Book;