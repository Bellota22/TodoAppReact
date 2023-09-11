import React, { useContext } from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContext'

function TodoSearch(){
const {searchValue, setSearchValue} = useContext(TodoContext)
  
    return(
     <input
     value={searchValue}
      onChange={(event) => 
        setSearchValue(event.target.value)
      }
      placeholder="Hacer ejercicio" />
    )
  }

  export {TodoSearch}