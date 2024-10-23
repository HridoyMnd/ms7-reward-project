import { useState } from 'react'
import Recipes from './my-components/our-recipes/Recipes'
import Sidebar from './my-components/sidebar/Sidebar'

function App() {
  const [order, setOrder] = useState([]);
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
      <section className='grid grid-cols-3 mt-6 gap-4 border p-2 rounded-md'>
      <Recipes controlOrder ={controlOrder}></Recipes>
      <Sidebar order= {order} setOrder = {setOrder}></Sidebar>
      </section>
    </div>
  )
}

export default App
