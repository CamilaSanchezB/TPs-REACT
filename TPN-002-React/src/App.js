import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>TP N°2 React - Captura de eventos</h1>
      <p>Hacer una app en react que: tenga un control de formulario HTML input de tipo "text" y un botón que al presionarse muestre en un alert el texto ingresado.</p>
      <form key="form" onSubmit={(event)=> {event.preventDefault(); alert('Texto ingresado: \n'+event.target.texto.value)}} className="Formulario">
        <input type="text" required name="texto" placeholder="Ingrese un texto"/>
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default App;
