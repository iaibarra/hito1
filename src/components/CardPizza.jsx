import { useCart } from "../context/CartContext";

const CardPizza = ({ name, img, ingredients, price, id }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ id, name, img, price });
  };

  return (
    <div className="card">
      <img src={img} alt={name} />
      <h5>{name}</h5>
      <p>${price}</p>
      <ul>
        {ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
      </ul>
      <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
      <button onClick={handleAdd} className="btn btn-primary">Añadir</button>
        <Link to={`/pizza/${id}`}>
          <button className="btn btn-secondary">Ver más</button>
        </Link>
    </div>
    </div>  
  );
};

export default CardPizza;
