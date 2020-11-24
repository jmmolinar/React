/* 

    CURSO: React
    Desafio N° 8 de la Clase 9
    COLOCAR CONTADOR AL BOTÓN COMPRAR CON UN EVENTO
    Estudiante: José Miguel Molina Rondón

    //Se agrega función tomarContador que toma el onAdd y le pasa el parámetro contador
    //Con los botones - y + cambio el valor del contador entre min y max desde initial

*/

//import React, { Component, useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const ItemCount = ({ initial, min, max, onAdd }) => {
    const [contador, setContador] = useState(initial);

    //
    useEffect(() => {
        //Se va a mostrar el valor
        console.log("Valor inicial del contador: " + contador);
        //document.getElementById('botonSumar').addEventListener("click", sumarContador);

        return () => {
            //console.log("Murió");
            // Nos desconectamos de cosas que no vamos a usar
            //document.getElementById('botonSumar').removeEventListener("click", sumarContador)
        }

    }, []);


    //Se ejecuta con el botón + 
    const sumarContador = () => {
        if (contador < max) {
            setContador(contador + 1);
        } else {
            setContador(contador);
        }
    }

    //Se ejecuta con el botón -
    const restarContador = () => {
        if (contador > min) {
            setContador(contador - 1);
        } else {
            setContador(contador);
        }
    }

    //Tomo el valor del onAdd pasado y como es la función AgregarAlCarrito que recibe
    //parámetros, entonces le paso como atributo el contador
    const tomarContador = () => {
        onAdd(contador)
    }

    // //Al clickear AGREGAR AL CARRITO emito un alert
    // const agregarAlCarrito = () => {
    //     alert("Se agregaron " + contador +  " " + onAdd + " a tu carrito")
    //     //setContador(initial); //aqui colocaba de nuevo el contador en initial
    // }

    console.log("Se va a renderizar")
    return <>
        <div className="footer">
            <Table>
                {/* <thead>
                    <tr>
                        <td colSpan="3"><h2>{onAdd}</h2></td>
                    </tr>
                </thead> */}
                <tbody>
                    <tr>
                        <td><Button id="botonRestar" onClick={restarContador}>-</Button></td>
                        <td>{contador}</td>
                        <td><Button id="botonSumar" onClick={sumarContador}>+</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div>
            {/* Agrego el botón COMPRAR para el Desafio 6 de la Clase 7 */}
            <Button onClick={tomarContador}>Agregar al carrito</Button> <Button id="comprar">Comprar {contador}</Button>
        </div>
    </>


}


export default ItemCount;