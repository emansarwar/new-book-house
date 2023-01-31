import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);
    console.log(services)

    return (
        <div className='services-container'>
            
            <div className='text-center services-header  mb-4'>
                <p className="text-4xl py-3 font-bold text-orange-600"> Our Books</p>
                {/* <h2 className="text-5xl font-semibold">Our Service Area</h2> */}
                
            </div>
            <div className='services-grid'>
                
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;