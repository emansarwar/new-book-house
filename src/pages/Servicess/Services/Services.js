import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  // const services27 = services.slice(0, 27);
  useEffect(() => {
    fetch("https://book-house-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log('services',services);

  return (
    <div className="services-container bg-cyan-600">
      <div className="text-center services-header bg-teal-400  mb-4">
        <p className="text-4xl py-3 font-bold text-pink-950"> Our Books</p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
