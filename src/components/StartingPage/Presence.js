import React from 'react';
import Footer from '../Layout/Footer';
import HeroSection from './HeroSection'
import Navbar2 from '../Layout/Navbar2';
import Cards from './Cards';

const Presence = () => {
	return (
		<>
			<Navbar2 />
			<HeroSection/>
			<Cards/>
			<Footer/>
		</>
	);
};

export default Presence;