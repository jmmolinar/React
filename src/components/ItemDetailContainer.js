/* 

    CURSO: React
    Estudiante: José Miguel Molina Rondón

    Componente: ItemDetailContainer

    - Traigo los productos por context con productosFirebase y se filtra por el useParams
    - Con el useParams obtengo el productoID que será asignado a ItemDetail

*/

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'
import useCartContext from '../context/useCartContext';

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
            {cargando ? <h2>Cargando...</h2>
                :
                <ItemDetail productoSeleccionado={producto} />
            }
        </div>
    </>
}

export default ItemDetailContainer;