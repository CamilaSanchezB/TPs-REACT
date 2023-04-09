import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Messages } from 'primereact/messages';
import { InputTextarea } from "primereact/inputtextarea";
import { Card } from 'primereact/card';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';
import { Timeline } from 'primereact/timeline';

function App() {
  const msgs = useRef(null);
  const [texto, setTexto] = useState("Este es un texto de ejemplo");
  const [caracteres, setCaracteres] = useState(0);
  const [palabras, setPalabras] = useState(0);
  const [maximo, setMaximo] = useState(false);

  useEffect(() => {
    setCaracteres(texto.length);
    let aux = (texto.split(" ")).filter(palabra => palabra !== "");
    setPalabras(aux.length);
  }, [texto]);
  function mostarAlerta(){
    msgs.current.show(
      { sticky: true, severity: 'error', detail: 'Limite de caracteres alcanzado', closable: false}
  );
  setMaximo(true);
  }
  function borarAlerta(){
    msgs.current.clear();
    setMaximo(false);
  }
  function cambiar(e) {
    if ((e.target.value).length <= 100) {
      setTexto(e.target.value);
      borarAlerta();
    } else{
      e.target.value = (e.target.value).slice(0, -1);
      mostarAlerta();
    }
  }
  const consigna = ['Crear componente que permita ingresar texto', 'Mostrar el número de caracteres', 'Añadir un límite de caracteres', 'Mostrar advertencia cuando se alcance', 'Mostrar el número de palabras', 'Implementar framework'];
  return (
    <div className="App">
      <div className='card'>
      <Card title='TPN°7 React' subTitle='Hook - user state - useEffect' style={{backgroundColor: 'var(--blue-50)', padding: '5%'}}>
        <hr/>
        <h4>Tener en cuenta: <a href='https://www.tutorialesprogramacionya.com/reactya/detalleconcepto.php?punto=9&codigo=9&inicio=0'>https://www.tutorialesprogramacionya.com/reactya/detalleconcepto.php?punto=9&codigo=9&inicio=0</a></h4>      
        <Timeline value={consigna} layout="horizontal" align="top" content={(item) => item} />
        <div className="" style={{ margin: '2em 1em', width: '100%'}}>
          <InputTextarea autoResize value={texto} onChange={cambiar} rows={5} className={
              maximo ? 'p-invalid' : ''
            } style={{width: '60%', marginRight: '10%'}}/>
          <table style={{display: 'inline-block'}}>
            <thead>
              <tr>
                <th style={{paddingRight: '3em'}}>Caracteres</th>
                <th className='separacion'>Palabras</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td style={{paddingRight: '3em'}}><Knob value={caracteres} strokeWidth={10} valueColor="var(--teal-500)"/></td>
                <td className='separacion'><Knob value={palabras} strokeWidth={10} valueColor="var(--teal-500)"/></td>
              </tr>
            </tbody>
          </table>
          <Messages ref={msgs} />   
          <Button label="Eliminar todas las alertas" severity="help" onClick={borarAlerta} style={{
            display: maximo ? 'block' : 'none',
            float: 'right', marginRight: '5%'}} raised />
        </div>
    </Card>
    </div>
    </div>
    
  )
}

export default App;