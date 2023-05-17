import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { InputTextarea } from "primereact/inputtextarea";
import Navbar from './Navbar';

export default function Creation({ todos, setTodos }){
    
    function nuevaTarea (titulo, texto, fecha, completada){
        let newTodos = [...todos];
        newTodos.push({ title: titulo, text: texto, date: fecha, completed: completada });
        setTodos(newTodos);
        show();
      };
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Tarea creada con exito '+getValues('fecha'), detail: getValues('titulo') });
    };
    
    const defaultValues = {
        titulo: '',
        cuerpo: '',
        fecha: new Date().toLocaleDateString(),
        completada: false,
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.titulo && data.cuerpo && nuevaTarea(getValues('titulo'), getValues('cuerpo'), getValues('fecha'), getValues('completada'));
        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <>
        <Navbar />
        
        <div className="card flex justify-content-center">
        <Card
          title={"Crear nueva tarea"}
          subTitle={"Ingrese los datos solicitados"}
          
        >
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column gap-2" style={{marginTop: '1em'}}>
                <Toast ref={toast} />
                <Controller
                    name="titulo"
                    control={control}
                    rules={{ required: 'Complete el titulo' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.titulo })} style={{marginTop: "0.5em"}}></label>
                            <span className="p-float-label">
                                <InputTextarea style={{width: "100%"}}autoResize cols={100} rows={1} id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                <label htmlFor={field.name}>Titulo</label>
                            </span>
                            <span style={{display: 'block', marginBottom: '1em'}}>{getFormErrorMessage(field.name)}</span>
                            
                        </>
                    )}
                />
                <Controller
                
                    name="cuerpo"
                    control={control}
                    rules={{ required: 'Complete la descripcion' }}
                    render={({ field, fieldState }) => (
                        <>
                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.cuerpo })} style={{marginTop: "0.5em"}}></label>
                            <span className="p-float-label">
                                <InputTextarea style={{width: "100%"}} autoResize cols={100} rows={5}id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                
                                <label htmlFor={field.name}> Descripcion </label>
                            </span>
                            <span style={{display: 'block', marginBottom: '1em'}}>{getFormErrorMessage(field.name)}</span>
                            
                        </>
                    )}
                />
                <Button label={<>Crear <i className="pi pi-check"></i> </>} type="submit" severity='success' style={{marginTop: '1em', width: '100%'}}/>
            </form>
            </Card>
        </div>
        </>
    )
}