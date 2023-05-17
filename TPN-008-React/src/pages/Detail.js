import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from 'primereact/toast';
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import '../styles/prueba.css';

export default function Detail({ todos, setTodos, setEliminarPos }) {
  let { pos } = useParams();
  const [flag, setFlag] = useState(false);
  const [cuerpo, setCuerpo] = useState(todos[pos]?.text || "");
  const [titulo, setTitulo] = useState(todos[pos]?.title || "");
  const [tituloValue, setTituloValue] = useState(todos[pos]?.title || "");
  const [subtitulo, setSubtitulo] = useState("");
  const [redirecting, setRedirecting] = useState(false); // Estado para controlar la animación de redirección
  const toast = useRef(null);
  const navigate = useNavigate();

  const show = () => {
    toast.current.show({ severity: 'success', summary: 'Cambios realizados con éxito' });
  };

  const footer = (
    <div className="flexResponsive">
      <div className="flexSingle">
        <Button
          label={todos[pos].completed ? "Marcar como no completada" : "Marcar como completada" }
          severity={todos[pos].completed ? "danger" : "success"} 
          outlined
          size="small"
          onClick={updateCompleted}
        />
      </div>
      <div className="flexGroup">
        {!flag && (
          <Button
            label="Editar"
            icon="pi pi-pencil"
            style={{ marginRight: "1em" }}
            onClick={() => {
              setFlag(true);
            }}
          />
        )}
        {!flag && (
          <Button
            label="Borrar"
            icon="pi pi-times"
            severity="danger"
            className="p-button-outlined p-button-secondary"
            onClick={() => eliminarTarea(pos)}
          />
        )}
        {flag && (
          <Button
            label="Guardar"
            icon="pi pi-check"
            style={{ marginRight: "1em" }}
            onClick={() => {
              guardarTarea();
              setFlag(false);
            }}
          />
        )}
        {flag && (
          <Button
            label="Cancelar"
            icon="pi pi-times"
            severity="danger"
            className="p-button-outlined p-button-secondary"
            onClick={() => setFlag(false)}
          />
        )}
      </div>
    </div>
  );

  useEffect(() => {
    setSubtitulo(
      <>
        Fecha de creación: {todos[pos]?.date}
        <br />
        <span style={{ color: todos[pos]?.completed ? 'var(--green-700)' : 'var(--red-700)', fontWeight: 'bold' }}>
          {traduccion(todos[pos]?.completed)}
        </span>
      </>
    );
  }, [todos, pos]);

  function updateCompleted() {
    const updatedTodos = [...todos];
    updatedTodos[pos].completed = !updatedTodos[pos].completed;
    setTodos(updatedTodos);
    show();
  }

  useEffect(() => {
    console.log(flag);
  }, [flag]);

  function traduccion(palabra) {
    let rta = 'No completada';
    if (palabra) {
      rta = 'Completada';
    }
    return rta;
  }

  function guardarTarea() {
    const updatedTodos = [...todos];
    updatedTodos[pos].text = cuerpo;
    updatedTodos[pos].title = tituloValue;
    setTodos(updatedTodos);
    show();
  }

  function eliminarTarea(indice) {
    show();
    setEliminarPos(indice);
    setRedirecting(true); // Iniciar la animación de redirección
  }

  useEffect(() => {
    setCuerpo(todos[pos]?.text || "");
    setTitulo(todos[pos]?.title || "");
  }, [todos, pos]);

  useEffect(() => {
    if (flag) {
      setTitulo(
        <InputTextarea
          style={{ width: "100%" }}
          autoResize
          rows={1}
          cols={100}
          defaultValue={tituloValue}
          onChange={(e) => {
            setTituloValue(e.target.value);
          }}
        />
      );
    } else {
      setTitulo(todos[pos]?.title || "");
    }
  }, [flag]);

  useEffect(() => {
    if (redirecting) {
      const redirectTimer = setTimeout(() => {
        setRedirecting(false); // Desactivar la animación de redirección después de 500ms
        navigate("/"); // Reemplaza "/" con la ruta deseada
      }, 700);
      return () => {
        clearTimeout(redirectTimer);
      };
    }
  }, [redirecting]);

  return (
    <>
      <Navbar />
      <Toast ref={toast} />
      <div style={{ margin: "auto" }}>
        <div className={`card flex justify-content-center ${redirecting ? "fade-out" : ""}`}>
          <Card title={titulo} subTitle={subtitulo} footer={footer}>
            {!flag && <p className="m-0">{todos[pos]?.text || ""}</p>}
            {flag && (
              <InputTextarea
                autoResize
                style={{ width: "100%" }}
                rows={5}
                cols={100}
                defaultValue={cuerpo}
                onChange={(e) => {
                  setCuerpo(e.target.value);
                }}
              />
            )}
          </Card>
        </div>
      </div>
    </>
  );
}
