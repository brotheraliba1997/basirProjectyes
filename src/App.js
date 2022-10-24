import React from "react";
import Product from "./Compoments/Product";
import Rating from "./Compoments/Rating";
import data from "./data"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Compoments/Screen/HomeScreen";
import ProductScreen from "./Compoments/Screen/ProductScreen";
import "./index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="grid-container">
          <header classNameName="header">
            <div className="brand">
              <button onclick="openMenu()">&#9776;</button>
              <a href="index.html">amazona</a>
            </div>
            <div className="header-links">
              <a href="cart.html">Cart</a>
              <a href="signin.html">Sign In</a>
            </div>
          </header>
          <Routes>
            <Route path="/Product/:id" element={<ProductScreen />}> </Route>
            <Route path="/" element={<HomeScreen />}> </Route>
          </Routes>

         
          <footer className="footer">All right reserved.</footer>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
