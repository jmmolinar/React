/* 

    CURSO: React
    Desafio N° 9 context
    Estudiante: José Miguel Molina Rondón 

*/

import React, { useEffect, useContext, useState } from 'react';
import { getFirestore } from '../firebase';

const AppContext = React.createContext();
const useCartContext = () => useContext(AppContext)

export const AppProvider = ({ children }) => {

    const [productosCarrito, setProductosCarrito] = useState([])

    // useEffect(() => {
    //     return () => { }
    // }, [])


    // ****** CLASE 12 FIREBASE ***** //
    const [productos, setProductos] = useState();
    useEffect(() => {
        //Referencia
        const db = getFirestore();
        //nombre de la tabla en firebase
        const itemCollection = db.collection("productos");
        //PARA UN PRODUCTO agrego el identificador del producto
        //const idItem = itemCollection.doc("yXQ08Nh1hg8SzyInwUa9")
        //const filtrarPorStock = itemCollection.where("stock", "<", 30)
        //completo
        // itemCollection.get().then((response) => {
        //solo con el filtro
        //filtrarPorStock.get().then((response) => {
        itemCollection.get().then((response) => {

            console.log(response)
            const aux = response.docs.map(element => {
                console.log(element.data());
                return element.data();
            });

            setProductos(aux)
        })

    }, [])
    // *************************************** //

    const eliminarProducto = (id, cantidad) => {
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


    const sumarCantidadesAlCarrito = () => {
        return productosCarrito.reduce((acumulador, valorActual) => (
            acumulador += valorActual.cantidad
        ), 0)
    }



    return <AppContext.Provider value={{ productosCarrito, asignarProducto, eliminarProducto, sumarCantidadesAlCarrito}}>
        {children}

        {/* Para firebase */}
        {/* Para el Desafio
        Van a tener /item/:id que busca un solo producto y una NUEVA que va a ser /:categoryId */}
        {/* <div>
            {productos ?
                productos.map(element => {
                    return <p>{element.categoriaID} - {element.banda} {element.banda} - {element.banda} - {element.stock}</p>
                }
                )
                : "cargando"}
        </div> */}
        {/* Para firebase */}
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
