import React from "react";
import './MainImage.css'

export default function MainImage({ image, handleClick }){
    return (
        <img src={image} alt="" onClick={e => handleClick(e)} />
    )
}