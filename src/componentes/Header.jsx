import React from 'react'
import '../assets/styles/componentes/Header.scss'
import logo from '../assets/imagenes/logo_header.png'
import cesta from '../assets/imagenes/cesta_header.png'

const Header = ()=>(

    <nav className="sticky-top navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="#">
            <img className="logo_header" src={logo} alt="home"/>
        </a>
        <button className="navbar-toggler boton_menu" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">INFANTIL<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">HOGAR</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">ILUSTRACIONES</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">EVENTOS</a>
                </li>
                <li className="nav-item pt-2 d-block d-md-none">
                    <a className="nav-link" href="#">
                    <img className="cesta_menu_desplegable" src={cesta} alt="cesta"/>
                    </a>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 d-none d-sm-none d-md-block">
                <a href="#">
                    <img className="cesta_header" src={cesta} alt="cesta"/>
                </a>
            </form>
        </div>
    </nav>

)

export default Header