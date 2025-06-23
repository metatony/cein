import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../pages/cart/CheckoutForm';
import { useGlobal } from '../provider/GlobalProvider';

// Replace with your actual publishable key
const stripePromise = loadStripe('pk_test_51NO5BfHjFd2I69YgiIdZHeA4FaUmtExCKViGgfAbjdWo8Ho6ar4Ts0m206Qyotd7Nh6AqQktYDpuJbCcW1DZvETj003soe4MkL');




function Payment() {
    const { cart } = useGlobal();
    const totalPrice = cart.reduce(function(total, item) {
        return total + item.price;
      }, 0);



const options = {
    mode: 'payment',
    amount: totalPrice,
    currency: 'gbp',
    appearance: {
      theme: 'stripe',
        variables: {
          colorPrimary: 'black',
          colorBackground: 'white',
          borderRadius: '2px',
          colorText: '#32325d',
          spacingUnit: '5px',
          fontWeightLight: '300', 
        },
        rules: {
          '.Block': {
            backgroundColor: '#f6f8fa',
          },
        },
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
        <CheckoutForm/>
    </Elements>
  );
}

export default Payment;