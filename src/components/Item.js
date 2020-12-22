/* 

    CURSO: React
    Estudiante: José Miguel Molina Rondón

    Componente: Item

    -  Se muestra el listado de productos

*/
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';

//FUNCION PARA MOSTRAR EL LISTADO DE PRODUCTOS
const Item = ({ atributo }) => {

  const tableStyle = {
    fontSize: '11px',
    textAlign: 'left'
  };

  return (<>
    <div>
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th>Carátula</th>
            <th>Características</th>
          </tr>
        </thead>
        {atributo.map((elemento) => (
          <tbody style={tableStyle}>
            <tr>
              <td><Link to={`/productos/${elemento.id}`}><img src={elemento.caratula} /></Link></td>
              <td>
                <p><strong>BANDA:</strong></p>
                <p>{elemento.banda}</p>
                <p><strong>ALBUM:</strong></p>
                <p><Link to={`/productos/${elemento.id}`}>{elemento.album}</Link></p>
                <p><strong>PRECIO:</strong></p>
                <p>${elemento.precio}</p>
                <p><strong>CATEGORÍA:</strong></p>
                <p><Link to={`/categorias/${elemento.categoriaID}`}>{elemento.categoriaID}</Link></p>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  </>
  )
}

export default Item;