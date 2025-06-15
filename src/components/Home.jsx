import React from 'react'
import Header from './Header'
import {pizzas} from '../pizzas'
import CardPizza from './CardPizza'


const Home = () => {
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