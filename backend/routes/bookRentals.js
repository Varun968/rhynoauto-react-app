const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const bookingDetails = req.body;
  // Handle booking logic here
  console.log('Booking Details:', bookingDetails);
  res.json({ message: 'Booking successful', bookingDetails });
});

module.exports = router;
