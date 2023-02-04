import React, { useState } from "react";
import './MainImage.css'
import { loadFirebaseStorageImage } from "../firebase";

export default function MainImage({ image, handleClick, brightness }){
    const [mainImageUrl, setMainImageUrl] = useState(null)
    loadFirebaseStorageImage(image, setMainImageUrl)
    const style = {
        filter: `brightness(${brightness})`,
    }
    return (
        <img src={mainImageUrl} alt="" onClick={e => handleClick(e)} style={style} />
    )
}