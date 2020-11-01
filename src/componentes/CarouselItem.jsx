import React from 'react'
import '../assets/styles/componentes/CarouselItem.scss'

const CarouselItem = (props) =>(
    <div className="CarouselItem ml-2 mr-2 mb-4">
        <img className="CarouselItem_img" src={props.imagen} alt="foto"/>
    </div>

)

export default CarouselItem