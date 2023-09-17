
function TodoCounter({ totalTodos, completedTodos, loading }){

  
  return(
      totalTodos === completedTodos ?
      <div className={`flex justify-center ${!!loading && 'opacity-25' } `}>
        <h1 className='max-w mt-8 mb-4 font-bold text-lg lg:text-xl lg:mt-12 lg:mb-6' >
          Haz completado todas tus misiones!! 💥
        </h1>

      </div>
        :
      <div className={`flex justify-center ${!!loading && 'opacity-25' } `}>
        <h1 className='max-width mt-8 mb-4 font-bold text-lg lg:text-xl lg:mt-12 lg:mb-6'>
          Haz completado {completedTodos} de {totalTodos} misiones
        </h1>
      </div>

    )
  }

export {TodoCounter}