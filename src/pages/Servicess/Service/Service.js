import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const ServiceCard = ({ service }) => {
    const { _id, image,price, title, summary, author } = service;
    return (
        <div className="card  card-container card-compact bg-base-100 shadow-xl">
            <figure><img className='img-serviceCard' src={image} alt="Shoes" /></figure>
            <div className="card-body servicecard-information">
                <h2 className='text-xl text-green-600'>Title : {title}</h2>
                <h3 className='author-name text-violet-600'>Author Name : {author}</h3>
                <h3>Summary :</h3>
                <hr />
                <p>{summary}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary serviceCard-btn">Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;