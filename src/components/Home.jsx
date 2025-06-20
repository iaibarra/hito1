import React, {useEffect, useState} from 'react'
import Header from './Header'
import CardPizza from './CardPizza'



const Home = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
    .then ((res) =>res.json())
    .then ((data) => setPizzas(data))
    .catch ((err) => console.error ('Error al cargar pizzas', err))
  }, [])
  return (
    <>
    <Header/>
      <div className="card-container">
        {pizzas.map (pizza => (
    <CardPizza
    key={pizza.id}
    name={pizza.name}
    img={pizza.img}
    ingredients={pizza.ingredients}
    price={pizza.price}
  />
  ))}
      </div>
    </>
  )
}

export default Home