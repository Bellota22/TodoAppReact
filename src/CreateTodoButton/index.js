import { PlusCircleIcon } from '@heroicons/react/24/solid'
import './CreateTodoButton.css'

function CreateTodoButton({ setOpenModal }) {
  
    return (
      <div 
        className='button-container'
        onClick={() => setOpenModal(state =>!state)}
        >
        
        <PlusCircleIcon
        className='button' />
      </div>
    )
  }
  
export {CreateTodoButton}