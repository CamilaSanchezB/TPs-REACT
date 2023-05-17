import React, { useEffect } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Navbar from './Navbar.js';
import Todo from './Todo.js';
import '../styles/prueba.css'


function Home({todos, setTodos, eliminarPos, setEliminarPos}) {

  useEffect (()=>{
    if(eliminarPos !== undefined){
      eliminarTarea(eliminarPos);
      setEliminarPos(undefined);
    }
  },[eliminarPos]) 
  function eliminarTarea(indice) {
    const newTodos = todos.filter((_, i) => i !== parseInt(indice));
    setTodos(newTodos);
  }
  return (
    <>
    <Navbar />
    <div className='container1'>
        {todos.map((todo, index) => (
          <Todo legend={todo.title}  body={todo.text} key={index} pos={index} completada={todo.completed}/>
        ))}
        
    </div>
    </>
  );
}

export default Home;