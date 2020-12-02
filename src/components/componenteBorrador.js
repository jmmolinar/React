import React from 'react';
// import { useContext} from 'react'
// import { MiContexto } from '../context/cartContext';

import useCartContext from '../context/useCartContext';

const Carts = () => {

    //const ctx = useContext(MiContexto)
    //const ctx = useCartContext()
    const { dummyArrayObject, handleDummyArrayObject, dummyObject, handleDummyObject, dummyArray, handleDummyArray } = useCartContext()

    //Verificando que traiga el objeto completo
    //console.log(dummyObject);
    console.log(dummyArrayObject);

    const handleValueArray = () => {
        handleDummyArray(4)
        handleDummyArray(5)
        //De la mano con el setDummyArray((prevDummyArray) => [...prevDummyArray, newValue])
        //De useCartContext
    }

    //Analizar bien
    const handleValueObject = () => {
        //handleDummyArrayObject({ firstName: 'Maegan', lastName: 'Trump' })
        handleDummyArrayObject({})
    }

    const handleValueObjectFirst = () => {
        handleDummyObject('firstName', 'John')
    }

    const handleValueObjectLast = () => {
        handleDummyObject('lastName', 'Newman')
    }

    const handleValueObjectBoth = () => {
        handleDummyObject('firstName', 'Alejandra')
        handleDummyObject('lastName', 'Molina')
        //De la mano con el setDummyObject((prevDummyObject) => ({...prevDummyObject, [key]: newValue}))
        //De useCartContext
    }


    return (<>
        {/* <div className="footer">
            <h2>Carrito de compras</h2>
            <h2>Album: {ctx.productos}</h2>
            <h2>Cantidad: {ctx.cantidad}</h2>
        </div> */}
        <div className="footer">

            <h1>MIS PRODUCTOS DUMMY ARRAY OBJECT</h1>
            <h2>
                {dummyArrayObject.map((entry) => (
                    <h2>{entry.album}</h2>
                ))}
            </h2>


            <h1>DUMMY ARRAY</h1>
            <h2>
                {dummyArray.map((entry) => (
                    <h2>{entry}</h2>
                ))}
            </h2>
            <button onClick={handleValueArray}>newValue</button>
            <hr />
            <hr />
            <h1>DUMMY OBJECT</h1>
            <h2>{dummyObject.firstName}</h2>
            <h2>{dummyObject.lastName}</h2>
            <button onClick={handleValueObjectBoth}>new both first and last</button>
            <button onClick={handleValueObjectFirst}>newFirst</button>
            <button onClick={handleValueObjectLast}>newLast</button>
            <button onClick={handleValueObject}>All</button>
            <hr />
        </div>
    </>

    )
}
export default Carts;