import React from 'react'
import '../assets/styles/componentes/Title.scss'

const Title = (props)=>(
    <div className="container-fluid mt-3 mb-3">
        <div className="row text-center">
            <div className="col">
                <h5 className="categoria">{props.titulo}</h5>
            </div>
            
        </div>
    </div>

)
export default Title
