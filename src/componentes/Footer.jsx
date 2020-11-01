import React from 'react'
import '../assets/styles/componentes/Footer.scss'

const Footer = ()=>(
    <footer className="container-fluid footer pt-4 pb-4 d-flex align-items-center justify-content-around mt-auto">
        <div className="row w-100 text-center">
            <div className="col-12 col-sm-12 col-md">
                <a href="#">Contacto</a>
            </div>
            <div className="col-12 col-sm-12 col-md">
                <a href="#">Envios</a>
            </div>
            <div className="col-12 col-sm-12 col-md">
                <a href="#">Reclamaciones</a>
            </div>
            <div className="col-12 col-sm-12 col-md">
                <a href="#">Dudas</a>
            </div>
            <div className="col-12 col-sm-12 col-md">
                <a href="#">Conócenos</a>
            </div>
        </div>
    </footer>
)

export default Footer

