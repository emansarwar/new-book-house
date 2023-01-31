import React from "react";
import "./Author.css";

const Author = ({ author }) => {
  const { name, biography, image } = author;
  return (
    <div className="expert-container">
      <img className="img-expert" src={image} alt="" />
      <div className="expert-information">
        <h4 className="Name-title">Name: {name}</h4>
        
        <p>
          <span className="bold">Description:</span> {biography} 
        </p>
      </div>
    </div>
  );
};

export default Author;