import React from 'react';
import {  Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ie1u6G0ikv9dVDz6jNoG1OM6Cyp55JUX7tOSkdiGdTHCLCcOU7KyDmokyf9MhdQNJ3X0ctqXSr8nWXGFgldQopY00G7UKPHuS');


const ProcessPayment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SimpleCardForm></SimpleCardForm>
            </Elements>
        </div>
    );
};

export default ProcessPayment;