import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards(){
    return(
        <div className='cards'>
            <h1>Checkout our products</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='public/images/rhyno final.95.png'
                        text='Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 1500W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 1.8kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!'
                        label='Rhyno SE 03 Lite'
                        path='/products'
                        />
                        <CardItem
                        src='public/images/rhyno final.95.png'
                        text='Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!'
                        label='Rhyno SE 03'
                        path='/products'
                        />
                        <CardItem
                        src='public/images/rhyno final.95.png'
                        text='Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!'
                        label='Rhyno SE 03 Max'
                        path='/products'
                        />
                        <CardItem
                        src='public/images/logo1.png'
                        text='Prebook the Rhyno of your choice now'
                        label='Rhyno EV'
                        path='/prebook'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}