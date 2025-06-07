import React from 'react'

const CardPizza = (props) => {
  return (
    <div className="card-pizza">
      <img src={props.img} alt={`Pizza ${props.name}`} />
      <div className="card-body">
        <h5 className="card-title">Pizza {props.name}</h5>
        <p><strong>Ingredientes:</strong></p>
        <p className="text-muted small">🍕 {props.ingredients.join(', ')}</p>
        <p className="fw-bold">${props.price.toLocaleString()}</p>
        <div className="card-buttons">
          <button className="btn btn-outline-secondary btn-sm">Ver más</button>
          <button className="btn btn-dark btn-sm">Añadir</button>
        </div>
      </div>
    </div>
  );
};


export default CardPizza