import React from 'react';
import '../styles/prueba.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
import "primeicons/primeicons.css";
import { Button } from 'primereact/button';
import {Link} from "react-router-dom";
import {Menubar} from "primereact/menubar"

export default function Navbar(){
    const start = <Link to={"/"}>
  <Button label={<><i className="pi pi-check-square" style={{ fontSize: '1.5rem' }}></i><span> Mis Tareas</span></>} severity="primary" text  style={{ fontSize: '1.5rem' }} />
</Link>;
const end = <Link to={"/Creation"}>
<Button label={<i className="pi pi-plus-circle" style={{ fontSize: '1.5rem' }}></i>} severity="primary" text />
</Link>;

return(
    <div className="card" style={{width: '100%', marginTop: 0, marginBottom: '2em'}}>
      <Menubar start={start} end={end} model={null} submenuIcon={null} className='borrarA'/>
    </div>
)
}