/* 

    CURSO: React
    Estudiante: José Miguel Molina Rondón

    Componente: ItemCount

    - Se agregan las funciones para sumar y restar que toma el onAdd y le pasa el parámetro contador
    - Con los botones - y + cambio el valor del contador entre min y max desde initial

*/

import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const ItemCount = ({ initial, min, max, onAdd }) => {
    const [contador, setContador] = useState(initial);

    //Se ejecuta con el botón + 
    const sumarContador = () => {
        if (contador < max) {
            setContador(contador + 1);
            onAdd(contador + 1);
        }
    }

    //Se ejecuta con el botón -
    const restarContador = () => {
        if (contador > min) {
            setContador(contador - 1);
            onAdd(contador - 1);
        } 
    }

    console.log("Se va a renderizar")
    return <>
        <div className="footer">
            <Table>
                <tbody>
                    <tr>
                        <td><Button id="botonRestar" onClick={restarContador}>-</Button></td>
                        <td>{contador}</td>
                        <td><Button id="botonSumar" onClick={sumarContador}>+</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </>
}


export default ItemCount;