import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hexa from './HexaColor'
import Block from './Number'
import Bars from './Bar'

function App() {

  return (
    <div className="App">
      <Hexa />
      <Block />
      <Bars />
    </div>
  )
}

export default App
