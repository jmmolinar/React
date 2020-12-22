/* 

    CURSO: React
    Estudiante: José Miguel Molina Rondón

    Componente: Home

    - Componente de Inicio con mensaje de bienvenida

*/

import React from 'react';

const Home = ({ mensaje, children}) => {

    return (<>
        <div className="footer">
            {/* Paso el mensaje de Bienvenida a mi Home en el DOM
                y le asigno el valor en App.js */}
            <h2>{mensaje}</h2>
        </div>
        <div>
            {children}
        </div>
    </>

    )
}
export default Home;