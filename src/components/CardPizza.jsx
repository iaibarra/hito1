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
      <button onClick={handleAdd} className="btn btn-primary">Añadir</button>
    </div>
  );
};

export default CardPizza;
