import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hexa from './components/HexaColor'
import Block from './components/Number'
import Bars from './components/Bar'
import Increment from './components/Increment'
import Country from './components/Country'

function App() {

  return (
    <div className="App">
      <Hexa />
      <Block />
      <Bars />
      <Increment />
      <Country />
    </div>
  )
}

export default App
