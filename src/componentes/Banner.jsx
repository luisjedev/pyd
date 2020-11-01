import React from 'react'
import '../assets/styles/componentes/Banner.scss'

const Banner = (props)=>(

    <div className="container text-center altura-banner justify-content-center align-items-center d-flex">
        <div className="row">
            <div className="col">
                <h1>{props.titulo}</h1>
                <small>{props.subtitulo}</small>
            </div>

        </div>
    </div>


)

export default Banner