/* 

    CURSO: React
    Desafio N° 9 
    Estudiante: José Miguel Molina Rondón

    PRINCIPALES COMPONENTES DEL DESAFIO: App.js, ItemDetail.js, CartIcon.js, useCartContext.js, Carts.js

    Al hacer clic en AGREGAR AL CARRITO de un producto seleccionado, se actualiza la cantidad en Icon Cart por context
    Al navegar a Cart, se muestran los productos agregados
    La cantidad incrementada o decrementada, también se va al Carrito por context
    El arreglo de productos se va al carrito por context

*/

// import logo from './logo.svg';
import Container from './components/Container';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList'
import ItemDetail from './components/ItemDetail'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carts from './components/Carts';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
// import { MiContexto, MiProvider } from './context/cartContext';
import { AppProvider } from './context/useCartContext';
import useCartContext from './context/useCartContext';
import React, { useState, useEffect } from 'react';

function App() {

  //const [mostrar, setMostrar] = useState("Mi valor");

  // Desafio simple dentro de la clase 11
  const Loader = ({ loading }) => {
    return <h2>{loading === true ? 'Loading...' : ''}</h2>
  }

  return (
    // <MiContexto.Provider value={[mostrar]}>
    <AppProvider>
      <Container>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home mensaje="¡Bienvenido a mi APP!">
                {/* Desafio simple dentro de la clase 11 */}
                <Loader loading={false} />
              </Home>
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
    </AppProvider>
  );
}

export default App;





