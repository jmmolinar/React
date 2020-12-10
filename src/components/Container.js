/* 

    CURSO: React
    Desafio N° 5 de la Clase 6
    Estudiante: José Miguel Molina Rondón 

*/

import React from 'react';
//import './container.css';
import '../css/container.css';
import brusa from '../images/brusa.png';

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
                <p>Desafio 11 | React</p>
            </div>
        </div>
    )
}
export default Container;