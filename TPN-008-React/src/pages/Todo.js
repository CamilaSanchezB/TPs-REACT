
import React, { useState, useEffect, useRef } from 'react';
import '../styles/prueba.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
import "primeicons/primeicons.css";
import { Card } from 'primereact/card';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import {Link} from "react-router-dom";

export default function Todo({legend, body, pos, completada}) {
    
    let legendTemplate = (
        <div className="flex align-items-center text-primary" >
            <span className="font-bold text-lg">{legend}</span>
        </div>
    );
    return (
        <div style={{width: '100%'}}>
            <Fieldset legend={legendTemplate} toggleable style={{borderColor: completada ? 'var(--green-700)' : 'var(--red-700)', borderWidth: '0.15em'}} className={completada ? 'prueba1': 'prueba'}>
                <p className="m-0">
                   {body}
                </p>
                <Link to={"/Detail/"+pos}>
                    <Button label="Ver detalle" severity={completada ? "success" : "danger"} text  style={{float: 'right'}} size="small"/>
                </Link>
            </Fieldset>
        </div>
    )
}
        