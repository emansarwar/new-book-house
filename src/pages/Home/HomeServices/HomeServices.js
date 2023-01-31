import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Service from "../../Servicess/Service/Service";
import "../../Servicess/Services/Services.css";

const HomeServices = () => {
  const [services, setServices] = useState([]);
  const homeServices = services.slice(0, 6);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  console.log(services);

  return (
    <div className="mb-4 services-container">
      
      <div className="text-center services-header mb-4">
        <p className="text-4xl py-3 font-bold text-orange-600"> Our Books</p>
        
      </div>
      <div className="services-grid">
        {
            homeServices.map(service =><Service 
            key={service._id} 
            service={service}></Service>)
        }
      </div>
      <div className="view-all-services text-3xl py-2 mx-1">
        <button>
          <Link to="/services">View all</Link>
        </button>
      </div>
    </div>
  );
};

export default HomeServices;
