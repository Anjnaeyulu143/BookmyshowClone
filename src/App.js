import Header from './components/Header';
import './App.css';
import alanBtn from "@alan-ai/alan-sdk-web";
import {useEffect} from "react";
import Data from "./components/Data";

import { useState } from 'react';

import Card from "./components/Card"
import MoviesData from "./components/MoviesData"




function App() {
  
const [category, setCategory] = useState([])

  useEffect(() => {
    alanBtn({
      key:'287c2da294b3e8aa73c43b10d11c6bff2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand : ({command,product}) =>{
        if(command==="firstCommand"){
          alert("started your first command")
        }
        if(command === "show"){
            filter(product)
        }}       
      }
    )
    filter('')
  }, [])


  const filter = (names)=>{
    const filtered = Data.filter(item=>item.name.includes(names))
    console.log(filtered)
    setCategory(filtered);
   
  }

  //console.log(MoviesData.lengtht)

  return (
    <div>
      <Header/>
      <div style={{display:"flex",flexWrap:"wrap"}}>
      {category.map(item=> (
        <Card item={item}/>
      ))}
      </div>
    </div>
  );
}

export default App;
