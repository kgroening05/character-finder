import React from "react";
import './MainImage.css'
import isPointInPolygon from '../utils/isPointInPolygon'

export default function MainImage({ image, coords }){
    function handleClick(e){
        const yAdjust = e.target.offsetTop
        const xAdjust = e.target.offsetLeft
        const scale = e.target.naturalWidth / e.target.width
        const x = (e.pageX - xAdjust) * scale
        const y = (e.pageY - yAdjust) * scale
        //console.log({x,y})
        for (const character in coords) {
            if (isPointInPolygon(x,y,coords[character])){
                console.log(`You found ${character}!`)
            }
        }
    }

    return (
        <img src={image} alt="" onClick={e => handleClick(e)} />
    )
}