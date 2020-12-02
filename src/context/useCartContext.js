/* 

    CURSO: React
    Desafio N° 9 context
    Estudiante: José Miguel Molina Rondón 

*/

import React, { useEffect, useContext, useState } from 'react';

const AppContext = React.createContext();

const useCartContext = () => useContext(AppContext)

export const AppProvider = ({ children }) => {

    const [dummyArrayObject, setDummyArrayObject] = useState([]) // el que estoy intentando usar para el cart.js
    const [producto, setProducto] = useState([])

    // const [carr, setCart] = useState([])
    // const agregarProducto = (prod, cant) => {algo}

    useEffect(() => {
        return () => { }
    }, [])


    const handleDummyArrayObject = (newValue) => {
        setDummyArrayObject((prevDummyArrayObject) => [...prevDummyArrayObject, newValue])
    }

    const asignarProducto = (productoElegido, cantidad) => {
        setProducto(productoElegido)
    }

    return <AppContext.Provider value={{ dummyArrayObject, handleDummyArrayObject, asignarProducto }}>
        {children}
    </AppContext.Provider>

}

export default useCartContext;


