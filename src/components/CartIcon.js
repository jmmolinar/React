/* 

    CURSO: React
    Desafio N° 9 context
    Estudiante: José Miguel Molina Rondón 

*/

import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import useCartContext from '../context/useCartContext';

const CartIcon = () => {

    const { dummyArrayObject, handleDummyArrayObject } = useCartContext()

    return (<>

        {/* // Agrego el icono de carrito de compras
        // previamente importado desde Bootstrap */}

        <Icon.Cart color="royalblue" size={45} /><p>{dummyArrayObject.length}</p>
    </>
    )
}
export default CartIcon;