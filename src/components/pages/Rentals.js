import React from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';

const Rentals = () => {
  const navigate = useNavigate();

  const handleBookRentals = () => {
    // Example: navigate to a booking form
    navigate('/book-rentals');
  };

  return (
    <div className='rentals-container'>
      <h1 className='rentals'>Rentals</h1>
      <button className='btn book-rentals-btn' onClick={handleBookRentals}>
        Book Rentals
      </button>
    </div>
  );
}

export default Rentals;
