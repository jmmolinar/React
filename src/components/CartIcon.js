/* 

    CURSO: React
    Estudiante: José Miguel Molina Rondón
    
    Componente CartIcon
    
    - Muestra la cantidad tomando del context useCartContext a sumarCantidadesAlCarrito

*/

import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import useCartContext from '../context/useCartContext';

const CartIcon = () => {

    const { sumarCantidadesAlCarrito } = useCartContext()

    return (<>

        {/* Agrego el icono de carrito de compras previamente importado desde Bootstrap */}
        <Icon.Cart color="royalblue" size={45} /><p>{sumarCantidadesAlCarrito()}</p>
    </>
    )
}
export default CartIcon;