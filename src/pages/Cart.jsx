import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";


const Cart = () => {
  const { cart, increase, decrease, total } = useCart();
  const { token } = useUser();


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
            <button onClick={() => decrease(pizza.id)}>-</button>
            <button onClick={() => increase(pizza.id)}>+</button>
          </div>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button className="btn btn-success" disabled={!token}>Pagar</button>
    </div>
  );
};

export default Cart;
