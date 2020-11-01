import React from 'react'
import '../assets/styles/componentes/Carousel.scss'


const Carousel = ({children})=>(
    <section className="container-fluid carousel">
        <div className="row carousel_row mb-2">
                {children}
        </div>
    </section>
)

export default Carousel