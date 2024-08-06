const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  const bookingId = req.params.id;
  // Fetch confirmation details based on bookingId
  res.json({ message: 'Booking confirmation details', bookingId });
});

module.exports = router;
