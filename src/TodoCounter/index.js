import { TodoContext } from '../TodoContext'
import { useContext } from 'react'

function TodoCounter(){

  const { totalTodos, completedTodos } = useContext(TodoContext)
  
  return(
      totalTodos === completedTodos ?
      <div className='flex justify-center'>
        <h1 className='max-w mt-8 mb-4 font-bold text-lg lg:text-xl lg:mt-12 lg:mb-6' >
          Haz completado todas tus misiones!! 💥
        </h1>

      </div>
        :
      <div className='flex justify-center'>
        <h1 className='max-width mt-8 mb-4 font-bold text-lg lg:text-xl lg:mt-12 lg:mb-6'>
          Haz completado {completedTodos} de {totalTodos} misiones
        </h1>
      </div>

    )
  }

export {TodoCounter}