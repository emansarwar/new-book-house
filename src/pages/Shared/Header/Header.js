import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "./image-header/ishaq-robin-caND1D-Kh9Y-unsplash (1).png";
import { AuthContext } from "../../../contexts/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then()
    .catch();
  };

  const menuItems = (
    <div>
      
        <Link to="/"><button className="btn  btn-outline bg-emerald-400 mx-2 mt-2">HOME</button></Link>
      
      
        <Link to="/services"><button className="btn  btn-outline bg-emerald-400 mx-2 mt-2">BOOKS</button></Link>
      
      
        <Link to="/authors"><button className="btn  btn-outline bg-emerald-400 mx-2 mt-2">Authors</button></Link>
      
      
        <Link to="/about"><button className="btn  btn-outline bg-emerald-400 mx-2 mt-2">About</button></Link>
      
      
      {user?.email ? (
        <>
          
            <Link to="/orders"><button className="btn  btn-outline btn-secondary  mx-2 mt-2 ">Orders</button></Link>

            <Link onClick={handleLogOut} to="/login"><button className="btn  btn-outline btn-secondary  mx-2 mt-2 ">Sign Out</button></Link>
          

          {/* <button onClick={handleLogOut} className="btn  btn-outline btn-secondary mx-2  mt-2 ">
            Sign Out
          </button> */}
        </>
      ) : (
        
        
          <Link to="/login"><button className="btn  btn-outline bg-emerald-400 mx-2  mt-2">Login</button></Link>
        
      )}
    </div>
  );

  return (
    <div className="navbar bg-emerald-600 h-16 pt-2 pb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 20 20" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn bg-emerald-400 normal-case mt-2 text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      {/* <div className="navbar-end">
        <button className="btn btn-outline mt-2 btn-warning">Appointment</button>
      </div> */}
    </div>
  );
};

export default Header;
