import './TodoItem.css'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'

function TodoItem(props) {
    return (
          <li>
            <CheckIcon
             className={`check ${props.completed && "is-completed" } `}
             onClick={props.onComplete}
             />
            <p className={`${ props.completed && "text-is-completed"}`} >{props.text}</p>
            <XMarkIcon
            onClick={props.onDelete}
            className='erase' />

          </li>
    )
  }
  
export {TodoItem}