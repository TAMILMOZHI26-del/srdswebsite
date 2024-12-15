import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Services from '../Components/Services/Services';
import Testimonial from '../Components/Testimonial/Testimonial';

function Home() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Services/>
            <Testimonial/>
        </>
    )
}

export default Home;