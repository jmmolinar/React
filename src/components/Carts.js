/* 

    CURSO: React
    Estudiante: José Miguel Molina Rondón
    
    Componente: Carts
    Subcomponente: Agrupados
    
    - En el Carrito agrego el botón comprar
    - Al hacer clic en él invoco a nuevaCompra
    - En la función nuevaCompra invoco a las funciones de validaciones de los input
    - Se validan: nombre, apellido, dirección, formato email y coincidencias, formato teléfono
    - Luego invoco a ventasFirebase que la tengo en useCartContext
    - ventasFirebase se encarga de crear la colección ventas en Firebase y agregar las compras
    - Luego de hacer la compra exitosa consulta si quiere mantener los productos en el carrito o vaciarlo
    - Se tienen funciones para eliminar por elemento del carrito y para vaciar el carrito
    - Tengo un Subcomponente llamado Agrupados
    - Agrupados utiliza sumarCantidadesAlCarrito traida del useCartContext
    - Muestra los productos en una tabla
    - Si no hay elementos agregados renderiza mensaje para ir a seleccionar en categorias o en productos elementos nuevos

*/

import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Form } from "react-bootstrap";
import { Link } from 'react-router-dom'
import useCartContext from '../context/useCartContext';

const Carts = () => {

    const { productosCarrito, eliminarProducto, eliminarTodosProductos, sumarCantidadesAlCarrito, ventasFirebase } = useCartContext()
    console.log("Cantidades productos Cart.js: ")
    console.log(sumarCantidadesAlCarrito());

    // Variables a las que se asignarán los input del comprador
    var nombre, apellido, direccion, telefono, email, confirmarEmail;

    //SubComponente condicional para diferencia si hay o no productos en el carrito
    const Agrupados = ({ totalDeProductosEnCarrito }) => {

        const vaciarCarrito = () => {
            eliminarTodosProductos()
        }

        const eliminarDelCarrito = (p) => {
            eliminarProducto(p.id)
        }

        // Verificar formato de Email
        const validarEmail = (valorEmailA, valorEmailB) => {
            var formatoEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
            if (formatoEmail.test(valorEmailA) && formatoEmail.test(valorEmailB)) {
                return true;
            } else {

                if (!formatoEmail.test(valorEmailA)) {
                    alert("Verifica tu email");
                    document.getElementById("email").focus();
                } else {
                    if (!formatoEmail.test(valorEmailB)) {
                        alert("Verifica el email de comprobación");
                        document.getElementById("confirmarEmail").focus()
                    }
                }

                return false;
            }
        }

        // Verificar que ambos emails sean iguales
        const compararEmail = (emailA, emailB) => {
            if (emailA == emailB) {
                return true;
            } else {
                alert("Los emails no son iguales");
                document.getElementById("confirmarEmail").focus();
                return false;
            }
        }

        // Verificar formato de teléfono
        const validarTelefono = (valorTelefono) => {
            var numeroTelefono = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{6})$/;
            if (numeroTelefono.test(valorTelefono)) {
                return true;
            }
            else {
                alert("Verifica tu número de teléfono\n\n" +
                    "Formato: +56-123-123456");
                document.getElementById("telefono").focus();
                return false;
            }
        }

        // Verificar longitud mínima del nombre
        const validarNombre = (valorNombre) => {
            if (!valorNombre.length) {
                alert("Ingresa tu nombre");
                document.getElementById("nombre").focus();
                return false;
            }
            if (valorNombre.length > 1) {
                return true;
            } else {
                alert("El nombre es muy corto");
                document.getElementById("nombre").focus();
                return false;
            }
        }

        // Verificar longitud mínima del apellido
        const validarApellido = (valorApellido) => {
            if (!valorApellido.length) {
                alert("Ingresa tu apellido");
                document.getElementById("apellido").focus();
                return false;
            }
            if (valorApellido.length > 1) {
                return true;
            } else {
                alert("El apellido es muy corto");
                document.getElementById("apellido").focus();
                return false;
            }
        }

        // Verificar longitud mínima de la dirección
        const validarDireccion = (valorDireccion) => {
            if (!valorDireccion.length) {
                alert("Ingresa tu dirección");
                document.getElementById("direccion").focus();
                return false;
            }
            if (valorDireccion.length > 9) {
                return true;
            } else {
                alert("La dirección es muy corta");
                document.getElementById("direccion").focus();
                return false;
            }
        }

        //Con el onclic en botón compra llamo a nuevaCompra
        //Aquí adentro invoco a ventasFirebase que está en el useCartContext
        const nuevaCompra = () => {

            //Obtengo los datos del formulario para enviarlos a ventasFirebas
            nombre = document.getElementById("nombre").value;
            apellido = document.getElementById("apellido").value;
            direccion = document.getElementById("direccion").value;
            telefono = document.getElementById("telefono").value;
            email = document.getElementById("email").value;
            confirmarEmail = document.getElementById("confirmarEmail").value;

            if (validarNombre(nombre) == true && validarApellido(apellido) == true &&
                validarDireccion(direccion) == true && validarTelefono(telefono) == true &&
                validarEmail(email, confirmarEmail) == true &&
                compararEmail(email, confirmarEmail) == true) {

                // Creo la colección en firebase
                ventasFirebase(nombre, apellido, direccion, telefono, email);

                //Luego de realizar la compra vacío el carrito



                
            }
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
                        <Table striped bordered hover responsive="sm" borderless>
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
                                        <td>{entry.cantidadComprada}</td>
                                        <td>${entry.precio * entry.cantidadComprada}</td>
                                        <td><Button variant="danger" id="eliminar" onClick={() => eliminarDelCarrito(entry)}>Eliminar</Button></td>
                                    </tr>
                                </tbody>
                            ))}
                            <thead>
                                <tr>
                                    <th colSpan="6"><Button id="vaciar" onClick={vaciarCarrito} >Vaciar Carrito</Button></th>
                                </tr>
                                <tr>
                                    <th colSpan="6"></th>
                                </tr>
                                <tr>
                                    <th colSpan="6">Datos del comprador</th>
                                </tr>
                                <tr>
                                    <th colSpan="6">
                                        <div class="row justify-content-center h-100">
                                            <Form>
                                                <Form.Row>
                                                    <Form.Group colSpan="3">
                                                        <Form.Control id="nombre" type="text" minlength="1" maxlength="20" size="20" placeholder="Nombre" required />
                                                    </Form.Group>
                                                    <Form.Group colSpan="3">
                                                        <Form.Control id="apellido" type="text" minlength="1" maxlength="20" size="20" placeholder="Apellido" required />
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group colSpan="3">
                                                        <Form.Control id="direccion" type="text" minlength="9" maxlength="60" size="60" placeholder="Dirección" required />
                                                    </Form.Group>
                                                    <Form.Group colSpan="3">
                                                        <Form.Control id="telefono" type="tel" minlength="14" maxlength="14" size="14" placeholder="+56-123-123456" required />
                                                    </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group colSpan="3">
                                                        <Form.Control id="email" type="email" minlength="9" placeholder="Email" required />
                                                    </Form.Group>
                                                    <Form.Group colSpan="3">
                                                        <Form.Control id="confirmarEmail" type="email" minlength="9" placeholder="Repetir email" required />
                                                    </Form.Group>
                                                </Form.Row>
                                            </Form>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <thead>
                                <tr>
                                    <th colSpan="6">
                                        <div>
                                            <Button onClick={nuevaCompra} id="comprar">Comprar</Button>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                        </Table>
                    </div>
                    <div>
                    </div>
                </div>
            </>
            )
        } else {

            return (<>
                <div className="footer">
                    <div>
                        <h3>Agrega productos al carrito</h3>
                        <div>
                            <Link to={'/productos'}><Button id="productos">Productos</Button></Link> <Link to={'/categorias'}><Button id="categorias">Categorías</Button></Link>
                        </div>
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