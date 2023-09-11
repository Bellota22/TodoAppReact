import React, { useContext, useState } from 'react'
import './TodoForm.css'
import { TodoContext } from '../TodoContext'

function TodoForm() {

    const {
        setOpenModal,
        addTodo
         } = useContext(TodoContext)
     
    const [newTodoValue, setNewTodoValue] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = (event) => {
        event.preventDefault()
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
  return (
    <form onSubmit={onSubmit} >
        <label> Escribe nueva misión </label>
        <textarea
            onChange={onChange}
            value = {newTodoValue}
            placeholder='¿Cuál es tu nueva misión guerrero?'
        />
         
         <div className='TodoForm-buttonContainer' >
            <button 
                type='submit'
                className='TodoForm-button TodoForm-button--add' >
            Añadir
            </button>
            <button 
                type='button'
                onClick={onCancel}
                className='TodoForm-button TodoForm-button--cancel' >
            Cancelar
            </button>

         </div>
    
    </form>

    )
}

export { TodoForm }