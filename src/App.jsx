import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import '../src/App.css';
import Shop from './Components/Shop';
import Footer from './pages/Footer';
import About from './pages/About';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Search from './pages/Search';

const App = () => {
  const location = useLocation();
  const hideNavFooter = location.pathname === '/search';

  return (
    <div>
      {!hideNavFooter && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/productList' element={<ProductList />} />
        <Route path='/details' element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={<Search />} />
      </Routes>

      {!hideNavFooter && <Footer />}
    </div>
  );
};

export default App;
