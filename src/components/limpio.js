/* 

    CURSO: React
    Desafio N° 8 de la Clase 10
    COLOCAR CONTADOR AL BOTÓN COMPRAR CON UN EVENTO
    Estudiante: José Miguel Molina Rondón

*/

import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const ItemCount = ({ initial, min, max, onAdd }) => {
    const [contador, setContador] = useState(initial);

    //
    useEffect(() => {
        console.log("Valor inicial del contador: " + contador);
        window.addEventListener('click', handleEventSumar)
        window.addEventListener('click', handleEventRestar)

        return () => {
            window.removeEventListener('click', handleEventSumar)
            window.removeEventListener('click', handleEventRestar)
        }

    }, []);

    const handleEventSumar = (event) => {
        if (event.type === "click") {
            console.log("Este es mi click SUMAR: " + event.type)
            if (contador < max) {
                setContador(contador + 1);
            } else {
                setContador(contador);
            }
        }
    }

    const handleEventRestar = (event) => {
        if (event.type === "click") {
            console.log("Este es mi click RESTAR: " + event.type)
            if (contador > min) {
                setContador(contador - 1);
            } else {
                setContador(contador);
            }
        }
    }

    const tomarContador = () => {
        onAdd(contador)
    }


    console.log("Se va a renderizar")
    return <>
        <div className="footer">
            <Table>
                <tbody>
                    <tr>
                        <td><Button id="botonRestar" onClick={handleEventSumar}>-</Button></td>
                        <td>{contador}</td>
                        <td><Button id="botonSumar" onClick={handleEventSumar}>+</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div>
            <Button onClick={tomarContador}>Agregar al carrito</Button> <Button id="comprar">Comprar {contador}</Button>
        </div>
    </>

}


export default ItemCount;