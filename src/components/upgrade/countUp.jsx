import React, { useState } from "react";
import "./countUp.css"
import tap from "../../resources/music/clicked.mp3"

const Upgrade = (props) => {
const {img, names} = props;

const[count1, useCount1] = useState(0);
const audioRef = React.useRef(null); // Создаем реф для элемента audio

const newFriend = () => {
    useCount1 (count1 + 1)
    if (audioRef.current) {
        audioRef.current.currentTime = 0; // Сброс времени воспроизведения
        audioRef.current.play();  // Воспроизвести звук
    }
}

    return (
    <><audio ref={audioRef} src={tap} />
    <div className ="containerUpgrate" onClick={newFriend}>
        <div className="photo">
            <img src = {img} className="catphoto"></img>
        </div>
        <div className="info">
            <h1>{names}</h1>
            <p>Количество друзей: {count1}</p> 
        </div>
    </div>
    </>
    )  
}

export default Upgrade