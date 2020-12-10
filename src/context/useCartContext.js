/* 

    CURSO: React
    Desafio N° 12 Firebase II
    Estudiante: José Miguel Molina Rondón

    Tengo la nueva función ventasFirebase que me crea la colección en Firebase
    y se llena con los datos del nombre, contacto, email,
    Agrega los items del carrito
    Agrega la fecha de la compra
    Calcula el total final de toda la compra y lo agrega
    Muestra el Alert con el ID del Documento de la colección ventas de firebase

*/

import React, { useEffect, useContext, useState } from 'react';
import { isElementOfType } from 'react-dom/test-utils';
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
                //Para traerme el id del documento y no declarar otro adentro de la colección
                //element.id;
                return { ...element.data(), id: element.id }
                //return element.data();
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
                //Para traerme el id del documento y no declarar otro adentro de la colección
                //element.id;
                return { ...element.data(), id: element.id }
                //return element.data();
            });

            setProductosFirebaseCategoria(aux1)

        })
    }


    //Función para crear la colección con las compras en Firebase
    const ventasFirebase = () => {
        let precioFinal = 0;
        productosCarrito.forEach(prod => {
            precioFinal = precioFinal + (prod.cantidad * prod.precio);
        });

        let nuevaVenta = {
            buyer: { nombre: "José Miguel Molina", contacto: "+56999999999", emai: "migue.25@gmail.com" },
            items: productosCarrito,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: precioFinal
        };

        const db = getFirestore();
        db.collection("ventas").add(nuevaVenta)
            .then(({ id }) => {
                alert("ORDEN N° " + id)
            }).catch(error => {
                alert("Falló: " + error);
            }).finally(e => {
                //alert("Finally: ")
            })
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
            existeProducto.cantidad += nuevaCantidad;
            setProductosCarrito([...productosCarrito])
        } else {
            nuevoProducto.cantidad = nuevaCantidad;
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
            acumulador += valorActual.cantidad
        ), 0)
    }



    return <AppContext.Provider value={{
        productosCarrito,
        asignarProducto, eliminarProducto, sumarCantidadesAlCarrito, productosFirebase,
        productosFirebaseCategoria, arregloCategorias, getProductosCategoria, agregarCategoriaArreglo, ventasFirebase
    }}>
        {children}
    </AppContext.Provider>

}

export default useCartContext;


// var numero;
// for (var i = 0; i < cantidadesIcon.length; i++) {
//     numero = cantidadesIcon[i];
//     suma = suma + numero;
// }
// console.log("Arreglo de cantidades")
// console.log(cantidadesIcon)
// setTotalCantidadesIcon(suma)


{/* Para firebase */ }
{/* Para el Desafio
Van a tener /item/:id que busca un solo producto y una NUEVA que va a ser /:categoryId */}
{/* <div>
    {productosFirebase ?
        productosFirebase.map(element => {
            return <p>{element.categoriaID} - {element.banda} {element.banda} - {element.banda} - {element.stock}</p>
        }
        )
        : "cargando"}
</div> */}
{/* Para firebase */ }


// ****** CLASE 12 FIREBASE ***** //
// const [productosFirebase, setProductosFirebase] = useState();
// const [productosFirebaseCategoria, setProductosFirebaseCategoria] = useState();
// useEffect(() => {
// //Referencia
// const db = getFirestore();
// //nombre de la tabla en firebase
// const itemCollection = db.collection("productos");
// //PARA UN PRODUCTO agrego el identificador del producto
// //const idItem = itemCollection.doc("yXQ08Nh1hg8SzyInwUa9")
// //const filtrarPorStock = itemCollection.where("stock", "<", 30)
// //completo
// // itemCollection.get().then((response) => {
// //solo con el filtro
// //filtrarPorStock.get().then((response) => {
// itemCollection.get().then((response) => {

// console.log(response)
// const aux = response.docs.map(element => {
// console.log(element.data());
// return element.data();
// });

// setProductosFirebase(aux)
// })

// //getProductosCategoria(itemCollection);
// console.log("SOY ARREGLO CATEGORIAS")
// console.log(arregloCategorias);
// //getProductosCategoria(itemCollection, categoriaIdentificador);
// }, [])
// // *************************************** //