import { fn } from 'jquery';
import React, { useEffect, useContext, useState } from 'react';

const AppContext = React.createContext();

const useCartContext = () => useContext(AppContext)

export const AppProvider = ({ children }) => {

    const [dummyText, setDummyText] = useState("Hola soy context")
    const [dummyArray, setDummyArray] = useState([1, 2, 3])
    //const [dummyArrayObject, setDummyArrayObject] = useState([{ firstName: "Lavina", lastName: "Hoope" }])
    const [dummyArrayObject, setDummyArrayObject] = useState([{}])
    const [dummyObject, setDummyObject] = useState({ firstName: "Lavina", lastName: "Hoope" })

    const [productos, setProductos] = useState([])

    useEffect(() => {
        return () => { }
    }, [])


    const handleDummyText = (newValue) => {
        setDummyText(newValue)
    }

    const handleDummyArray = (newValue) => {
        // if(newValue in dummy)

        //al arreglo inicial le agrego newValue
        //setDummyArray([...dummyArray, newValue])
        //Forma correcta para que reenderee todoas las llamadas de handleDummyArray
        setDummyArray((prevDummyArray) => [...prevDummyArray, newValue])
    }

    const handleDummyArrayObject = (newValue) => {
        //Forma correcta para que reenderee todoas las llamadas de handleDummyArrayObjetc
        setDummyArrayObject((prevDummyArrayObject) => [...prevDummyArrayObject, newValue])
    }

    const handleDummyObject = (key, newValue) => {
        //traer el objeto con ...dummyObject y pisamos (key) la propiedad con el nuevo valor
        //setDummyObject({...dummyObject, [key]: newValue })
        //Forma correcta
        setDummyObject((prevDummyObject) => ({...prevDummyObject, [key]: newValue}))
    }

    const arrayLength = () => {
        return dummyArray.length;
    }

    const asignarProducto = (productoElegido, cantidad) => {
        setProductos(productoElegido)
    }

    return <AppContext.Provider value={{ arrayLength, dummyArrayObject, handleDummyArrayObject, dummyObject, handleDummyObject, dummyArray, handleDummyArray, dummyText, handleDummyText, productos, asignarProducto }}>
        {children}
    </AppContext.Provider>

}

export default useCartContext;