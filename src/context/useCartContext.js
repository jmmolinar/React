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

    const [producto, setProducto] = useState([])
    const [cantidadProd, setCantidadProd] = useState(0)

    // const [carr, setCart] = useState([])
    // const agregarProducto = (prod, cant) => {algo}

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
        const filtrarPorStock = itemCollection.where("stock", "<", 30)
        //completo
        // itemCollection.get().then((response) => {
        //solo con el filtro
        filtrarPorStock.get().then((response) => {

            console.log(response)
            const aux = response.docs.map(element => {
                console.log(element.data());
                return element.data();
            });

            setProductos(aux)
        })

    }, [])
    // *************************************** //

    const asignarProducto = (nuevoProducto, nuevaCantidad) => {
        //setDummyArrayObject((prevProducto) => [...prevProducto, newValue])
        //Agrego una nueva propiedad al producto
        // if (nuevoProducto !== producto) {
        nuevoProducto.cantidad = nuevaCantidad;
        setCantidadProd(nuevaCantidad)
        setProducto([...producto, nuevoProducto])
        // }
    }

    return <AppContext.Provider value={{ producto, asignarProducto, cantidadProd }}>
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


