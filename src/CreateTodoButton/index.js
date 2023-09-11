import { PlusCircleIcon } from '@heroicons/react/24/solid'
import './CreateTodoButton.css'

function CreateTodoButton({ setOpenModal }) {
  
    return (
      <div 
        className='flex w-full justify-around'
        >
          <PlusCircleIcon
          onClick={() => setOpenModal(state =>!state)}
          className='button w-8 h-8 cursor-pointer transform transition-transform hover:rotate-180' />
      </div>
    )
  }
  
export {CreateTodoButton}