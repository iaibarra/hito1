import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Pizza = () => {
  const { id } = useParams()
  const [pizza, setPizza] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas/p001/${id}') 
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((err) => console.error('Error al cargar pizza', err))
  }, [])

  if (!pizza) return <p> Cargando pizza... </p>

  return (
    <div className="pizza-detail">
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} style={{ width: '300px' }} />
      <p><strong>Precio:</strong> ${pizza.price}</p>
      <p><strong>Ingredientes:</strong></p>
      <ul>
        {pizza.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      <p><strong>Descripción:</strong> {pizza.desc}</p>
      <button>Añadir al carrito</button>
    </div>
  )
}

export default Pizza
