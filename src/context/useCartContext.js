/* 

    CURSO: React
    Estudiante: José Miguel Molina Rondón

    Contexto: useCartContext

    - Se obtienen los productos de firebase
    - Función ventasFirebase crea la colección en firebase y registra las ventas
    - Muestra alert con el ID del documentos de firebas y demás datos de la compra y del comprador
    - Luego de la compra exitosa consulta si quiere mantener los productos en el carrito o vaciarlo
    - Los documentos de las ventas contienen: nombre, contacto, email, fechas, productos con sus cantidades, cantidad total y precio final
    - Función getProductosCategoria obtiene los productos filtrados por categoría
    - Función eliminarTodosProductos se usa para vaciar el carrito
    - Función eliminarProducto se utiliza para eliminar uno específico del carrito
    - Función asignarProducto agrega productos al carrito y los verifica para no tenerlos duplicados
    - En caso de ya estar en el carrito le actualiza la cantidad junto con la nueva asignada
    - Función agragarCategoriaArreglo llena un arreglo de categorias que utilizo para listarlas en la opción Categorías del menu de la app
    - Las categorías se crean de forma dinámica pues se buscan en todos los productos y se crea un arreglo con éstas sin estar duplicadas
    - Función sumarCantidadesAlCarrito actualiza las cantidades de productos agregados para mostrarlas en el CartIcon
    - Este dato también lo utiliza Carts para renderizar productos si existen y si no indicar al cliente que los agregue

*/

import React, { useEffect, useContext, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from '../firebase';

const AppContext = React.createContext();
const useCartContext = () => useContext(AppContext)

export const AppProvider = ({ children }) => {

    const [productosCarrito, setProductosCarrito] = useState([])
    const [arregloCategorias, setArregloCategorias] = useState([])

    // ****** FIREBASE ***** //
    const [productosFirebase, setProductosFirebase] = useState();
    const [productosFirebaseCategoria, setProductosFirebaseCategoria] = useState();

    useEffect(() => {
        //Referencia
        const db = getFirestore();
        const itemCollection = db.collection("productos");

        itemCollection.get().then((response) => {

            console.log(response)
            const aux = response.docs.map(element => {
                console.log(element.data());
                //element.id;
                //return element.data();
                //Para traerme el id del documento y no declarar otro adentro de la colección
                return { ...element.data(), id: element.id }
            });

            setProductosFirebase(aux)
            agregarCategoriaArreglo(aux)

            console.log("Datos traidos del Firebase a la variable AUX")
        })

        console.log("SOY ARREGLO CATEGORIAS")
        console.log(arregloCategorias);

    }, [])
    // *************************************** //


    // FUNCION PARA OBTENER LOS PRODUCTOS FILTRADOS POR CATEGORIA
    const getProductosCategoria = (categoriaURL) => {
        const datos = getFirestore();
        const coleccion = datos.collection("productos");
        const filtrarPorCategoria = coleccion.where("categoriaID", "==", categoriaURL)
        //solo con el filtro
        filtrarPorCategoria.get().then((response) => {
            console.log(response)
            const aux1 = response.docs.map(element => {
                console.log(element.data());
                //element.id;
                //return element.data();
                //Para traerme el id del documento y no declarar otro adentro de la colección
                return { ...element.data(), id: element.id }

            });

            setProductosFirebaseCategoria(aux1)

        })
    }

    //Función para crear la colección con las compras en Firebase
    const ventasFirebase = (nombre, apellido, direccion, telefono, email) => {
        let precioFinal = 0;
        let productosComprados = 0;

        //Calculo el precio final y la cantidad de productos totales
        productosCarrito.forEach(prod => {
            precioFinal = precioFinal + (prod.cantidadComprada * prod.precio);
            productosComprados = productosComprados + prod.cantidadComprada;
            // precioFinal = precioFinal + (prod.cantidad * prod.precio);
            // productosComprados = productosComprados + prod.cantidad;
        });

        let nuevaVenta = {
            buyer: { nombre: nombre + " " + apellido, domicilio: direccion, contacto: telefono, correo: email },
            items: productosCarrito,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: precioFinal,
            comprados: productosComprados
        };

        const db = getFirestore();
        db.collection("ventas").add(nuevaVenta)
            .then(({ id }) => {
                alert("ORDEN N°: " + id + "\n" +
                    "Productos comprados: " + productosComprados + "\n" +
                    "Total: $" + precioFinal + "\n\n" +
                    "DATOS DEL COMPRADOR\n" +
                    "Nombre: " + nombre + " " + apellido + "\n" +
                    "Correo: " + email + "\n" +
                    "Teléfono: " + telefono + "\n" +
                    "Gracias por tu compra");

                if (window.confirm("Tu compra fue exitosa\n\n ¿Quieres vaciar el carrito?") == true) {
                    eliminarTodosProductos();
                    alert("Gracias por tu compra")
                } else {
                    alert("Gracias por tu compra")
                }

            }).catch(error => {
                alert("Falló: " + error);
            }).finally(e => {
                //alert("Finally: ")
            })
    }


    const eliminarTodosProductos = () => {
        productosCarrito.splice(0)
        setProductosCarrito([...productosCarrito])
    }


    const eliminarProducto = (id) => {
        productosCarrito.splice(
            productosCarrito.findIndex((p) => p.id === id), 1
        )
        setProductosCarrito([...productosCarrito])
    }

    const asignarProducto = (nuevoProducto, nuevaCantidad) => {
        const existeProducto = productosCarrito.find((p) => p.id === nuevoProducto.id)
        console.log(existeProducto);

        if (existeProducto) {
            //existeProducto.cantidad += nuevaCantidad;
            //Asigno la nueva propiedad cantidadComprada al producto
            //y le asigno la "Cantidad" como tal
            existeProducto.cantidadComprada += nuevaCantidad;
            setProductosCarrito([...productosCarrito])
        } else {
            //nuevoProducto.cantidad = nuevaCantidad;
            //Asigno la nueva propiedad cantidadComprada al producto
            //y le asigno la "Cantidad" como tal
            nuevoProducto.cantidadComprada = nuevaCantidad;
            setProductosCarrito([...productosCarrito, nuevoProducto])
        }
    }

    // Arreglo de Categorías eliminando las repetidas
    // Este arreglo lo uso para mostrar los accesos a cada categoría
    // mediante un botones en Category.js que lo renderiza CategoryList.js
    const agregarCategoriaArreglo = (todosProductos) => {
        console.log("Soy todosProductos")
        console.log(todosProductos)

        // Agrego todos los categoriaID
        todosProductos.map((categ) => {
            arregloCategorias.push(categ.categoriaID)
        });

        // Elimino los repetidos para limpiar el arreglo con categorías únicas
        for (var i = arregloCategorias.length - 1; i >= 0; i--) {
            if (arregloCategorias.indexOf(arregloCategorias[i]) !== i) arregloCategorias.splice(i, 1);
        }
        console.log("Las categorías eliminando las repetidas")
        console.info(arregloCategorias)
        arregloCategorias.sort()
        setArregloCategorias(arregloCategorias)

    }



    const sumarCantidadesAlCarrito = () => {
        return productosCarrito.reduce((acumulador, valorActual) => (
            //acumulador += valorActual.cantidad
            acumulador += valorActual.cantidadComprada
        ), 0)
    }



    return <AppContext.Provider value={{
        productosCarrito,
        asignarProducto, eliminarProducto, eliminarTodosProductos, sumarCantidadesAlCarrito, productosFirebase,
        productosFirebaseCategoria, arregloCategorias, getProductosCategoria, agregarCategoriaArreglo, ventasFirebase
    }}>
        {children}
    </AppContext.Provider>

}

export default useCartContext;