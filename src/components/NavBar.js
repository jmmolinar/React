/* 

    CURSO: React
    Estudiante: José Miguel Molina Rondón

    Componente: NavBar

    - Se tiene el menú con las opciones de la app

*/

import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Nav variant="pills" className="justify-content-center" defaultActiveKey="/home">

            {/* Utilizo el NavBar de Bootstrap */}

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Menú</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    {/* Agrego a la navegación el ícono del Carrito Lo obtengo desde mi CartIcon.js */}
                    <Nav.Item><Nav.Link><Link to="/" className="colorTextNav">Inicio</Link></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link><Link to="/productos" className="colorTextNav">Productos</Link></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link><Link to="/categorias" className="colorTextNav">Categorías</Link></Nav.Link></Nav.Item>
                    <Link to={'/carrito'}><CartIcon /></Link>

                </Navbar.Collapse>
            </Navbar>
        </Nav>
    )
}
export default NavBar;
