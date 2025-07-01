import React from 'react'
import usePokemons from '../../hooks/usePokemons';



export const BarraDeBusqueda = () => {
  const [busqueda, setBusqueda]= React.useState("");
  const {changeValue}= usePokemons()

const handleChange=e=>{
  setBusqueda (e.target.value)
  changeValue(e.target.value)
}


  
  
  
  return (
    <div><input 
    className='bg-white-200 rounded w-full text-black-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-1' 
    onChange={handleChange}
    value={busqueda}
    />
    </div>
  )
}

export default BarraDeBusqueda
