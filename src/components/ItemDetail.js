/* 

    CURSO: React
    Estudiante: José Miguel Molina Rondón

    Componente: ItemDetail

    - Se muestra el producto seleccionado con todos sus detalles
    - Se utiliza el componente ItemCount para sumar o restar la cantidad del producto a comprar
    - El botón Agregar al carrito muestra el valor que se va sumando o restando
    - Al hacer clic en Agregar al carrito se actualiza la cantidad en el CartIcon
    - El botón Comprar muestra el valor que se va sumando o restando
    - Al hacer clic en Comprar se actualiza la cantidad en el CartIcon y hace link to al Carrito
    - La función agregarAlCarrito es usada por ambos botones
    - La función agregarAlCarrito utiliza asignarProducto del useCartContext
    - asignarProducto del useCartContext verifica si el producto ya está agregado
    - Si ya está agregado solo actualiza la nueva cantidad solicitada
    - Si no ha sido agregado lo suma al carrito junto con su cantidad

*/

import ItemCount from '../components/ItemCount';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
import useCartContext from '../context/useCartContext';

const ItemDetail = ({ productoSeleccionado }) => {

    const [cantidad, setCantidad] = useState(1);
    const ctx = useCartContext()

    const { productosCarrito, asignarProducto } = useCartContext()

    //Verificando que traiga el objeto completo
    console.log("Aqui viene el arreglo de productos")
    console.log(productosCarrito);

    const agregarAlCarrito = () => {
        asignarProducto(productoSeleccionado, cantidad)
    }

    const setearCantidad = (cantidad) => {
        setCantidad(cantidad)
    }

    if (!productoSeleccionado) {
        return <h2>No se tiene el producto...</h2>;
    }

    return (<>
        <div>
            <h2></h2>
            <Table striped bordered responsive="sm" borderless>
                <thead>
                    <tr>
                        <th>Album seleccionado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h2>ID Producto: </h2><p>{productoSeleccionado.id}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={productoSeleccionado.caratula} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p><strong>Banda: </strong>{productoSeleccionado.banda}</p>
                            <p><strong>Album: </strong>{productoSeleccionado.album}</p>
                            <p><strong>Valor: ${productoSeleccionado.precio}</strong></p>
                            <p><strong>Detalle: </strong>{productoSeleccionado.detalle}</p>
                            <p><strong>Categoría - </strong><Link to={`/categorias/${productoSeleccionado.categoriaID}`}>{productoSeleccionado.categoriaID}</Link></p>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div>
            <ItemCount initial={1} min="1" max="15" onAdd={setearCantidad}></ItemCount>
        </div>
        <div>
            <Button id="agregar" onClick={agregarAlCarrito}>Agregar al carrito {cantidad}</Button> <Link to={'/carrito'}><Button id="comprar" onClick={agregarAlCarrito}>Comprar {cantidad}</Button></Link>
        </div>

    </>
    )
}
export default ItemDetail;