/* 

    CURSO: React
    Estudiante: José Miguel Molina Rondón

    Componente: ItemList

    - Traigo los productos por context con productosFirebase
    - Se pasan los productos al componente Item para ser renderizados

*/

import React, { useState, useEffect } from 'react';
import Item from './Item'
import useCartContext from '../context/useCartContext';
//import './App.css';

const ItemList = () => {
    const [cargando, setCargando] = useState(true);
    const [productos, setProductos] = useState();

    const { productosFirebase } = useCartContext();

    //Pedido de datos al iniciar el componente
    useEffect(() => {
        getProductos();
    }, []);

    //Obtengo del useCartContext los productos de Firebase
    const getProductos = () => {
        setTimeout(() => {
            setProductos(productosFirebase);
            setCargando(false);
        }, 2000);
        return () => { };
    }

    return <>
        <div className="App">
            <h2>Discografías</h2>

            {cargando ? <h3>Cargando...</h3>
                : <Item atributo={productos} />
            }
        </div>
    </>
}

export default ItemList;