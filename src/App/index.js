import React  from 'react'
import './App.css'
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodoHeader } from '../TodoHeader';
import { useTodos } from './useTodos';

// const defaultTodos = [
//   {text: 'Terminar el curso', completed: true},
//   {text: 'salir a hacer algo diferente', completed: false},
//   {text: 'estudiar como mierda', completed: false},
//   {text: 'estudiar como ', completed: true},

// ]



function App() {
  const {
    states,
    stateUpdaters    
  } = useTodos()


  const {
    loading,
    error,
    completedTodos,
    totalTodos, 
    searchValue,
  } = states

  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setSearchValue,
    setOpenModal,
    addTodo,
  } = stateUpdaters
  
  return (
    <>
        <TodoHeader
          loading={loading} >
          <TodoCounter 
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
      

        </TodoHeader>

        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos={totalTodos}
          searchText={searchValue}
          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmptyTodos={() => <EmptyTodos />}

          onEmptySearchResults={
            (searchText) => <p> No hay resultados para tu busqueda {searchText} </p>
          }
          render={(todo) => (
            <TodoItem
              key = {todo.text}
              text = {todo.text}
              completed = {todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
        >
          {/* {
            (todo) => (
              <TodoItem
                key = {todo.text}
                text = {todo.text}
                completed = {todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            )
          } */}
        </TodoList>

        
        <CreateTodoButton
          setOpenModal={setOpenModal}
        />

        {openModal && (<Modal>
           <TodoForm
            setOpenModal={setOpenModal}
            addTodo={addTodo}
            />
        </Modal>)}
    </>
  );
}



export default App;
