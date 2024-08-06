import React, { useState } from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';

const Rentals = () => {
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleBookRentals = () => {
    // Example: navigate to a different booking form or page
    navigate('/book-rentals');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the booking submission
    console.log('Booking Details:', { vehicle, date, time });
    // Navigate to the confirmation page with booking details
    navigate('/confirmation', { state: { vehicle, date, time } });
  };

  return (
    <div className='rentals-container'>
      <h1 className='rentals'>Rentals</h1>
      <form onSubmit={handleSubmit} className='booking-form'>
        <div>
          <label>Select Vehicle</label>
          <select value={vehicle} onChange={(e) => setVehicle(e.target.value)} required>
            <option value=''>Select a vehicle</option>
            <option value='SE03 Lite'>SE03 Lite</option>
            <option value='SE03'>SE03</option>
            <option value='SE03 Max'>SE03 Max</option>
          </select>
        </div>
        <div>
          <label>Select Date</label>
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Select Time</label>
          <input
            type='time'
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='btn book-now-btn'>
          Book Now
        </button>
      </form>
      <button onClick={handleBookRentals} className='btn navigate-book-rentals-btn'>
        Navigate to Book Rentals
      </button>
    </div>
  );
}

export default Rentals;
