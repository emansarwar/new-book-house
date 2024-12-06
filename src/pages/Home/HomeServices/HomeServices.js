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
    fetch("https://book-house-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(services);

  return (
    <div className="mb-4 bg-emerald-600 services-container text-center">
      <div className="text-center services-header mb-4">
        <p className="text-4xl py-3 font-bold bg-emerald-500"> Our Books</p>
      </div>
      <div className="services-grid">
        {homeServices.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>

      <Link className="text-center" to="/services">
        <button className="btn w-2/3  bg-emerald-500 text-black text-2xl  rounded hover:bg-teal-500">View all</button>
      </Link>
    </div>
  );
};

export default HomeServices;
