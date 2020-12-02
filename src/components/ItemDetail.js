/* 

    CURSO: React
    Desafio N° 9 context
    Estudiante: José Miguel Molina Rondón

*/

import ItemCount from '../components/ItemCount';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import useCartContext from '../context/useCartContext';

const ItemDetail = ({ elementosAtributo6A }) => {

    const [cantidad, setCantidad] = useState(1);
    const ctx = useCartContext()

    const { dummyArrayObject, handleDummyArrayObject } = useCartContext()

    //Verificando que traiga el objeto completo
    console.log("Aqui viene el arreglo de objetos")
    console.log(dummyArrayObject);

    const handleValueObject = () => {
        handleDummyArrayObject({ elementosAtributo6A })
    }

    // const agregarAlCarrito = () => {
    //     //valorQueVieneDeApp.asignarProducto(elementosAtributo6A, cantidad)
    // }

    const setearCantidad = (cantidad) => {
        setCantidad(cantidad)
    }

    if (!elementosAtributo6A) {
        return <p>Ya viene el producto...</p>;
    }
    return (<>
        <div>
            <div>
                <h1>Producto: {elementosAtributo6A.id}</h1>
                <img src={elementosAtributo6A.caratula} alt={elementosAtributo6A.banda} />
                <div><strong>Album: </strong>{elementosAtributo6A.album}</div>
                <div><strong>Valor: ${elementosAtributo6A.precio}</strong></div>
                <div></div>
                <div><strong>Detalle: </strong>{elementosAtributo6A.detalle}</div>
                <div></div>
            </div>

        </div>

        {/* Agrego el carrito al ItemDetail */}
        <div>
            <ItemCount initial={1} min="1" max="15" onAdd={setearCantidad}></ItemCount>
        </div>
        {/* <div>
            <h2>{ctx.dummyText}</h2>
            <button onClick={() => { ctx.handleDummyText("José Miguel Molina") }}>newValue</button>
            <hr />
        </div> */}
        <div>
            {/* <Button onClick={agregarAlCarrito}>Agregar al carrito {cantidad}</Button> <Button id="comprar" href={'/carrito'}>Comprar {cantidad}</Button> */}
            <Button onClick={handleValueObject}>Agregar al carrito {cantidad}</Button>
        </div>

        <div className="footer">
            <h1>DUMMY ARRAY OBJECT</h1>
            <div>
                {dummyArrayObject.map((entry) => (
                    <div key={entry.id}>
                        <h2>Producto: {entry.id} - Album {entry.album}</h2>
                    </div>
                ))}
            </div>
            <hr />
        </div>

    </>
    )
}
export default ItemDetail;