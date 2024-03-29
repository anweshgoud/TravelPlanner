import React from "react";
import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top p-3 FooterContent">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <FaInstagramSquare className="bi" width="30" height="24" />
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary" style={{fontSize:'1.5rem',WebkitTextFillColor:'white'}}>© Travel Planner</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-body-secondary" href="#"><FaFacebookSquare className="bi" style={{width:"24",height:"24",color:'white'}} /></a></li>
        <li className="ms-3"><a className="text-body-secondary" href="#"><FaTwitterSquare className="bi"  style={{width:"24",height:"24",color:'white'}}/></a></li>
        <li className="ms-3"><a className="text-body-secondary" href="#"><FaInstagramSquare className="bi" style={{width:"24",height:"24",color:'white'}}/></a></li>
      </ul>
    </footer>
  );
};

export default Footer;
