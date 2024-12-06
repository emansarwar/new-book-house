import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const ServiceCard = ({ service }) => {
  const { _id, image, price, title, summary, author } = service;
  return (
    <div className="card  card-container card-compact bg-emerald-400 shadow-xl">
      <figure>
        <img className="img-serviceCard" src={image} alt="Shoes" />
      </figure>
      <div className="card-body servicecard-information">
        <h2 className="text-xl font-bold ">Title : {title}</h2>
        <h5 className=" text-xl">Author Name : {author}</h5>

        <hr className="w-full border-t-2 border-cyan-900"></hr>

        <p>
          <span className="font-bold">Summary:</span> {summary}
        </p>
        <p className="text-2xl text-orange-600 font-semibold">Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-outline bg-blue-400 serviceCard-btn">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
