/* 

    CURSO: React
    Desafio N° 9 context
    Estudiante: José Miguel Molina Rondón 

*/

import React from 'react';
import useCartContext from '../context/useCartContext';

const Carts = () => {
    const { dummyArrayObject, handleDummyArrayObject} = useCartContext()

    console.log("Productos en el carrito: ")
    console.log(dummyArrayObject);
    console.log("Productos agregados (pero no la cantidad) cada vez que presiono Agregar al carrito: ")
    console.log(dummyArrayObject.length);

    // const handleValueObject = () => {
    //     handleDummyArrayObject([])
    // }

    return (<>
        <div className="footer">
            <h1>MIS PRODUCTOS ARRAY OBJECT</h1>
            <div>
                {dummyArrayObject.map((entry) => (
                    <h2>Producto: {entry.id} - Album {entry.album} - Cantidad: </h2>
                ))}
            </div>
        </div>
    </>

    )
}
export default Carts;