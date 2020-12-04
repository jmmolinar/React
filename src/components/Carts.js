/* 

    CURSO: React
    Desafio N° 9 context
    Estudiante: José Miguel Molina Rondón 

*/

import React from 'react';
import Button from 'react-bootstrap/Button';
import useCartContext from '../context/useCartContext';

const Carts = () => {
    const { producto, cantidadProd } = useCartContext()

    console.log("Productos en el carrito: ")
    console.log(producto);
    console.log("Cantidad de productos agregados con Agregar al carrito: ")
    console.log(cantidadProd);

    return (<>
        <div className="footer">
            <div></div>
            <h1>Carrito de compras</h1>
            <div></div>
            <div>
                {producto.map((entry) => (
                    <div><strong>Producto: </strong> {entry.id} - <strong>Album: </strong> {entry.album} - <strong>Cantidad: </strong> {cantidadProd}</div>
                ))}
            </div>
            <div>
                <hr/>
            </div>
            <div>
                <Button id="comprar">Comprar</Button>
            </div>
        </div>
    </>

    )
}
export default Carts;