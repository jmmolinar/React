/* 
    CURSO: React
    Estudiante: José Miguel Molina Rondón

    ENTREGA FINAL: En mi app se venden discos de rock para decadas anteriores

    App.js contiene el AppProvider del context y el router con la configuración de URLs utilizadas por los componentes
    El estilo es otorgado con Bootstrap y el archivo de la carpeta css llamado container.css
    En la carpeta images solo se tiene un png para mostrarlo en la parte superior de la app
    Las imágenes de los productos se toman en un atributo de cada producto en firebase referenciadas desde github

    El detalle de toda la Aplicación se explica en README.md

*/

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
              <Home mensaje="¡Bienvenido a Brusa music!" />
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


