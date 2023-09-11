import React, { useContext } from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContext'

function TodoSearch(){
const {searchValue, setSearchValue} = useContext(TodoContext)
  
    return(
      <div className='flex justify-center' >
        <input
         className='bg-transparent w-2/5 border border-solid border-[#ccc] text-sm text-black focus:outline-none px-4 py-2 rounded-lg mb-4 text-center'
         value={searchValue}
         onChange={(event) => 
           setSearchValue(event.target.value)
         }
         placeholder="Hacer ejercicio" />

      </div>
    )
  }

  export {TodoSearch}