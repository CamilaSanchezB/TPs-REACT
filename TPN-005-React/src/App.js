import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [contador, setContador] = useState(0);
  function disminuir(){
    let number = parseInt(document.getElementById('valor').value);
    if (number>0){
      setContador(contador- number);
    }else{
      alert('Ingrese un valor valido mayor a 0');
    }

  }
  function aumentar(){
    let number = parseInt(document.getElementById('valor').value);
    if (number>0){
      setContador(contador + number);
    }else{
      alert('Ingrese un valor valido mayor a 0');
    }
    
  }
  
  const [win, setWin] = useState(false);
  return (
    <div className="App">
      <h1>Contador</h1>
      {win && (<h1 className='rojo'>{contador}</h1>)}
      {!win && (<h1 className='negro'>{contador}</h1>)}
      <div className='botones'>
        
        <button onClick={disminuir} className='btnR'>Disminuir</button>
        <button onClick={aumentar} className='btnG'>Aumentar</button>
        <div className='inputT'>
          Valor de aumento y disminución:
          <input type="number" defaultValue={1} id='valor'  required></input>
        </div>
      </div>
    </div>
  );
}

export default App;
