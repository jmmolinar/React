/* 

    CURSO: React
    Desafio N° 9 context
    Estudiante: José Miguel Molina Rondón

    Muestro la cantidad tomando del context a sumarCantidadesAlCarrito

*/

import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import useCartContext from '../context/useCartContext';

const CartIcon = () => {

    const { sumarCantidadesAlCarrito } = useCartContext()

    return (<>

        {/* // Agrego el icono de carrito de compras
        // previamente importado desde Bootstrap */}
        <Icon.Cart color="royalblue" size={45} /><p>{sumarCantidadesAlCarrito()}</p>
    </>
    )
}
export default CartIcon;