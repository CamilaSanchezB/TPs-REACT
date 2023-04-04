import './App.css';
import {useState} from 'react';

function App() {
  const [contador, setContador] = useState(0);
  function accionar(event){
    event.preventDefault();
    let number = parseInt(document.getElementById('valor').value);
    if(number > 0){
      switch(event.target.innerHTML){
        case 'Disminuir':
          setContador(contador - number);
          break;
        case 'Aumentar':
          setContador(contador + number);
          break;
      }
    }
    else{
      alert('Ingrese un valor valido mayor a 0');
    }
  }
  return (
    <div className="App">
      <h1>Contador</h1>
      <h1>{contador}</h1>
      <div className='botones'>
        
        <button onClick={accionar} className='btnR'>Disminuir</button>
        <button onClick={accionar} className='btnG'>Aumentar</button>
        <div className='inputT'>
          Valor de aumento y disminución:
          <input type="number" defaultValue={1} id='valor'  required></input>
        </div>
      </div>
    </div>
  );
}

export default App;
