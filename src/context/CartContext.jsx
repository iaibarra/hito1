import { createContext, useContext, useState } from "react";

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para consumir el contexto
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar pizza
  const addToCart = (pizza) => {
    const exists = cart.find(p => p.id === pizza.id);
    if (exists) {
      setCart(cart.map(p => 
        p.id === pizza.id ? { ...p, count: p.count + 1 } : p
      ));
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  // Aumentar cantidad
  const increase = (id) => {
    setCart(cart.map(p =>
      p.id === id ? { ...p, count: p.count + 1 } : p
    ));
  };

  // Disminuir cantidad
  const decrease = (id) => {
    setCart(cart
      .map(p => p.id === id ? { ...p, count: p.count - 1 } : p)
      .filter(p => p.count > 0));
  };

  // Cálculo del total
  const total = cart.reduce((sum, p) => sum + p.price * p.count, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, increase, decrease, total }}>
      {children}
    </CartContext.Provider>
  );
};
