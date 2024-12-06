import React from "react";
import "./Author.css";

const Author = ({ author }) => {
  const { name, biography, image } = author;
  return (
    <div className="expert-container bg-teal-400">
      <img className="img-expert" src={image} alt="" />
      <div className="expert-information">
        <h4 className="Name-title font-bold">Name: {name}</h4>
        <hr className="w-full border-t-2 border-cyan-900"></hr>
        
        <p>
          <span className="bold">Description:</span> {biography} 
        </p>
      </div>
    </div>
  );
};

export default Author;