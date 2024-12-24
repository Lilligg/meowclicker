import React, { useEffect, useState } from "react"
import "./clicker.css"
import meowmusic from "../../resources/music/meow.mp3"
import photoClick from "../../resources/image/catclick.png"

const Clicker = () => {

const [lvlClick, uselvlClick] = useState(0); 
const audioRef = React.useRef(null); // Создаем реф для элемента audio

const clickCount = () => {
    uselvlClick(lvlClick + 1);
    if (audioRef.current) {
        audioRef.current.currentTime = 0; // Сброс времени воспроизведения
        audioRef.current.play();  // Воспроизвести звук
    }
   };

useEffect(() => {
    document.title = `Meow Clicker ${lvlClick}`;
},[lvlClick])

    return(
        <div className="containerClicker">
        <audio ref={audioRef} src={meowmusic} />
        <img src = {photoClick}  onClick = {clickCount} className="imageTap"></img>
        <h1 className="meowtext"> Количество МЯУ: {lvlClick} </h1>
        </div>
    )
}

export default Clicker