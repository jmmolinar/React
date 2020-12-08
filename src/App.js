/* 

    CURSO: React
    Estudiante: José Miguel Molina Rondón 

    DESAFIO 10 - Renderizado condicional tomando datos del useCartContext para el Carts.js
    PRINCIPALES COMPONENTES DEL DESAFIO: useCartContext.js Carts.js

    En Carts.js agrego un componente llamado Agrupados que recibe la cantidad de productos en el carrito
    Se lo paso tomandolo del context a sumarCantidadesAlCarrito
    Si la cantidad es mayor a cero, muestra los productos agregado
    Si no lo es renderiza un mensaje "No tienes productos agregados" y agrega Link to para ir a Productos


    DESAFIO 11 - FIREBASE Item Collection
    PRINCIPALES COMPONENTES DEL DESAFIO:
    
    useCartContext.js - obtengo la colección de producto de Firebase
    ItemList.js - productos por context con productosFirebase
    ItemDetailContainer.js - filtro productosFirebase con el productoID de la URL
    Creación de 3 nuevos componentes: CategoryList, Category, CategoryContainer
    CategoryList.js - renderizo las categorias de Category.js en botones para acceder a cada una
    CategoryContainer.js - router a /categorias/:categoriaId tomando categoriaId de Category.js y pasandolo como useParams
    En CategoryContainer.js también utilizo productosFirebaseCategoria, getProductosCategoria del contexto
    

*/

// import logo from './logo.svg';
import Container from './components/Container';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList'
import CategoryList from './components/CategoryList'
import CategoryContainer from './components/CategoryContainer';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carts from './components/Carts';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { AppProvider } from './context/useCartContext';
import React, { useState, useEffect } from 'react';

function App() {

  return (

    <AppProvider>
      <Container>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home mensaje="¡Bienvenido a mi APP!" />
            </Route>
            <Route exact path="/productos">
              <ItemList />
            </Route>
            <Route exact path="/categorias">
              <CategoryList />
            </Route>
            <Route exact path="/carrito">
              <Carts />
            </Route>
            <Route path="/productos/:productoId" children={<ItemDetailContainer />} />
            <Route path="/categorias/:categoriaId" children={<CategoryContainer />} />
          </Switch>
        </BrowserRouter>
      </Container >
    </AppProvider>
  );
}

export default App;






// <MiContexto.Provider value={[mostrar]}>

// const [mostrar, setMostrar] = useState("Mi valor");

// Desafio simple dentro de la clase 11
// const Loader = ({ loading }) => {
//   return <h2>{loading === true ? 'Loading...' : ''}</h2>
// }
// <Home mensaje="¡Bienvenido a mi APP!">
//   Desafio simple dentro de la clase 11
//   <Loader loading={false} />
// </Home>





