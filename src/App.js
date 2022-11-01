import './index.css'
import NombreFoto from './Components/NombreFoto'
import CampoConArray from './Components/CampoConArray'
import Flechita from './Components/Flechita'
import data from './data/events1'
import { useState } from 'react'


function App() {
  let [mostrarOcultar, setMostrarOcultar] = useState(false)

let [numeroACambiar, setNumeroACambiar] = useState(0)

let hide = () =>{
  setMostrarOcultar(!mostrarOcultar)
  console.log(true);
}

  
let next  = (e) =>{
  console.log("esta actuando");
  if(numeroACambiar < data.length -1){
  setNumeroACambiar(++numeroACambiar)
}else{
  setNumeroACambiar(0)
  console.log("se paso");
}

}

let prev = (e) =>{
  console.log("esta actuando");
  if(numeroACambiar > 0){
  setNumeroACambiar(--numeroACambiar)
}else{
  setNumeroACambiar(data.length-1)
  console.log("se paso");
}

}
  return (
    <div className='card black'>
      <NombreFoto nombre = {data[numeroACambiar].category} foto = {data[numeroACambiar].image}></NombreFoto>
      
      {
        mostrarOcultar ?
         (<><p className='gray flex j-center a-center' onClick ={hide}>ocultar info</p>
         <CampoConArray  datos = {data[numeroACambiar].name}></CampoConArray>
       <CampoConArray  datos = {data[numeroACambiar].description}></CampoConArray></>) 
         : (<p className='gray flex j-center a-center' onClick ={hide}>mostrar info</p>)
      }
        <div className='flex j-center a-center'>
        <Flechita  verbo = 'anterior' estilo= 'r25' onClick = {prev}></Flechita>
        <Flechita verbo ='siguiente' estilo ='l25' onClick ={next}></Flechita>
        
      </div>
    </div>
  )
}

export default App