/* 

    CURSO: React
    Desafio N° 5 de la Clase 6
    Estudiante: José Miguel Molina Rondón 

*/
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer'

//FUNCION PARA MOSTRAR EL LISTADO DE PRODUCTOS
const Item = ({ atributo }) => {

  const list = atributo.map((elemento) => {
    console.log("Imprimiendo elementos del Item")
    console.log(elemento);
    return <div key={elemento.id}>
      <Link to={`/productos/${elemento.id}`}><div><img src={elemento.caratula} alt={elemento.banda} /></div></Link>
      <div><strong>Categoría:</strong> {elemento.categoriaID}</div>
      <div> Album: {elemento.album} - Valor: <strong>${elemento.precio}</strong></div>
      <hr />
      <div></div>
    </div>
  })
  return list;
}

export default Item;

// if (!atributo) {
//   return <p>Cargando...</p>;
// }