import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { useState } from "react";

const Cart = () => {
  const { cart, increase, decrease, total } = useCart();
  const { token } = useUser();
  const [mensaje, setMensaje] = useState("");

  const handleCheckout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (!res.ok) throw new Error("Error al procesar el pago");

      const data = await res.json();
      setMensaje("✅ Compra realizada con éxito. Gracias por tu pedido 🍕");

    } catch (error) {
      console.error("Error en el checkout:", error.message);
      setMensaje("❌ Hubo un problema al realizar la compra.");
    }
  };

  return (
    <div className="cart-container">
      <h2>Detalle del carrito</h2>

      {cart.map((pizza) => (
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

      <button
        className="btn btn-success"
        disabled={!token || cart.length === 0}
        onClick={handleCheckout}
      >
        Pagar
      </button>

      {mensaje && (
        <div className="alert alert-info mt-3">
          {mensaje}
        </div>
      )}
    </div>
  );
};

export default Cart;
