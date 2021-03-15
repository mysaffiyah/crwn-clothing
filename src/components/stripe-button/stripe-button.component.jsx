import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IV4bAL22ibNlY9k1n2YrCJpS5Uxv6vho5GbY4qWrRfTOnYsDKSCv6d0pEbmW5KX64Ir4kk0aW6EjbAjxFa7v8qt0064P5wlT5';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN CLothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            />
    )
}

export default StripeCheckoutButton;