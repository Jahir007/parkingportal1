// import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../AppContext';
import UserIn from './UserIn';

const Navbar = () => {
	const { logoutHandler} = useAppContext();

	const getoutHandler = () => {
		logoutHandler();
	};

	return (
		<>
		   <nav className="navbar navbar-dark bg-dark navbar-expand-lg sticky-md-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Parking Portal</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/OwnerPage">Owner</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/GuestBooking">Guest Booking</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Slot">Slot</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Vehicle">Vehicle</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ContactUs">Contact Us</Link>
                        </li>
                    </ul>
					
                    <div className='d-md-flex justify-content '>
						<UserIn/>
						<li  className="nav-item">
						<Link  to='/Signup'>	
                        <button className=" btn btn-secondary me-3" type="button" onClick={getoutHandler}>Logout</button></Link>
						</li>
                    </div>
                </div>
            </div>
        </nav>
		</>
	);
};

export default Navbar;
