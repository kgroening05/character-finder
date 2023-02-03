import React, { useState } from "react";
import './MainImage.css'
import { loadFirebaseStorageImage } from "../firebase";

export default function MainImage({ image, handleClick }){
    const [mainImageUrl, setMainImageUrl] = useState(null)
    loadFirebaseStorageImage(image, setMainImageUrl)
    return (
        <img src={mainImageUrl} alt="" onClick={e => handleClick(e)} />
    )
}