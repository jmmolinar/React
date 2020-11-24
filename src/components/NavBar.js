/* 

    CURSO: React
    Desafio N° 3 de la Clase 4
    Estudiante: José Miguel Molina Rondón 

*/

//FUNCION PARA CONSTRUIR EL MENU SENCILLO DE NAVEGACIÓN
import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';



const NavBar = () => {
    return (
        <Nav variant="pills" className="justify-content-center" defaultActiveKey="/home">

            {/* Utilizo el NavBar de Bootstrap */}

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Menú</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav.Item><Nav.Link href="/" className="colorTextNav">Inicio</Nav.Link></Nav.Item>
                        {/* <Nav.Item><Nav.Link href="#generos" className="colorTextNav"><Link to={'/productos'}>Géneros</Link></Nav.Link></Nav.Item> */}
                        <Nav.Item><Nav.Link href="/productos" className="colorTextNav">Productos</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="colorTextNav">Socios</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="colorTextNav">Contacto</Nav.Link></Nav.Item>

                        {/* Agrego a la navegación el ícono del Carrito Lo obtengo desde mi CartIcon.js */}

                        <Link to={'/carrito'}><CartIcon /></Link>

                </Navbar.Collapse>
            </Navbar>


        </Nav>

        // <li><a href="#">{seccion}</a></li>
    )
}
export default NavBar;