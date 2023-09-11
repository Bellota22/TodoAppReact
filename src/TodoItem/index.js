import './TodoItem.css'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'

function TodoItem(props) {
    return (
          <li
          className='flex  justify-between w-3/5  bg-transparent border border-solid border-[#ccc] text-sm text-black focus:outline-none px-4 py-2 rounded-lg mb-4  '
          >
            <CheckIcon
                className={`w-5 h-5 flex-shrink-0 hover:text-green-500  ${props.completed ? "text-green-500  " : ""}`}
                onClick={props.onComplete}
            />
            <p className={` px-4  ${props.completed ? "line-through " : "text-black"}`}>{props.text}</p>
            <XMarkIcon
                onClick={props.onDelete}
                className='w-5 h-5 flex-shrink-0   transform transition-transform hover:text-red-700 hover:rotate-180 cursor-pointer'
            />

          </li>
    )
  }
  
export {TodoItem}

