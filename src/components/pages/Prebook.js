import React from 'react';
import '../../App.css';
import PaymentForm from './PaymentForm';

export default function Prebook() {
  return (
    <div className='prebook-container'>
      <h1 className='prebook'>Prebook</h1>
      <PaymentForm />
    </div>
  );
}
