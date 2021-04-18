import React from 'react';
import { useForm } from 'react-hook-form';
import BookingHeader from '../BookingHeader/BookingHeader';

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const serviceData = {
            title: data.title,
            description: data.description,
            price: data.price

        }
        fetch('https://fierce-bayou-55696.herokuapp.com/addBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your services added successfully')
                }
            })

    };
    return (
        <div className="text-center">
            <BookingHeader></BookingHeader>
            <br/>
            <h3>Add Service page</h3>
            <br />
            <br />
            <div className="text-align-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h4>service Name</h4>
                    <input name="title" placeholder="Service Name" required ref={register} />
                    <br />
                    <br />
                    <h4>service description</h4>
                    <input name="description" required placeholder="Type description" ref={register} />
                    <br />
                    <br />
                    <h4>Service Price</h4>
                    <input name="price" type="number" required placeholder="price" ref={register} />
                    <br />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;