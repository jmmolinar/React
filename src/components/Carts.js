/* 

    CURSO: React
    Desafio N° 10 Renderizado condicional tomando datos del useCartContext
    Estudiante: José Miguel Molina Rondón

    Se agrega componente Agrupados que toma la cantidad de productos en carrito para saber si renderiza el listado o un mensaje

*/

import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import useCartContext from '../context/useCartContext';

const Carts = () => {

    const { producto, cantidadProd, totalCantidadesIcon } = useCartContext()
    console.log("Cantidades iniciando la app: ")
    console.log(totalCantidadesIcon);

    //Componente condicional para diferencia si hay o no productos en el carrito
    const Agrupados = ({ sumaProductosEnCarrito }) => {

        if (sumaProductosEnCarrito > 0) {
            return (<>
                <div className="footer">
                    <div></div>
                    <h1>Carrito de compras</h1>
                    <div></div>
                    <div>
                        {producto.map((entry, index) => (
                            <div key={index}>
                                <strong>Producto: </strong> {entry.id} -
                                <strong>Album: </strong> {entry.album} -
                                <strong>Cantidad: </strong> {entry.cantidad}
                            </div>
                        ))}
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div>
                        <Link to={'/productos'}><Button id="masProductos">Productos</Button></Link> <Button id="comprar">Comprar</Button>
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
    console.log(producto);
    console.log("Cantidad con Agregar al carrito para un producto específico: ")
    console.log(cantidadProd);
    console.log("Sumatoria de las cantidades de todos los productos agregados: ")
    console.log(totalCantidadesIcon);

    return (<>
        <div className="App">
            {/* Le paso la cantidad de productos que están en el carrito */}
            <Agrupados sumaProductosEnCarrito={totalCantidadesIcon} />
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