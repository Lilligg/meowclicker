import React, { useState } from 'react'
import './App.css'
import Header from './components/header/header.jsx'
import Game from './components//game/game.jsx'

function App() {
  return (
   <>
   {Header()}
   <Game/>
   </>
    
  )
}

export default App
