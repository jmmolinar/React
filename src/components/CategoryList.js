/* 

    CURSO: React
    Desafio N° 11 Clase 12 Firebase context
    Estudiante: José Miguel Molina Rondón

*/

import React, { useState, useEffect } from 'react';
import Category from './Category'
import useCartContext from '../context/useCartContext';
//import './App.css';

const ItemListCategory = () => {
    const [cargando, setCargando] = useState(true);
    const [categorias, setCategorias] = useState();

    const { productosFirebase, arregloCategorias, agregarCategoriaArreglo } = useCartContext();

    //PEDIDO DE DATOS AL INICIAR EL COMPONENTE
    useEffect(() => {
        
        getCategorias();
        //return () => {console.log(getProductos())}
    }, []);

    //TRAYENDOME DEL CONTEXTO LOS DATOS DEL FIREBASE
    const getCategorias = () => {
        //agregarCategoriaArreglo(productosFirebase);
        setTimeout(() => {
            console.log("Arreglo desde CategoryList")
            console.log(arregloCategorias)
            setCategorias(arregloCategorias);
            setCargando(false);
        }, 2000);
        return () => { };
    }


    return <>
        <div className="App">
            <h1>Categorías Discografías</h1>

            {cargando ? <h3>Cargando...</h3>
                : <Category atributoCategoria={categorias} />
            }
        </div>
    </>
}

export default ItemListCategory;





//FUNCION PARA CONSULTAR LOS PRODUCTOS DESDE MI JSON
// const getProductos = () => {

//     setTimeout(() => {
//         // Utilizo mi json generado en typicode
//         const url = 'https://my-json-server.typicode.com/jmmolinar/json/discografia';
//         fetch(url)
//             .then((response) => {
//                 return response.json();
//             })
//             .then((response) => {
//                 setProductos(response);
//                 setCargando(false);
//             });
//     }, 2000);
//     return () => {};
// }