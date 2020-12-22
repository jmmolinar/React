/* 

    CURSO: React
    Estudiante: José Miguel Molina Rondón 

    Componente: Container

    - Contenedor de toda la App
    - Tiene logo superior
    - El resto de los componentes
    - Pie de página

*/

import React from 'react';
import '../css/container.css';
import brusa from '../images/brusaMusic.png';

const Container = ({ children }) => {
    return (
        <div className="padre">
            <div className="frame">
                <header>
                    <img src={brusa} />
                </header>
            </div>
            <div>
                {children}
            </div>
            <div className="footer">
                <p>Entrega Final | React</p>
            </div>
        </div>
    )
}
export default Container;