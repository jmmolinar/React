/* 

    CURSO: React
    Desafio N°  de la Clase 
    Estudiante: José Miguel Molina Rondón 

*/

import React from 'react';
import { useContext} from 'react'
// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
//import { MiContexto } from '../context/cartContext';
import useCartContext from '../context/useCartContext';

const Home = ({ mensaje, children}) => {

    //const valorQueVieneDeApp = useContext(MiContexto)

    return (<>
        <div className="footer">
            {/* Paso el mensaje de Bienvenida a mi Home en el DOM
                y le asigno el valor en App.js */}
            <h2>{mensaje}</h2>
            {/* <h2>Éste es el value de MiContexto: {valorQueVieneDeApp.name}</h2> */}
            {/* Con parámetros pasados a juro en el onClick debo hacer arrow function () => {} */}
            {/* <Button onClick={()=>{valorQueVieneDeApp.cambiarNombreState("Molina")}}>Cambiar por apellido</Button> */}
            {/* Sin parámetros no es necesario el arrow function como comento a continuación
            <button onClick={valorQueVieneDeApp.cambiarNombreState}>Cambiar por apellido</button> */}
        </div>
        <div>
            {children}
        </div>
    </>

    )
}
export default Home;