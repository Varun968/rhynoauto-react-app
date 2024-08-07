const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDB = require('./config/db');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Import and use routes
const paymentRoute = require('./routes/payment');
const bookRentalsRoute = require('./routes/bookRentals');
const rentalsRoute = require('./routes/rentals');
const confirmationRoute = require('./routes/confirmation');

app.use('/api/payment', paymentRoute);
app.use('/api/book-rentals', bookRentalsRoute);
app.use('/api/rentals', rentalsRoute);
app.use('/api/confirmation', confirmationRoute);

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
