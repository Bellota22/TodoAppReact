import './TodoList.css'

function TodoList({children}) {
    return(
      <ul className='flex items-center flex-col justify-center' >
        {children}
      </ul>
    )
  }

  export {TodoList}