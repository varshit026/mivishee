import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './components/food'
import ErrorMSG from './components/errormsg'

function App() {
  
  let foodItems=["Dal", "A", "B", "C", "D", "E"];

  return(
    <>
   <h1>List of Food Items</h1>
    <ErrorMSG Items={foodItems}></ErrorMSG>

    <FoodItems items={foodItems}></FoodItems>
    </>
    )
}

export default App
