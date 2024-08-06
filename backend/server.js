const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/rhynoauto', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

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
