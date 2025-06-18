import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StoresPage from './pages/stores page/StoresPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Faq from './pages/faq page/Faq.jsx'
import ShopPage from './pages/shop page/ShopPage.jsx'
import ProductPage from './pages/product page/ProductPage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/" element={<App />} />
        <Route path="stores" element={<StoresPage />} />
        <Route path="faq" element={<Faq />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
