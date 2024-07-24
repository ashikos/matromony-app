import React from 'react';
import axios from '../../axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PfaCv2NKP0gFECGjwQo70BospMPKRD5vNQt5FmaBqNe0oGxyUGJ9mkeDE8VMM2sFyTHp4QZ2lfwZ24nwow0Xbun00aLSXdevi');

const CheckoutBtn = ({tier}) => {

    const createCheckoutSession = async () => {
        try {
            const response = await axios.post(`payments/create-check-out/?product_id=${tier.product_id}&price=${tier.price}`);
            const data = response.data;   
            return data.id;
        } catch (error) {
            console.error('Error creating checkout session:', error);
        }
    };

    const handleSubscribe = async () => {
        const sessionId = await createCheckoutSession();
        if (sessionId) {
            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({
                sessionId,
            });
            if (error) {
                console.error('Error redirecting to checkout:', error);
            }
        }
    };

  return (
    <>
    <button onClick={handleSubscribe} className='mx-auto  bg-pink-600 text-white cursor-pointer mt-9 w-[200px] rounded-md py-3  '> 
        Buy
    </button>
    </>
  )
}

export default CheckoutBtn