const router = require('express').Router();

router.post('/process-payment', async (req, res) => {
  const paymentDetails = req.body;
  console.log('Payment Details:', paymentDetails);
  // Logic to handle payment processing
  res.json({ status: 'Payment processed' });
});

module.exports = router;

