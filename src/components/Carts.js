/* 

    CURSO: React
    Desafio N° 12 Firebase II
    Estudiante: José Miguel Molina Rondón

    En el Carrito agrego el botón comprar
    Al hacer clic en él invoco a nuevaCompra
    En nuevaCompra invoco a la función ventasFirebase que la tengo en useCartContext

*/

import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
import useCartContext from '../context/useCartContext';

const Carts = () => {

    const { productosCarrito, eliminarProducto, sumarCantidadesAlCarrito, ventasFirebase } = useCartContext()
    console.log("Cantidades productos Cart.js: ")
    console.log(sumarCantidadesAlCarrito());

    //Componente condicional para diferencia si hay o no productos en el carrito
    const Agrupados = ({ totalDeProductosEnCarrito }) => {

        const eliminarDelCarrito = (p) => {
            eliminarProducto(p.id)
        }

        //Con el onclic en botón compra llamo a nuevaCompra
        //Allí invoco a Ventas() que está en el useCartContext
        const nuevaCompra = () => {
            ventasFirebase()
        }

        const tableStyle = {
            fontSize: '14px'
        };

        if (totalDeProductosEnCarrito > 0) {
            return (<>
                <div className="footer">
                    <div></div>
                    <h1>Carrito de compras</h1>
                    <div></div>
                    <div>
                        <Table striped bordered hover responsive="sm">
                            <thead>
                                <tr>
                                    <th>Banda</th>
                                    <th>Album</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            {productosCarrito.map((entry) => (
                                // <div key={index}>
                                <tbody style={tableStyle}>
                                    <tr>
                                        <td>{entry.banda}</td>
                                        <td><Link to={`/productos/${entry.id}`}>{entry.album}</Link></td>
                                        <td>${entry.precio}</td>
                                        <td>{entry.cantidad}</td>
                                        <td>${entry.precio * entry.cantidad}</td>
                                        <td><Button variant="danger" id="eliminar" onClick={() => eliminarDelCarrito(entry)}>Eliminar</Button></td>
                                    </tr>
                                </tbody>
                            ))}
                        </Table>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div>
                        <Link to={'/productos'}><Button id="masProductos">Productos</Button></Link> <Button onClick={nuevaCompra} id="comprar">Comprar</Button>
                    </div>
                </div>
            </>
            )
        } else {

            return (<>
                <div className="footer">
                    <div>
                        <h2>No tienes productos agregados</h2>
                        <Link to={'/productos'}><Button id="productos">Productos</Button></Link>
                    </div>
                </div>
            </>
            )

        }


    }

    console.log("Productos en el carrito: ")
    console.log(productosCarrito);
    console.log("Sumatoria de las cantidades de todos los productos agregados: ")
    console.log(sumarCantidadesAlCarrito());

    return (<>
        <div className="App">
            {/* Le paso la cantidad de productos que están en el carrito */}
            <Agrupados totalDeProductosEnCarrito={sumarCantidadesAlCarrito()} />
        </div>
    </>
    )

}
export default Carts;






// return (<>
//     <div className="footer">
//         <div></div>
//         <h1>Carrito de compras</h1>
//         <div></div>
//         <div>
//             {producto.map((entry) => (
//                 <div><strong>Producto: </strong> {entry.id} - <strong>Album: </strong> {entry.album} - <strong>Cantidad: </strong> {entry.cantidad}</div>
//             ))}
//         </div>
//         <div>
//             <hr />
//         </div>
//         <div>
//             <Button id="comprar">Comprar</Button>
//         </div>
//     </div>
// </>
// )

{/* <td><strong>Producto: </strong> {entry.id}</td>
<td><strong>Album: </strong> {entry.album}</td>
<td><strong>Precio: </strong> $ {entry.precio}</td>
<td><strong>Cantidad: </strong> {entry.cantidad}</td>
<td><strong>Subtotal: </strong> {entry.precio * entry.cantidad}</td> */}