import React, {useState} from 'react';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Home from './pages/Home.js'
import Detail from './pages/Detail';
import Creation from './pages/Creation'

function App() {
  const [todos, setTodos] = useState([
    { title:'Hacer las compras', text: 'Ir a la verduleria y a la carniceria', date: new Date("May 15, 2023").toLocaleDateString(), completed: true },
    { title:'Hacer trabajos practicos', text: 'Terminar tp de redes', date: new Date("May 10, 2023").toLocaleDateString(), completed: false },
    { title:'Hacer la comida', text: 'Preparar milanesa con papas', date: new Date("May 16, 2023").toLocaleDateString(), completed: true },
    { title:'Hacer las compras', text: 'Ir a la verduleria y a la carniceria', date: new Date("May 15, 2023").toLocaleDateString(), completed: false },
    { title:'Hacer trabajos practicos', text: 'Terminar tp de redes', date: new Date("May 10, 2023").toLocaleDateString(), completed: true },
    { title:'Hacer la comida', text: 'Preparar milanesa con papas', date: new Date("May 16, 2023").toLocaleDateString(), completed: false },

  ]);
  const [eliminarPos, setEliminarPos] = useState(undefined);
  
  return (
    <>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home  todos={todos} setTodos={setTodos}  eliminarPos={eliminarPos} setEliminarPos={setEliminarPos}/>} />
          <Route path="/Detail/:pos" element={<Detail  todos={todos} setTodos={setTodos}  setEliminarPos={setEliminarPos}/>} />
          <Route path="/Creation" element={<Creation  todos={todos} setTodos={setTodos}/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;