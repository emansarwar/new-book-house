import React from "react";

import Banner from "../Banner/Banner";
import HomeAuthors from "../HomeAuthors/HomeAuthors";
import HomeServices from "../HomeServices/HomeServices";

const Home = () => {
  return (
    <div className="bg-emerald-600">
      <hr />
      <Banner></Banner>
      <hr className="w-full border-t-4 border-cyan-900"></hr>
      <div className="h-1 mb-2 w-full bg-gradient-to-r from-blue-500 via-green-500 to-purple-500"></div>
     
      

     
      
      <HomeServices></HomeServices>
      <hr className="w-full border-t-4 border-cyan-900"></hr>
      <div className="h-1 mb-2 w-full bg-gradient-to-r from-blue-500 via-green-500 to-purple-500"></div>
      <HomeAuthors></HomeAuthors>
      <hr className="w-full border-t-4 border-cyan-900"></hr>
      <div className="h-1 pb-2 w-full bg-gradient-to-r from-blue-500 via-green-500 to-purple-500"></div>
    </div>
  );
};

export default Home;

