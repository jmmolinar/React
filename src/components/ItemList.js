/* 

    CURSO: React
    Desafio N° 5 de la Clase 6
    Estudiante: José Miguel Molina Rondón 

*/  

import React, { useState, useEffect } from 'react';
import Item from './Item'
//import './App.css';

const ItemList = () => {
    const [cargando, setCargando] = useState(true);
    const [productos, setProductos] = useState();
    //PEDIDO DE DATOS AL INICIAR EL COMPONENTE
    useEffect(() => {
        getProductos();
        //return () => {console.log(getProductos())}
    }, []);


    //FUNCION PARA CONSULTAR LOS PRODUCTOS
    const getProductos = () => {

        setTimeout(() => {
            // Utilizo mi json generado en typicode
            const url = 'https://my-json-server.typicode.com/jmmolinar/json/discografia';
            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((response) => {
                    setProductos(response);
                    setCargando(false);
                });
        }, 2000);
        return () => {};
    }

    return <>
        <div className="App">
            <h1>Discografía de los 60's</h1>

            {cargando ? <h3>Loading...</h3>
                : <Item atributo={productos} />
            }
        </div>
    </>
}

export default ItemList;