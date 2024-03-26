import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer'
import Product from './components/Products/Product'
import Contact from './Pages/Contact/Contact';
import Carrier from './Pages/Carrier/Carrier';
import ComingSoon from './Pages/ComingSoon/ComingSoon';
import SignUp from './Pages/SignUpPage/SignUp';
import Login from './Pages/Login/Login'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/products" element={<Product />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/carrier" element={<Carrier />} />      
       <Route path="/coming" element={<ComingSoon />} />
       <Route path="/signup" element={<SignUp/>} />
       <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App