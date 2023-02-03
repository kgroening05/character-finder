import React, { useState } from "react";
import { loadFirebaseStorageImage } from "../firebase";

export default function LevelSelectCard ({ level, levelsList }) {
    const [levelUrl, setLevelURL] = useState('')
    loadFirebaseStorageImage(levelsList[level]['image'], setLevelURL)

    const bg = {
        background: `no-repeat center url(${levelUrl})`,
    }

    return (
        <div className="thumbnail" style={bg}></div>
    )
}