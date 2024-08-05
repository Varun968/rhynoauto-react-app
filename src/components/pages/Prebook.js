import React from 'react';
import '../../App.css';
import PaymentForm from './PaymentForm';

export default function Prebook() {
  const handlePrebookClick = () => {
    // Logic to handle prebooking and payment
    alert('Prebook and Pay clicked!');
  };

  return (
    <div className='prebook-container'>
      <h1 className='prebook'>Prebook</h1>
      <PaymentForm />
      <button className='prebook-pay-button' onClick={handlePrebookClick}>
        Prebook and Pay
      </button>
    </div>
  );
}

