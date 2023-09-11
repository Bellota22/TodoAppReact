import React  from 'react'
import './App.css'
import { AppUI } from './AppUI';
import {  TodoProvider } from '../TodoContext';

// const defaultTodos = [
//   {text: 'Terminar el curso', completed: true},
//   {text: 'salir a hacer algo diferente', completed: false},
//   {text: 'estudiar como mierda', completed: false},
//   {text: 'estudiar como ', completed: true},

// ]



function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    
  );
}



export default App;
