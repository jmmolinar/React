/* 

    CURSO: React
    Desafio N° 6 y 7 de las Clases 7 y 8
    Estudiante: José Miguel Molina Rondón 

*/

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'
//import './App.css';

const ItemDetailContainer = () => {

    const [cargando, setCargando] = useState(true);
    const [producto, setProducto] = useState({});
    let { productoId } = useParams();
    console.log("Producto ID de la URL " + productoId)

    useEffect(() => {
        setCargando(true)
        setTimeout(() => {
            // Utilizo mi json generado en typicode
            const url = 'https://my-json-server.typicode.com/jmmolinar/json/discografia';

            // fetch("https://my-json-server.typicode.com/jmmolinar/json/discografia")
            fetch(url)
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((response) => {
                    console.log("Response del 2do then: " + response)
                    console.log("Este es el query: " + productoId);

                    // SOLUCIÓN 1: SELECCIÓN DEL PRODUCTO CON FILTER
                    //setProducto(response.filter(p => p.id == productoId)[0])
                    //filter devuelve un array por eso necesitas el[0]


                    // SOLUCIÓN 2: SELECCIÓN DEL PRODUCTO CON FIND
                    setProducto(response.find((p) => p.id == productoId))


                    // SOLUCIÓN 3: RECORRO EL ARREGLO CON FOR Y COMPARO CON IF
                    //TUVE QUE HACER PARSEINT PARA QUE ME TOMARA EL productId del useParams
                    // for (var i = 0; i < response.length; i++) {
                    //     if (response[i].id === parseInt(productoId)) {
                    //         setProducto(response[i])
                    //         console.log("Mi resultado: " + response[i]);
                    //     }

                    // }

                    setCargando(false)


                });
        }, 3000);
        return () => { };
    }, [productoId]);


    return <>
        <div className="App">
            {cargando ? <h1>Loading...</h1>
                : 
                <ItemDetail elementosAtributo6A={producto} />
            }
        </div>
    </>
}

export default ItemDetailContainer;