/* 

    CURSO: React
    Estudiante: José Miguel Molina Rondón

    Componente: Category

    - Muestra el listado de categorías al ingresar al menu Categorías
    - Es dinámico, se redenrizan las categorías (sin repetirlas) encontradas en todos los productos

*/
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

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