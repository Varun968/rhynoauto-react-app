import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../App.css';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { vehicle, date, time } = location.state || {};

  const handleBackToRentals = () => {
    navigate('/rentals');
  };

  return (
    <div className='confirmation-container'>
      <h1 className='confirmation-title'>Booking Confirmation</h1>
      {vehicle && date && time ? (
        <div className='confirmation-details'>
          <p>Vehicle: {vehicle}</p>
          <p>Date: {date}</p>
          <p>Time: {time}</p>
          <button className='btn' onClick={handleBackToRentals}>
            Back to Rentals
          </button>
        </div>
      ) : (
        <p>No booking details available.</p>
      )}
    </div>
  );
}

export default Confirmation;
