import logo from './logo.svg';
import './App.css';

function App() {
  const vocales = ['A', 'E', 'I', 'O', 'U'];
  function esVocal(letra){
    let i=0;
    while(vocales[i] !== letra && i < vocales.length){ 
      i++;
    }
    return vocales[i]=== letra;
  }
  function conteoVocales(event){
    event.preventDefault();    
    let texto = event.target.texto.value.toUpperCase(), c=0;
    for(let letra in texto){
      if(esVocal(texto[letra])){
        c++;
      }
    }
    alert('Cantidad de vocales: \n'+ c);
  }
  
  return (
    <div className="App">
      <h1>TP N°3 React - Captura de eventos</h1>
      <div className="LeftA">
        <h3 >Hacer una app en react que:</h3>
        <p>
          tenga un control de formulario HTML input de tipo "text" y un botón que al presionarse muestre en un alert la cantidad de vocales ingresadas (realizarlo con una función de devuelva el resultado).
        </p>
      </div>
      <form key="form" onSubmit={conteoVocales} className="Formulario">
        <input type="text" required name="texto" placeholder="Ingrese un texto"/>
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default App;
