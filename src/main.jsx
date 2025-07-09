import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

import { CartProvider } from './context/CartContext';
import { UserProvider } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
      <UserProvider>
        <App />
      </UserProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
