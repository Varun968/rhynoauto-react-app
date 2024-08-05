import React from 'react';
import '../../App.css';

const Product = ({ image, name, colors, details }) => {
  return (
    <div className='product'>
      <img src={image} alt={`${name} vehicle`} className='product-image' />
      <h2>{name}</h2>
      <div className='color-selection'>
        {colors.map((color, index) => (
          <button key={index} style={{ backgroundColor: color }} className='color-button' />
        ))}
      </div>
      <p>{details}</p>
      <button className='buy-now-button'>Buy Now</button>
    </div>
  );
};

export default Product;
