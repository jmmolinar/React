/* 

    CURSO: React
    Desafio N° 11 Clase 12 Firebase context
    Estudiante: José Miguel Molina Rondón 

*/


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item'
import useCartContext from '../context/useCartContext';
//import './App.css';

const CategoryContainer = () => {

    const [cargando, setCargando] = useState(true);
    const [productosFiltrados, setProductosFiltrados] = useState();

    let { categoriaId } = useParams();
    console.log("Categoria ID de la URL " + categoriaId)
    console.log("Productos filtrados por categoría:")
    console.log(productosFiltrados)

    const { productosFirebaseCategoria, getProductosCategoria } = useCartContext()

    //Función para filtar las categorias
    const mostrarDeLaCategoria = () => {
        //Filtrar en el Context
        getProductosCategoria(categoriaId)
    }

    useEffect(() => {
        mostrarDeLaCategoria();
        setCargando(true)
        setTimeout(() => {
            setProductosFiltrados(productosFirebaseCategoria)
            setCargando(false);
        }, 3000);
        return () => { };
    }, []);
    // }, [categoriaId]);


    return <>
        <div className="App">
            <h1>Discografía - Categoría {categoriaId} </h1>

            {cargando ? <h3>Loading...</h3>
                : <Item atributo={productosFirebaseCategoria} />
            }
        </div>
    </>
}

export default CategoryContainer;