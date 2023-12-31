import React, {useState} from "react";
import {Form} from "react-bootstrap";
import DangerBar from "../DangerBar/DangerBar";


const DangerInput = () => {

    //Variable que va a guardar el valor elegido por el usuario(value)
    const [value,setValue]=useState(0);

    //Actualizamos el estado de value
    const handleChangle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue (Number(event.target.value))
    }

  return (
   <div className="m-3 w-50"  >
    <h2>Ejemplo 1</h2>
    {/*Componente padre */}
        <Form.Range value={value} onChange={handleChangle}/>
    {/*Componente hijo */}
        <DangerBar value={value}/>
   </div>
  )
}

export default DangerInput