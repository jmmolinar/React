import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom/cjs/react-router-dom.min';
import './styles/main.css';

const ButtonComponente = ({id, callback}) => {
    return <button onClick={() => {callback(2)}}> {id} </button>
}

const ComponenteDos = () => {
    return <div>Hola</div>
}

const Home = () => {
    const [id, setId] = useState(2);

    const mostrarAlert = (valor) => {
        setId(valor)
    }


    // El componente esta por montarse
    return <>
        <div>
            <h1>Soy el componente de home ;)</h1>
            <button onClick={mostrarAlert}>Mostrar console.log</button>
            <button onClick={() => {mostrarAlert()}}>Mostrar console.log</button>
            <a>
                <Link to={'/detalle/'+id}>
                ¡Haceme Click! * Vamos al componente de productos * 
                </Link>
            </a>
            {id != 2 ?
            <ButtonComponente id={id} callback={mostrarAlert}/>
            :<ComponenteDos />}
        </div>
    </>

}

export default Home;