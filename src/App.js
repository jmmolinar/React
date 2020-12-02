/* 

    CURSO: React
    Desafio N° 9 context
    Estudiante: José Miguel Molina Rondón

    PRINCIPALES COMPONENTES DEL DESAFIO: App.js, ItemDetail.js, CartIcon.js, useCartContext.js, Carts.js

    Ir primero a Productos, seleccionar uno y luego ejecutar
    el procedimiento de agregar al carrito

    El detalle de lo alcanzado hasta ahora:

    Logro renderizar en Carts.js y en ItemDetail (para probar) 
    el producto pero con las veces que hago clic en Agregar al carrito
    estando en dicho producto en el ItemDetail.
    Si hago clic 5 veces, entonces 5 veces sale el producto al ir al carrito en Carts.js,
    pero no logro mostrar los elementos del objeto (id, album, etc)

    Claramente tengo el error de que lo que de debe renderizar es el objeto
    junto con la cantidad agregada al sumar o restar en el item detail

    En el icono del carrito muestro la longitud que va tomando el arreglo de productos (objetos)
    cada vez que hago clic en Agregar al Carrito,

    Al regresar a productos para seleccionar otro, me vacía el arreglo del useCartContext

    Adicional a todos estos detalles, tampoco he logrado agregarle la cantidad sumada o restada al producto

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
    return <h2>{loading === true ? 'Loading...' : 'nada'}</h2>
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





