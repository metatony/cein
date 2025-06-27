import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/landing page/LandingPage';
import StoresPage from './pages/stores page/StoresPage';
import Faq from './pages/faq page/Faq';
import ShopPage from './pages/shop page/ShopPage';
import ProductPage from './pages/product page/ProductPage';
import { GlobalProvider } from './provider/GlobalProvider';
import CartSlider from './pages/cart/CartSlider';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './pages/about/AboutPage';
import { CheckoutProvider } from '@stripe/react-stripe-js';
import Payment from './components/Payment';
import { Analytics } from '@vercel/analytics/next';


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(prev => !prev);

  return (
    <GlobalProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <Navbar toggleCart={toggleCart} />
        <CartSlider isOpen={isCartOpen} toggleCart={toggleCart} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/stores" element={<StoresPage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/checkout" element={<Payment />} />        
        </Routes>
        <Footer />
        <Analytics />
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;

// className='container mx-auto px-4