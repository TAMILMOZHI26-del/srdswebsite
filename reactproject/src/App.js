import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Signin from './Components/Signin/Signin';
// import Hero from './Components/Hero';
// import Services from './Components/Services/Services';
// import Testimonial from './Components/Testimonial/Testimonial';
import Home from './Components/Home';
// import Signup from './Components/Signup/Signup';
// import OTP from './Components/OTP/OTP';
// import OTP from './Components/OTP';

// import Signup from './Signup';
// import OTP from './OTP';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Signup Page */}
        {/* <Route path="/" element={<Signin />} /> */}
        {/* <Route path="/" element={<Signup />} /> */}
        {/* <Route path="/OTP" element={<OTP />} /> */}
        <Route path="/" element={<Home />} />


        {/* Route for OTP Page */}
        {/* <Route path="/otp" element={<OTP/>} /> */}
      </Routes>
    </Router>
    // <>
    // <Hero/>
    // <Services/>
    // <Testimonial/>
    // </>
  );
};

export default App;