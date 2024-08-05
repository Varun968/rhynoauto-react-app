import React, { useState } from 'react';
import '../../App.css';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const paymentDetails = {
      cardNumber,
      expiryDate,
      cvc,
      name,
      email,
    };

    console.log('Payment Details:', paymentDetails);

    try {
      // Send the payment details to your server for processing
      const response = await fetch('/api/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentDetails),
      });

      const result = await response.json();
      console.log('Payment Result:', result);

      // Handle the result of the payment processing
      // Example: Show a success or failure message to the user
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <div>
        <label>Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Expiry Date</label>
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>CVC</label>
        <input
          type="text"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Pay</button>
    </form>
  );
};

export default PaymentForm;
