import './App.css';
import React, { useState } from 'react';

function App() {
  
  const [todos, setTodos] = useState([
    { text: 'Hacer las compras', completed: false },
    { text: 'Hacer tp6 React', completed: true },
    { text: 'Hacer tp redes', completed: false },
    { text: 'Hacer tp paola', completed: false },
  ]);

  function nuevaTarea (){
    let tarea = prompt("Ingrese la nueva tarea:");
    if (tarea) {
      setTodos([...todos, { text: tarea, completed: false }]);
    } 
  };
  function eliminarTarea(indice){
    const newTodos = todos.filter((_, i) => i !== indice);
    setTodos(newTodos);
  }
  function editarTarea(indice){
    let tarea = prompt("Ingrese la nueva tarea:", todos[indice].text);
    if (tarea) {
      let newTodos = [...todos];
      newTodos[indice].text = tarea;
      setTodos(newTodos);
    } 
  }

  function traduccion(palabra){
    let rta = 'No completada';
    if(palabra){
      rta = 'Completada';
    }
    return rta;
  }
  function acciones (elemento){
    let rta = {clase: 'boton botonEliminar', icono: 'X', funcion: 'eliminar'};
    if(!elemento.completed){
      rta = {clase: 'boton botonEditar', icono: '✏️', funcion: 'editar'};
    }
    return rta;
  }
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  return (
    <div>
      <div style={{width: '65%'}}>
        <h1 style={{textAlign:'center', paddingLeft:'5%'}}>Crear una lista de tareas pendientes.</h1>
        <div style={{textAlign:'center'}}>
          <div style={{display: 'inline-block', textAlign: 'left'}}>
            <ul style={{ listStylePosition: 'inside', padding: 0}}>
              <li>Utilizar el hook useState para mantener el estado de las tareas.</li>
              <li>Permitir agregar nuevas tareas a la lista.</li>
              <li>Permitir marcar tareas como completadas.</li>
              <li>Mostrar la lista de tareas en la página.</li>
            </ul>
          </div>
        </div>
      </div>
      
      <hr style={{width: '65%'}}/>
      <table className='tabla'>
        <caption><h2 style={{textAlign:'left'}}>Tareas<span style={{float: 'right'}}><button onClick={nuevaTarea} className={'botonAgregar boton'}>+</button></span></h2></caption>
        <thead >
            <tr>
                <th style={{textAlign:'left', width: '4%'}}>#</th>
                <th style={{width:'75%'}}>Descripcion</th>
                <th style={{width:'15%'}}>Estado</th>
                <th style={{border: 0, width:'5%'}}></th>
            </tr>
        </thead>
        <tbody>
        {todos.map((todo, index) => (
          <tr className='borde'>
            <td>{index+1}</td>
            <td
            key={index}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => toggleComplete(index)}
          >
            {todo.text}
          </td>
          <td>{traduccion(todo.completed)}</td>
          <td style={{textAlign:'center'}}><button className={acciones(todo).clase} onClick={()=>{if(acciones(todo).funcion === 'eliminar'){
            eliminarTarea(index);
          }else{
            editarTarea(index); 
          }
          }}>{acciones(todo).icono}</button></td>
          
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
