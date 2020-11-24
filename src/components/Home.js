/* 

    CURSO: React
    Desafio N° 3 de la Clase 4
    Estudiante: José Miguel Molina Rondón 

*/

import React from 'react';

const Home = ({ mensaje, children }) => {
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