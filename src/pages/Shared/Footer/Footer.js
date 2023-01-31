import React from 'react';
import logo from '../../Shared/Header/image-header/ishaq-robin-caND1D-Kh9Y-unsplash (1).png';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer footer-container p-10 mt-3 bg-accent text-white">
            <div>
                <img src={logo} alt="" />
                <p>book-worm library<br/>Providing reliable services since 1992</p>
            </div>
            <div>
                <span className="footer-titlee text-2xl">Services</span>
                <a href="/"className="link link-hover">Branding</a>
                <a href="/"className="link link-hover">Design</a>
                <a href="/"className="link link-hover">Marketing</a>
                <a href="/"className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-titlee text-2xl">Company</span>
                <a href="/"className="link link-hover">About us</a>
                <a href="/"className="link link-hover">Contact</a>
                <a href="/"className="link link-hover">Jobs</a>
                <a href="/"className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-titlee text-2xl">Legal</span>
                <a href="/"className="link link-hover">Terms of use</a>
                <a href="/"className="link link-hover">Privacy policy</a>
                <a href="/"className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;