import React from 'react';
import Product from './Product';
import CompareAll from './CompareAll';
import '../../App.css';

const Products = () => {
  const products = [
    {
      name: 'Rhyno SE03 Lite',
      image: '/images/rhyno final.95.png',
      colors: ['#F9ED32', '#FFF225', '#424242'],
      details: 'Indulge perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering a stable 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 1.8 kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below! SE03 LITE',
    },
    {
      name: 'Rhyno SE03',
      image: '/images/rhyno final.95.png',
      colors: ['#F9ED32', '#FFF225', '#424242'],
      details: 'Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive link for SE03 : a. Vehicle image b. Color selection buttons c. Textual details Rhyno SE03 d. Buy now e 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!',
    },
    {
      name: 'Rhyno SE03 Max',
      image: '/images/rhyno final.95.png',
      colors: ['#F9ED32', '#FFF225', '#424242'],
      details: 'Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!',
    },
  ];

  const comparisonTable = (
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>SE03 Lite</th>
          <th>SE03</th>
          <th>SE03 Max</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Battery</td>
          <td>1.8Kwh</td>
          <td>2.7Kwh</td>
          <td>2.7Kwh</td>
        </tr>
        <tr>
          <td>Battery features</td>
          <td>LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</td>
          <td>LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</td>
          <td>LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</td>
        </tr>
        <tr>
          <td>Battery warranty</td>
          <td>3 years</td>
          <td>3 years</td>
          <td>3 years</td>
        </tr>
        <tr>
          <td>Charging time</td>
          <td>3 hours (12A)</td>
          <td>4 hours (12A)</td>
          <td>4 hours (12A)</td>
        </tr>
        <tr>
          <td>Motor</td>
          <td>1500W</td>
          <td>1500W</td>
          <td>2000W</td>
        </tr>
        <tr>
          <td>Max speed</td>
          <td>55 km/h</td>
          <td>55 km/h</td>
          <td>65 km/h</td>
        </tr>
        <tr>
          <td>Warranty on electronics</td>
          <td>1 year</td>
          <td>1 year</td>
          <td>1 year</td>
        </tr>
        <tr>
          <td>Max range (@30km/h)</td>
          <td>100 km</td>
          <td>150 km</td>
          <td>120 km</td>
        </tr>
        <tr>
          <td>Max range (@45km/h)</td>
          <td>90 km</td>
          <td>110 km</td>
          <td>100 km</td>
        </tr>
        <tr>
          <td>Max range (@full speed)</td>
          <td>60 km</td>
          <td>90 km</td>
          <td>80 km</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <div className='products'>
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
      <CompareAll
        image='/images/rhyno final.95.png'
        comparisonTable={comparisonTable}
      />
    </div>
  );
};

export default Products;
