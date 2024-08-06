const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Fetch available rentals or rental details here
  res.json({ message: 'Rentals fetched successfully' });
});

module.exports = router;
