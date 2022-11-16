// import {useState} from 'react';
import { HomePage } from "./Pages/HomePage";
import { ProductPage } from "./Pages/ProductPage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Product</Link></li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
