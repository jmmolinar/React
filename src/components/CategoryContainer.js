/* 

    CURSO: React
    Estudiante: José Miguel Molina Rondón

    Componente: CategoryContainer

    - Contenedor de productos pertenecientes a una categoría específica
    - Con el useParams obtengo de la url la categoriaID para filtrar
    - La función mostrarDeLaCategoria usa categoriaID y se pasa a getProductosCategoria del useCartContext
    - En getProductosCategoria del useCartContext se filtran los productos que tengan esa categoriaID
    - Paso al componente Item, los productos específicos de una categoría

*/

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item'
import useCartContext from '../context/useCartContext';

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


    return <>
        <div className="App">
            <h2>Discografía - Categoría {categoriaId} </h2>

            {cargando ? <h3>Cargando...</h3>
                : <Item atributo={productosFirebaseCategoria} />
            }
        </div>
    </>
}

export default CategoryContainer;