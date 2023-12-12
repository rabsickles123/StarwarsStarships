import { useState, useEffect } from 'react'
import Starships from "./Starships"
import './App.css'


function App() {
  const [data, setData] = useState([])

  async function GetData(){
    const response = await fetch('https://swapi.dev/api/starships/');
    const data = await response.json();
    setData(data.results);   
  } 
  
useEffect(()=>{GetData()},[])

  return (
  <div className = "container">
    <h1 className = "title">Star Wars Starships</h1>
    <Starships data={data}/>
  </div>
  )
}

export default App
