import React, {useState} from 'react'
import { pizzaCart } from '../pizzas'
const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

  const aumentar = (id) => {
    const nuevoCart = cart.map(p =>
      p.id === id ? { ...p, count: p.count + 1 } : p
    );
    setCart(nuevoCart);
  };

  const disminuir = (id) => {
    const nuevoCart = cart
      .map(p => p.id === id ? { ...p, count: p.count - 1 } : p)
      .filter(p => p.count > 0);
    setCart(nuevoCart);
  };

  // calcular total cn forEach
  let total = 0;
  cart.forEach(pizza => {
    total += pizza.price * pizza.count;
  });
  return (
    <div className="cart-container">
      <h2>Detalle del carrito</h2>
      {cart.map(pizza => (
        <div key={pizza.id} className="cart-item">
          <img src={pizza.img} alt={pizza.name} width={100} />
          <div>
            <h5>{pizza.name}</h5>
            <p>${pizza.price}</p>
            <p>Cantidad: {pizza.count}</p>
            <button onClick={() => disminuir(pizza.id)}>-</button>
            <button onClick={() => aumentar(pizza.id)}>+</button>
          </div>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button className="btn btn-success">Pagar</button>
    </div>
  )
}

export default Cart