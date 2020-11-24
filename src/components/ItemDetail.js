/* 

    CURSO: React
    Desafio N° 6 y 7 de las Clases 7 y 8
    Estudiante: José Miguel Molina Rondón

*/

//import './App.css';
import ItemCount from '../components/ItemCount';
import AgregarAlCarrito from '../components/AgregarAlCarrito';

const ItemDetail = ({ elementosAtributo6A }) => {

    if (!elementosAtributo6A) {
        return <p>Ya viene el producto...</p>;
    }
    return (<>
        <div>
            <div>
                <h1>Producto: {elementosAtributo6A.id}</h1>
                <img src={elementosAtributo6A.caratula} alt={elementosAtributo6A.banda} />
                <div><strong>Album: </strong>{elementosAtributo6A.album}</div>
                <div><strong>Valor: ${elementosAtributo6A.precio}</strong></div>
                <div></div>
                <div><strong>Detalle: </strong>{elementosAtributo6A.detalle}</div>
                <div></div>
            </div>

        </div>

        {/* Agrego el carrito al ItemDetail */}
        <div>
            <ItemCount initial={1} min="1" max="15" onAdd={AgregarAlCarrito}></ItemCount>
        </div>
    </>
    )
}
export default ItemDetail;