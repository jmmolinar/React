/* 

    CURSO: React
    Desafio N° 11 Clase 12 Firebase context
    Estudiante: José Miguel Molina Rondón 

*/
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer'
import Button from 'react-bootstrap/Button';

//FUNCION PARA MOSTRAR EL LISTADO DE PRODUCTOS
const Category = ({ atributoCategoria }) => {

    const list = atributoCategoria.map((elemento, index) => {
        console.log("Imprimiendo categorias")
        console.log(elemento);
        return <div key={index}>
            <div className="footer">
            <Link to={`/categorias/${elemento}`}><Button variant="primary">Categoria {elemento}</Button></Link>
            </div>
        </div >
    })
    return list;
}

export default Category;