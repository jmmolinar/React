/* 

    CURSO: React
    Desafio N° 9 context
    Estudiante: José Miguel Molina Rondón

*/

import ItemCount from '../components/ItemCount';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import useCartContext from '../context/useCartContext';

const ItemDetail = ({ productoSeleccionado }) => {

    const [cantidad, setCantidad] = useState(1);
    const ctx = useCartContext()

    const { producto, asignarProducto, cantidadProd } = useCartContext()

    //Verificando que traiga el objeto completo
    console.log("Aqui viene el arreglo de productos")
    console.log(producto);

    const agregarAlCarrito = () => {
        asignarProducto(productoSeleccionado, cantidad)
    }

    const setearCantidad = (cantidad) => {
        setCantidad(cantidad)
    }

    if (!productoSeleccionado) {
        return <p>Ya viene el producto...</p>;
    }
    return (<>
        <div>
            <div>
                <h1>Producto: {productoSeleccionado.id}</h1>
                <img src={productoSeleccionado.caratula} alt={productoSeleccionado.banda} />
                <div><strong>Album: </strong>{productoSeleccionado.album}</div>
                <div><strong>Valor: ${productoSeleccionado.precio}</strong></div>
                <div></div>
                <div><strong>Detalle: </strong>{productoSeleccionado.detalle}</div>
                <div></div>
            </div>

        </div>

        <div>
            <ItemCount initial={1} min="1" max="15" onAdd={setearCantidad}></ItemCount>
        </div>
        {/* <div>
            <h2>{ctx.dummyText}</h2>
            <button onClick={() => { ctx.handleDummyText("José Miguel Molina") }}>newValue</button>
            <hr />
        </div> */}
        <div>
            <Button id="agregar" onClick={agregarAlCarrito}>Agregar al carrito {cantidad}</Button> <Link to={'/carrito'}><Button id="comprar" onClick={agregarAlCarrito}>Comprar {cantidad}</Button></Link>

        </div>

    </>
    )
}
export default ItemDetail;

{/* <div className="footer">
    <div></div>
    <h4>Aparecerán en el carrito: </h4>
    <div></div>
    <div>
        {producto.map((entry) => (
            <div key={entry.id}>
                <div><strong>Producto: </strong> {entry.id} - <strong>Album: </strong> {entry.album} - <strong>Cantidad: </strong> {entry.cantidad}</div>
            </div>
        ))}
    </div>
    <hr />
</div> */}