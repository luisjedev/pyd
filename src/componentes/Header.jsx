import React from 'react'

const Header = ()=>(

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">P&D</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
            </ul>
        </div>
    </nav>

)

export default Header