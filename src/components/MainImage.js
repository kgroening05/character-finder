import React from "react";
import image from '../assets/universe113.jpg'
import isPointInPolygon from '../utils/isPointInPolygon'
import coords from '../assets/universe113coords.json'

export default function MainImage(){

    function handleClick(e){
        const yAdjust = e.target.offsetTop
        const xAdjust = e.target.offsetLeft
        const x = e.pageX - xAdjust
        const y = e.pageY - yAdjust
        console.log({x,y})
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