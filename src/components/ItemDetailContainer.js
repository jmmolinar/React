/* 

    CURSO: React
    Desafio N° 11 Clase 12 Firebase
    Estudiante: José Miguel Molina Rondón

    Traigo los productos por context con productosFirebase y se filta por el useParams

*/

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'
import useCartContext from '../context/useCartContext';
//import './App.css';

const ItemDetailContainer = () => {

    const [cargando, setCargando] = useState(true);
    const [producto, setProducto] = useState({});
    let { productoId } = useParams();
    console.log("Producto ID de la URL " + productoId)

    const { productosFirebase } = useCartContext()

    useEffect(() => {
        setCargando(true)
        setTimeout(() => {
            setProducto(productosFirebase.find((p) => p.id == productoId))
            setCargando(false);
        }, 3000);
        return () => { };
    }, [productoId]);


    return <>
        <div className="App">
            {cargando ? <h1>Loading...</h1>
                :
                <ItemDetail productoSeleccionado={producto} />
            }
        </div>
    </>
}

export default ItemDetailContainer;



// SOLUCIÓN 1: SELECCIÓN DEL PRODUCTO CON FILTER
// setProducto(response.filter(p => p.id == productoId)[0])
// filter devuelve un array por eso necesitas el[0]


// SOLUCIÓN 2: SELECCIÓN DEL PRODUCTO CON FIND
// setProducto(response.find((p) => p.id == productoId))


// SOLUCIÓN 3: RECORRO EL ARREGLO CON FOR Y COMPARO CON IF
// TUVE QUE HACER PARSEINT PARA QUE ME TOMARA EL productId del useParams
// for (var i = 0; i < response.length; i++) {
//     if (response[i].id === parseInt(productoId)) {
//         setProducto(response[i])
//         console.log("Mi resultado: " + response[i]);
//     }

// }




    // useEffect(() => {
    //     setCargando(true)
    //     setTimeout(() => {
    //         // Utilizo mi json generado en typicode
    //         const url = 'https://my-json-server.typicode.com/jmmolinar/json/discografia';
    //         fetch(url)
    //             .then((response) => {
    //                 console.log(response);
    //                 return response.json();
    //             })
    //             .then((response) => {
    //                 console.log("Response del 2do then: " + response)
    //                 console.log("Este es el query: " + productoId);

    //                 // SOLUCIÓN 2: SELECCIÓN DEL PRODUCTO CON FIND
    //                 setProducto(response.find((p) => p.id == productoId))
    //                 setCargando(false)
    //             });
    //     }, 3000);
    //     return () => { };
    // }, [productoId]);