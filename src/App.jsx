
import { useState } from 'react'
import './App.css'
import Banner from './my-components/banner/Banner'
import Header from './my-components/header/Header'
import Recipes from './my-components/our-recipes/Recipes'
import Sidebar from './my-components/sidebar/Sidebar'

function App() {
  const [order, setOrder] = useState([]);
  // console.log(order);
  const controlOrder = (recipe) => {
      const isExist = order.find(prevOrder => prevOrder.recipe_id === recipe.recipe_id)
      if(!isExist){
        const newOrder = [...order, recipe];
        setOrder(newOrder);
      }
      else{
        alert("This order already exist")
      }
  }
  return (
    <div className='container mx-auto'>
      <Header></Header> 
      <Banner></Banner>   
      <section className='grid grid-cols-3 mt-6 gap-4 border p-2 rounded-md'>
      <Recipes controlOrder ={controlOrder}></Recipes>
      <Sidebar order= {order}></Sidebar>
      </section>
    </div>
  )
}

export default App
