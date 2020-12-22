/* 

    CURSO: React
    Estudiante: José Miguel Molina Rondón

    Componente: CategoryList

    - Utiliza el arregloCategorias traida desde el useCartContext
    - En ese arreglo tengo las categorías encontradas en los productos
    - Se eliminan las categorías repetidas en el useCartContext para no listarlas de forma duplicada
    - Paso al componente Category dichas categorías para que las muestre en el DOM
    
*/

import React, { useState, useEffect } from 'react';
import Category from './Category'
import useCartContext from '../context/useCartContext';

const ItemListCategory = () => {
    const [cargando, setCargando] = useState(true);
    const [categorias, setCategorias] = useState();

    const { arregloCategorias} = useCartContext();

    //Pedido de categorías al iniciar el componente
    useEffect(() => {
        getCategorias();
    }, []);

    //Obteniendo del contexto las categorías
    const getCategorias = () => {
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
            <h2>Categorías Discografías</h2>

            {cargando ? <h3>Cargando...</h3>
                : <Category atributoCategoria={categorias} />
            }
        </div>
    </>
}

export default ItemListCategory;