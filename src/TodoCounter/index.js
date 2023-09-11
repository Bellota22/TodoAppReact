import './TodoCounter.css'
import { TodoContext } from '../TodoContext'
import { useContext } from 'react'

function TodoCounter(){

  const { totalTodos, completedTodos } = useContext(TodoContext)
  
  return(
      totalTodos === completedTodos ?
        <h1>
          Haz completado todas tus misiones!! 💥
        </h1>
        :
        <h1>
          Haz completado {completedTodos} de {totalTodos} misiones
        </h1>

    )
  }

export {TodoCounter}