/* 

    CURSO: React
    Desafio N° 7 de la Clase 8
    Estudiante: José Miguel Molina Rondón

    PRINCIPALES COMPONENTES DEL DESAFIO: App.js, Carts.js, ItemDetailContainer.js

    LEER DETALLE:

    Se agrega el componente Carts.js al cual se accede con la url /carrito y está activo en el NavBar
    Al hacer clic en Productos se routea a /productos y utiliza el componente ItemList para mostrarlos trayendolos de mi json
    El ItemList los renderiza pasando al componente Item
    En el componente Item agrego link a cada producto con <Link to={`/productos/${elemento.id}`}>
    Con ese link se crea la ruta <Route path="/productos/:productoId" children={<ItemDetailContainer />} />
    Mediante ésta ruta se llama a ItemDetailContainer que obtiene el :productoId con useParams
    Con éste :productoId vuelvo a revisar mi json con un fetch
    Dentro del segundo then del fetch de ItemDetailContainer hago un for para recorrer el json
    No funcionó de ninguna manera con find o filter
    En ese for utilizo un if para comparar la posición del arreglo (json) con el :productoId
    El productoId tuve que parsearlo para poder lograr la comparación
    Luego el ItemDetailContainer renderiza al componente ItemDetail que muestra el detalle del producto seleccionado
    Dentro del ItemDetail también se encuentra el componente ItemCount que fue mudado desde el home

*/

// import logo from './logo.svg';
import Container from './components/Container';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import AgregarAlCarrito from './components/AgregarAlCarrito'
import ItemList from './components/ItemList'
import ItemDetail from './components/ItemDetail'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carts from './components/Carts';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <Container>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home mensaje="¡Bienvenido a mi APP!"></Home>
          </Route>
          <Route exact path="/productos">
            <ItemList />
          </Route>
          <Route exact path="/carrito">
            <Carts />
          </Route>
          <Route path="/productos/:productoId" children={<ItemDetailContainer />} />
        </Switch>
      </BrowserRouter>
    </Container >
  );
}

export default App;





