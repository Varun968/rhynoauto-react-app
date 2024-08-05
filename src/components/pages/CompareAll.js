import React from 'react';
import '../../App.css';

const CompareAll = ({ image, comparisonTable }) => {
  return (
    <div className='compare-all'>
      <img src={image} alt='Compare all vehicles' className='compare-image' />
      <button className='buy-now-button'>Buy Now</button>
      <div className='comparison-table'>
        {comparisonTable}
      </div>
    </div>
  );
};

export default CompareAll;
