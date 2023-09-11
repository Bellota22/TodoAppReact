import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { Layout } from '../Layout';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { useContext } from 'react';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';

function AppUI () {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    
  } = useContext(TodoContext)
    return (
        <>
          <Layout>
            <TodoCounter />
            <TodoSearch />
            <TodoList>

            {loading && <TodosLoading />}
            {error && <TodosError />}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
            
            {
            searchedTodos.map(todo => (
                <TodoItem
                key = {todo.text}
                text = {todo.text}
                completed = {todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
                ))
              }
    
            </TodoList>
            <CreateTodoButton
              setOpenModal={setOpenModal}
            />

            {openModal && (<Modal>
               <TodoForm />
            </Modal>)}

          </Layout>
        </>
      );
}

export {AppUI}