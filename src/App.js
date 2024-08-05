import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/pages/Products';
import Product from './components/pages/Product';
import Prebook from './components/pages/Prebook';
import Rentals from './components/pages/Rentals';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import CompareAll from './components/pages/CompareAll';
import BookRentals from './components/pages/BookRentals';
import PaymentForm from './components/pages/PaymentForm'; 

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product' element={<Product />} />
          <Route path='/prebook' element={<Prebook />} />
          <Route path='/rentals' element={<Rentals />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/compare-all' element={<CompareAll />} />
          <Route path='/book-rentals' element={<BookRentals />} />
          <Route path='/payment-form' element={<PaymentForm />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
