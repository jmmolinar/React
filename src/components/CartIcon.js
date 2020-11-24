/* 

    CURSO: React
    Desafio N° 3 de la Clase 4
    Estudiante: José Miguel Molina Rondón 

*/

import React from 'react';
import * as Icon  from 'react-bootstrap-icons';

const CartIcon = () => {
    return (

        // Agrego el icono de carrito de compras
        // previamente importado desde Bootstrap

        <Icon.Cart color="royalblue" size={45}/>
    )
}
export default CartIcon;