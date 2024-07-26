import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
 
  //let fooditems=["Dal","b", "c", "d", "e"]
  let fooditems=[]

  return (
    <>
    <h1>List of Food Items</h1>
    {/* {fooditems.length==0 ? <h3> hungry hu</h3> : null} */}
    {fooditems.length==0 && <h3>bhookha hu</h3>}
    <ul className="list-group">
    {fooditems.map((items) => <li className="list-group-item" key={items}>{items}</li> )}
  
</ul>
    </>

  )
}

export default App
