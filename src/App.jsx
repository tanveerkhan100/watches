import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import '../src/App.css';
import Shop from './Components/Shop';
import Footer from './pages/Footer';
import About from './pages/About';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import Login from './pages/Login';
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/productList' element={<ProductList />} />
        <Route path='/details' element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
