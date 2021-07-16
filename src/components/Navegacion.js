import React from 'react'
import { Link } from "react-router-dom";
import Cachorros3 from '../images/cachorros.jpg'
import Dog3 from '../images/doggerman.jpg'
import Ojitos3 from '../images/ojitos.jpg'
import Pug3 from '../images/pug.jpg'

const Navegacion = () => {
    return (
        <div className="container mt-3 mb-3; papu">
            <Link to="/Cachorros" className="links"> {/* Route de App.js*/}
                <figure>
                    <img src={Cachorros3} className="tamanio-img"/>
                        <figcaption>Cachorros</figcaption>
                </figure>
            </Link>

            <Link to="/Doggerman" className="links">
                <figure>
                    <img src={Dog3} className="tamanio-img" />
                        <figcaption>Doggerman</figcaption>
                </figure>
            </Link>

            <Link to="Ojitos" className="links">
                <figure>
                    <img src={Ojitos3} className="tamanio-img"/>
                        <figcaption>Ojitos</figcaption>
                </figure>
            </Link>

            <Link to="Pug" className="links">
                <figure>
                    <img src={Pug3} className="tamanio-img"/>
                        <figcaption>Pug</figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default Navegacion
